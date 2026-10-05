// js/app.js - Lógica principal MallaPlanner

let estadoUsuario = {
  email: '',
  sede: '',
  carrera: '',
  mallaEstado: {},
  ppaRamos: [],
  certamenes: [],
  agenda: [],
  asistencia: [],
  horario: []
};

// --- AUTENTICACIÓN Y SESIÓN ---
function iniciarSesion(event) {
  event.preventDefault();
  const emailInput = document.getElementById('user-email').value.trim();
  const errorMsg = document.getElementById('login-error');

  if (!emailInput.endsWith('@usm.cl') && !emailInput.endsWith('@alumnos.usm.cl')) {
    errorMsg.classList.remove('hidden');
    return;
  }

  errorMsg.classList.add('hidden');
  estadoUsuario.email = emailInput;
  localStorage.setItem('mallaplanner_user', emailInput);
  
  cargarDatosLocales();
  mostrarInterfazPrincipal();
}

function cerrarSesion() {
  localStorage.removeItem('mallaplanner_user');
  location.reload();
}

function mostrarInterfazPrincipal() {
  document.getElementById('login-screen').classList.add('hidden');
  document.getElementById('portal-content').classList.remove('hidden');
  document.getElementById('portal-content').classList.add('flex');
  document.getElementById('user-display').textContent = estadoUsuario.email;
  cargarSedes();
}

// --- NAVEGACIÓN ---
function cambiarPestana(id) {
  const secciones = ['malla', 'ppa', 'certamenes', 'prioridad', 'agenda', 'horario', 'config-api'];
  secciones.forEach(sec => {
    const el = document.getElementById(`sec-${sec}`);
    const tab = document.getElementById(`tab-${sec}`);
    if (el) el.classList.toggle('hidden', sec !== id);
    if (tab) {
      if (sec === id) {
        tab.className = "py-3 font-semibold border-b-2 border-sky-500 text-sky-600 dark:text-sky-400 transition whitespace-nowrap";
      } else {
        tab.className = "py-3 font-semibold border-b-2 border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition whitespace-nowrap";
      }
    }
  });
}

// --- GESTIÓN DE MALLAS ---
function cargarSedes() {
  const selectSede = document.getElementById('select-sede');
  selectSede.innerHTML = '<option value="">-- Seleccionar Sede --</option>';
  
  datosUSM.sedes.forEach(sede => {
    const opt = document.createElement('option');
    opt.value = sede.id;
    opt.textContent = sede.nombre;
    selectSede.appendChild(opt);
  });

  if (estadoUsuario.sede) {
    selectSede.value = estadoUsuario.sede;
    cargarCarreras();
  }
}

function cargarCarreras() {
  const sedeId = document.getElementById('select-sede').value;
  const selectCarrera = document.getElementById('select-carrera');
  selectCarrera.innerHTML = '<option value="">-- Seleccionar Carrera --</option>';
  estadoUsuario.sede = sedeId;

  if (!sedeId || !datosUSM.carreras[sedeId]) {
    selectCarrera.disabled = true;
    return;
  }

  selectCarrera.disabled = false;
  datosUSM.carreras[sedeId].forEach(carrera => {
    const opt = document.createElement('option');
    opt.value = carrera.id;
    opt.textContent = carrera.nombre;
    selectCarrera.appendChild(opt);
  });

  if (estadoUsuario.carrera) {
    selectCarrera.value = estadoUsuario.carrera;
    mostrarMalla();
  }
}

function mostrarMalla() {
  const carreraId = document.getElementById('select-carrera').value;
  estadoUsuario.carrera = carreraId;
  guardarDatosLocales();

  const container = document.getElementById('malla-container');
  const panelAvance = document.getElementById('panel-avance');
  container.innerHTML = '';

  if (!carreraId || !datosUSM.mallas[carreraId]) {
    panelAvance.classList.add('hidden');
    return;
  }

  panelAvance.classList.remove('hidden');
  const semestres = datosUSM.mallas[carreraId];

  semestres.forEach(sem => {
    const cardSem = document.createElement('div');
    cardSem.className = "bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 p-4 rounded-xl shadow-sm space-y-3";
    cardSem.innerHTML = `<h4 class="font-bold text-xs uppercase tracking-wider text-sky-600 dark:text-sky-400 border-b border-slate-200 dark:border-slate-700 pb-2">Semestre ${sem.semestre}</h4>`;

    const ramosDiv = document.createElement('div');
    ramosDiv.className = "space-y-2";

    sem.ramos.forEach(ramo => {
      const estado = estadoUsuario.mallaEstado[ramo.codigo] || 'pendiente';
      const btnRamo = document.createElement('button');
      btnRamo.type = 'button';
      btnRamo.dataset.codigo = ramo.codigo;
      btnRamo.dataset.nombre = ramo.nombre;
      btnRamo.dataset.creditos = ramo.creditos;
      btnRamo.className = `w-full text-left p-2.5 rounded-lg border text-xs flex justify-between items-center transition ${obtenerClaseEstado(estado)}`;
      
      btnRamo.innerHTML = `
        <div>
          <span class="font-bold block">${ramo.codigo}</span>
          <span class="text-[11px] opacity-90">${ramo.nombre}</span>
        </div>
        <span class="font-semibold text-[10px] px-2 py-0.5 rounded bg-black/10 dark:bg-white/10 ml-2 whitespace-nowrap">${ramo.creditos} SCT</span>
      `;

      btnRamo.onclick = () => alternarEstadoRamo(ramo.codigo);
      ramosDiv.appendChild(btnRamo);
    });

    cardSem.appendChild(ramosDiv);
    container.appendChild(cardSem);
  });

  actualizarEstadisticasMalla();
}

function obtenerClaseEstado(estado) {
  switch (estado) {
    case 'aprobado':
      return 'bg-emerald-500/15 border-emerald-500/40 text-emerald-700 dark:text-emerald-300';
    case 'cursando':
      return 'bg-sky-500/15 border-sky-500/40 text-sky-700 dark:text-sky-300';
    default:
      return 'bg-slate-50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300';
  }
}

function alternarEstadoRamo(codigo) {
  const actual = estadoUsuario.mallaEstado[codigo] || 'pendiente';
  const orden = ['pendiente', 'cursando', 'aprobado'];
  const siguiente = orden[(orden.indexOf(actual) + 1) % orden.length];
  
  estadoUsuario.mallaEstado[codigo] = siguiente;
  guardarDatosLocales();
  mostrarMalla();
}

function actualizarEstadisticasMalla() {
  const carreraId = estadoUsuario.carrera;
  if (!carreraId || !datosUSM.mallas[carreraId]) return;

  let totalSCT = 0, aprobadosSCT = 0, numAprobados = 0, numCursando = 0;

  datosUSM.mallas[carreraId].forEach(sem => {
    sem.ramos.forEach(ramo => {
      totalSCT += ramo.creditos;
      const st = estadoUsuario.mallaEstado[ramo.codigo];
      if (st === 'aprobado') {
        aprobadosSCT += ramo.creditos;
        numAprobados++;
      } else if (st === 'cursando') {
        numCursando++;
      }
    });
  });

  const pct = totalSCT > 0 ? Math.round((aprobadosSCT / totalSCT) * 100) : 0;
  document.getElementById('stat-porcentaje').textContent = `${pct}%`;
  document.getElementById('barra-progreso').style.width = `${pct}%`;
  document.getElementById('stat-creditos').textContent = `${aprobadosSCT} / ${totalSCT}`;
  document.getElementById('stat-aprobados').textContent = numAprobados;
  document.getElementById('stat-cursando').textContent = numCursando;
}

function filtrarMalla(query) {
  const q = query.toLowerCase();
  const tarjetas = document.querySelectorAll('#malla-container button');
  tarjetas.forEach(btn => {
    const txt = (btn.dataset.codigo + ' ' + btn.dataset.nombre + ' ' + (estadoUsuario.mallaEstado[btn.dataset.codigo] || 'pendiente')).toLowerCase();
    btn.parentElement.style.display = txt.includes(q) ? 'block' : 'none';
  });
}

// --- CALCULADORA PPA ---
function cargarRamosDesdeMalla() {
  const carreraId = estadoUsuario.carrera;
  if (!carreraId || !datosUSM.mallas[carreraId]) {
    alert('Selecciona primero una carrera en la pestaña Malla.');
    return;
  }

  estadoUsuario.ppaRamos = [];
  datosUSM.mallas[carreraId].forEach(sem => {
    sem.ramos.forEach(ramo => {
      const st = estadoUsuario.mallaEstado[ramo.codigo];
      if (st === 'aprobado' || st === 'cursando') {
        estadoUsuario.ppaRamos.push({
          codigo: ramo.codigo,
          nombre: ramo.nombre,
          creditos: ramo.creditos,
          nota: st === 'aprobado' ? 55 : ''
        });
      }
    });
  });

  renderTablaPPA();
}

function agregarRamoPPA() {
  estadoUsuario.ppaRamos.push({ codigo: 'NUEVO', nombre: 'Nueva Asignatura', creditos: 4, nota: '' });
  renderTablaPPA();
}

function renderTablaPPA() {
  const tbody = document.getElementById('ppa-container-tabla');
  tbody.innerHTML = '';

  estadoUsuario.ppaRamos.forEach((item, idx) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="p-3 font-semibold">${item.nombre} <span class="text-[10px] text-slate-400 block">${item.codigo}</span></td>
      <td class="p-3"><input type="number" value="${item.creditos}" onchange="estadoUsuario.ppaRamos[${idx}].creditos = +this.value" class="w-16 bg-white dark:bg-slate-800 border rounded p-1 text-center"></td>
      <td class="p-3"><input type="number" value="${item.nota}" placeholder="0-100" onchange="estadoUsuario.ppaRamos[${idx}].nota = +this.value" class="w-20 bg-white dark:bg-slate-800 border rounded p-1 text-center font-bold"></td>
      <td class="p-3 text-center"><span class="text-[10px] px-2 py-0.5 rounded font-semibold ${item.nota >= 55 ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'}">${item.nota ? (item.nota >= 55 ? 'Aprobado' : 'Reprobado') : 'Pendiente'}</span></td>
      <td class="p-3 text-center"><button onclick="estadoUsuario.ppaRamos.splice(${idx},1); renderTablaPPA();" class="text-rose-500 hover:text-rose-400 font-bold">&times;</button></td>
    `;
    tbody.appendChild(tr);
  });
}

function calcularPPA() {
  let sumaNotas = 0, totalCreditos = 0, count = 0;
  estadoUsuario.ppaRamos.forEach(r => {
    if (r.nota !== '' && !isNaN(r.nota)) {
      sumaNotas += r.nota * r.creditos;
      totalCreditos += r.creditos;
      count++;
    }
  });

  const ppa = totalCreditos > 0 ? (sumaNotas / totalCreditos).toFixed(2) : '0.00';
  document.getElementById('res-ppa-valor').textContent = ppa;
  document.getElementById('res-ppa-creditos').textContent = `${totalCreditos} SCT`;
  document.getElementById('res-ppa-ramos').textContent = count;
  document.getElementById('res-ppa-estado').textContent = ppa >= 55 ? 'Estado Satisfactorio' : 'Riesgo Académico';
}

function guardarPPA() {
  guardarDatosLocales();
  alert('Notas y configuración de PPA guardadas correctamente.');
}

function limpiarPPA() {
  estadoUsuario.ppaRamos = [];
  renderTablaPPA();
  calcularPPA();
}

// --- TEMA Y RESPALDO ---
function alternarTema() {
  const html = document.documentElement;
  const isDark = html.classList.contains('dark');
  if (isDark) {
    html.classList.remove('dark');
    document.getElementById('theme-icon').textContent = '☀️';
    document.getElementById('theme-text').textContent = 'Modo Oscuro';
    localStorage.setItem('mallaplanner_theme', 'light');
  } else {
    html.classList.add('dark');
    document.getElementById('theme-icon').textContent = '🌙';
    document.getElementById('theme-text').textContent = 'Modo Claro';
    localStorage.setItem('mallaplanner_theme', 'dark');
  }
}

function exportarRespaldoJSON() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(estadoUsuario, null, 2));
  const dlAnchorElem = document.createElement('a');
  dlAnchorElem.setAttribute("href", dataStr);
  dlAnchorElem.setAttribute("download", `MallaPlanner_Respaldo_${new Date().toISOString().slice(0,10)}.json`);
  dlAnchorElem.click();
}

function importarRespaldoJSON(event) {
  const fileReader = new FileReader();
  fileReader.onload = function (e) {
    try {
      const importedData = JSON.parse(e.target.result);
      estadoUsuario = { ...estadoUsuario, ...importedData };
      guardarDatosLocales();
      mostrarInterfazPrincipal();
      alert('¡Respaldo importado con éxito!');
    } catch (err) {
      alert('Error al leer el archivo JSON.');
    }
  };
  fileReader.readAsText(event.target.files[0]);
}

// --- ALMACENAMIENTO LOCAL ---
function guardarDatosLocales() {
  if (estadoUsuario.email) {
    localStorage.setItem(`mallaplanner_data_${estadoUsuario.email}`, JSON.stringify(estadoUsuario));
  }
}

function cargarDatosLocales() {
  const email = estadoUsuario.email;
  const data = localStorage.getItem(`mallaplanner_data_${email}`);
  if (data) {
    estadoUsuario = JSON.parse(data);
  }
}

// --- INICIALIZACIÓN ---
document.addEventListener('DOMContentLoaded', () => {
  const savedUser = localStorage.getItem('mallaplanner_user');
  const savedTheme = localStorage.getItem('mallaplanner_theme');

  if (savedTheme === 'light') {
    document.documentElement.classList.remove('dark');
  }

  if (savedUser) {
    estadoUsuario.email = savedUser;
    cargarDatosLocales();
    mostrarInterfazPrincipal();
  }
});
