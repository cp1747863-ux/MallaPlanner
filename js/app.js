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

// BLOQUES USM OFICIALES (70 min de clase + 10 min de descanso)
const BLOQUES_USM = [
  { id: "1-2", hora: "08:15 - 09:25" },
  { id: "3-4", hora: "09:35 - 10:45" },
  { id: "5-6", hora: "10:55 - 12:05" },
  { id: "7-8", hora: "12:15 - 13:25" },
  { id: "9-10", hora: "13:35 - 14:45" },
  { id: "11-12", hora: "14:55 - 16:05" },
  { id: "13-14", hora: "16:15 - 17:25" },
  { id: "15-16", hora: "17:35 - 18:45" },
  { id: "17-18", hora: "18:55 - 20:05" }
];

const DIAS_USM = ["lunes", "martes", "miercoles", "jueves", "viernes"];

// --- MODAL FEEDBACK ---
function abrirModalFeedback() {
  const modal = document.getElementById('feedback-modal');
  if (modal) {
    modal.classList.remove('hidden');
  }
}

function cerrarModalFeedback() {
  const modal = document.getElementById('feedback-modal');
  if (modal) {
    modal.classList.add('hidden');
  }
}

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

// --- MODO OSCURO / CLARO (UNIFICADO CON TAILWIND) ---
function alternarTema() {
  const htmlEl = document.documentElement;
  htmlEl.classList.toggle('dark');
  const esOscuro = htmlEl.classList.contains('dark');
  
  const icon = document.getElementById('theme-icon');
  const text = document.getElementById('theme-text');
  
  if (icon) icon.textContent = esOscuro ? '🌙' : '☀️';
  if (text) text.textContent = esOscuro ? 'Modo Claro' : 'Modo Oscuro';
  
  localStorage.setItem('usm_theme', esOscuro ? 'dark' : 'light');
}

function aplicarTemaGuardado() {
  const temaGuardado = localStorage.getItem('usm_theme');
  const htmlEl = document.documentElement;
  const icon = document.getElementById('theme-icon');
  const text = document.getElementById('theme-text');

  if (temaGuardado === 'light') {
    htmlEl.classList.remove('dark');
    if (icon) icon.textContent = '☀️';
    if (text) text.textContent = 'Modo Oscuro';
  } else {
    htmlEl.classList.add('dark');
    if (icon) icon.textContent = '🌙';
    if (text) text.textContent = 'Modo Claro';
  }
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
  aplicarTemaGuardado();
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
  const secciones = ['sec-malla', 'sec-ppa', 'sec-certamenes', 'sec-prioridad', 'sec-agenda', 'sec-horario', 'sec-config-api'];
  const tabs = ['tab-malla', 'tab-ppa', 'tab-certamenes', 'tab-prioridad', 'tab-agenda', 'tab-horario', 'tab-config-api'];

  secciones.forEach(s => document.getElementById(s)?.classList.add('hidden'));
  tabs.forEach(t => {
    const el = document.getElementById(t);
    if (el) el.className = 'py-3 font-semibold border-b-2 border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition whitespace-nowrap';
  });

  const secActiva = document.getElementById(`sec-${pestana}`);
  const tabActivo = document.getElementById(`tab-${pestana}`);

  if (secActiva) secActiva.classList.remove('hidden');
  if (tabActivo) tabActivo.className = 'py-3 font-semibold border-b-2 border-sky-500 text-sky-600 dark:text-sky-400 transition whitespace-nowrap';
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
      card.className = 'bg-white/90 dark:bg-slate-800/90 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-lg space-y-3';
      
      const ramosHTML = sem.ramos.map(r => {
        const estado = progresoUsuario[r.codigo] || 'pendiente';
        const estilos = obtenerEstilosRamo(estado);

        return `
          <div onclick="rotarEstadoRamo('${r.codigo}')" 
            class="p-3 rounded-lg border flex justify-between items-center cursor-pointer transition select-none ${estilos.box}">
            <div>
              <p class="font-semibold text-xs ${estilos.texto}">${r.nombre}</p>
              <div class="flex items-center space-x-2 mt-0.5">
                <span class="text-[10px] text-slate-500 dark:text-slate-400">${r.codigo}</span>
                <span class="text-[9px] px-1.5 py-0.2 rounded font-bold uppercase ${estilos.badge}">${estado}</span>
              </div>
            </div>
            <span class="text-xs font-bold px-2 py-0.5 rounded ${estilos.creditos}">${r.creditos} SCT</span>
          </div>
        `;
      }).join('');

      card.innerHTML = `
        <h3 class="text-sm font-bold text-sky-600 dark:text-sky-400 border-b border-slate-200 dark:border-slate-700 pb-2 flex justify-between items-center">
          <span>Semestre ${sem.semestre}</span>
          <span class="text-xs font-normal text-slate-500 dark:text-slate-400">${sem.ramos.length} Ramos</span>
        </h3>
        <div class="space-y-2">${ramosHTML}</div>
      `;
      container.appendChild(card);
    });

    actualizarEstadisticasMalla(carreraId);
    
    const inputFiltro = document.getElementById('input-filtro-malla');
    if (inputFiltro && inputFiltro.value.trim() !== '') {
      filtrarMalla(inputFiltro.value);
    }
  } else if (carreraId) {
    panelAvance?.classList.add('hidden');
    container.innerHTML = `
      <div class="col-span-full bg-white/40 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 rounded-xl p-8 text-center">
        <p class="text-slate-500 dark:text-slate-400 text-sm">La malla curricular de esta carrera se encuentra en proceso de carga o puedes agregarla en mallas.js.</p>
      </div>
    `;
  }
}

// --- FILTRADO DE ASIGNATURAS EN MALLA ---
function filtrarMalla(texto) {
  const query = texto.toLowerCase().trim();
  const tarjetas = document.querySelectorAll('#malla-container > div');

  tarjetas.forEach(card => {
    let algunVisible = false;
    const ramos = card.querySelectorAll('div[onclick^="rotarEstadoRamo"]');

    ramos.forEach(ramo => {
      const textoRamo = ramo.textContent.toLowerCase();
      if (textoRamo.includes(query)) {
        ramo.style.display = 'flex';
        algunVisible = true;
      } else {
        ramo.style.display = 'none';
      }
    });

    if (algunVisible || query === '') {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
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
        box: 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-500/50 hover:border-emerald-400',
        texto: 'text-emerald-900 dark:text-emerald-200 line-through decoration-emerald-500/50',
        badge: 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/30',
        creditos: 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300'
      };
    case 'cursando':
      return {
        box: 'bg-sky-50 dark:bg-sky-950/40 border-sky-300 dark:border-sky-500/50 hover:border-sky-400',
        texto: 'text-sky-900 dark:text-sky-200 font-bold',
        badge: 'bg-sky-100 dark:bg-sky-500/20 text-sky-700 dark:text-sky-300 border border-sky-300 dark:border-sky-500/30',
        creditos: 'bg-sky-100 dark:bg-sky-500/20 text-sky-700 dark:text-sky-300'
      };
    default:
      return {
        box: 'bg-slate-50 dark:bg-slate-900/80 border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500',
        texto: 'text-slate-800 dark:text-slate-200',
        badge: 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-slate-700',
        creditos: 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
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

// --- PPA (CON VALIDACIONES AVANZADAS) ---
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
    tr.className = 'hover:bg-slate-100 dark:hover:bg-slate-800/50 transition';
    tr.innerHTML = `
      <td class="p-2.5"><input type="text" value="${item.nombre}" onchange="actualizarDatoPPA(${idx}, 'nombre', this.value)" class="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded px-2 py-1 text-slate-900 dark:text-slate-200"></td>
      <td class="p-2.5"><input type="number" min="1" max="30" value="${item.creditos}" onchange="actualizarDatoPPA(${idx}, 'creditos', this.value)" class="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded px-2 py-1 text-slate-900 dark:text-slate-200 text-center"></td>
      <td class="p-2.5"><input type="number" min="0" max="100" value="${item.nota || ''}" onchange="actualizarDatoPPA(${idx}, 'nota', this.value)" class="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded px-2 py-1 text-slate-900 dark:text-slate-200 text-center font-semibold"></td>
      <td class="p-2.5 text-center">${item.nota >= 55 ? '<span class="text-emerald-600 dark:text-emerald-400 font-bold">Aprobado</span>' : '<span class="text-rose-600 dark:text-rose-400">Reprobado</span>'}</td>
      <td class="p-2.5 text-center"><button onclick="eliminarRamoPPA(${idx})" class="text-rose-500 hover:text-rose-700 font-bold">✕</button></td>
    `;
    tbody.appendChild(tr);
  });
}

function actualizarDatoPPA(idx, campo, valor) {
  if (campo === 'creditos') {
    let cred = parseFloat(valor);
    if (isNaN(cred) || cred < 1) cred = 1;
    if (cred > 30) cred = 30;
    listaRamosPPA[idx].creditos = cred;
  } else if (campo === 'nota') {
    let nota = parseFloat(valor);
    if (isNaN(nota) || nota < 0) nota = 0;
    if (nota > 100) nota = 100;
    listaRamosPPA[idx].nota = nota;
  } else {
    listaRamosPPA[idx][campo] = valor;
  }
  renderizarTablaPPA();
  calcularPPA();
  guardarPPA();
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

// --- CERTÁMENES (CON VALIDACIONES AVANZADAS) ---
function renderizarTablaCertamenes() {
  const tbody = document.getElementById('certamenes-container-tabla');
  if (!tbody) return;
  tbody.innerHTML = '';
  listaCertamenes.forEach((item, idx) => {
    const tr = document.createElement('tr');
    tr.id = `eval-row-${idx}`;
    tr.className = 'hover:bg-slate-100 dark:hover:bg-slate-800/50 transition';
    tr.innerHTML = `
      <td class="p-2.5">
        <div class="flex items-center gap-2">
          <input type="text" value="${item.nombre}" onchange="actualizarDatoCertamen(${idx}, 'nombre', this.value)" class="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded px-2 py-1 text-slate-900 dark:text-slate-200">
          <button onclick="toggleDesgloseCertamen(${idx})" title="Desglosar en rúbrica o competencias" class="text-xs bg-sky-100 dark:bg-sky-500/20 text-sky-700 dark:text-sky-300 px-1.5 py-0.5 rounded font-bold hover:bg-sky-200">📊</button>
        </div>
      </td>
      <td class="p-2.5"><input type="number" min="1" max="100" value="${item.ponderacion}" onchange="actualizarDatoCertamen(${idx}, 'ponderacion', this.value)" class="w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded px-2 py-1 text-slate-900 dark:text-slate-200 text-center font-bold"></td>
      <td class="p-2.5"><input type="number" min="0" max="100" data-index="${idx}" value="${item.completada ? item.nota : ''}" placeholder="Pendiente" onchange="actualizarDatoCertamen(${idx}, 'nota', this.value)" class="nota-evaluacion w-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded px-2 py-1 text-slate-900 dark:text-slate-200 text-center font-semibold"></td>
      <td class="p-2.5 text-center">${item.completada ? '<span class="text-sky-600 dark:text-sky-400 font-bold">Rendida</span>' : '<span class="text-amber-600 dark:text-amber-400">Pendiente</span>'}</td>
      <td class="p-2.5 text-center"><button onclick="eliminarEvaluacionCertamen(${idx})" class="text-rose-500 hover:text-rose-700 font-bold">✕</button></td>
    `;
    tbody.appendChild(tr);
  });
}

function actualizarDatoCertamen(idx, campo, valor) {
  if (campo === 'ponderacion') {
    let pond = parseFloat(valor);
    if (isNaN(pond) || pond < 1) pond = 1;
    if (pond > 100) pond = 100;
    listaCertamenes[idx].ponderacion = pond;
  } else if (campo === 'nota') {
    const val = parseFloat(valor);
    if (!isNaN(val)) {
      let nota = val;
      if (nota < 0) nota = 0;
      if (nota > 100) nota = 100;
      listaCertamenes[idx].nota = nota;
      listaCertamenes[idx].completada = true;
    } else {
      listaCertamenes[idx].nota = 0;
      listaCertamenes[idx].completada = false;
    }
  } else {
    listaCertamenes[idx][campo] = valor;
  }
  
  renderizarTablaCertamenes();
  calcularCertamenes();
  guardarCertamenes();
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

function limpiarCertamenes() {
  listaCertamenes = [
    { id: "c1", nombre: "Certamen 1", ponderacion: 30, nota: 0, completada: false },
    { id: "c2", nombre: "Certamen 2", ponderacion: 30, nota: 0, completada: false },
    { id: "c3", nombre: "Certamen 3", ponderacion: 40, nota: 0, completada: false }
  ];
  renderizarTablaCertamenes();
  calcularCertamenes();
  guardarCertamenes();
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

// --- AGENDA & CALENDARIO ---
function renderizarAgenda() {
  const tbody = document.getElementById('agenda-container-tabla');
  if (!tbody) return;
  tbody.innerHTML = '';

  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);

  agendaUsuario.forEach((item, idx) => {
    const fechaEv = new Date(item.fecha + 'T00:00:00');
    const difTiempo = fechaEv.getTime() - hoy.getTime();
    const difDias = Math.ceil(difTiempo / (1000 * 3600 * 24));

    let badgeDias = '';
    if (difDias < 0) {
      badgeDias = `<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400">Expirado</span>`;
    } else if (difDias === 0) {
      badgeDias = `<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-100 dark:bg-rose-500/20 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-500/30">¡Hoy!</span>`;
    } else if (difDias <= 3) {
      badgeDias = `<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-500/30">En ${difDias} días</span>`;
    } else {
      badgeDias = `<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-sky-100 dark:bg-sky-500/20 text-sky-700 dark:text-sky-300 border border-sky-300 dark:border-sky-500/30">En ${difDias} días</span>`;
    }

    const tr = document.createElement('tr');
    tr.className = 'hover:bg-slate-100 dark:hover:bg-slate-800/50 transition';
    tr.innerHTML = `
      <td class="p-2.5 font-semibold text-slate-800 dark:text-slate-100">${item.titulo}</td>
      <td class="p-2.5 text-slate-500 dark:text-slate-400">${item.ramo}</td>
      <td class="p-2.5 text-slate-700 dark:text-slate-300 font-mono">${item.fecha}</td>
      <td class="p-2.5 text-center">${badgeDias}</td>
      <td class="p-2.5 text-center"><button onclick="eliminarItemAgenda(${idx})" class="text-rose-500 hover:text-rose-700 font-bold">✕</button></td>
    `;
    tbody.appendChild(tr);
  });
}

function agregarItemAgenda() {
  const titulo = prompt("Título del evento:", "Certamen 1");
  const ramo = prompt("Asignatura o Código:", "INF-110");
  const fecha = prompt("Fecha límite (AAAA-MM-DD):", new Date().toISOString().slice(0, 10));

  if (titulo && fecha) {
    agendaUsuario.push({ id: Date.now().toString(), titulo, ramo: ramo || "General", fecha });
    renderizarAgenda();
    guardarAgenda();
  }
}

function eliminarItemAgenda(idx) {
  agendaUsuario.splice(idx, 1);
  renderizarAgenda();
  guardarAgenda();
}

function exportarCalendarICS() {
  if (agendaUsuario.length === 0) {
    alert("No hay eventos en tu agenda para exportar.");
    return;
  }

  let icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//MallaPlanner USM//NONSGML v1.0//ES",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH"
  ];

  agendaUsuario.forEach(ev => {
    const fechaClean = ev.fecha.replace(/-/g, "");
    icsContent.push("BEGIN:VEVENT");
    icsContent.push(`SUMMARY:${ev.titulo} (${ev.ramo})`);
    icsContent.push(`DTSTART;VALUE=DATE:${fechaClean}`);
    icsContent.push(`DTEND;VALUE=DATE:${fechaClean}`);
    icsContent.push(`DESCRIPTION:Evaluación registrada en MallaPlanner USM para ${ev.ramo}`);
    icsContent.push("STATUS:CONFIRMED");
    icsContent.push("END:VEVENT");
  });

  icsContent.push("END:VCALENDAR");

  const blob = new Blob([icsContent.join("\r\n")], { type: 'text/calendar;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Agenda_USM_MallaPlanner.ics');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// --- ASISTENCIA ---
function renderizarAsistencia() {
  const tbody = document.getElementById('asistencia-container-tabla');
  if (!tbody) return;
  tbody.innerHTML = '';
  asistenciaUsuario.forEach((item, idx) => {
    const porc = item.totales > 0 ? Math.round((item.asistidas / item.totales) * 100) : 0;
    
    const maxFaltas = Math.floor(item.totales * (1 - item.minRequerido / 100));
    const faltasActuales = item.totales - item.asistidas;
    const margenRestante = maxFaltas - faltasActuales;

    let badgeEstado = '';
    if (porc < item.minRequerido) {
      badgeEstado = `<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-100 dark:bg-rose-500/20 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-500/30">Riesgo NCR (${porc}%)</span>`;
    } else {
      badgeEstado = `<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/30">OK (${porc}%) - Puedes faltar ${Math.max(0, margenRestante)} más</span>`;
    }

    const tr = document.createElement('tr');
    tr.className = 'hover:bg-slate-100 dark:hover:bg-slate-800/50 transition';
    tr.innerHTML = `
      <td class="p-2.5 font-semibold text-slate-800 dark:text-slate-200">${item.ramo}</td>
      <td class="p-2.5 text-center"><input type="number" value="${item.asistidas}" min="0" onchange="actualizarAsistencia(${idx}, 'asistidas', this.value)" class="w-16 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded text-center text-slate-900 dark:text-white"></td>
      <td class="p-2.5 text-center"><input type="number" value="${item.totales}" min="1" onchange="actualizarAsistencia(${idx}, 'totales', this.value)" class="w-16 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded text-center text-slate-900 dark:text-white"></td>
      <td class="p-2.5 text-center font-bold text-slate-700 dark:text-slate-300">${item.minRequerido}%</td>
      <td class="p-2.5 text-center">${badgeEstado}</td>
      <td class="p-2.5 text-center"><button onclick="eliminarAsistencia(${idx})" class="text-rose-500 hover:text-rose-700 font-bold">✕</button></td>
    `;
    tbody.appendChild(tr);
  });
}

function actualizarAsistencia(idx, campo, valor) {
  asistenciaUsuario[idx][campo] = Math.max(0, parseInt(valor) || 0);
  renderizarAsistencia();
  guardarAsistencia();
}

function agregarAsistencia() {
  const ramo = prompt("Nombre de la asignatura / clase:", "Laboratorio de Física");
  const req = prompt("Porcentaje mínimo de asistencia requerido (%):", "80");
  if (ramo) {
    asistenciaUsuario.push({ 
      id: Date.now().toString(), 
      ramo, 
      asistidas: 10, 
      totales: 12, 
      minRequerido: parseInt(req) || 75 
    });
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
  const datalistCert = document.getElementById('lista-ramos-cursando-certamen');

  if (datalist) datalist.innerHTML = '';
  if (datalistCert) datalistCert.innerHTML = '';

  const carreraId = document.getElementById('select-carrera')?.value;
  if (carreraId && datosUSM.mallas[carreraId]) {
    datosUSM.mallas[carreraId].forEach(sem => {
      sem.ramos.forEach(r => {
        if ((progresoUsuario[r.codigo] || 'pendiente') === 'cursando') {
          const opt = document.createElement('option');
          opt.value = `${r.nombre} (${r.codigo})`;
          
          if (datalist) datalist.appendChild(opt.cloneNode(true));
          if (datalistCert) datalistCert.appendChild(opt);
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

  const conflictos = detectarConflictosHorario();
  const panelConflictos = document.getElementById('alerta-conflictos');
  const listaTextoConflictos = document.getElementById('lista-conflictos-texto');

  if (panelConflictos && listaTextoConflictos) {
    if (conflictos.length > 0) {
      panelConflictos.classList.remove('hidden');
      listaTextoConflictos.innerHTML = conflictos.map(c => `<li>Tope el día <strong>${c.dia}</strong> en bloque <strong>${c.bloque}</strong>: ${c.ramos.join(' con ')}</li>`).join('');
    } else {
      panelConflictos.classList.add('hidden');
    }
  }

  BLOQUES_USM.forEach(bUSM => {
    const tr = document.createElement('tr');
    tr.className = 'border-b border-slate-200 dark:border-slate-800/80';
    let celdasHTML = `<td class="p-2 border-r border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-900/90 text-center font-bold text-sky-600 dark:text-sky-400 sticky left-0 z-10">${bUSM.id}<br><span class="text-[9px] font-normal text-slate-500 dark:text-slate-400">${bUSM.hora}</span></td>`;

    DIAS_USM.forEach(dia => {
      const bloques = horarioUsuario.filter(x => x.dia === dia && x.bloque === bUSM.id);
      if (bloques.length === 0) {
        celdasHTML += `<td class="p-1 border-r border-slate-200 dark:border-slate-800/60 h-16 text-center text-slate-400 dark:text-slate-700">--</td>`;
      } else {
        const esConflicto = bloques.length > 1;
        const contenido = bloques.map(item => `
          <div class="p-1.5 rounded border ${esConflicto ? 'bg-rose-100 dark:bg-rose-950/80 border-rose-400 dark:border-rose-500 text-rose-900 dark:text-rose-200' : 'bg-sky-100 dark:bg-sky-950/80 border-sky-300 dark:border-sky-500/50 text-sky-900 dark:text-sky-200'} text-[11px] relative group my-0.5">
            <button onclick="eliminarBloqueHorario('${item.id}')" class="absolute top-1 right-1 text-slate-400 hover:text-rose-500 opacity-0 group-hover:opacity-100 transition no-print">✕</button>
            <p class="font-bold truncate">${item.ramo}</p>
            <span class="text-[9px] text-slate-500 dark:text-slate-400">${item.tipo} • ${item.sala}</span>
          </div>
        `).join('');
        celdasHTML += `<td class="p-1 border-r border-slate-200 dark:border-slate-800/60 align-top">${contenido}</td>`;
      }
    });
    tr.innerHTML = celdasHTML;
    tbody.appendChild(tr);
  });
}

function detectarConflictosHorario() {
  const conflictos = [];
  DIAS_USM.forEach(dia => {
    BLOQUES_USM.forEach(bUSM => {
      const enMismoBloque = horarioUsuario.filter(x => x.dia === dia && x.bloque === bUSM.id);
      if (enMismoBloque.length > 1) {
        conflictos.push({
          dia: dia.charAt(0).toUpperCase() + dia.slice(1),
          bloque: bUSM.id,
          ramos: enMismoBloque.map(x => x.ramo)
        });
      }
    });
  });
  return conflictos;
}

function limpiarHorario() {
  if (confirm("¿Seguro que deseas borrar todos los bloques de tu horario semanal?")) {
    horarioUsuario = [];
    renderizarHorario();
    guardarHorario();
  }
}

function exportarHorarioPDF() {
  window.print();
}

// --- RESPALDO Y RESTAURACIÓN (JSON) ---
function exportarRespaldoJSON() {
  const user = localStorage.getItem('usm_user');
  if (!user) {
    alert("Inicia sesión antes de exportar un respaldo.");
    return;
  }

  const datosRespaldo = {
    fechaExportacion: new Date().toISOString(),
    usuario: user,
    mallaEstado: localStorage.getItem(`usm_progreso_${user}`) || '{}',
    ppaDatos: localStorage.getItem(`usm_ppa_${user}`) || '[]',
    certamenesDatos: localStorage.getItem(`usm_cert_${user}`) || '[]',
    agendaDatos: localStorage.getItem(`usm_agenda_${user}`) || '[]',
    asistenciaDatos: localStorage.getItem(`usm_asist_${user}`) || '[]',
    horarioDatos: localStorage.getItem(`usm_horario_${user}`) || '[]'
  };

  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(datosRespaldo, null, 2));
  const downloadAnchor = document.createElement('a');
  
  const fechaStr = new Date().toISOString().slice(0, 10);
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `USM_Planner_Respaldo_${user}_${fechaStr}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

function importarRespaldoJSON(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const datos = JSON.parse(e.target.result);

      if (!datos.mallaEstado && !datos.ppaDatos) {
        alert("El archivo subido no corresponde a un formato válido de USM Planner.");
        return;
      }

      if (confirm("Al importar este respaldo se reemplazarán tus datos actuales. ¿Deseas continuar?")) {
        const user = datos.usuario || localStorage.getItem('usm_user');

        if (user) {
          localStorage.setItem('usm_user', user);
          if (datos.mallaEstado) localStorage.setItem(`usm_progreso_${user}`, datos.mallaEstado);
          if (datos.ppaDatos) localStorage.setItem(`usm_ppa_${user}`, datos.ppaDatos);
          if (datos.certamenesDatos) localStorage.setItem(`usm_cert_${user}`, datos.certamenesDatos);
          if (datos.agendaDatos) localStorage.setItem(`usm_agenda_${user}`, datos.agendaDatos);
          if (datos.asistenciaDatos) localStorage.setItem(`usm_asist_${user}`, datos.asistenciaDatos);
          if (datos.horarioDatos) localStorage.setItem(`usm_horario_${user}`, datos.horarioDatos);

          alert("¡Respaldo cargado con éxito! La página se recargará para aplicar los cambios.");
          window.location.reload();
        } else {
          alert("No se pudo identificar el usuario para guardar el respaldo.");
        }
      }
    } catch (err) {
      alert("Error al leer el archivo JSON. Verifica que esté en buen estado.");
      console.error(err);
    }
  };

  reader.readAsText(file);
}

// --- REGISTRO DE SERVICE WORKER (PWA) ---
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Service Worker registrado:', reg.scope))
      .catch(err => console.warn('Error en Service Worker:', err));
  });
}

document.addEventListener('DOMContentLoaded', cargarPortal);

/* ==========================================
   MÓDULO DE DESGLOSE DE NOTAS POR RÚBRICAS / COMPETENCIAS
   ========================================== */

function toggleDesgloseCertamen(indexEvaluacion) {
  const filaPrincipal = document.getElementById(`eval-row-${indexEvaluacion}`);
  if (!filaPrincipal) return;

  let filaSubcriterios = document.getElementById(`sub-row-${indexEvaluacion}`);

  if (filaSubcriterios) {
    filaSubcriterios.classList.toggle('hidden');
  } else {
    const nuevaFila = document.createElement('tr');
    nuevaFila.id = `sub-row-${indexEvaluacion}`;
    nuevaFila.className = 'bg-slate-100/80 dark:bg-slate-900/80 text-xs border-b border-slate-200 dark:border-slate-800';
    
    nuevaFila.innerHTML = `
      <td colspan="5" class="p-4 space-y-3">
        <div class="flex justify-between items-center">
          <span class="font-bold text-sky-600 dark:text-sky-400">📊 Desglose por Competencias / Rúbrica</span>
          <button onclick="agregarSubcriterio(${indexEvaluacion})" class="bg-sky-500 hover:bg-sky-600 text-slate-950 font-bold px-2 py-1 rounded text-[10px] transition">
            + Añadir Criterio (ej. Informe, Práctica)
          </button>
        </div>
        <div id="subcriterios-list-${indexEvaluacion}" class="space-y-2">
          <p class="text-[11px] text-slate-500 italic">No hay subcriterios definidos. Usa el botón de arriba para agregar partes a esta evaluación (deben sumar 100%).</p>
        </div>
      </td>
    `;
    
    filaPrincipal.after(nuevaFila);
  }
}

function agregarSubcriterio(indexEvaluacion) {
  const contenedor = document.getElementById(`subcriterios-list-${indexEvaluacion}`);
  if (!contenedor) return;

  if (contenedor.querySelector('p')) {
    contenedor.innerHTML = '';
  }

  const divSub = document.createElement('div');
  divSub.className = 'flex items-center gap-2 bg-white dark:bg-slate-800 p-2 rounded border border-slate-200 dark:border-slate-700';
  divSub.innerHTML = `
    <input type="text" placeholder="Nombre (ej. Parte Práctica)" class="sub-nombre flex-grow bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded px-2 py-1 text-xs text-slate-900 dark:text-white">
    <div class="flex items-center gap-1">
      <span class="text-[10px] text-slate-500">Peso:</span>
      <input type="number" placeholder="%" value="50" min="1" max="100" class="sub-peso w-16 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded px-2 py-1 text-xs text-slate-900 dark:text-white font-bold">
    </div>
    <div class="flex items-center gap-1">
      <span class="text-[10px] text-slate-500">Nota:</span>
      <input type="number" placeholder="Nota" value="55" min="1" max="100" oninput="calcularNotaDesglosada(${indexEvaluacion})" class="sub-nota w-16 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded px-2 py-1 text-xs text-slate-900 dark:text-white font-bold text-sky-600 dark:text-sky-400">
    </div>
    <button onclick="this.parentElement.remove(); calcularNotaDesglosada(${indexEvaluacion});" class="text-rose-500 hover:text-rose-700 font-bold px-1.5 text-sm">&times;</button>
  `;

  contenedor.appendChild(divSub);
}

function calcularNotaDesglosada(indexEvaluacion) {
  const contenedor = document.getElementById(`subcriterios-list-${indexEvaluacion}`);
  if (!contenedor) return;

  const items = contenedor.querySelectorAll('.flex.items-center.gap-2');
  let notaFinalPonderada = 0;
  let porcentajeTotalAcumulado = 0;

  items.forEach(item => {
    const peso = parseFloat(item.querySelector('.sub-peso').value) || 0;
    const nota = parseFloat(item.querySelector('.sub-nota').value) || 0;

    notaFinalPonderada += (nota * (peso / 100));
    porcentajeTotalAcumulado += peso;
  });

  if (porcentajeTotalAcumulado === 100 && items.length > 0) {
    const inputNotaPrincipal = document.querySelector(`input.nota-evaluacion[data-index="${indexEvaluacion}"]`);
    if (inputNotaPrincipal) {
      inputNotaPrincipal.value = Math.round(notaFinalPonderada);
      if (typeof calcularCertamenes === 'function') {
        calcularCertamenes();
      }
    }
  }
}
