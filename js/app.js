// js/app.js

let progresoUsuario = {}; 
let listaRamosPPA = [];   
let horarioUsuario = [];  
let listaCertamenes = [
  { id: "c1", nombre: "Certamen 1", ponderacion: 30, nota: 60, completada: true },
  { id: "c2", nombre: "Certamen 2", ponderacion: 30, nota: 48, completada: true },
  { id: "c3", nombre: "Certamen 3", ponderacion: 40, nota: 0, completada: false }
];

let agendaUsuario = [
  { id: "a1", titulo: "Certamen 1 de Programación", ramo: "INF-110", fecha: "2026-10-15" },
  { id: "a2", titulo: "Retiro de Asignaturas Sin Sanción", ramo: "General USM", fecha: "2026-10-28" }
];

let asistenciaUsuario = [
  { id: "as1", ramo: "Programación (INF-110)", asistidas: 12, totales: 14, minRequerido: 75 },
  { id: "as2", ramo: "Laboratorio de Física", asistidas: 7, totales: 8, minRequerido: 80 }
];

const BLOQUES_USM = [
  { id: "1-2", hora: "08:15 - 09:25" },
  { id: "3-4", hora: "09:35 - 10:45" },
  { id: "5-6", hora: "10:55 - 12:05" },
  { id: "7-8", hora: "12:15 - 13:25" },
  { id: "9-10", hora: "14:30 - 15:40" },
  { id: "11-12", hora: "15:50 - 17:00" },
  { id: "13-14", hora: "17:10 - 18:20" },
  { id: "15-16", hora: "18:30 - 19:40" }
];

const DIAS_USM = ["lunes", "martes", "miercoles", "jueves", "viernes"];

// --- FUNCIONES DE GUARDADO PERMANENTE ---
function guardarProgreso() {
  const user = localStorage.getItem('usm_user');
  if (user) localStorage.setItem(`usm_progreso_${user}`, JSON.stringify(progresoUsuario));
}

function guardarPPA() {
  const user = localStorage.getItem('usm_user');
  if (user) localStorage.setItem(`usm_ppa_${user}`, JSON.stringify(listaRamosPPA));
}

function guardarHorario() {
  const user = localStorage.getItem('usm_user');
  if (user) localStorage.setItem(`usm_horario_${user}`, JSON.stringify(horarioUsuario));
}

function guardarCertamenes() {
  const user = localStorage.getItem('usm_user');
  if (user) localStorage.setItem(`usm_cert_${user}`, JSON.stringify(listaCertamenes));
}

function guardarAgenda() {
  const user = localStorage.getItem('usm_user');
  if (user) localStorage.setItem(`usm_agenda_${user}`, JSON.stringify(agendaUsuario));
}

function guardarAsistencia() {
  const user = localStorage.getItem('usm_user');
  if (user) localStorage.setItem(`usm_asist_${user}`, JSON.stringify(asistenciaUsuario));
}

// --- SESIÓN Y PORTAL ---
function iniciarSesion(event) {
  event.preventDefault();
  const emailInput = document.getElementById('user-email').value.trim().toLowerCase();
  const errorMsg = document.getElementById('login-error');

  if (emailInput.endsWith('@usm.cl') || emailInput.endsWith('@alumnos.usm.cl')) {
    errorMsg.classList.add('hidden');
    localStorage.setItem('usm_user', emailInput);
    cargarPortal();
  } else {
    errorMsg.classList.remove('hidden');
  }
}

function cargarPortal() {
  const user = localStorage.getItem('usm_user');
  if (user) {
    document.getElementById('login-screen')?.classList.add('hidden');
    
    const portal = document.getElementById('portal-content');
    if (portal) {
      portal.classList.remove('hidden');
      portal.classList.add('flex');
    }

    const userDisplay = document.getElementById('user-display');
    if (userDisplay) userDisplay.textContent = user;

    progresoUsuario = JSON.parse(localStorage.getItem(`usm_progreso_${user}`)) || {};
    listaRamosPPA = JSON.parse(localStorage.getItem(`usm_ppa_${user}`)) || [];
    horarioUsuario = JSON.parse(localStorage.getItem(`usm_horario_${user}`)) || [];
    listaCertamenes = JSON.parse(localStorage.getItem(`usm_cert_${user}`)) || listaCertamenes;
    agendaUsuario = JSON.parse(localStorage.getItem(`usm_agenda_${user}`)) || agendaUsuario;
    asistenciaUsuario = JSON.parse(localStorage.getItem(`usm_asist_${user}`)) || asistenciaUsuario;

    inicializarSedes();
    renderizarTablaPPA();
    calcularPPA();
    cargarOpcionesRamosHorario();
    renderizarHorario();
    renderizarTablaCertamenes();
    calcularCertamenes();
    calcularPrioridad();
    renderizarAgenda();
    renderizarAsistencia();
  }
}

function cerrarSesion() {
  localStorage.removeItem('usm_user');
  location.reload();
}

function cambiarPestana(pestana) {
  const secciones = ['sec-malla', 'sec-ppa', 'sec-certamenes', 'sec-prioridad', 'sec-agenda', 'sec-horario'];
  const tabs = ['tab-malla', 'tab-ppa', 'tab-certamenes', 'tab-prioridad', 'tab-agenda', 'tab-horario'];

  secciones.forEach(s => document.getElementById(s)?.classList.add('hidden'));
  tabs.forEach(t => {
    const el = document.getElementById(t);
    if (el) el.className = 'py-3 font-semibold border-b-2 border-transparent text-slate-400 hover:text-slate-200 transition whitespace-nowrap';
  });

  const secActiva = document.getElementById(`sec-${pestana}`);
  const tabActivo = document.getElementById(`tab-${pestana}`);

  if (secActiva) secActiva.classList.remove('hidden');
  if (tabActivo) tabActivo.className = 'py-3 font-semibold border-b-2 border-sky-400 text-sky-400 transition whitespace-nowrap';
}

function inicializarSedes() {
  const selectSede = document.getElementById('select-sede');
  if (!selectSede) return;

  selectSede.innerHTML = '<option value="">-- Seleccionar Sede --</option>';
  
  if (typeof datosUSM !== 'undefined' && datosUSM.sedes) {
    datosUSM.sedes.forEach(s => {
      const opt = document.createElement('option');
      opt.value = s.id;
      opt.textContent = s.nombre;
      selectSede.appendChild(opt);
    });
  }
}

function cargarCarreras() {
  const sedeId = document.getElementById('select-sede').value;
  const selectCarrera = document.getElementById('select-carrera');
  const container = document.getElementById('malla-container');
  const panelAvance = document.getElementById('panel-avance');
  
  selectCarrera.innerHTML = '<option value="">-- Seleccionar Carrera --</option>';
  container.innerHTML = '';
  panelAvance?.classList.add('hidden');

  if (sedeId && datosUSM.carreras[sedeId]) {
    selectCarrera.disabled = false;
    datosUSM.carreras[sedeId].forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.id;
      opt.textContent = c.nombre;
      selectCarrera.appendChild(opt);
    });
  } else {
    selectCarrera.disabled = true;
  }
}

function mostrarMalla() {
  const carreraId = document.getElementById('select-carrera').value;
  const container = document.getElementById('malla-container');
  const panelAvance = document.getElementById('panel-avance');
  container.innerHTML = '';

  if (carreraId && datosUSM.mallas[carreraId]) {
    panelAvance?.classList.remove('hidden');

    datosUSM.mallas[carreraId].forEach(sem => {
      const card = document.createElement('div');
      card.className = 'bg-slate-800/90 p-4 rounded-xl border border-slate-700 shadow-lg space-y-3';
      
      const ramosHTML = sem.ramos.map(r => {
        const estado = progresoUsuario[r.codigo] || 'pendiente';
        const estilos = obtenerEstilosRamo(estado);

        return `
          <div onclick="rotarEstadoRamo('${r.codigo}')" 
            class="p-3 rounded-lg border flex justify-between items-center cursor-pointer transition select-none ${estilos.box}">
            <div>
              <p class="font-semibold text-xs ${estilos.texto}">${r.nombre}</p>
              <div class="flex items-center space-x-2 mt-0.5">
                <span class="text-[10px] text-slate-400">${r.codigo}</span>
                <span class="text-[9px] px-1.5 py-0.2 rounded font-bold uppercase ${estilos.badge}">${estado}</span>
              </div>
            </div>
            <span class="text-xs font-bold px-2 py-0.5 rounded ${estilos.creditos}">${r.creditos} SCT</span>
          </div>
        `;
      }).join('');

      card.innerHTML = `
        <h3 class="text-sm font-bold text-sky-400 border-b border-slate-700 pb-2 flex justify-between items-center">
          <span>Semestre ${sem.semestre}</span>
          <span class="text-xs font-normal text-slate-400">${sem.ramos.length} Ramos</span>
        </h3>
        <div class="space-y-2">${ramosHTML}</div>
      `;
      container.appendChild(card);
    });

    actualizarEstadisticasMalla(carreraId);
  } else if (carreraId) {
    panelAvance?.classList.add('hidden');
    container.innerHTML = `
      <div class="col-span-full bg-slate-800/40 border border-slate-700/60 rounded-xl p-8 text-center">
        <p class="text-slate-400 text-sm">La malla curricular de esta carrera se encuentra en proceso de carga o puedes agregarla en mallas.js.</p>
      </div>
    `;
  }
}

function rotarEstadoRamo(codigo) {
  const estadoActual = progresoUsuario[codigo] || 'pendiente';
  let nuevoEstado = 'pendiente';

  if (estadoActual === 'pendiente') nuevoEstado = 'cursando';
  else if (estadoActual === 'cursando') nuevoEstado = 'aprobado';
  else if (estadoActual === 'aprobado') nuevoEstado = 'pendiente';

  progresoUsuario[codigo] = nuevoEstado;
  guardarProgreso();
  mostrarMalla();
  cargarOpcionesRamosHorario();
}

function obtenerEstilosRamo(estado) {
  switch (estado) {
    case 'aprobado':
      return {
        box: 'bg-emerald-950/40 border-emerald-500/50 hover:border-emerald-400',
        texto: 'text-emerald-200 line-through decoration-emerald-500/50',
        badge: 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30',
        creditos: 'bg-emerald-500/20 text-emerald-300'
      };
    case 'cursando':
      return {
        box: 'bg-sky-950/40 border-sky-500/50 hover:border-sky-400',
        texto: 'text-sky-200 font-bold',
        badge: 'bg-sky-500/20 text-sky-300 border border-sky-500/30',
        creditos: 'bg-sky-500/20 text-sky-300'
      };
    default:
      return {
        box: 'bg-slate-900/80 border-slate-700 hover:border-slate-500',
        texto: 'text-slate-200',
        badge: 'bg-slate-800 text-slate-400 border border-slate-700',
        creditos: 'bg-slate-800 text-slate-400'
      };
  }
}

function actualizarEstadisticasMalla(carreraId) {
  const mallas = datosUSM.mallas[carreraId];
  if (!mallas) return;

  let totalCreditos = 0;
  let creditosAprobados = 0;
  let ramosAprobados = 0;
  let ramosCursando = 0;

  mallas.forEach(sem => {
    sem.ramos.forEach(r => {
      totalCreditos += r.creditos;
      const estado = progresoUsuario[r.codigo] || 'pendiente';
      if (estado === 'aprobado') {
        creditosAprobados += r.creditos;
        ramosAprobados++;
      } else if (estado === 'cursando') {
        ramosCursando++;
      }
    });
  });

  const porcentaje = totalCreditos > 0 ? Math.round((creditosAprobados / totalCreditos) * 100) : 0;
  
  const elPorcentaje = document.getElementById('stat-porcentaje');
  const elBarra = document.getElementById('barra-progreso');
  const elCreditos = document.getElementById('stat-creditos');
  const elAprobados = document.getElementById('stat-aprobados');
  const elCursando = document.getElementById('stat-cursando');

  if (elPorcentaje) elPorcentaje.textContent = `${porcentaje}%`;
  if (elBarra) elBarra.style.width = `${porcentaje}%`;
  if (elCreditos) elCreditos.textContent = `${creditosAprobados} / ${totalCreditos}`;
  if (elAprobados) elAprobados.textContent = ramosAprobados;
  if (elCursando) elCursando.textContent = ramosCursando;
}

// --- PPA ---
function renderizarTablaPPA() {
  const tbody = document.getElementById('ppa-container-tabla');
  if (!tbody) return;
  tbody.innerHTML = '';

  if (listaRamosPPA.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" class="p-6 text-center text-slate-500">No hay asignaturas. Haz clic en <strong>"Importar de Malla"</strong>.</td></tr>`;
    return;
  }

  listaRamosPPA.forEach((item, idx) => {
    const tr = document.createElement('tr');
    tr.className = 'hover:bg-slate-800/50 transition';
    tr.innerHTML = `
      <td class="p-2.5"><input type="text" value="${item.nombre}" onchange="actualizarDatoPPA(${idx}, 'nombre', this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-slate-200"></td>
      <td class="p-2.5"><input type="number" min="1" max="20" value="${item.creditos}" onchange="actualizarDatoPPA(${idx}, 'creditos', this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-slate-200 text-center"></td>
      <td class="p-2.5"><input type="number" min="0" max="100" value="${item.nota || ''}" onchange="actualizarDatoPPA(${idx}, 'nota', this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-slate-200 text-center font-semibold"></td>
      <td class="p-2.5 text-center">${item.nota >= 55 ? '<span class="text-emerald-400 font-bold">Aprobado</span>' : '<span class="text-rose-400">Reprobado</span>'}</td>
      <td class="p-2.5 text-center"><button onclick="eliminarRamoPPA(${idx})" class="text-rose-400 hover:text-rose-300 font-bold">✕</button></td>
    `;
    tbody.appendChild(tr);
  });
}

function agregarRamoPPA() {
  listaRamosPPA.push({ nombre: `Asignatura ${listaRamosPPA.length + 1}`, creditos: 4, nota: 0 });
  renderizarTablaPPA();
  calcularPPA();
  guardarPPA();
}

function eliminarRamoPPA(idx) {
  listaRamosPPA.splice(idx, 1);
  renderizarTablaPPA();
  calcularPPA();
  guardarPPA();
}

function actualizarDatoPPA(idx, campo, valor) {
  if (campo === 'creditos') listaRamosPPA[idx].creditos = Math.max(1, parseFloat(valor) || 0);
  else if (campo === 'nota') listaRamosPPA[idx].nota = Math.min(100, Math.max(0, parseFloat(valor) || 0));
  else listaRamosPPA[idx][campo] = valor;
  renderizarTablaPPA();
  calcularPPA();
  guardarPPA();
}

function cargarRamosDesdeMalla() {
  const carreraId = document.getElementById('select-carrera')?.value;
  if (!carreraId || !datosUSM.mallas[carreraId]) {
    alert("Selecciona una sede y carrera primero en la pestaña Malla Curricular.");
    return;
  }
  datosUSM.mallas[carreraId].forEach(sem => {
    sem.ramos.forEach(r => {
      const estado = progresoUsuario[r.codigo] || 'pendiente';
      if (estado === 'aprobado' || estado === 'cursando') {
        if (!listaRamosPPA.some(item => item.nombre.includes(r.codigo))) {
          listaRamosPPA.push({ nombre: `${r.nombre} (${r.codigo})`, creditos: r.creditos, nota: estado === 'aprobado' ? 70 : 0 });
        }
      }
    });
  });
  renderizarTablaPPA();
  calcularPPA();
  guardarPPA();
}

function calcularPPA() {
  let suma = 0, totalCred = 0, cant = 0;
  listaRamosPPA.forEach(item => {
    const cred = parseFloat(item.creditos) || 0;
    const nota = parseFloat(item.nota) || 0;
    if (cred > 0 && nota > 0) {
      suma += nota * cred;
      totalCred += cred;
      cant++;
    }
  });
  const ppaFinal = totalCred > 0 ? (suma / totalCred) : 0;
  
  const elValor = document.getElementById('res-ppa-valor');
  const elCred = document.getElementById('res-ppa-creditos');
  const elRamos = document.getElementById('res-ppa-ramos');

  if (elValor) elValor.textContent = ppaFinal.toFixed(2);
  if (elCred) elCred.textContent = `${totalCred} SCT`;
  if (elRamos) elRamos.textContent = cant;
}

function limpiarPPA() {
  listaRamosPPA = [];
  renderizarTablaPPA();
  calcularPPA();
  guardarPPA();
}

// --- CERTÁMENES ---
function renderizarTablaCertamenes() {
  const tbody = document.getElementById('certamenes-container-tabla');
  if (!tbody) return;
  tbody.innerHTML = '';
  listaCertamenes.forEach((item, idx) => {
    const tr = document.createElement('tr');
    tr.className = 'hover:bg-slate-800/50 transition';
    tr.innerHTML = `
      <td class="p-2.5"><input type="text" value="${item.nombre}" onchange="actualizarDatoCertamen(${idx}, 'nombre', this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-slate-200"></td>
      <td class="p-2.5"><input type="number" min="1" max="100" value="${item.ponderacion}" onchange="actualizarDatoCertamen(${idx}, 'ponderacion', this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-slate-200 text-center font-bold"></td>
      <td class="p-2.5"><input type="number" min="0" max="100" value="${item.completada ? item.nota : ''}" placeholder="Pendiente" onchange="actualizarDatoCertamen(${idx}, 'nota', this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-slate-200 text-center font-semibold"></td>
      <td class="p-2.5 text-center">${item.completada ? '<span class="text-sky-400 font-bold">Rendida</span>' : '<span class="text-amber-400">Pendiente</span>'}</td>
      <td class="p-2.5 text-center"><button onclick="eliminarEvaluacionCertamen(${idx})" class="text-rose-400 hover:text-rose-300 font-bold">✕</button></td>
    `;
    tbody.appendChild(tr);
  });
}

function agregarEvaluacionCertamen() {
  listaCertamenes.push({ id: Date.now().toString(), nombre: `Certamen ${listaCertamenes.length + 1}`, ponderacion: 25, nota: 0, completada: false });
  renderizarTablaCertamenes();
  calcularCertamenes();
  guardarCertamenes();
}

function eliminarEvaluacionCertamen(idx) {
  listaCertamenes.splice(idx, 1);
  renderizarTablaCertamenes();
  calcularCertamenes();
  guardarCertamenes();
}

function actualizarDatoCertamen(idx, campo, valor) {
  if (campo === 'ponderacion') listaCertamenes[idx].ponderacion = Math.min(100, Math.max(1, parseFloat(valor) || 0));
  else if (campo === 'nota') {
    const val = parseFloat(valor);
    if (!isNaN(val)) {
      listaCertamenes[idx].nota = Math.min(100, Math.max(0, val));
      listaCertamenes[idx].completada = true;
    } else {
      listaCertamenes[idx].nota = 0;
      listaCertamenes[idx].completada = false;
    }
  } else listaCertamenes[idx][campo] = valor;
  
  renderizarTablaCertamenes();
  calcularCertamenes();
  guardarCertamenes();
}

function calcularCertamenes() {
  let acumulado = 0, pondPendiente = 0;
  const notaObj = parseFloat(document.getElementById('certamen-nota-objetivo')?.value) || 55;
  listaCertamenes.forEach(item => {
    if (item.completada) acumulado += item.nota * (item.ponderacion / 100);
    else pondPendiente += item.ponderacion;
  });
  const elNotaReq = document.getElementById('certamen-nota-necesaria');
  if (pondPendiente > 0) {
    const necesaria = ((notaObj - acumulado) * 100) / pondPendiente;
    if (elNotaReq) elNotaReq.textContent = `${Math.max(0, necesaria).toFixed(1)} pts`;
  } else {
    if (elNotaReq) elNotaReq.textContent = acumulado.toFixed(1);
  }
}

// --- PRIORIDAD ---
function calcularPrioridad() {
  const ppa = parseFloat(document.getElementById('prio-ppa')?.value) || 0;
  const credAprob = parseFloat(document.getElementById('prio-cred-aprob')?.value) || 0;
  const credInsc = parseFloat(document.getElementById('prio-cred-insc')?.value) || 1;
  const reprobados = parseFloat(document.getElementById('prio-reprobados')?.value) || 0;

  const eficiencia = Math.min(1.0, credAprob / credInsc);
  const prioridad = (ppa * eficiencia * 100) / (1 + (0.08 * reprobados));
  const elPrio = document.getElementById('res-prioridad-valor');
  if (elPrio) elPrio.textContent = prioridad.toFixed(2);
}

// --- AGENDA ---
function renderizarAgenda() {
  const tbody = document.getElementById('agenda-container-tabla');
  if (!tbody) return;
  tbody.innerHTML = '';
  agendaUsuario.forEach((item, idx) => {
    const tr = document.createElement('tr');
    tr.className = 'hover:bg-slate-800/50 transition';
    tr.innerHTML = `
      <td class="p-2.5 font-semibold text-slate-100">${item.titulo}</td>
      <td class="p-2.5 text-slate-400">${item.ramo}</td>
      <td class="p-2.5 text-slate-300 font-mono">${item.fecha}</td>
      <td class="p-2.5 text-center"><span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-700 text-slate-300">Activo</span></td>
      <td class="p-2.5 text-center"><button onclick="eliminarItemAgenda(${idx})" class="text-rose-400 font-bold">✕</button></td>
    `;
    tbody.appendChild(tr);
  });
}

function agregarItemAgenda() {
  const titulo = prompt("Título del evento:", "Certamen");
  const fecha = prompt("Fecha (AAAA-MM-DD):", "2026-11-05");
  if (titulo && fecha) {
    agendaUsuario.push({ id: Date.now().toString(), titulo, ramo: "General", fecha });
    renderizarAgenda();
    guardarAgenda();
  }
}

function eliminarItemAgenda(idx) {
  agendaUsuario.splice(idx, 1);
  renderizarAgenda();
  guardarAgenda();
}

// --- ASISTENCIA ---
function renderizarAsistencia() {
  const tbody = document.getElementById('asistencia-container-tabla');
  if (!tbody) return;
  tbody.innerHTML = '';
  asistenciaUsuario.forEach((item, idx) => {
    const porc = item.totales > 0 ? Math.round((item.asistidas / item.totales) * 100) : 0;
    const tr = document.createElement('tr');
    tr.className = 'hover:bg-slate-800/50 transition';
    tr.innerHTML = `
      <td class="p-2.5 font-semibold text-slate-200">${item.ramo}</td>
      <td class="p-2.5 text-center"><input type="number" value="${item.asistidas}" onchange="actualizarAsistencia(${idx}, 'asistidas', this.value)" class="w-16 bg-slate-800 rounded text-center text-white"></td>
      <td class="p-2.5 text-center"><input type="number" value="${item.totales}" onchange="actualizarAsistencia(${idx}, 'totales', this.value)" class="w-16 bg-slate-800 rounded text-center text-white"></td>
      <td class="p-2.5 text-center font-bold text-slate-300">${item.minRequerido}%</td>
      <td class="p-2.5 text-center"><span class="px-2 py-0.5 rounded text-[10px] font-bold ${porc >= item.minRequerido ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'}">${porc}%</span></td>
      <td class="p-2.5 text-center"><button onclick="eliminarAsistencia(${idx})" class="text-rose-400 font-bold">✕</button></td>
    `;
    tbody.appendChild(tr);
  });
}

function actualizarAsistencia(idx, campo, valor) {
  asistenciaUsuario[idx][campo] = parseInt(valor) || 0;
  renderizarAsistencia();
  guardarAsistencia();
}

function agregarAsistencia() {
  const ramo = prompt("Nombre de la asignatura:", "Laboratorio");
  if (ramo) {
    asistenciaUsuario.push({ id: Date.now().toString(), ramo, asistidas: 10, totales: 12, minRequerido: 75 });
    renderizarAsistencia();
    guardarAsistencia();
  }
}

function eliminarAsistencia(idx) {
  asistenciaUsuario.splice(idx, 1);
  renderizarAsistencia();
  guardarAsistencia();
}

// --- HORARIO ---
function cargarOpcionesRamosHorario() {
  const datalist = document.getElementById('lista-ramos-cursando');
  if (!datalist) return;
  datalist.innerHTML = '';
  const carreraId = document.getElementById('select-carrera')?.value;
  if (carreraId && datosUSM.mallas[carreraId]) {
    datosUSM.mallas[carreraId].forEach(sem => {
      sem.ramos.forEach(r => {
        if ((progresoUsuario[r.codigo] || 'pendiente') === 'cursando') {
          const opt = document.createElement('option');
          opt.value = `${r.nombre} (${r.codigo})`;
          datalist.appendChild(opt);
        }
      });
    });
  }
}

function agregarBloqueHorario(event) {
  event.preventDefault();
  const ramo = document.getElementById('horario-ramo').value.trim();
  const dia = document.getElementById('horario-dia').value;
  const bloque = document.getElementById('horario-bloque').value;
  const tipo = document.getElementById('horario-tipo').value;
  const sala = document.getElementById('horario-sala').value.trim() || 'Sala';

  if (!ramo) return;
  horarioUsuario.push({ id: Date.now().toString(), ramo, dia, bloque, tipo, sala });
  renderizarHorario();
  guardarHorario();
  document.getElementById('horario-ramo').value = '';
}

function eliminarBloqueHorario(id) {
  horarioUsuario = horarioUsuario.filter(x => x.id !== id);
  renderizarHorario();
  guardarHorario();
}

function renderizarHorario() {
  const tbody = document.getElementById('grid-horario-body');
  if (!tbody) return;
  tbody.innerHTML = '';

  BLOQUES_USM.forEach(bUSM => {
    const tr = document.createElement('tr');
    tr.className = 'border-b border-slate-800/80';
    let celdasHTML = `<td class="p-2 border-r border-slate-700 bg-slate-900/90 text-center font-bold text-sky-400">${bUSM.id}</td>`;

    DIAS_USM.forEach(dia => {
      const bloques = horarioUsuario.filter(x => x.dia === dia && x.bloque === bUSM.id);
      if (bloques.length === 0) {
        celdasHTML += `<td class="p-1 border-r border-slate-800/60 h-16 text-center text-slate-700">--</td>`;
      } else {
        const contenido = bloques.map(item => `
          <div class="p-1.5 rounded border bg-sky-950/80 border-sky-500/50 text-sky-200 text-[11px] relative group">
            <button onclick="eliminarBloqueHorario('${item.id}')" class="absolute top-1 right-1 text-slate-400 hover:text-rose-400 opacity-0 group-hover:opacity-100">✕</button>
            <p class="font-bold truncate">${item.ramo}</p>
            <span class="text-[9px] text-slate-400">${item.tipo} • ${item.sala}</span>
          </div>
        `).join('');
        celdasHTML += `<td class="p-1 border-r border-slate-800/60 align-top">${contenido}</td>`;
      }
    });
    tr.innerHTML = celdasHTML;
    tbody.appendChild(tr);
  });
}

function limpiarHorario() {
  horarioUsuario = [];
  renderizarHorario();
  guardarHorario();
}// ==========================================
// FASE 1: RESPALDO Y RESTAURACIÓN (JSON)
// ==========================================

/**
 * Exporta todo el estado de LocalStorage a un archivo JSON descargable
 */
function exportarRespaldoJSON() {
  const datosRespaldo = {
    fechaExportacion: new Date().toISOString(),
    usuario: localStorage.getItem('usuario_email') || '',
    mallaEstado: localStorage.getItem('malla_estado') || '{}',
    ppaDatos: localStorage.getItem('ppa_datos') || '[]',
    certamenesDatos: localStorage.getItem('certamenes_datos') || '[]',
    prioridadDatos: localStorage.getItem('prioridad_datos') || '{}',
    agendaDatos: localStorage.getItem('agenda_datos') || '[]',
    asistenciaDatos: localStorage.getItem('asistencia_datos') || '[]',
    horarioDatos: localStorage.getItem('horario_datos') || '[]'
  };

  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(datosRespaldo, null, 2));
  const downloadAnchor = document.createElement('a');
  
  const fechaStr = new Date().toISOString().slice(0, 10);
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `MallaPlanner_Respaldo_${fechaStr}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

/**
 * Lee e importa un archivo JSON local para restaurar la sesión
 */
function importarRespaldoJSON(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const datos = JSON.parse(e.target.result);

      if (!datos.mallaEstado && !datos.ppaDatos) {
        alert("El archivo subido no corresponde a un formato válido de MallaPlanner.");
        return;
      }

      if (confirm("Al importar este respaldo se reemplazarán tus datos actuales. ¿Deseas continuar?")) {
        if (datos.usuario) localStorage.setItem('usuario_email', datos.usuario);
        if (datos.mallaEstado) localStorage.setItem('malla_estado', datos.mallaEstado);
        if (datos.ppaDatos) localStorage.setItem('ppa_datos', datos.ppaDatos);
        if (datos.certamenesDatos) localStorage.setItem('certamenes_datos', datos.certamenesDatos);
        if (datos.prioridadDatos) localStorage.setItem('prioridad_datos', datos.prioridadDatos);
        if (datos.agendaDatos) localStorage.setItem('agenda_datos', datos.agendaDatos);
        if (datos.asistenciaDatos) localStorage.setItem('asistencia_datos', datos.asistenciaDatos);
        if (datos.horarioDatos) localStorage.setItem('horario_datos', datos.horarioDatos);

        alert("¡Respaldo cargado con éxito! La página se recargará para aplicar los cambios.");
        window.location.reload();
      }
    } catch (err) {
      alert("Error al leer el archivo JSON. Verifica que esté en buen estado.");
      console.error(err);
    }
  };

  reader.readAsText(file);
}
document.addEventListener('DOMContentLoaded', cargarPortal);
