// js/mallas.js

const datosUSM = {
  sedes: [
    { id: "cc", nombre: "Campus Casa Central (Valparaíso)" },
    { id: "sj", nombre: "Campus San Joaquín (Santiago)" },
    { id: "vit", nombre: "Campus Vitacura (Santiago)" },
    { id: "vdm", nombre: "Sede Viña del Mar" },
    { id: "ccp", nombre: "Sede Concepción" }
  ],
  
  carreras: {
    // CAMPUS CASA CENTRAL (Valparaíso)
    cc: [
      { id: "icmat", nombre: "Ingeniería Civil Matemática" },
      { id: "icm", nombre: "Ingeniería Civil Mecánica" },
      { id: "icmet", nombre: "Ingeniería Civil Metalúrgica" },
      { id: "plancomun", nombre: "Plan Común de Ingeniería" },
      { id: "icq", nombre: "Ingeniería Civil Química" },
      { id: "icte", nombre: "Ingeniería Civil Telemática" },
      { id: "icom", nombre: "Ingeniería Comercial" },
      { id: "ibio", nombre: "Ingeniería en Biotecnología" },
      { id: "idp", nombre: "Ingeniería en Diseño de Productos" },
      { id: "ast", nombre: "Licenciatura en Astrofísica" },
      { id: "lq", nombre: "Licenciatura en Química" },
      { id: "fis", nombre: "Licenciatura en Física" },
      { id: "qi", nombre: "Química Industrial" }
    ],

    // CAMPUS SAN JOAQUÍN (Santiago)
    sj: [
      { id: "icmat", nombre: "Ingeniería Civil Matemática" },
      { id: "icm", nombre: "Ingeniería Civil Mecánica" },
      { id: "plancomun", nombre: "Plan Común de Ingeniería" },
      { id: "icq", nombre: "Ingeniería Civil Química" },
      { id: "icte", nombre: "Ingeniería Civil Telemática" },
      { id: "icom", nombre: "Ingeniería Comercial" },
      { id: "ibio", nombre: "Ingeniería en Biotecnología" },
      { id: "idp", nombre: "Ingeniería en Diseño de Productos" }
    ],

    // CAMPUS VITACURA (Santiago)
    vit: [
      { id: "icom", nombre: "Ingeniería Comercial" },
      { id: "iavc", nombre: "Ingeniería en Aviación Comercial" },
      { id: "tuae", nombre: "T.U. en Administración de Empresas" }
    ],

    // SEDE VIÑA DEL MAR
    vdm: [
      { id: "iinf", nombre: "Ingeniería en Informática" },
      { id: "idm", nombre: "Ingeniería en Diseño de Manufactura" },
      { id: "iem", nombre: "Ingeniería de Ejecución en Mantenimiento Industrial" },
      { id: "iprla", nombre: "Ingeniería en Prevención de Riesgos Laborales y Ambientales" },
      { id: "tudarq", nombre: "T.U. en Dibujo Arquitectónico y Estructural" },
      { id: "tuae", nombre: "T.U. en Administración de Empresas" },
      { id: "tuia", nombre: "T.U. en Industrias de Alimentos" },
      { id: "tuar", nombre: "T.U. en Automatización y Robótica" },
      { id: "tubio", nombre: "T.U. en Biotecnología" },
      { id: "tucd", nombre: "T.U. en Ciencia de Datos" },
      { id: "tuco", nombre: "T.U. en Construcción" },
      { id: "tuel", nombre: "T.U. en Electricidad" },
      { id: "tuelt", nombre: "T.U. en Electrónica" },
      { id: "tuer", nombre: "T.U. en Energías Renovables" },
      { id: "tui", nombre: "T.U. en Informática" },
      { id: "tuma", nombre: "T.U. en Mantenimiento Aeronáutico" },
      { id: "tumin", nombre: "T.U. en Mantenimiento Industrial" },
      { id: "tumaauto", nombre: "T.U. en Mecánica Automotriz" },
      { id: "tuminas", nombre: "T.U. en Minas y Metalurgia" },
      { id: "tupri", nombre: "T.U. en Proyectos de Ingeniería" },
      { id: "tuqui", nombre: "T.U. en Química / Análisis Químico" },
      { id: "tuquind", nombre: "T.U. en Química Industrial" },
      { id: "turob", nombre: "T.U. en Robótica y Mecatrónica" },
      { id: "tutel", nombre: "T.U. en Telecomunicaciones y Redes" }
    ],

    // SEDE CONCEPCIÓN
    ccp: [
      { id: "iinf", nombre: "Ingeniería en Informática" },
      { id: "idm", nombre: "Ingeniería en Diseño de Manufactura" },
      { id: "iem", nombre: "Ingeniería de Ejecución en Mantenimiento Industrial" },
      { id: "iprla", nombre: "Ingeniería en Prevención de Riesgos Laborales y Ambientales" },
      { id: "tuae", nombre: "T.U. en Administración de Empresas" },
      { id: "tuar", nombre: "T.U. en Automatización y Robótica" },
      { id: "tucd", nombre: "T.U. en Ciencia de Datos" },
      { id: "tuco", nombre: "T.U. en Construcción" },
      { id: "tuel", nombre: "T.U. en Electricidad" },
      { id: "tuelt", nombre: "T.U. en Electrónica" },
      { id: "tui", nombre: "T.U. en Informática" },
      { id: "tumin", nombre: "T.U. en Mantenimiento Industrial" },
      { id: "tumaauto", nombre: "T.U. en Mecánica Automotriz" },
      { id: "tumecman", nombre: "T.U. en Mecánica Mantenimiento" },
      { id: "tutel", nombre: "T.U. en Telecomunicaciones y Redes" }
    ]
  },

  mallas: {

    // INGENIERÍA EN INFORMÁTICA (8 Semestres - Malla Actualizada)
    iinf: [
      {
        semestre: 1,
        ramos: [
          { codigo: "MAT-100", nombre: "Fundamento de la Matemática", creditos: 5 },
          { codigo: "IWG-101", nombre: "Introducción a la Ingeniería", creditos: 4 },
          { codigo: "INF-101", nombre: "Computación Aplicada", creditos: 4 },
          { codigo: "EFI-100", nombre: "Educación Física I", creditos: 1 },
          { codigo: "HUM-101", nombre: "Humanidades I: Competencias Clave para el Desarrollo Personal", creditos: 3 },
          { codigo: "HCW-101", nombre: "Inglés I", creditos: 2 }
        ]
      },
      {
        semestre: 2,
        ramos: [
          { codigo: "MAT-001", nombre: "Introducción al Cálculo", creditos: 5 },
          { codigo: "QUI-010", nombre: "Química y Sociedad", creditos: 4 },
          { codigo: "INF-110", nombre: "Ciencias de la Ingeniería I: Estructura de Datos", creditos: 5 },
          { codigo: "EFI-200", nombre: "Educación Física II", creditos: 1 },
          { codigo: "HUM-102", nombre: "Humanidades II: Competencias para el Desarrollo Profesional", creditos: 3 },
          { codigo: "HCW-102", nombre: "Inglés II", creditos: 2 }
        ]
      },
      {
        semestre: 3,
        ramos: [
          { codigo: "MAT-021", nombre: "Matemática de Ingeniería", creditos: 5 },
          { codigo: "FIS-100", nombre: "Introducción a la Física", creditos: 4 },
          { codigo: "INF-201", nombre: "Ciencias de la Ingeniería II: Lenguaje de Programación", creditos: 5 },
          { codigo: "INF-202", nombre: "Arquitectura y Organización de Computadores", creditos: 4 },
          { codigo: "INF-203", nombre: "Bases de Datos", creditos: 4 },
          { codigo: "HCW-103", nombre: "Inglés III", creditos: 2 }
        ]
      },
      {
        semestre: 4,
        ramos: [
          { codigo: "ICN-101", nombre: "Administración de Empresas", creditos: 4 },
          { codigo: "FIS-110", nombre: "Física Mecánica", creditos: 5 },
          { codigo: "INF-210", nombre: "Ciencias de la Ingeniería III: Análisis y Diseño de Software", creditos: 5 },
          { codigo: "INF-211", nombre: "Sistemas Operativos", creditos: 4 },
          { codigo: "INF-212", nombre: "Taller Lenguaje de Programación", creditos: 4 },
          { codigo: "MAT-030", nombre: "Estadística", creditos: 4 }
        ]
      },
      {
        semestre: 5,
        ramos: [
          { codigo: "ICN-201", nombre: "Introducción a las Finanzas", creditos: 3 },
          { codigo: "EIN-088", nombre: "Gestión de la Innovación", creditos: 3 },
          { codigo: "IND-301", nombre: "Sistemas Integrados de Gestión", creditos: 4 },
          { codigo: "INF-301", nombre: "Redes de Computadores", creditos: 4 },
          { codigo: "INF-302", nombre: "Ingeniería de Software", creditos: 5 },
          { codigo: "INF-303", nombre: "Ciencias de Datos", creditos: 4 }
        ]
      },
      {
        semestre: 6,
        ramos: [
          { codigo: "HUM-301", nombre: "Responsabilidad Social Empresarial y Ética Laboral", creditos: 3 },
          { codigo: "EIN-089", nombre: "Gestión del Emprendimiento", creditos: 3 },
          { codigo: "EIN-090", nombre: "Gestión de Proyectos", creditos: 4 },
          { codigo: "INF-310", nombre: "Taller de Administración de Sistemas", creditos: 4 },
          { codigo: "INF-311", nombre: "Inteligencia de Negocios", creditos: 4 },
          { codigo: "INF-312", nombre: "Visualización", creditos: 4 }
        ]
      },
      {
        semestre: 7,
        ramos: [
          { codigo: "ELE-001", nombre: "Electivo I", creditos: 4 },
          { codigo: "ELE-002", nombre: "Electivo II", creditos: 4 },
          { codigo: "ELE-003", nombre: "Electivo III", creditos: 4 },
          { codigo: "INF-401", nombre: "Proyecto de Software I", creditos: 6 },
          { codigo: "INF-402", nombre: "Seminario de Título", creditos: 4 }
        ]
      },
      {
        semestre: 8,
        ramos: [
          { codigo: "ELE-004", nombre: "Electivo IV", creditos: 4 },
          { codigo: "ELE-005", nombre: "Electivo V", creditos: 4 },
          { codigo: "ELE-006", nombre: "Electivo VI", creditos: 4 },
          { codigo: "INF-410", nombre: "Proyecto de Software II", creditos: 6 },
          { codigo: "INF-411", nombre: "Proyecto de Título", creditos: 8 }
        ]
      }
    ],

    // 1. INGENIERÍA CIVIL MATEMÁTICA
    icmat: [
      {
        semestre: 1,
        ramos: [
          { codigo: "HCW-100", nombre: "Comunicación Efectiva en Español / Inglés I", creditos: 3 },
          { codigo: "EFI-100", nombre: "Educación Física I", creditos: 2 },
          { codigo: "IWG-400", nombre: "Proyecto Inicial", creditos: 5 },
          { codigo: "FIS-100", nombre: "Introducción a la Física", creditos: 5 },
          { codigo: "MAT-070", nombre: "Introducción al Cálculo", creditos: 6 },
          { codigo: "MAT-060", nombre: "Álgebra y Geometría", creditos: 6 }
        ]
      },
      {
        semestre: 2,
        ramos: [
          { codigo: "HCW-200", nombre: "Comunicación Efectiva en Español / Inglés II", creditos: 3 },
          { codigo: "EFI-200", nombre: "Educación Física II", creditos: 2 },
          { codigo: "INF-129", nombre: "Introducción a la Programación", creditos: 5 },
          { codigo: "FIS-110", nombre: "Física General Mecánica", creditos: 6 },
          { codigo: "MAT-071", nombre: "Cálculo en una Variable", creditos: 6 },
          { codigo: "MAT-061", nombre: "Álgebra Lineal", creditos: 6 }
        ]
      },
      {
        semestre: 3,
        ramos: [
          { codigo: "HRW-201", nombre: "Análisis Crítico de Texto", creditos: 3 },
          { codigo: "MAT-101", nombre: "Introducción a la Matemática Avanzada", creditos: 5 },
          { codigo: "MAT-072", nombre: "Cálculo en Varias Variables", creditos: 6 },
          { codigo: "FIS-120", nombre: "Calor y Ondas", creditos: 5 },
          { codigo: "FIS-102", nombre: "Programación Avanzada para Ciencias", creditos: 5 },
          { codigo: "MAT-073", nombre: "Ecuaciones Diferenciales Elementales", creditos: 6 }
        ]
      },
      {
        semestre: 4,
        ramos: [
          { codigo: "HCW-300", nombre: "Comunicación Efectiva en Español / Inglés III", creditos: 3 },
          { codigo: "MAT-102", nombre: "Análisis Real", creditos: 6 },
          { codigo: "MAT-103", nombre: "Álgebra Lineal Avanzada", creditos: 6 },
          { codigo: "FIS-130", nombre: "Electricidad y Magnetismo", creditos: 5 },
          { codigo: "MAT-240", nombre: "Probabilidad Estadística", creditos: 5 },
          { codigo: "MAT-104", nombre: "Cálculo Avanzado para Ingeniería", creditos: 6 }
        ]
      },
      {
        semestre: 5,
        ramos: [
          { codigo: "HUM-210", nombre: "Práctica en Acción Comunitaria", creditos: 3 },
          { codigo: "ICN-100", nombre: "Administración y Sostenibilidad Organizacional", creditos: 4 },
          { codigo: "MAT-201", nombre: "Análisis", creditos: 6 },
          { codigo: "MAT-202", nombre: "Ecuaciones Diferenciales y Sistemas Dinámicos", creditos: 6 },
          { codigo: "MAT-203", nombre: "Álgebra y Matemática Discreta", creditos: 5 },
          { codigo: "MAT-204", nombre: "Optimización Lineal", creditos: 5 }
        ]
      },
      {
        semestre: 6,
        ramos: [
          { codigo: "HCW-400", nombre: "Comunicación Efectiva en Español / Inglés IV", creditos: 3 },
          { codigo: "ICN-210", nombre: "Ingeniería Económica", creditos: 4 },
          { codigo: "MAT-250", nombre: "Análisis Numérico", creditos: 5 },
          { codigo: "MAT-210", nombre: "Modelamiento Estadístico", creditos: 5 },
          { codigo: "MAT-211", nombre: "Teoría de la Medida", creditos: 6 },
          { codigo: "MAT-212", nombre: "Optimización No Lineal", creditos: 5 }
        ]
      },
      {
        semestre: 7,
        ramos: [
          { codigo: "HCW-500", nombre: "Inglés Disciplinar", creditos: 3 },
          { codigo: "ICN-310", nombre: "Gestión de Proyectos", creditos: 4 },
          { codigo: "MAT-301", nombre: "Análisis Numérico II", creditos: 5 },
          { codigo: "MAT-302", nombre: "Análisis Funcional", creditos: 6 },
          { codigo: "MAT-303", nombre: "Laboratorio de Modelación I", creditos: 5 },
          { codigo: "MAT-304", nombre: "Análisis y Ciencia de Datos", creditos: 5 }
        ]
      },
      {
        semestre: 8,
        ramos: [
          { codigo: "MAT-310", nombre: "Ecuaciones Diferenciales Parciales", creditos: 6 },
          { codigo: "MAT-311", nombre: "Análisis Numérico de EDP", creditos: 5 },
          { codigo: "MAT-312", nombre: "Inferencia Estadística", creditos: 5 },
          { codigo: "MAT-313", nombre: "Optimización y Control", creditos: 5 },
          { codigo: "MAT-314", nombre: "Laboratorio de Modelación II", creditos: 5 }
        ]
      },
      {
        semestre: 9,
        ramos: [
          { codigo: "ELE-001", nombre: "Electivo I", creditos: 4 },
          { codigo: "ICN-401", nombre: "Gestión de la Innovación", creditos: 4 },
          { codigo: "ELE-002", nombre: "Electivo II", creditos: 4 },
          { codigo: "ELE-003", nombre: "Electivo III", creditos: 4 },
          { codigo: "MAT-401", nombre: "Proyecto de Titulación I", creditos: 8 }
        ]
      },
      {
        semestre: 10,
        ramos: [
          { codigo: "ELE-004", nombre: "Electivo IV", creditos: 4 },
          { codigo: "ICN-402", nombre: "Gestión del Emprendimiento", creditos: 4 },
          { codigo: "ELE-005", nombre: "Electivo V", creditos: 4 },
          { codigo: "ELE-006", nombre: "Electivo VI", creditos: 4 },
          { codigo: "MAT-410", nombre: "Proyecto de Titulación II", creditos: 12 }
        ]
      }
    ],

    // 2. INGENIERÍA CIVIL MECÁNICA
    icm: [
      {
        semestre: 1,
        ramos: [
          { codigo: "HCW-100", nombre: "Comunicación Efectiva en Español / Inglés I", creditos: 3 },
          { codigo: "EFI-100", nombre: "Educación Física I", creditos: 2 },
          { codigo: "MEC-100", nombre: "Proyecto Inicial de Ingeniería Mecánica", creditos: 5 },
          { codigo: "FIS-100", nombre: "Introducción a la Física", creditos: 5 },
          { codigo: "MAT-070", nombre: "Introducción al Cálculo", creditos: 6 },
          { codigo: "MAT-060", nombre: "Álgebra & Geometría", creditos: 6 }
        ]
      },
      {
        semestre: 2,
        ramos: [
          { codigo: "HCW-200", nombre: "Comunicación Efectiva en Español / Inglés II", creditos: 3 },
          { codigo: "EFI-200", nombre: "Educación Física II", creditos: 2 },
          { codigo: "INF-129", nombre: "Introducción a la Programación", creditos: 5 },
          { codigo: "FIS-110", nombre: "Física General Mecánica", creditos: 6 },
          { codigo: "MAT-071", nombre: "Cálculo en una Variable", creditos: 6 },
          { codigo: "MAT-061", nombre: "Álgebra Lineal", creditos: 6 }
        ]
      },
      {
        semestre: 3,
        ramos: [
          { codigo: "HCW-300", nombre: "Comunicación Efectiva en Español / Inglés III", creditos: 3 },
          { codigo: "HRW-201", nombre: "Análisis Crítico de Texto", creditos: 3 },
          { codigo: "MEC-101", nombre: "Estática", creditos: 5 },
          { codigo: "MEC-102", nombre: "Elementos de Sistemas Mecánicos", creditos: 4 },
          { codigo: "MAT-072", nombre: "Cálculo en Varias Variables", creditos: 6 },
          { codigo: "QUI-100", nombre: "Química para Ingeniería", creditos: 5 }
        ]
      },
      {
        semestre: 4,
        ramos: [
          { codigo: "HCW-400", nombre: "Comunicación Efectiva en Español / Inglés IV", creditos: 3 },
          { codigo: "MEC-103", nombre: "Gráfica de Sistemas Mecánicos", creditos: 4 },
          { codigo: "MEC-104", nombre: "Dinámica", creditos: 5 },
          { codigo: "MEC-105", nombre: "Materiales para Ingeniería", creditos: 5 },
          { codigo: "FIS-130", nombre: "Electricidad y Magnetismo", creditos: 5 },
          { codigo: "MAT-073", nombre: "Ecuaciones Diferenciales", creditos: 6 }
        ]
      },
      {
        semestre: 5,
        ramos: [
          { codigo: "HCW-500", nombre: "Inglés Disciplinar", creditos: 3 },
          { codigo: "MAT-240", nombre: "Probabilidades y Estadística", creditos: 5 },
          { codigo: "MEC-201", nombre: "Termodinámica I", creditos: 5 },
          { codigo: "MEC-202", nombre: "Mecánica de Materiales", creditos: 5 },
          { codigo: "MEC-203", nombre: "Tecnologías de Fabricación", creditos: 4 },
          { codigo: "ELI-100", nombre: "Electrotecnia Básica", creditos: 4 }
        ]
      },
      {
        semestre: 6,
        ramos: [
          { codigo: "MAT-250", nombre: "Análisis Numérico", creditos: 5 },
          { codigo: "MEC-210", nombre: "Mecánica de Fluidos I", creditos: 5 },
          { codigo: "MEC-211", nombre: "Termodinámica II", creditos: 5 },
          { codigo: "MEC-212", nombre: "Elementos de Máquinas I", creditos: 5 },
          { codigo: "MEC-213", nombre: "Mecánica de Máquinas", creditos: 5 },
          { codigo: "ICN-100", nombre: "Administración y Sostenibilidad Organizacional", creditos: 4 }
        ]
      },
      {
        semestre: 7,
        ramos: [
          { codigo: "MEC-301", nombre: "Computación en Ingeniería Mecánica", creditos: 5 },
          { codigo: "MEC-302", nombre: "Mecánica de Fluidos II", creditos: 5 },
          { codigo: "MEC-303", nombre: "Procesos de Manufactura", creditos: 5 },
          { codigo: "MEC-304", nombre: "Elementos de Máquinas II", creditos: 5 },
          { codigo: "MEC-305", nombre: "Ingeniería Ambiental", creditos: 4 },
          { codigo: "ICN-210", nombre: "Ingeniería Económica", creditos: 4 }
        ]
      },
      {
        semestre: 8,
        ramos: [
          { codigo: "MEC-310", nombre: "Diseño Mecánico", creditos: 6 },
          { codigo: "MEC-311", nombre: "Transferencia de Calor para Ingeniería", creditos: 5 },
          { codigo: "MEC-312", nombre: "Automatización y Control", creditos: 5 },
          { codigo: "MEC-313", nombre: "Turbomáquinas", creditos: 5 },
          { codigo: "MEC-314", nombre: "Tecnologías Energéticas", creditos: 4 }
        ]
      },
      {
        semestre: 9,
        ramos: [
          { codigo: "MEC-401", nombre: "Proyectos de Ingeniería Mecánica", creditos: 6 },
          { codigo: "MEC-402", nombre: "Taller de Innovación y Emprendimiento en Ingeniería Mecánica", creditos: 5 },
          { codigo: "MEC-403", nombre: "Sistemas Autónomos y Mecatrónica", creditos: 5 },
          { codigo: "MEC-404", nombre: "Mantenimiento y Gestión de Activos", creditos: 5 },
          { codigo: "MEC-405", nombre: "Ingeniería Térmica", creditos: 5 }
        ]
      },
      {
        semestre: 10,
        ramos: [
          { codigo: "ELE-001", nombre: "Electivo I", creditos: 4 },
          { codigo: "ELE-002", nombre: "Electivo II", creditos: 4 },
          { codigo: "ELE-003", nombre: "Electivo III", creditos: 4 },
          { codigo: "MEC-410", nombre: "Actividad de Titulación", creditos: 12 }
        ]
      }
    ],

    // 3. INGENIERÍA CIVIL METALÚRGICA
    icmet: [
      {
        semestre: 1,
        ramos: [
          { codigo: "HCW-100", nombre: "Comunicación Efectiva en Español / Inglés I", creditos: 3 },
          { codigo: "EFI-100", nombre: "Educación Física I", creditos: 2 },
          { codigo: "INF-129", nombre: "Introducción a la Programación", creditos: 5 },
          { codigo: "FIS-100", nombre: "Introducción a la Física", creditos: 5 },
          { codigo: "MAT-070", nombre: "Introducción al Cálculo", creditos: 6 },
          { codigo: "MAT-060", nombre: "Álgebra y Geometría", creditos: 6 }
        ]
      },
      {
        semestre: 2,
        ramos: [
          { codigo: "HCW-200", nombre: "Comunicación Efectiva en Español / Inglés II", creditos: 3 },
          { codigo: "EFI-200", nombre: "Educación Física II", creditos: 2 },
          { codigo: "IWG-400", nombre: "Proyecto Inicial", creditos: 5 },
          { codigo: "FIS-110", nombre: "Física General Mecánica", creditos: 6 },
          { codigo: "MAT-071", nombre: "Cálculo en una Variable", creditos: 6 },
          { codigo: "MAT-061", nombre: "Álgebra Lineal", creditos: 6 }
        ]
      },
      {
        semestre: 3,
        ramos: [
          { codigo: "HRW-201", nombre: "Análisis Crítico de Texto", creditos: 3 },
          { codigo: "MET-101", nombre: "Geología y Mineralogía", creditos: 4 },
          { codigo: "MET-102", nombre: "Procesos Metalúrgicos Sustentables", creditos: 5 },
          { codigo: "FIS-120", nombre: "Calor y Ondas", creditos: 5 },
          { codigo: "QUI-100", nombre: "Química para Ingeniería", creditos: 5 },
          { codigo: "MAT-072", nombre: "Cálculo en Varias Variables", creditos: 6 }
        ]
      },
      {
        semestre: 4,
        ramos: [
          { codigo: "HCW-300", nombre: "Comunicación Efectiva en Español / Inglés III", creditos: 3 },
          { codigo: "MET-103", nombre: "Análisis de Procesos Metalúrgicos", creditos: 5 },
          { codigo: "MAT-073", nombre: "Ecuaciones Diferenciales", creditos: 6 },
          { codigo: "FIS-130", nombre: "Electricidad y Magnetismo", creditos: 5 },
          { codigo: "QUI-110", nombre: "Química Inorgánica", creditos: 4 },
          { codigo: "MAT-240", nombre: "Probabilidad y Estadística", creditos: 5 }
        ]
      },
      {
        semestre: 5,
        ramos: [
          { codigo: "HUM-210", nombre: "Práctica en Acción Comunitaria", creditos: 3 },
          { codigo: "ICN-100", nombre: "Administración y Sostenibilidad Organizacional", creditos: 4 },
          { codigo: "MET-201", nombre: "Ciencia e Ingeniería de los Materiales", creditos: 5 },
          { codigo: "MET-202", nombre: "Cinética y Diseño de Reactores Metalúrgicos", creditos: 5 },
          { codigo: "MET-203", nombre: "Mecánica de Fluidos", creditos: 5 },
          { codigo: "MET-204", nombre: "Ciencia de Datos", creditos: 5 }
        ]
      },
      {
        semestre: 6,
        ramos: [
          { codigo: "HCW-400", nombre: "Comunicación Efectiva en Español / Inglés IV", creditos: 3 },
          { codigo: "ICN-210", nombre: "Ingeniería Económica", creditos: 4 },
          { codigo: "MET-210", nombre: "Termodinámica Metalúrgica", creditos: 5 },
          { codigo: "MET-211", nombre: "Reducción de Tamaño y Clasificación de Minerales", creditos: 5 },
          { codigo: "MET-212", nombre: "Metalurgia de Minerales Industriales", creditos: 4 },
          { codigo: "MET-213", nombre: "Transferencia de Calor", creditos: 5 }
        ]
      },
      {
        semestre: 7,
        ramos: [
          { codigo: "HCW-500", nombre: "Inglés Disciplinar", creditos: 3 },
          { codigo: "ICN-310", nombre: "Gestión de Proyectos", creditos: 4 },
          { codigo: "MET-301", nombre: "Hidrometalurgia", creditos: 5 },
          { codigo: "MET-302", nombre: "Concentración de Minerales", creditos: 5 },
          { codigo: "MET-303", nombre: "Termodinámica de Materiales", creditos: 5 },
          { codigo: "MET-304", nombre: "Mecánica de Sólidos", creditos: 5 }
        ]
      },
      {
        semestre: 8,
        ramos: [
          { codigo: "MET-310", nombre: "Electrometalurgia y Corrosión", creditos: 5 },
          { codigo: "MET-311", nombre: "Taller de Ingeniería", creditos: 5 },
          { codigo: "MET-312", nombre: "Procesos Metalúrgicos de Alta Temperatura", creditos: 5 },
          { codigo: "MET-313", nombre: "Metalurgia Física", creditos: 5 },
          { codigo: "MET-314", nombre: "Seguridad y Legislación Minero-Metalúrgica", creditos: 4 },
          { codigo: "MET-315", nombre: "Comportamiento Mecánico de Materiales", creditos: 4 }
        ]
      },
      {
        semestre: 9,
        ramos: [
          { codigo: "ELE-001", nombre: "Electivo", creditos: 4 },
          { codigo: "MET-401", nombre: "Taller de Diseño de Procesos Metalúrgicos", creditos: 6 },
          { codigo: "MET-402", nombre: "Gestión y Optimización de Operaciones", creditos: 4 },
          { codigo: "MET-403", nombre: "Aleaciones de Ingeniería", creditos: 4 },
          { codigo: "MET-404", nombre: "Fundición y Manufactura", creditos: 4 },
          { codigo: "MET-405", nombre: "Instrumentación y Control de Procesos", creditos: 4 }
        ]
      },
      {
        semestre: 10,
        ramos: [
          { codigo: "ELE-002", nombre: "Electivo", creditos: 4 },
          { codigo: "MET-410", nombre: "Actividad de Titulación", creditos: 12 },
          { codigo: "MET-411", nombre: "Proyecto de Ingeniería Metalúrgica", creditos: 8 }
        ]
      }
    ],

    // 4. PLAN COMÚN DE INGENIERÍA
    plancomun: [
      {
        semestre: 1,
        ramos: [
          { codigo: "HCW-100", nombre: "Comunicación Efectiva en Español / Inglés I", creditos: 3 },
          { codigo: "EFI-100", nombre: "Educación Física I", creditos: 2 },
          { codigo: "IWG-400", nombre: "Proyecto Inicial", creditos: 5 },
          { codigo: "FIS-100", nombre: "Introducción a la Física", creditos: 5 },
          { codigo: "MAT-070", nombre: "Introducción al Cálculo", creditos: 6 },
          { codigo: "MAT-060", nombre: "Álgebra y Geometría", creditos: 6 }
        ]
      },
      {
        semestre: 2,
        ramos: [
          { codigo: "HCW-200", nombre: "Comunicación Efectiva en Español / Inglés II", creditos: 3 },
          { codigo: "EFI-200", nombre: "Educación Física II", creditos: 2 },
          { codigo: "INF-129", nombre: "Introducción a la Programación", creditos: 5 },
          { codigo: "FIS-110", nombre: "Física General Mecánica", creditos: 6 },
          { codigo: "MAT-071", nombre: "Cálculo en una Variable", creditos: 6 },
          { codigo: "MAT-061", nombre: "Álgebra Lineal", creditos: 6 }
        ]
      },
      {
        semestre: 3,
        ramos: [
          { codigo: "HRW-201", nombre: "Análisis Crítico de Texto", creditos: 3 },
          { codigo: "ELE-101", nombre: "Electivos de Especialidad (4)", creditos: 4 },
          { codigo: "ELE-102", nombre: "Electivos de Especialidad (4)", creditos: 4 },
          { codigo: "FIS-120", nombre: "Electivo Física I (Calor y Ondas)", creditos: 5 },
          { codigo: "MAT-072", nombre: "Cálculo en Varias Variables", creditos: 6 },
          { codigo: "ELE-103", nombre: "Electivo de Ciencias (2)", creditos: 4 }
        ]
      },
      {
        semestre: 4,
        ramos: [
          { codigo: "HCW-300", nombre: "Comunicación Efectiva en Español / Inglés III", creditos: 3 },
          { codigo: "ELE-104", nombre: "Electivos de Especialidad (4)", creditos: 4 },
          { codigo: "ELE-105", nombre: "Electivos de Especialidad (4)", creditos: 4 },
          { codigo: "FIS-130", nombre: "Electivo Física II (Electricidad y Magnetismo)", creditos: 5 },
          { codigo: "ING-101", nombre: "Ciencias de la Ingeniería (3)", creditos: 4 },
          { codigo: "ING-102", nombre: "Ciencias de la Ingeniería (3)", creditos: 4 }
        ]
      }
    ],

    // 5. INGENIERÍA CIVIL QUÍMICA
    icq: [
      {
        semestre: 1,
        ramos: [
          { codigo: "HCW-100", nombre: "Comunicación Efectiva en Español / Inglés I", creditos: 3 },
          { codigo: "EFI-100", nombre: "Educación Física I", creditos: 2 },
          { codigo: "IWG-400", nombre: "Proyecto Inicial", creditos: 5 },
          { codigo: "FIS-100", nombre: "Introducción a la Física", creditos: 5 },
          { codigo: "MAT-070", nombre: "Introducción al Cálculo", creditos: 6 },
          { codigo: "MAT-060", nombre: "Álgebra y Geometría", creditos: 6 }
        ]
      },
      {
        semestre: 2,
        ramos: [
          { codigo: "HCW-200", nombre: "Comunicación Efectiva en Español / Inglés II", creditos: 3 },
          { codigo: "EFI-200", nombre: "Educación Física II", creditos: 2 },
          { codigo: "INF-129", nombre: "Introducción a la Programación", creditos: 5 },
          { codigo: "FIS-110", nombre: "Física General Mecánica", creditos: 6 },
          { codigo: "MAT-071", nombre: "Cálculo en una Variable", creditos: 6 },
          { codigo: "MAT-061", nombre: "Álgebra Lineal", creditos: 6 }
        ]
      },
      {
        semestre: 3,
        ramos: [
          { codigo: "HRW-201", nombre: "Análisis Crítico de Texto", creditos: 3 },
          { codigo: "QUI-101", nombre: "Resolución de Problemas en Ingeniería de Procesos", creditos: 4 },
          { codigo: "MAT-073", nombre: "Ecuaciones Diferenciales Elementales", creditos: 6 },
          { codigo: "FIS-120", nombre: "Calor y Ondas", creditos: 5 },
          { codigo: "QUI-100", nombre: "Química para Ingeniería", creditos: 5 },
          { codigo: "MAT-072", nombre: "Cálculo en Varias Variables", creditos: 6 }
        ]
      },
      {
        semestre: 4,
        ramos: [
          { codigo: "HCW-300", nombre: "Comunicación Efectiva en Español / Inglés III", creditos: 3 },
          { codigo: "QUI-102", nombre: "Balance de Materia y Energía", creditos: 5 },
          { codigo: "QUI-103", nombre: "Laboratorio de Fluidos", creditos: 4 },
          { codigo: "FIS-130", nombre: "Electricidad y Magnetismo", creditos: 5 },
          { codigo: "QUI-104", nombre: "Mecánica de Fluidos", creditos: 5 },
          { codigo: "QUI-110", nombre: "Química Inorgánica", creditos: 4 }
        ]
      },
      {
        semestre: 5,
        ramos: [
          { codigo: "HUM-210", nombre: "Práctica en Acción Comunitaria", creditos: 3 },
          { codigo: "ICN-100", nombre: "Administración y Sostenibilidad Organizacional", creditos: 4 },
          { codigo: "QUI-201", nombre: "Termodinámica de Procesos", creditos: 5 },
          { codigo: "QUI-202", nombre: "Ingeniería Ambiental", creditos: 4 },
          { codigo: "QUI-200", nombre: "Química Orgánica", creditos: 5 },
          { codigo: "MAT-240", nombre: "Estadística y Diseño de Experimentos para Ingeniería de Procesos", creditos: 5 }
        ]
      },
      {
        semestre: 6,
        ramos: [
          { codigo: "HCW-400", nombre: "Comunicación Efectiva en Español / Inglés IV", creditos: 3 },
          { codigo: "ICN-210", nombre: "Ingeniería Económica", creditos: 4 },
          { codigo: "QUI-210", nombre: "Termodinámica para Ingeniería Química", creditos: 5 },
          { codigo: "QUI-211", nombre: "Laboratorio de Transferencia de Calor", creditos: 4 },
          { codigo: "QUI-212", nombre: "Fenómenos de Transporte", creditos: 5 },
          { codigo: "QUI-213", nombre: "Transferencia de Calor", creditos: 5 }
        ]
      },
      {
        semestre: 7,
        ramos: [
          { codigo: "ELE-001", nombre: "Electivo", creditos: 4 },
          { codigo: "ICN-310", nombre: "Gestión de Proyectos", creditos: 4 },
          { codigo: "HCW-500", nombre: "Inglés Disciplinar", creditos: 3 },
          { codigo: "QUI-301", nombre: "Laboratorio de Transferencia de Materia", creditos: 4 },
          { codigo: "QUI-302", nombre: "Diseño de Reactores y Biorreactores", creditos: 5 },
          { codigo: "QUI-303", nombre: "Transferencia de Materia", creditos: 5 }
        ]
      },
      {
        semestre: 8,
        ramos: [
          { codigo: "ELE-002", nombre: "Electivo", creditos: 4 },
          { codigo: "QUI-310", nombre: "Taller de Ingeniería Química", creditos: 5 },
          { codigo: "QUI-311", nombre: "Análisis de Procesos Químicos", creditos: 5 },
          { codigo: "QUI-312", nombre: "Fundamentos de Control Industrial", creditos: 4 },
          { codigo: "QUI-313", nombre: "Electivo Disciplinar", creditos: 4 }
        ]
      },
      {
        semestre: 9,
        ramos: [
          { codigo: "ICN-401", nombre: "Gestión de la Innovación en Ingeniería de Procesos", creditos: 4 },
          { codigo: "QUI-401", nombre: "Laboratorio de Procesos", creditos: 5 },
          { codigo: "QUI-402", nombre: "Diseño de Procesos", creditos: 5 },
          { codigo: "QUI-403", nombre: "Evaluación de Proyectos para Ingeniería Química", creditos: 5 },
          { codigo: "QUI-404", nombre: "Electivo Disciplinar", creditos: 4 }
        ]
      },
      {
        semestre: 10,
        ramos: [
          { codigo: "ICN-402", nombre: "Gestión del Emprendimiento en Ingeniería de Procesos", creditos: 4 },
          { codigo: "QUI-410", nombre: "Taller de Habilitación Profesional", creditos: 4 },
          { codigo: "QUI-411", nombre: "Titulación", creditos: 12 }
        ]
      }
    ],

    // 6. INGENIERÍA CIVIL TELEMÁTICA
    icte: [
      {
        semestre: 1,
        ramos: [
          { codigo: "HCW-100", nombre: "Comunicación Efectiva en Español / Inglés I", creditos: 3 },
          { codigo: "EFI-100", nombre: "Educación Física I", creditos: 2 },
          { codigo: "IWG-400", nombre: "Proyecto Inicial", creditos: 5 },
          { codigo: "FIS-100", nombre: "Introducción a la Física", creditos: 5 },
          { codigo: "MAT-070", nombre: "Introducción al Cálculo", creditos: 6 },
          { codigo: "MAT-060", nombre: "Álgebra y Geometría", creditos: 6 }
        ]
      },
      {
        semestre: 2,
        ramos: [
          { codigo: "HCW-200", nombre: "Comunicación Efectiva en Español / Inglés II", creditos: 3 },
          { codigo: "EFI-200", nombre: "Educación Física II", creditos: 2 },
          { codigo: "INF-129", nombre: "Introducción a la Programación", creditos: 5 },
          { codigo: "FIS-110", nombre: "Física General Mecánica", creditos: 6 },
          { codigo: "MAT-071", nombre: "Cálculo en una Variable", creditos: 6 },
          { codigo: "MAT-061", nombre: "Álgebra Lineal", creditos: 6 }
        ]
      },
      {
        semestre: 3,
        ramos: [
          { codigo: "HRW-201", nombre: "Análisis Crítico de Texto", creditos: 3 },
          { codigo: "TEL-101", nombre: "Redes de Computadores", creditos: 5 },
          { codigo: "TEL-102", nombre: "Seminario de Programación", creditos: 4 },
          { codigo: "FIS-130", nombre: "Electricidad y Magnetismo", creditos: 5 },
          { codigo: "MAT-072", nombre: "Cálculo en Varias Variables", creditos: 6 },
          { codigo: "MAT-073", nombre: "Ecuaciones Diferenciales Elementales", creditos: 6 }
        ]
      },
      {
        semestre: 4,
        ramos: [
          { codigo: "HCW-300", nombre: "Comunicación Efectiva en Español / Inglés III", creditos: 3 },
          { codigo: "TEL-103", nombre: "Electrónica Digital", creditos: 5 },
          { codigo: "TEL-104", nombre: "Algorítmica y Complejidad", creditos: 5 },
          { codigo: "TEL-105", nombre: "Laboratorio de Redes de Computadores", creditos: 4 },
          { codigo: "TEL-106", nombre: "Laboratorio de Electrónica Digital", creditos: 4 },
          { codigo: "FIS-120", nombre: "Calor y Ondas", creditos: 5 }
        ]
      },
      {
        semestre: 5,
        ramos: [
          { codigo: "HUM-210", nombre: "Práctica en Acción Comunitaria", creditos: 3 },
          { codigo: "ICN-100", nombre: "Administración y Sostenibilidad Organizacional", creditos: 4 },
          { codigo: "TEL-201", nombre: "Administración de Redes", creditos: 5 },
          { codigo: "TEL-202", nombre: "Sistemas Digitales y Estructura de Computadores", creditos: 5 },
          { codigo: "TEL-203", nombre: "Bases de Datos", creditos: 5 },
          { codigo: "TEL-204", nombre: "Fundamentos de Transmisión de Señales", creditos: 5 }
        ]
      },
      {
        semestre: 6,
        ramos: [
          { codigo: "HCW-400", nombre: "Comunicación Efectiva en Español / Inglés IV", creditos: 3 },
          { codigo: "ICN-210", nombre: "Ingeniería Económica", creditos: 4 },
          { codigo: "TEL-210", nombre: "Análisis y Diseño de Software", creditos: 5 },
          { codigo: "TEL-211", nombre: "Sistemas Operativos para la Infraestructura Telemática", creditos: 5 },
          { codigo: "MAT-240", nombre: "Estadística Computacional", creditos: 5 },
          { codigo: "TEL-212", nombre: "Principios de Comunicaciones", creditos: 5 }
        ]
      },
      {
        semestre: 7,
        ramos: [
          { codigo: "HCW-500", nombre: "Inglés Disciplinar", creditos: 3 },
          { codigo: "TEL-301", nombre: "Disponibilidad y Rendimiento de Sistemas TIC", creditos: 5 },
          { codigo: "TEL-302", nombre: "Ingeniería de Software", creditos: 5 },
          { codigo: "TEL-303", nombre: "Laboratorio de Comunicaciones", creditos: 4 },
          { codigo: "MAT-250", nombre: "Optimización", creditos: 5 },
          { codigo: "TEL-304", nombre: "Ciencia de Datos", creditos: 5 }
        ]
      },
      {
        semestre: 8,
        ramos: [
          { codigo: "ELE-001", nombre: "Electivo", creditos: 4 },
          { codigo: "TEL-310", nombre: "Pensamiento de Diseño en Ingeniería", creditos: 5 },
          { codigo: "TEL-311", nombre: "Ingeniería en Ciberseguridad", creditos: 5 },
          { codigo: "TEL-312", nombre: "Planificación de Infraestructura Telemática", creditos: 5 },
          { codigo: "TEL-313", nombre: "Aplicaciones Web y Móviles", creditos: 5 },
          { codigo: "TEL-314", nombre: "Procesamiento Digital de Imágenes", creditos: 5 }
        ]
      },
      {
        semestre: 9,
        ramos: [
          { codigo: "ELE-002", nombre: "Electivo", creditos: 4 },
          { codigo: "ICN-401", nombre: "Gestión de la Innovación", creditos: 4 },
          { codigo: "TEL-401", nombre: "Electivo Disciplinar", creditos: 4 },
          { codigo: "TEL-402", nombre: "Electivo Disciplinar", creditos: 4 },
          { codigo: "TEL-403", nombre: "Electivo Disciplinar", creditos: 4 },
          { codigo: "TEL-404", nombre: "Taller de Memoria I", creditos: 6 }
        ]
      },
      {
        semestre: 10,
        ramos: [
          { codigo: "TEL-410", nombre: "Electivo Disciplinar", creditos: 4 },
          { codigo: "ICN-402", nombre: "Gestión del Emprendimiento", creditos: 4 },
          { codigo: "TEL-411", nombre: "Electivo Disciplinar", creditos: 4 },
          { codigo: "TEL-412", nombre: "Electivo Disciplinar", creditos: 4 },
          { codigo: "TEL-413", nombre: "Taller de Memoria II", creditos: 12 }
        ]
      }
    ],

    // 7. INGENIERÍA COMERCIAL
    icom: [
      {
        semestre: 1,
        ramos: [
          { codigo: "ICN-101", nombre: "Administración de Empresas", creditos: 5 },
          { codigo: "ICN-102", nombre: "Programación y Tratamiento de Datos para la Gestión", creditos: 5 },
          { codigo: "ICN-103", nombre: "Introducción a la Economía", creditos: 4 },
          { codigo: "HRW-101", nombre: "Comunicación Escrita Textos Clásicos", creditos: 3 },
          { codigo: "MAT-060", nombre: "Álgebra y Geometría", creditos: 5 },
          { codigo: "EFI-100", nombre: "Educación Física I", creditos: 1 },
          { codigo: "HCW-101", nombre: "Inglés I/OFG", creditos: 2 }
        ]
      },
      {
        semestre: 2,
        ramos: [
          { codigo: "ICN-110", nombre: "Bases de Datos para la Gestión", creditos: 4 },
          { codigo: "ICN-111", nombre: "Contabilidad I", creditos: 5 },
          { codigo: "HRW-102", nombre: "Comunicación Oral Obras Clásicas", creditos: 3 },
          { codigo: "MAT-070", nombre: "Pre-Cálculo", creditos: 5 },
          { codigo: "MAT-061", nombre: "Álgebra Lineal", creditos: 5 },
          { codigo: "EFI-200", nombre: "Educación Física II", creditos: 1 },
          { codigo: "HCW-102", nombre: "Inglés II / OFG", creditos: 2 }
        ]
      },
      {
        semestre: 3,
        ramos: [
          { codigo: "ICN-201", nombre: "Taller de Creatividad para el Emprendimiento", creditos: 4 },
          { codigo: "ICN-202", nombre: "Legislación Empresarial", creditos: 4 },
          { codigo: "ICN-203", nombre: "Programación para la Analítica de Gestión", creditos: 5 },
          { codigo: "ICN-204", nombre: "Contabilidad II", creditos: 5 },
          { codigo: "MAT-071", nombre: "Cálculo Diferencial", creditos: 5 },
          { codigo: "HCW-103", nombre: "Inglés III/OFG", creditos: 2 }
        ]
      },
      {
        semestre: 4,
        ramos: [
          { codigo: "ICN-210", nombre: "Taller de Pensamiento de Diseño para el Emprendimiento", creditos: 4 },
          { codigo: "ICN-211", nombre: "Ingeniería Económica", creditos: 4 },
          { codigo: "ICN-212", nombre: "Microeconomía I", creditos: 5 },
          { codigo: "ICN-213", nombre: "Introducción a la Ingeniería Sostenible", creditos: 4 },
          { codigo: "MAT-072", nombre: "Cálculo Integral", creditos: 5 },
          { codigo: "DEP-100", nombre: "Deportes", creditos: 1 },
          { codigo: "HCW-104", nombre: "Inglés IV/OFG", creditos: 2 }
        ]
      },
      {
        semestre: 5,
        ramos: [
          { codigo: "ICN-301", nombre: "Marketing I", creditos: 4 },
          { codigo: "ICN-302", nombre: "Personas y Organizaciones I", creditos: 4 },
          { codigo: "ICN-303", nombre: "Macroeconomía I", creditos: 5 },
          { codigo: "ICN-304", nombre: "Historia Económica", creditos: 4 },
          { codigo: "ICN-305", nombre: "Dirección Tributaria", creditos: 4 },
          { codigo: "MAT-240", nombre: "Probabilidad y Estadística", creditos: 5 },
          { codigo: "HCW-105", nombre: "Inglés V/OFG", creditos: 2 }
        ]
      },
      {
        semestre: 6,
        ramos: [
          { codigo: "ICN-310", nombre: "Personas y Organizaciones II", creditos: 4 },
          { codigo: "ICN-311", nombre: "Econometría", creditos: 5 },
          { codigo: "MAT-250", nombre: "Optimización para la Gestión", creditos: 4 },
          { codigo: "ICN-312", nombre: "Macroeconomía II", creditos: 5 },
          { codigo: "ICN-313", nombre: "Microeconomía II", creditos: 5 },
          { codigo: "HCW-106", nombre: "Inglés VI / OFG", creditos: 2 }
        ]
      },
      {
        semestre: 7,
        ramos: [
          { codigo: "ICN-401", nombre: "Evaluación Privada y Social de Proyectos", creditos: 5 },
          { codigo: "ICN-402", nombre: "Entorno Legal de la Empresa", creditos: 4 },
          { codigo: "ICN-403", nombre: "Dirección Estratégica I", creditos: 5 },
          { codigo: "ICN-404", nombre: "Análisis de Datos para los Negocios I", creditos: 5 },
          { codigo: "ICN-405", nombre: "Organización Industrial", creditos: 4 },
          { codigo: "ICN-406", nombre: "Finanzas I", creditos: 5 }
        ]
      },
      {
        semestre: 8,
        ramos: [
          { codigo: "ICN-410", nombre: "Preparación y Presentación de Proyectos", creditos: 5 },
          { codigo: "ICN-411", nombre: "Marketing II", creditos: 4 },
          { codigo: "ICN-412", nombre: "Dirección Estratégica II", creditos: 5 },
          { codigo: "ICN-413", nombre: "Análisis de Datos para los Negocios II", creditos: 5 },
          { codigo: "ICN-414", nombre: "Gestión de Operaciones", creditos: 5 },
          { codigo: "ICN-415", nombre: "Finanzas II", creditos: 5 }
        ]
      },
      {
        semestre: 9,
        ramos: [
          { codigo: "OPT-001", nombre: "Optativo de Profundización I", creditos: 4 },
          { codigo: "OPT-002", nombre: "Optativo de Profundización II", creditos: 4 },
          { codigo: "ELE-001", nombre: "Electivo I", creditos: 4 },
          { codigo: "ELE-002", nombre: "Electivo II", creditos: 4 }
        ]
      },
      {
        semestre: 10,
        ramos: [
          { codigo: "ICN-500", nombre: "Seminario de Título", creditos: 12 },
          { codigo: "ELE-003", nombre: "Electivo III", creditos: 4 }
        ]
      }
    ],

    // 8. INGENIERÍA EN AVIACIÓN COMERCIAL
    iavc: [
      {
        semestre: 1,
        ramos: [
          { codigo: "MAT-060", nombre: "Álgebra y Geometría", creditos: 5 },
          { codigo: "MAT-070", nombre: "Introducción al Cálculo", creditos: 5 },
          { codigo: "FIS-100", nombre: "Introducción a la Física", creditos: 4 },
          { codigo: "ACA-101", nombre: "Programación", creditos: 5 },
          { codigo: "ACA-102", nombre: "Introducción a la Aeronáutica", creditos: 4 },
          { codigo: "HCW-101", nombre: "Inglés Técnico Aeronáutico", creditos: 3 },
          { codigo: "EFI-100", nombre: "Educación Física I", creditos: 1 }
        ]
      },
      {
        semestre: 2,
        ramos: [
          { codigo: "MAT-061", nombre: "Álgebra Lineal", creditos: 5 },
          { codigo: "MAT-071", nombre: "Cálculo en una Variable", creditos: 5 },
          { codigo: "FIS-110", nombre: "Física Básica I", creditos: 5 },
          { codigo: "QUI-010", nombre: "Química y Sociedad", creditos: 4 },
          { codigo: "HRW-101", nombre: "Humanístico I", creditos: 3 },
          { codigo: "ACA-110", nombre: "Manejo de Tecnologías de la Información y Comunicación", creditos: 4 },
          { codigo: "EFI-200", nombre: "Educación Física II", creditos: 1 }
        ]
      },
      {
        semestre: 3,
        ramos: [
          { codigo: "MAT-072", nombre: "Matemáticas III", creditos: 5 },
          { codigo: "FIS-120", nombre: "Física Básica II", creditos: 5 },
          { codigo: "ICN-101", nombre: "Administración de Empresas", creditos: 4 },
          { codigo: "HRW-102", nombre: "Humanístico II", creditos: 3 },
          { codigo: "HCW-102", nombre: "Inglés Básico Aeronáutico", creditos: 3 },
          { codigo: "DEP-100", nombre: "Deportes", creditos: 1 }
        ]
      },
      {
        semestre: 4,
        ramos: [
          { codigo: "MAT-240", nombre: "Probabilidad y Estadística Comercial", creditos: 5 },
          { codigo: "FIS-130", nombre: "Física Básica III", creditos: 5 },
          { codigo: "ICN-111", nombre: "Contabilidad I", creditos: 4 },
          { codigo: "HRW-103", nombre: "Humanístico III", creditos: 3 },
          { codigo: "HCW-103", nombre: "Inglés Medio Aeronáutico I", creditos: 3 },
          { codigo: "ACA-201", nombre: "Taller de Integración de Competencias I", creditos: 4 }
        ]
      },
      {
        semestre: 5,
        ramos: [
          { codigo: "ICN-211", nombre: "Ingeniería Económica", creditos: 4 },
          { codigo: "ACA-210", nombre: "Gestión de Investigación de Operaciones", creditos: 5 },
          { codigo: "ACA-211", nombre: "Economía y Finanzas en Aeronáutica", creditos: 4 },
          { codigo: "ACA-212", nombre: "Ciencias Aeronáuticas I", creditos: 4 },
          { codigo: "HCW-104", nombre: "Inglés Medio Aeronáutico II", creditos: 3 },
          { codigo: "HUM-200", nombre: "Ética Profesional y R.S.E.", creditos: 3 }
        ]
      },
      {
        semestre: 6,
        ramos: [
          { codigo: "ICN-311", nombre: "Econometría", creditos: 5 },
          { codigo: "ICN-302", nombre: "Recursos Humanos", creditos: 4 },
          { codigo: "ACA-301", nombre: "Empresas Aeronáuticas I", creditos: 4 },
          { codigo: "ELE-001", nombre: "Electivo Libre", creditos: 3 },
          { codigo: "HCW-105", nombre: "Inglés Avanzado Aeronáutico I", creditos: 3 },
          { codigo: "ACA-302", nombre: "Taller de Integración de Competencias II", creditos: 4 }
        ]
      },
      {
        semestre: 7,
        ramos: [
          { codigo: "ICN-301", nombre: "Marketing Aeronáutico", creditos: 4 },
          { codigo: "ACA-310", nombre: "Legislación Aeronáutica", creditos: 4 },
          { codigo: "ACA-311", nombre: "Infraestructura y Servicios Aeronáuticos", creditos: 4 },
          { codigo: "ACA-312", nombre: "Ciencias Aeronáuticas II", creditos: 4 },
          { codigo: "HCW-106", nombre: "Inglés Avanzado Aeronáutico II", creditos: 3 },
          { codigo: "ACA-313", nombre: "Electivo ACA I", creditos: 4 }
        ]
      },
      {
        semestre: 8,
        ramos: [
          { codigo: "HRW-300", nombre: "Liderazgo y Negociación", creditos: 3 },
          { codigo: "ACA-401", nombre: "Seguridad Operacional y SMS", creditos: 4 },
          { codigo: "ACA-402", nombre: "Empresas Aeronáuticas II", creditos: 4 },
          { codigo: "ACA-403", nombre: "Operaciones y Logística Aeronáutica", creditos: 4 },
          { codigo: "HCW-107", nombre: "Inglés Conversacional Aeronáutico", creditos: 3 },
          { codigo: "ACA-404", nombre: "Taller de Integración de Competencias III", creditos: 4 }
        ]
      },
      {
        semestre: 9,
        ramos: [
          { codigo: "ACA-410", nombre: "Sistemas de Gestión de Calidad", creditos: 4 },
          { codigo: "ACA-411", nombre: "Evaluación de Proyectos Aeronáuticos", creditos: 5 },
          { codigo: "ICN-403", nombre: "Gestión Estratégica", creditos: 4 },
          { codigo: "ACA-412", nombre: "Decisiones Financieras Aeronáuticas", creditos: 4 },
          { codigo: "HCW-108", nombre: "Modern Commercial Aviation (Inglés)", creditos: 3 },
          { codigo: "ACA-413", nombre: "Trabajo de Titulación I", creditos: 6 }
        ]
      },
      {
        semestre: 10,
        ramos: [
          { codigo: "ACA-420", nombre: "Sistemas Integrados de Gestión en la Industria Aeronáutica", creditos: 4 },
          { codigo: "ACA-421", nombre: "Aeronáutica y Espacio", creditos: 4 },
          { codigo: "ACA-422", nombre: "Casos en la Aviación Comercial", creditos: 4 },
          { codigo: "ACA-423", nombre: "Electivo ACA II", creditos: 4 },
          { codigo: "HCW-109", nombre: "International Aviation Features (Inglés)", creditos: 3 },
          { codigo: "ACA-424", nombre: "Trabajo de Titulación II", creditos: 8 }
        ]
      }
    ],

    // 9. INGENIERÍA EN BIOTECNOLOGÍA
    ibio: [
      {
        semestre: 1,
        ramos: [
          { codigo: "MAT-100", nombre: "Fundamento de la Matemática", creditos: 6 },
          { codigo: "EIN-413", nombre: "Computación Aplicada", creditos: 5 },
          { codigo: "QUI-101", nombre: "Laboratorio de Química General", creditos: 3 },
          { codigo: "QUI-100", nombre: "Química General", creditos: 5 },
          { codigo: "EFI-100", nombre: "Educación Física I", creditos: 2 },
          { codigo: "HCW-100", nombre: "Inglés I", creditos: 2 }
        ]
      },
      {
        semestre: 2,
        ramos: [
          { codigo: "MAT-001", nombre: "Introducción al Cálculo", creditos: 6 },
          { codigo: "QUI-110", nombre: "Química Cuantitativa", creditos: 4 },
          { codigo: "QUI-111", nombre: "Laboratorio de Química Cuantitativa", creditos: 3 },
          { codigo: "BIO-101", nombre: "Biología Celular", creditos: 5 },
          { codigo: "HCW-200", nombre: "Inglés II", creditos: 2 },
          { codigo: "IWG-101", nombre: "Introducción a la Ingeniería", creditos: 4 }
        ]
      },
      {
        semestre: 3,
        ramos: [
          { codigo: "MAT-021", nombre: "Matemática de Ingeniería", creditos: 6 },
          { codigo: "FIS-009", nombre: "Introducción a la Física", creditos: 5 },
          { codigo: "QUI-201", nombre: "Análisis Instrumental", creditos: 4 },
          { codigo: "QUI-202", nombre: "Elementos de Fisicoquímica", creditos: 4 },
          { codigo: "BIO-201", nombre: "Bioquímica", creditos: 5 },
          { codigo: "HCW-300", nombre: "Inglés III", creditos: 2 }
        ]
      },
      {
        semestre: 4,
        ramos: [
          { codigo: "ICN-101", nombre: "Administración de Empresas", creditos: 4 },
          { codigo: "FIS-010", nombre: "Física Mecánica", creditos: 5 },
          { codigo: "BIO-210", nombre: "Introducción a las Operaciones Unitarias en Bioprocesos", creditos: 5 },
          { codigo: "BIO-211", nombre: "Biología Molecular", creditos: 5 },
          { codigo: "BIO-212", nombre: "Ciencias de la Ingeniería I: Termodinámica", creditos: 5 },
          { codigo: "INF-210", nombre: "Tecnología de la Información y Comunicaciones", creditos: 4 }
        ]
      },
      {
        semestre: 5,
        ramos: [
          { codigo: "HMN-292", nombre: "Introducción a las Finanzas", creditos: 3 },
          { codigo: "EIN-088", nombre: "Gestión de la Innovación", creditos: 3 },
          { codigo: "MAT-030", nombre: "Estadística", creditos: 4 },
          { codigo: "BIO-301", nombre: "Ciencias de la Ingeniería II: Balance de Materia y Energía", creditos: 5 },
          { codigo: "BIO-302", nombre: "Bioinformática", creditos: 4 },
          { codigo: "BIO-303", nombre: "Microbiología y Virología", creditos: 5 },
          { codigo: "BIO-304", nombre: "Laboratorio de Microbiología", creditos: 3 }
        ]
      },
      {
        semestre: 6,
        ramos: [
          { codigo: "HMN-293", nombre: "Responsabilidad Social Empresarial y Ética Laboral", creditos: 3 },
          { codigo: "EIN-089", nombre: "Gestión del Emprendimiento", creditos: 3 },
          { codigo: "EIN-084", nombre: "Sistemas Integrados de Gestión", creditos: 4 },
          { codigo: "BIO-310", nombre: "Ciencias de la Ingeniería III: Procesos de Transporte", creditos: 5 },
          { codigo: "BIO-311", nombre: "Técnicas Inmunológicas y Moleculares", creditos: 4 },
          { codigo: "BIO-312", nombre: "Técnicas Biomédicas y Farmacéuticas", creditos: 4 },
          { codigo: "BIO-313", nombre: "Buenas Prácticas de Laboratorio de Ensayo", creditos: 3 }
        ]
      },
      {
        semestre: 7,
        ramos: [
          { codigo: "EIN-090", nombre: "Gestión de Proyectos", creditos: 5 },
          { codigo: "HRW-201", nombre: "Taller de Ideación y Creatividad (Humanidades I)", creditos: 3 },
          { codigo: "BIO-401", nombre: "Buenas Prácticas de Manufactura y HACCP", creditos: 4 },
          { codigo: "BIO-402", nombre: "Instrumentación en Bioprocesos", creditos: 4 },
          { codigo: "BIO-403", nombre: "Laboratorio de PCR I", creditos: 3 },
          { codigo: "BIO-404", nombre: "Seminario de Título", creditos: 4 },
          { codigo: "EFI-200", nombre: "Educación Física II", creditos: 2 }
        ]
      },
      {
        semestre: 8,
        ramos: [
          { codigo: "BIO-410", nombre: "Taller Integrado de Ingeniería", creditos: 5 },
          { codigo: "BIO-411", nombre: "Taller de Biorreactores", creditos: 4 },
          { codigo: "BIO-412", nombre: "Laboratorio de PCR II", creditos: 3 },
          { codigo: "BIO-413", nombre: "Proyecto de Título", creditos: 8 },
          { codigo: "HRW-202", nombre: "Liderazgo y Trabajo en Equipo (Humanidades II)", creditos: 3 }
        ]
      }
    ],

    // 10. INGENIERÍA EN DISEÑO DE PRODUCTOS
    idp: [
      {
        semestre: 1,
        ramos: [
          { codigo: "INF-110", nombre: "Fundamentos de Programación", creditos: 5 },
          { codigo: "EFI-100", nombre: "Educación Física I", creditos: 2 },
          { codigo: "IDP-101", nombre: "Herramientas de Autogestión para Vida Universitaria", creditos: 3 },
          { codigo: "MAT-010", nombre: "Elementos de Álgebra y Cálculo", creditos: 5 },
          { codigo: "FIS-100", nombre: "Introducción a la Física", creditos: 4 },
          { codigo: "IDP-102", nombre: "Taller I: Ideación", creditos: 6 }
        ]
      },
      {
        semestre: 2,
        ramos: [
          { codigo: "IWG-101", nombre: "Introducción a la Ingeniería Sostenible", creditos: 4 },
          { codigo: "EFI-200", nombre: "Educación Física II", creditos: 2 },
          { codigo: "MAT-061", nombre: "Álgebra Vectorial y Cálculo Integral", creditos: 5 },
          { codigo: "FIS-110", nombre: "Física Básica: Mecánica", creditos: 5 },
          { codigo: "IDP-110", nombre: "Taller II: Prototipado y Validación", creditos: 6 },
          { codigo: "IDP-111", nombre: "Fundamentos y Evolución del Diseño de Productos", creditos: 4 }
        ]
      },
      {
        semestre: 3,
        ramos: [
          { codigo: "HCW-100", nombre: "Inglés o Humanista I", creditos: 3 },
          { codigo: "MAT-072", nombre: "Elementos de Cálculo en Varias Variables", creditos: 5 },
          { codigo: "FIS-120", nombre: "Física Básica: Oscilaciones, Ondas y Termodinámica", creditos: 5 },
          { codigo: "IDP-201", nombre: "Diseño en Ingeniería", creditos: 4 },
          { codigo: "IDP-202", nombre: "Taller III: Diseño de Servicios", creditos: 6 },
          { codigo: "IDP-203", nombre: "Gráfica y Comunicación Digital", creditos: 4 }
        ]
      },
      {
        semestre: 4,
        ramos: [
          { codigo: "MEC-101", nombre: "Elementos de Mecánica y Resistencia de Materiales", creditos: 4 },
          { codigo: "DEP-100", nombre: "Deportes", creditos: 1 },
          { codigo: "MAT-073", nombre: "Cálculo Vectorial y Elementos de Ecuaciones Diferenciales", creditos: 5 },
          { codigo: "FIS-130", nombre: "Física Básica: Electromagnetismo y Óptica", creditos: 5 },
          { codigo: "IDP-210", nombre: "Taller IV: Diseño para la Sostenibilidad", creditos: 6 },
          { codigo: "MAT-240", nombre: "Estadística para Investigación de Usuarios", creditos: 4 }
        ]
      },
      {
        semestre: 5,
        ramos: [
          { codigo: "HCW-200", nombre: "Inglés o Humanista II", creditos: 3 },
          { codigo: "IDP-301", nombre: "Procesos de Manufactura sin Arranque de Viruta", creditos: 4 },
          { codigo: "ICN-100", nombre: "Economía IA", creditos: 4 },
          { codigo: "IDP-302", nombre: "Modelación Digital 3D", creditos: 4 },
          { codigo: "IDP-303", nombre: "Gestión de Calidad en Productos y Servicios", creditos: 4 },
          { codigo: "IDP-304", nombre: "Taller V: Diseño Centrado en Usuarios", creditos: 6 }
        ]
      },
      {
        semestre: 6,
        ramos: [
          { codigo: "IDP-310", nombre: "Procesos de Taller y Manufactura", creditos: 4 },
          { codigo: "MEC-200", nombre: "Fundamentos de Calor y Fluidos", creditos: 4 },
          { codigo: "ICN-101", nombre: "Administración y Sostenibilidad Organizacional", creditos: 4 },
          { codigo: "IDP-311", nombre: "Animación Digital 3D", creditos: 4 },
          { codigo: "IDP-312", nombre: "Taller VI: Diseño Basado en Datos", creditos: 6 }
        ]
      },
      {
        semestre: 7,
        ramos: [
          { codigo: "HCW-300", nombre: "Inglés o Humanista III", creditos: 3 },
          { codigo: "IDP-401", nombre: "Métodos Avanzados de Manufacturas", creditos: 4 },
          { codigo: "ICN-310", nombre: "Gestión de Proyectos", creditos: 4 },
          { codigo: "ICN-301", nombre: "Marketing I", creditos: 4 },
          { codigo: "IDP-402", nombre: "Laboratorio de Experiencia Usuaria y Ergonomía", creditos: 5 },
          { codigo: "IDP-403", nombre: "Seminario I: Diseño de Sistema Producto-Servicio", creditos: 5 }
        ]
      },
      {
        semestre: 8,
        ramos: [
          { codigo: "HCW-400", nombre: "Inglés o Humanista IV", creditos: 3 },
          { codigo: "ICN-214", nombre: "Fundamentos de Finanzas", creditos: 4 },
          { codigo: "IDP-410", nombre: "Gestión y Visualización de Información", creditos: 4 },
          { codigo: "IDP-411", nombre: "Estrategias en Ingeniería en Diseño", creditos: 4 },
          { codigo: "ICN-410", nombre: "Emprendimiento y Organizaciones Innovadoras", creditos: 4 },
          { codigo: "IDP-412", nombre: "Seminario II: Diseño de Futuros", creditos: 5 }
        ]
      },
      {
        semestre: 9,
        ramos: [
          { codigo: "OPT-001", nombre: "Electivo de Profundización o Interdisciplinario I", creditos: 4 },
          { codigo: "OPT-002", nombre: "Electivo de Profundización o Interdisciplinario II", creditos: 4 },
          { codigo: "ELE-001", nombre: "Electivo Disciplinar I", creditos: 4 },
          { codigo: "IDP-501", nombre: "Seminario III: Investigación en Diseño", creditos: 5 },
          { codigo: "IDP-502", nombre: "Taller de Título I: Investigación y Propuesta Inicial", creditos: 8 }
        ]
      },
      {
        semestre: 10,
        ramos: [
          { codigo: "OPT-003", nombre: "Electivo de Profundización o Interdisciplinario III", creditos: 4 },
          { codigo: "OPT-004", nombre: "Electivo de Profundización o Interdisciplinario IV", creditos: 4 },
          { codigo: "ELE-002", nombre: "Electivo Disciplinar II", creditos: 4 },
          { codigo: "IDP-510", nombre: "Seminario IV: Portafolio Profesional", creditos: 4 },
          { codigo: "IDP-511", nombre: "Taller de Título II: Desarrollo y Validación", creditos: 10 }
        ]
      }
    ],

    // 11. INGENIERÍA EN DISEÑO DE MANUFACTURA
    idm: [
      {
        semestre: 1,
        ramos: [
          { codigo: "MAT-010", nombre: "Matemática I", creditos: 4 },
          { codigo: "FIS-101", nombre: "Física I", creditos: 4 },
          { codigo: "MEC-100", nombre: "Materiales de Ingeniería", creditos: 4 },
          { codigo: "MEC-101", nombre: "Normalización y Dibujo de Ingeniería I", creditos: 3 },
          { codigo: "MEC-102", nombre: "Historia y Evolución de la Tecnología", creditos: 3 },
          { codigo: "IDM-101", nombre: "Introducción a la Ingeniería en Diseño y Manufactura", creditos: 3 },
          { codigo: "INF-101", nombre: "Tecnología de la Información", creditos: 3 },
          { codigo: "EFI-100", nombre: "Actividad Formativa I", creditos: 1 }
        ]
      },
      {
        semestre: 2,
        ramos: [
          { codigo: "MAT-020", nombre: "Matemática II", creditos: 4 },
          { codigo: "FIS-102", nombre: "Física II", creditos: 4 },
          { codigo: "MEC-110", nombre: "Resistencia de Materiales", creditos: 4 },
          { codigo: "MEC-111", nombre: "Normalización y Dibujo de Ingeniería II", creditos: 3 },
          { codigo: "IDM-110", nombre: "Sistemas Tecnológicos", creditos: 3 },
          { codigo: "MEC-112", nombre: "Dibujo Asistido por Computación I", creditos: 3 },
          { codigo: "EFI-200", nombre: "Actividad Formativa II", creditos: 1 }
        ]
      },
      {
        semestre: 3,
        ramos: [
          { codigo: "MAT-021", nombre: "Matemática de Ingeniería", creditos: 5 },
          { codigo: "FIS-201", nombre: "Termodinámica", creditos: 4 },
          { codigo: "MEC-201", nombre: "Análisis de Esfuerzos I CAE", creditos: 4 },
          { codigo: "IDM-201", nombre: "Procesos y Equipos Industriales I", creditos: 4 },
          { codigo: "IDM-202", nombre: "Taller de Procesos I", creditos: 4 },
          { codigo: "IND-201", nombre: "Prevención de Riesgos", creditos: 3 },
          { codigo: "MEC-202", nombre: "Dibujo Asistido por Computación II", creditos: 3 }
        ]
      },
      {
        semestre: 4,
        ramos: [
          { codigo: "MAT-030", nombre: "Estadística", creditos: 4 },
          { codigo: "MEC-210", nombre: "Mecánica de Fluidos", creditos: 4 },
          { codigo: "MEC-211", nombre: "Análisis de Esfuerzos II CAE", creditos: 4 },
          { codigo: "IDM-210", nombre: "Procesos y Equipos Industriales II", creditos: 4 },
          { codigo: "IDM-211", nombre: "Taller de Procesos II", creditos: 4 },
          { codigo: "IND-210", nombre: "Ergonomía", creditos: 3 },
          { codigo: "IDM-212", nombre: "Taller de Diseño de Productos I", creditos: 4 },
          { codigo: "IND-211", nombre: "Administración de la Producción", creditos: 4 },
          { codigo: "HCW-101", nombre: "Inglés I", creditos: 2 },
          { codigo: "PRA-100", nombre: "Práctica Industrial", creditos: 3 }
        ]
      },
      {
        semestre: 5,
        ramos: [
          { codigo: "IDM-301", nombre: "Software de Especialización", creditos: 4 },
          { codigo: "IDM-302", nombre: "Diseño de Plantas Industriales (Ing. Básica)", creditos: 4 },
          { codigo: "IDM-303", nombre: "Taller de Procesos III", creditos: 4 },
          { codigo: "IND-301", nombre: "Innovación y Emprendimiento", creditos: 4 },
          { codigo: "IDM-304", nombre: "Taller de Diseño de Productos II", creditos: 4 },
          { codigo: "IND-302", nombre: "Gestión de Calidad", creditos: 3 },
          { codigo: "HCW-102", nombre: "Inglés II", creditos: 2 }
        ]
      },
      {
        semestre: 6,
        ramos: [
          { codigo: "IND-310", nombre: "Gestión del Conocimiento", creditos: 3 },
          { codigo: "IDM-310", nombre: "Diseño de Equipos Industriales (Ing. Detalles)", creditos: 4 },
          { codigo: "IDM-311", nombre: "Taller de Procesos IV", creditos: 4 },
          { codigo: "ICN-310", nombre: "Economía y Finanzas", creditos: 4 },
          { codigo: "IDM-312", nombre: "Taller de Diseño de Productos III", creditos: 4 },
          { codigo: "HUM-310", nombre: "Metodología de la Investigación", creditos: 3 },
          { codigo: "HCW-103", nombre: "Inglés III", creditos: 2 },
          { codigo: "PRA-200", nombre: "Práctica Profesional", creditos: 4 }
        ]
      },
      {
        semestre: 7,
        ramos: [
          { codigo: "IND-401", nombre: "Innovación Acelerada", creditos: 4 },
          { codigo: "IDM-401", nombre: "Seminario de Título", creditos: 4 },
          { codigo: "ELI-401", nombre: "Electricidad Aplicada", creditos: 4 },
          { codigo: "ICN-401", nombre: "Evaluación de Proyectos", creditos: 4 },
          { codigo: "IDM-402", nombre: "Taller de Diseño de Productos Ecológicos", creditos: 4 },
          { codigo: "IND-402", nombre: "Gestión del Medio Ambiente", creditos: 3 },
          { codigo: "HCW-104", nombre: "Inglés IV", creditos: 2 }
        ]
      },
      {
        semestre: 8,
        ramos: [
          { codigo: "IDM-410", nombre: "Desarrollo de Nuevos Productos", creditos: 4 },
          { codigo: "IND-410", nombre: "Administración y Control de Proyectos", creditos: 4 },
          { codigo: "ELI-410", nombre: "Instrumentación y Control", creditos: 4 },
          { codigo: "IDM-411", nombre: "Proyecto de Título", creditos: 8 },
          { codigo: "ICN-410", nombre: "Gestión Estratégica", creditos: 4 },
          { codigo: "IND-411", nombre: "Gestión del Capital Humano", creditos: 3 }
        ]
      }
    ],

    // 12. INGENIERÍA DE EJECUCIÓN EN MANTENIMIENTO INDUSTRIAL
    iem: [
      {
        semestre: 1,
        ramos: [
          { codigo: "MAT-100", nombre: "Fundamento de la Matemática", creditos: 6 },
          { codigo: "FIS-100", nombre: "Introducción a la Física", creditos: 4 },
          { codigo: "IND-101", nombre: "Prevención de Riesgos", creditos: 3 },
          { codigo: "IWG-101", nombre: "Introducción a la Ingeniería", creditos: 4 },
          { codigo: "EFI-100", nombre: "Educación Física I", creditos: 1 },
          { codigo: "MEC-101", nombre: "Gráficas en Ingeniería", creditos: 3 }
        ]
      },
      {
        semestre: 2,
        ramos: [
          { codigo: "MAT-001", nombre: "Introducción al Cálculo", creditos: 6 },
          { codigo: "FIS-110", nombre: "Física Mecánica", creditos: 5 },
          { codigo: "EIN-413", nombre: "Computación Aplicada", creditos: 4 },
          { codigo: "HCW-101", nombre: "Inglés I", creditos: 2 },
          { codigo: "EFI-200", nombre: "Educación Física II", creditos: 1 },
          { codigo: "MEC-110", nombre: "Mediciones Mecánicas", creditos: 3 }
        ]
      },
      {
        semestre: 3,
        ramos: [
          { codigo: "MAT-021", nombre: "Matemática de Ingeniería", creditos: 5 },
          { codigo: "MEC-201", nombre: "Estática", creditos: 4 },
          { codigo: "MEC-202", nombre: "Taller de Mantenimiento Industrial", creditos: 4 },
          { codigo: "HCW-102", nombre: "Inglés II", creditos: 2 },
          { codigo: "QUI-010", nombre: "Química y Sociedad", creditos: 4 },
          { codigo: "MEC-203", nombre: "Termodinámica y Transferencia de Calor", creditos: 5 }
        ]
      },
      {
        semestre: 4,
        ramos: [
          { codigo: "MAT-030", nombre: "Estadística", creditos: 4 },
          { codigo: "MEC-210", nombre: "Mecánica de Materiales", creditos: 4 },
          { codigo: "ELE-001", nombre: "Electivo I", creditos: 4 },
          { codigo: "HCW-103", nombre: "Inglés III", creditos: 2 },
          { codigo: "ICN-101", nombre: "Administración General", creditos: 4 },
          { codigo: "MEC-211", nombre: "Taller de Mantenimiento Neumático y Oleohidráulicos", creditos: 4 }
        ]
      },
      {
        semestre: 5,
        ramos: [
          { codigo: "INF-101", nombre: "Tecnología de la Información y Comunicación", creditos: 4 },
          { codigo: "MEC-301", nombre: "Elementos de Máquina", creditos: 4 },
          { codigo: "ELE-002", nombre: "Electivo II", creditos: 4 },
          { codigo: "HMN-292", nombre: "Introducción a Finanzas", creditos: 3 },
          { codigo: "EIN-090", nombre: "Gestión de Proyectos", creditos: 4 },
          { codigo: "MEC-302", nombre: "Mecánica de Fluidos", creditos: 4 }
        ]
      },
      {
        semestre: 6,
        ramos: [
          { codigo: "MEC-310", nombre: "Gestión de Activos", creditos: 4 },
          { codigo: "MEC-311", nombre: "Ingeniería de Mantenimiento", creditos: 5 },
          { codigo: "MEC-312", nombre: "Mantenimiento a Equipos Estáticos", creditos: 4 },
          { codigo: "MEC-313", nombre: "Orientación al Servicio de Mantenimiento", creditos: 3 },
          { codigo: "EIN-084", nombre: "Sistemas Integrados de Gestión", creditos: 4 }
        ]
      },
      {
        semestre: 7,
        ramos: [
          { codigo: "MEC-401", nombre: "Ingeniería de Confiabilidad I", creditos: 5 },
          { codigo: "IND-401", nombre: "Gestión de la Cadena de Suministros", creditos: 4 },
          { codigo: "ELE-003", nombre: "Electivo III", creditos: 4 },
          { codigo: "EIN-088", nombre: "Gestión de la Innovación", creditos: 3 },
          { codigo: "MEC-402", nombre: "Seminario de Título", creditos: 4 }
        ]
      },
      {
        semestre: 8,
        ramos: [
          { codigo: "MEC-410", nombre: "Ingeniería de Confiabilidad II", creditos: 5 },
          { codigo: "IND-410", nombre: "Gestión de Operaciones", creditos: 4 },
          { codigo: "HMN-293", nombre: "Responsabilidad Social Empresarial y Ética Laboral", creditos: 3 },
          { codigo: "EIN-089", nombre: "Gestión de Emprendimiento", creditos: 3 },
          { codigo: "MEC-411", nombre: "Proyecto de Título", creditos: 8 }
        ]
      }
    ],

    // 13. INGENIERÍA EN PREVENCIÓN DE RIESGOS LABORALES Y AMBIENTALES
    iprla: [
      {
        semestre: 1,
        ramos: [
          { codigo: "PRL-101", nombre: "Fundamentos de Prevención de Riesgos", creditos: 4 },
          { codigo: "MAT-010", nombre: "Matemática I", creditos: 4 },
          { codigo: "FIS-101", nombre: "Física I", creditos: 4 },
          { codigo: "IWG-101", nombre: "Introducción a la Ingeniería", creditos: 3 },
          { codigo: "HCW-101", nombre: "Inglés", creditos: 2 },
          { codigo: "EFI-100", nombre: "Actividad Formativa I", creditos: 1 },
          { codigo: "AMB-101", nombre: "Fundamentos de Medio Ambiente", creditos: 3 },
          { codigo: "INF-101", nombre: "Tecnologías de la Información", creditos: 3 }
        ]
      },
      {
        semestre: 2,
        ramos: [
          { codigo: "PRL-110", nombre: "Riesgos Industriales", creditos: 4 },
          { codigo: "MAT-020", nombre: "Matemática II", creditos: 4 },
          { codigo: "FIS-102", nombre: "Física II", creditos: 4 },
          { codigo: "IND-110", nombre: "Administración de la Producción", creditos: 4 },
          { codigo: "QUI-100", nombre: "Química General", creditos: 4 },
          { codigo: "BIO-110", nombre: "Biología Humana", creditos: 3 },
          { codigo: "EFI-200", nombre: "Actividad Formativa II", creditos: 1 },
          { codigo: "HRW-110", nombre: "Competencias Laborales", creditos: 2 }
        ]
      },
      {
        semestre: 3,
        ramos: [
          { codigo: "PSI-201", nombre: "Psicología", creditos: 3 },
          { codigo: "PRL-201", nombre: "Administración de Riesgos", creditos: 4 },
          { codigo: "MAT-030", nombre: "Estadística", creditos: 4 },
          { codigo: "PRL-202", nombre: "Mantención de Sistemas Productivos", creditos: 3 },
          { codigo: "PRL-203", nombre: "Control y Combate de Incendios", creditos: 3 },
          { codigo: "PRL-204", nombre: "Toxicología", creditos: 3 },
          { codigo: "MEC-201", nombre: "Dibujo Industrial", creditos: 3 }
        ]
      },
      {
        semestre: 4,
        ramos: [
          { codigo: "PRL-210", nombre: "Ergonomía", creditos: 3 },
          { codigo: "PRL-211", nombre: "Riesgos Eléctricos", creditos: 3 },
          { codigo: "IND-210", nombre: "Gestión de Calidad", creditos: 3 },
          { codigo: "PRL-212", nombre: "Transporte de Sustancias Peligrosas", creditos: 3 },
          { codigo: "PRL-213", nombre: "Ciencias del Peligro", creditos: 3 },
          { codigo: "PRL-214", nombre: "Higiene Industrial I", creditos: 4 },
          { codigo: "PRL-215", nombre: "Generadores de Vapor", creditos: 3 }
        ]
      },
      {
        semestre: 5,
        ramos: [
          { codigo: "DER-301", nombre: "Legislación Laboral", creditos: 3 },
          { codigo: "MAT-021", nombre: "Matemática de Ingeniería I", creditos: 4 },
          { codigo: "HRW-301", nombre: "Expresión Oral y Escrita", creditos: 2 },
          { codigo: "IND-301", nombre: "Procesos Productivos", creditos: 4 },
          { codigo: "MED-301", nombre: "Medicina Ocupacional", creditos: 3 },
          { codigo: "PRL-301", nombre: "Laboratorio de Higiene Industrial", creditos: 3 }
        ]
      },
      {
        semestre: 6,
        ramos: [
          { codigo: "DER-310", nombre: "Legislación Ambiental", creditos: 3 },
          { codigo: "FIS-310", nombre: "Termodinámica y Fuentes de Energía", creditos: 4 },
          { codigo: "MAT-022", nombre: "Matemática de Ingeniería II", creditos: 4 },
          { codigo: "QUI-310", nombre: "Química Ambiental", creditos: 3 },
          { codigo: "IND-310", nombre: "Gestión de Capital Humano", creditos: 3 },
          { codigo: "HUM-310", nombre: "Metodología de la Investigación", creditos: 3 },
          { codigo: "PRL-310", nombre: "Prevención de Riesgos en Faenas Mineras", creditos: 3 },
          { codigo: "QUI-311", nombre: "Química Industrial", creditos: 3 }
        ]
      },
      {
        semestre: 7,
        ramos: [
          { codigo: "AMB-401", nombre: "Gestión del Medio Ambiente", creditos: 3 },
          { codigo: "PRL-401", nombre: "Laboratorio de Ergonomía", creditos: 3 },
          { codigo: "AMB-402", nombre: "Laboratorio de Higiene Ambiental", creditos: 3 },
          { codigo: "ICN-401", nombre: "Introducción a la Economía y Finanzas", creditos: 3 },
          { codigo: "AMB-403", nombre: "Manejo y Tratamiento de Emisiones y Residuos", creditos: 4 },
          { codigo: "MEC-401", nombre: "Mecánica de Fluidos", creditos: 4 },
          { codigo: "PRL-402", nombre: "Higiene Industrial II", creditos: 4 },
          { codigo: "PRL-403", nombre: "Taller de la Especialidad", creditos: 3 },
          { codigo: "PRA-400", nombre: "Práctica Profesional", creditos: 4 }
        ]
      },
      {
        semestre: 8,
        ramos: [
          { codigo: "PRL-410", nombre: "Proyecto de Título", creditos: 8 },
          { codigo: "IND-410", nombre: "Sistemas Integrados de Gestión", creditos: 4 },
          { codigo: "IND-411", nombre: "Innovación y Emprendimiento", creditos: 3 },
          { codigo: "ICN-410", nombre: "Evaluación de Proyectos", creditos: 4 },
          { codigo: "ICN-411", nombre: "Gestión Estratégica", creditos: 3 },
          { codigo: "MEC-410", nombre: "Ventilación Industrial", creditos: 3 },
          { codigo: "PRL-411", nombre: "Seguros y Riesgos Patrimoniales", creditos: 3 }
        ]
      }
    ],

    // 14. LICENCIATURA EN ASTROFÍSICA
    ast: [
      {
        semestre: 1,
        ramos: [
          { codigo: "FIS-110", nombre: "Física General I", creditos: 5 },
          { codigo: "MAT-021", nombre: "Matemática I", creditos: 5 },
          { codigo: "QUI-010", nombre: "Química y Sociedad", creditos: 4 },
          { codigo: "AST-101", nombre: "Introducción a la Astrofísica", creditos: 4 },
          { codigo: "EFI-100", nombre: "Educación Física I", creditos: 1 }
        ]
      },
      {
        semestre: 2,
        ramos: [
          { codigo: "FIS-120", nombre: "Física General II", creditos: 5 },
          { codigo: "MAT-022", nombre: "Matemática II", creditos: 5 },
          { codigo: "INF-110", nombre: "Programación", creditos: 5 },
          { codigo: "FIS-121", nombre: "Instrumentación Científica", creditos: 4 },
          { codigo: "EFI-200", nombre: "Educación Física II", creditos: 1 },
          { codigo: "HUM-101", nombre: "Visión Trascendente del Quehacer Humano", creditos: 2 }
        ]
      },
      {
        semestre: 3,
        ramos: [
          { codigo: "FIS-130", nombre: "Física General III", creditos: 5 },
          { codigo: "MAT-023", nombre: "Matemática III", creditos: 5 },
          { codigo: "FIS-131", nombre: "Física Experimental", creditos: 4 },
          { codigo: "HUM-102", nombre: "Visión Inmanente del Quehacer Humano", creditos: 2 },
          { codigo: "DEP-100", nombre: "Deportes I", creditos: 1 },
          { codigo: "HCW-101", nombre: "Inglés I", creditos: 2 }
        ]
      },
      {
        semestre: 4,
        ramos: [
          { codigo: "FIS-140", nombre: "Física General IV", creditos: 5 },
          { codigo: "MAT-024", nombre: "Matemática IV", creditos: 5 },
          { codigo: "MAT-030", nombre: "Probabilidad y Estadística", creditos: 4 },
          { codigo: "FIS-141", nombre: "Mecánica Intermedia I", creditos: 5 },
          { codigo: "HCW-102", nombre: "Inglés II", creditos: 2 }
        ]
      },
      {
        semestre: 5,
        ramos: [
          { codigo: "FIS-201", nombre: "Campos Electromagnéticos I", creditos: 5 },
          { codigo: "FIS-202", nombre: "Termodinámica y Mecánica Estadística", creditos: 5 },
          { codigo: "FIS-203", nombre: "Métodos de la Física Matemática", creditos: 5 },
          { codigo: "AST-201", nombre: "Medio Circunstelar y Sistemas Planetarios", creditos: 4 },
          { codigo: "HCW-103", nombre: "Inglés III", creditos: 2 }
        ]
      },
      {
        semestre: 6,
        ramos: [
          { codigo: "FIS-210", nombre: "Campos Electromagnéticos II", creditos: 5 },
          { codigo: "FIS-211", nombre: "Estructura Atómica y Nuclear I", creditos: 5 },
          { codigo: "MAT-250", nombre: "Análisis Numérico", creditos: 5 },
          { codigo: "AST-210", nombre: "Estructura y Evolución Estelar", creditos: 4 },
          { codigo: "HCW-104", nombre: "Inglés IV", creditos: 2 }
        ]
      },
      {
        semestre: 7,
        ramos: [
          { codigo: "AST-301", nombre: "Astropartículas", creditos: 4 },
          { codigo: "AST-302", nombre: "Astronomía Computacional I", creditos: 4 },
          { codigo: "AST-303", nombre: "Astrofísica Extragaláctica", creditos: 4 },
          { codigo: "OPT-301", nombre: "Optativo Avanzado I", creditos: 4 },
          { codigo: "HUM-301", nombre: "El método científico", creditos: 3 }
        ]
      },
      {
        semestre: 8,
        ramos: [
          { codigo: "AST-310", nombre: "Cosmología", creditos: 4 },
          { codigo: "AST-311", nombre: "Astronomía Computacional II", creditos: 4 },
          { codigo: "AST-312", nombre: "Seminario de Grado", creditos: 6 },
          { codigo: "OPT-311", nombre: "Optativo Avanzado II", creditos: 4 },
          { codigo: "OPT-312", nombre: "Optativo Avanzado III", creditos: 4 }
        ]
      }
    ],

    // 15. LICENCIATURA EN QUÍMICA
    lq: [
      {
        semestre: 1,
        ramos: [
          { codigo: "IWG-101", nombre: "Introducción a la Ingeniería", creditos: 3 },
          { codigo: "FIS-100", nombre: "Introducción a la Física", creditos: 4 },
          { codigo: "MAT-021", nombre: "Matemática I", creditos: 5 },
          { codigo: "EFI-100", nombre: "Educación Física I", creditos: 1 },
          { codigo: "QUI-010", nombre: "Química y Sociedad", creditos: 4 }
        ]
      },
      {
        semestre: 2,
        ramos: [
          { codigo: "FIS-110", nombre: "Física General I", creditos: 5 },
          { codigo: "HRW-101", nombre: "Humanístico I", creditos: 3 },
          { codigo: "MAT-022", nombre: "Matemática II", creditos: 5 },
          { codigo: "EFI-200", nombre: "Educación Física II", creditos: 1 },
          { codigo: "INF-110", nombre: "Programación", creditos: 5 }
        ]
      },
      {
        semestre: 3,
        ramos: [
          { codigo: "FIS-120", nombre: "Física General II", creditos: 5 },
          { codigo: "QUI-101", nombre: "Química General I", creditos: 4 },
          { codigo: "MAT-023", nombre: "Matemática III", creditos: 5 },
          { codigo: "HCW-101", nombre: "Inglés Científico Tecnológico I", creditos: 2 },
          { codigo: "QUI-102", nombre: "Química General II", creditos: 4 },
          { codigo: "HRW-102", nombre: "Humanístico II", creditos: 3 }
        ]
      },
      {
        semestre: 4,
        ramos: [
          { codigo: "FIS-130", nombre: "Física General III", creditos: 5 },
          { codigo: "QUI-110", nombre: "Laboratorio Química General", creditos: 3 },
          { codigo: "MAT-024", nombre: "Matemática IV", creditos: 5 },
          { codigo: "QUI-111", nombre: "Química Inorgánica I", creditos: 4 },
          { codigo: "QUI-112", nombre: "Fisicoquímica I", creditos: 4 },
          { codigo: "HCW-102", nombre: "Inglés Científico Tecnológico II", creditos: 2 }
        ]
      },
      {
        semestre: 5,
        ramos: [
          { codigo: "FIS-140", nombre: "Física General IV", creditos: 5 },
          { codigo: "QUI-201", nombre: "Química Analítica Cuantitativa I", creditos: 4 },
          { codigo: "QUI-202", nombre: "Fisicoquímica II", creditos: 4 },
          { codigo: "QUI-203", nombre: "Química Orgánica I", creditos: 4 },
          { codigo: "QUI-204", nombre: "Laboratorio Química Inorgánica I", creditos: 3 },
          { codigo: "DEP-100", nombre: "Deportes", creditos: 1 }
        ]
      },
      {
        semestre: 6,
        ramos: [
          { codigo: "QUI-210", nombre: "Fisicoquímica III", creditos: 4 },
          { codigo: "QUI-211", nombre: "Química Orgánica II", creditos: 4 },
          { codigo: "QUI-212", nombre: "Laboratorio Química Orgánica I", creditos: 3 },
          { codigo: "HRW-103", nombre: "Humanístico III", creditos: 3 },
          { codigo: "QUI-213", nombre: "Química Analítica Cuantitativa II", creditos: 4 }
        ]
      },
      {
        semestre: 7,
        ramos: [
          { codigo: "QUI-301", nombre: "Análisis Químico Instrumental I", creditos: 4 },
          { codigo: "MAT-030", nombre: "Probabilidades y Estadística", creditos: 4 },
          { codigo: "QUI-302", nombre: "Laboratorio Química Inorgánica II", creditos: 3 },
          { codigo: "QUI-303", nombre: "Química Inorgánica II", creditos: 4 }
        ]
      },
      {
        semestre: 8,
        ramos: [
          { codigo: "QUI-310", nombre: "Análisis Químico Instrumental II", creditos: 4 },
          { codigo: "QUI-311", nombre: "Laboratorio Fisicoquímica", creditos: 3 },
          { codigo: "QUI-312", nombre: "Laboratorio Química Orgánica II", creditos: 3 },
          { codigo: "ELE-001", nombre: "Electivo I", creditos: 4 }
        ]
      },
      {
        semestre: 9,
        ramos: [
          { codigo: "QUI-401", nombre: "Unidades de Investigación", creditos: 6 },
          { codigo: "ELE-002", nombre: "Electivo II", creditos: 4 },
          { codigo: "ELE-003", nombre: "Electivo III", creditos: 4 },
          { codigo: "ELE-004", nombre: "Electivo IV", creditos: 4 }
        ]
      }
    ],

    // 16. LICENCIATURA EN FÍSICA
    fis: [
      {
        semestre: 1,
        ramos: [
          { codigo: "FIS-110", nombre: "Física General I", creditos: 5 },
          { codigo: "MAT-021", nombre: "Matemática I", creditos: 5 },
          { codigo: "QUI-010", nombre: "Química y Sociedad", creditos: 4 },
          { codigo: "FIS-101", nombre: "Introducción a la Física Contemporánea", creditos: 4 },
          { codigo: "EFI-100", nombre: "Educación Física I", creditos: 1 }
        ]
      },
      {
        semestre: 2,
        ramos: [
          { codigo: "FIS-120", nombre: "Física General III", creditos: 5 },
          { codigo: "MAT-022", nombre: "Matemática II", creditos: 5 },
          { codigo: "INF-110", nombre: "Programación", creditos: 5 },
          { codigo: "FIS-121", nombre: "Instrumentación Científica", creditos: 4 },
          { codigo: "EFI-200", nombre: "Educación Física II", creditos: 1 },
          { codigo: "HRW-101", nombre: "Humanista I", creditos: 2 }
        ]
      },
      {
        semestre: 3,
        ramos: [
          { codigo: "FIS-130", nombre: "Física General II", creditos: 5 },
          { codigo: "MAT-023", nombre: "Matemática III", creditos: 5 },
          { codigo: "FIS-131", nombre: "Física Experimental", creditos: 4 },
          { codigo: "DEP-100", nombre: "Deportes", creditos: 1 },
          { codigo: "HCW-101", nombre: "Inglés I", creditos: 2 },
          { codigo: "HRW-102", nombre: "Humanista II", creditos: 2 }
        ]
      },
      {
        semestre: 4,
        ramos: [
          { codigo: "FIS-140", nombre: "Física General IV", creditos: 5 },
          { codigo: "MAT-024", nombre: "Matemática IV", creditos: 5 },
          { codigo: "MAT-030", nombre: "Probabilidad y Estadística", creditos: 4 },
          { codigo: "FIS-141", nombre: "Mecánica Intermedia I", creditos: 5 },
          { codigo: "HCW-102", nombre: "Inglés II", creditos: 2 }
        ]
      },
      {
        semestre: 5,
        ramos: [
          { codigo: "FIS-201", nombre: "Campos Electromagnéticos I", creditos: 5 },
          { codigo: "FIS-202", nombre: "Termodinámica y Mecánica Estadística", creditos: 5 },
          { codigo: "FIS-203", nombre: "Métodos de la Física Matemática", creditos: 5 },
          { codigo: "FIS-204", nombre: "Mecánica Intermedia II", creditos: 5 },
          { codigo: "HCW-103", nombre: "Inglés III", creditos: 2 }
        ]
      },
      {
        semestre: 6,
        ramos: [
          { codigo: "FIS-210", nombre: "Campos Electromagnéticos II", creditos: 5 },
          { codigo: "FIS-211", nombre: "Física Cuántica I", creditos: 5 },
          { codigo: "FIS-212", nombre: "Física Experimental Avanzada", creditos: 4 },
          { codigo: "MAT-250", nombre: "Análisis Numérico", creditos: 5 },
          { codigo: "HCW-104", nombre: "Inglés IV", creditos: 2 }
        ]
      },
      {
        semestre: 7,
        ramos: [
          { codigo: "FIS-301", nombre: "Física Cuántica II", creditos: 5 },
          { codigo: "FIS-302", nombre: "Introducción a la Física de Alta Energía", creditos: 4 },
          { codigo: "FIS-303", nombre: "Física Computacional", creditos: 4 },
          { codigo: "OPT-301", nombre: "Optativo Avanzado I", creditos: 4 },
          { codigo: "HUM-301", nombre: "El Método Científico", creditos: 3 }
        ]
      },
      {
        semestre: 8,
        ramos: [
          { codigo: "OPT-311", nombre: "Optativo Avanzado II", creditos: 4 },
          { codigo: "OPT-312", nombre: "Optativo Avanzado III", creditos: 4 },
          { codigo: "OPT-313", nombre: "Optativo Avanzado IV", creditos: 4 },
          { codigo: "FIS-310", nombre: "Introducción a la Física de la Materia Condensada", creditos: 4 },
          { codigo: "FIS-311", nombre: "Seminario de Grado", creditos: 6 }
        ]
      }
    ],

    // 17. QUÍMICA INDUSTRIAL
    qi: [
      {
        semestre: 1,
        ramos: [
          { codigo: "IWG-101", nombre: "Introducción a la Ingeniería", creditos: 3 },
          { codigo: "QUI-010", nombre: "Química y Sociedad", creditos: 4 },
          { codigo: "FIS-100", nombre: "Introducción a la Física", creditos: 4 },
          { codigo: "HRW-101", nombre: "Humanístico I", creditos: 3 },
          { codigo: "MAT-021", nombre: "Matemática I", creditos: 5 },
          { codigo: "EFI-100", nombre: "Educación Física I", creditos: 1 }
        ]
      },
      {
        semestre: 2,
        ramos: [
          { codigo: "FIS-110", nombre: "Física Básica I", creditos: 5 },
          { codigo: "HRW-102", nombre: "Humanístico II", creditos: 3 },
          { codigo: "MAT-022", nombre: "Matemática II", creditos: 5 },
          { codigo: "EFI-200", nombre: "Educación Física II", creditos: 1 },
          { codigo: "INF-110", nombre: "Programación", creditos: 5 }
        ]
      },
      {
        semestre: 3,
        ramos: [
          { codigo: "FIS-120", nombre: "Física Básica II", creditos: 5 },
          { codigo: "QUI-101", nombre: "Química General I", creditos: 4 },
          { codigo: "QUI-102", nombre: "Química General II", creditos: 4 },
          { codigo: "MAT-023", nombre: "Matemática III", creditos: 5 },
          { codigo: "HCW-101", nombre: "Inglés Científico Tecnológico I", creditos: 2 },
          { codigo: "QUI-103", nombre: "Laboratorio de Química General", creditos: 3 },
          { codigo: "DEP-100", nombre: "Deportes", creditos: 1 }
        ]
      },
      {
        semestre: 4,
        ramos: [
          { codigo: "FIS-130", nombre: "Física Básica III", creditos: 5 },
          { codigo: "QUI-110", nombre: "Química Orgánica I", creditos: 4 },
          { codigo: "MAT-024", nombre: "Matemática IV", creditos: 5 },
          { codigo: "QUI-111", nombre: "Química de Procesos", creditos: 4 },
          { codigo: "QUI-112", nombre: "Química Inorgánica I", creditos: 4 }
        ]
      },
      {
        semestre: 5,
        ramos: [
          { codigo: "QUI-201", nombre: "Fisicoquímica I", creditos: 4 },
          { codigo: "QUI-202", nombre: "Química Analítica Cuantitativa I", creditos: 4 },
          { codigo: "QUI-203", nombre: "Laboratorio de Química Inorgánica I", creditos: 3 },
          { codigo: "QUI-204", nombre: "Química Orgánica II", creditos: 4 },
          { codigo: "MEC-201", nombre: "Mecánica de Fluidos", creditos: 4 },
          { codigo: "HCW-102", nombre: "Inglés Científico Tecnológico II", creditos: 2 }
        ]
      },
      {
        semestre: 6,
        ramos: [
          { codigo: "QUI-210", nombre: "Fisicoquímica II", creditos: 4 },
          { codigo: "QUI-211", nombre: "Química Analítica Cuantitativa II", creditos: 4 },
          { codigo: "QUI-212", nombre: "Laboratorio de Química Orgánica I", creditos: 3 },
          { codigo: "QUI-213", nombre: "Química Inorgánica II", creditos: 4 },
          { codigo: "MEC-211", nombre: "Transferencia de Calor", creditos: 4 }
        ]
      },
      {
        semestre: 7,
        ramos: [
          { codigo: "QUI-301", nombre: "Fisicoquímica III", creditos: 4 },
          { codigo: "MEC-301", nombre: "Transferencia de Materia", creditos: 4 },
          { codigo: "QUI-302", nombre: "Instrumentación Químico Analítica", creditos: 4 },
          { codigo: "HRW-103", nombre: "Humanístico III", creditos: 3 },
          { codigo: "QUI-303", nombre: "Síntesis Orgánica", creditos: 4 }
        ]
      },
      {
        semestre: 8,
        ramos: [
          { codigo: "QUI-310", nombre: "Análisis Químico Instrumental I", creditos: 4 },
          { codigo: "QUI-311", nombre: "Laboratorio de Procesos", creditos: 3 },
          { codigo: "ICN-310", nombre: "Economía", creditos: 4 },
          { codigo: "QUI-312", nombre: "Laboratorio de Química Orgánica II", creditos: 3 },
          { codigo: "QUI-313", nombre: "Laboratorio de Fisicoquímica", creditos: 3 },
          { codigo: "ELE-001", nombre: "Electivo I", creditos: 4 },
          { codigo: "PRA-300", nombre: "Práctica Industrial", creditos: 3 }
        ]
      },
      {
        semestre: 9,
        ramos: [
          { codigo: "ICN-401", nombre: "Administración General", creditos: 4 },
          { codigo: "IND-401", nombre: "Análisis y Diseño de Experimentos Industriales", creditos: 4 },
          { codigo: "QUI-401", nombre: "Análisis Químico Instrumental II", creditos: 4 },
          { codigo: "ELE-002", nombre: "Electivo II", creditos: 4 },
          { codigo: "QUI-402", nombre: "Laboratorio de Química Inorgánica III", creditos: 3 }
        ]
      }
    ],

    // 18. T.U. EN DIBUJO ARQUITECTÓNICO Y ESTRUCTURAL
    tudarq: [
      {
        semestre: 1,
        ramos: [
          { codigo: "MAT-005", nombre: "Elementos de la Matemática", creditos: 5 },
          { codigo: "FIS-100", nombre: "Introducción a la Física", creditos: 4 },
          { codigo: "INF-101", nombre: "TIC's Aplicadas a la Planificación de Proyectos", creditos: 3 },
          { codigo: "ARQ-101", nombre: "Dibujo Técnico", creditos: 4 },
          { codigo: "ARQ-102", nombre: "Dibujo Asistido por Computador", creditos: 4 },
          { codigo: "CONST-101", nombre: "Tecnología de los Materiales", creditos: 3 }
        ]
      },
      {
        semestre: 2,
        ramos: [
          { codigo: "MAT-006", nombre: "Matemática Aplicada", creditos: 5 },
          { codigo: "HCW-101", nombre: "Inglés I", creditos: 2 },
          { codigo: "ARQ-110", nombre: "Dibujo de Ingeniería", creditos: 4 },
          { codigo: "MEC-110", nombre: "Mecánica Técnica", creditos: 4 },
          { codigo: "IND-110", nombre: "Gestión de Calidad", creditos: 3 },
          { codigo: "CONST-110", nombre: "Dibujo de Construcción y Estructuras", creditos: 4 },
          { codigo: "EFI-100", nombre: "Educación Física", creditos: 1 }
        ]
      },
      {
        semestre: 3,
        ramos: [
          { codigo: "CIV-201", nombre: "Obras Civiles", creditos: 4 },
          { codigo: "ARQ-201", nombre: "Diseño Asistido por Computador", creditos: 4 },
          { codigo: "CONST-201", nombre: "Resistencia de Materiales", creditos: 4 },
          { codigo: "IDP-201", nombre: "Creatividad y Diseño Industrial", creditos: 3 },
          { codigo: "CONST-202", nombre: "Proyecto de Instalaciones Domiciliarias", creditos: 4 },
          { codigo: "CIV-202", nombre: "Mecánica de Fluidos e Hidráulica", creditos: 4 },
          { codigo: "IND-201", nombre: "Administración y Gestión de RRHH", creditos: 3 }
        ]
      },
      {
        semestre: 4,
        ramos: [
          { codigo: "ARQ-210", nombre: "Ingeniería Asistida por Computador", creditos: 4 },
          { codigo: "CONST-210", nombre: "Diseño de Hormigón Armado", creditos: 4 },
          { codigo: "IND-210", nombre: "Proyectos Industriales", creditos: 4 },
          { codigo: "ELI-210", nombre: "Proyectos de Ingeniería Eléctrica", creditos: 4 },
          { codigo: "MEC-210", nombre: "Diseño de partes y Equipos", creditos: 4 },
          { codigo: "CIV-210", nombre: "Topografía", creditos: 4 }
        ]
      }
    ],

    // 19. T.U. EN ADMINISTRACIÓN DE EMPRESAS
    tuae: [
      {
        semestre: 1,
        ramos: [
          { codigo: "ICN-101", nombre: "Fundamentos Económicos para la Administración", creditos: 4 },
          { codigo: "ICN-102", nombre: "Administración de Empresas", creditos: 4 },
          { codigo: "INF-101", nombre: "Tecnologías para la Administración", creditos: 3 },
          { codigo: "HRW-101", nombre: "Taller de Habilidades Sociales y Comunicacionales", creditos: 3 },
          { codigo: "MAT-005", nombre: "Elementos de la Matemática", creditos: 5 },
          { codigo: "HCW-101", nombre: "Inglés I", creditos: 2 }
        ]
      },
      {
        semestre: 2,
        ramos: [
          { codigo: "ICN-110", nombre: "Economía para la Administración", creditos: 4 },
          { codigo: "ICN-111", nombre: "Comercialización I", creditos: 4 },
          { codigo: "DER-110", nombre: "Aspectos Legales de la Administración", creditos: 3 },
          { codigo: "MAT-006", nombre: "Matemática Aplicada", creditos: 5 },
          { codigo: "HCW-102", nombre: "Inglés II", creditos: 2 }
        ]
      },
      {
        semestre: 3,
        ramos: [
          { codigo: "ICN-201", nombre: "Matemática Financiera", creditos: 4 },
          { codigo: "ICN-202", nombre: "Proceso de Control en la Administración", creditos: 4 },
          { codigo: "ICN-203", nombre: "Comercialización II", creditos: 4 },
          { codigo: "ICN-204", nombre: "Contabilidad para la Administración", creditos: 4 },
          { codigo: "INF-201", nombre: "Programación y Tratamiento de Datos para la Gestión", creditos: 4 },
          { codigo: "EFI-100", nombre: "Educación Física", creditos: 1 }
        ]
      },
      {
        semestre: 4,
        ramos: [
          { codigo: "IND-210", nombre: "Gestión de Personas", creditos: 4 },
          { codigo: "ICN-210", nombre: "Taller de Integración", creditos: 5 },
          { codigo: "ICN-211", nombre: "Taller de Creatividad y Emprendimiento", creditos: 4 },
          { codigo: "ICN-212", nombre: "Costos y Presupuestos para la Administración", creditos: 4 },
          { codigo: "OPT-210", nombre: "Optativo", creditos: 3 }
        ]
      }
    ],

    // 20. T.U. EN INDUSTRIAS DE ALIMENTOS
    tuia: [
      {
        semestre: 1,
        ramos: [
          { codigo: "ALI-101", nombre: "Elementos de la Matemática", creditos: 5 },
          { codigo: "EFI-100", nombre: "Educación Física", creditos: 1 },
          { codigo: "QUI-101", nombre: "Química General", creditos: 4 },
          { codigo: "QUI-102", nombre: "Laboratorio Química General", creditos: 3 },
          { codigo: "ALI-102", nombre: "Operaciones en Industrias de Alimentos I", creditos: 4 },
          { codigo: "BIO-101", nombre: "Biología", creditos: 4 }
        ]
      },
      {
        semestre: 2,
        ramos: [
          { codigo: "ALI-110", nombre: "Matemática Aplicada", creditos: 5 },
          { codigo: "FIS-100", nombre: "Introducción a la Física", creditos: 4 },
          { codigo: "ALI-111", nombre: "Química de los Alimentos", creditos: 4 },
          { codigo: "ALI-112", nombre: "Normativa de Alimentos", creditos: 3 },
          { codigo: "ALI-113", nombre: "Operaciones en Industrias de Alimentos II", creditos: 4 },
          { codigo: "BIO-110", nombre: "Microbiología General", creditos: 4 }
        ]
      },
      {
        semestre: 3,
        ramos: [
          { codigo: "QUI-201", nombre: "Química Cuantitativa", creditos: 4 },
          { codigo: "HCW-101", nombre: "Inglés", creditos: 2 },
          { codigo: "QUI-202", nombre: "Laboratorio de Química Cuantitativa", creditos: 3 },
          { codigo: "BIO-201", nombre: "Microbiología de Alimentos", creditos: 4 },
          { codigo: "ALI-201", nombre: "Laboratorio Preparación de Alimentos I", creditos: 3 },
          { codigo: "IND-201", nombre: "Gestión y Control de Calidad", creditos: 4 }
        ]
      },
      {
        semestre: 4,
        ramos: [
          { codigo: "ALI-210", nombre: "Laboratorio de Análisis de Alimentos", creditos: 4 },
          { codigo: "ALI-211", nombre: "HACCP e Inocuidad de Alimentos", creditos: 4 },
          { codigo: "ALI-212", nombre: "Bioprocesos y Desinfección Industrial", creditos: 4 },
          { codigo: "ALI-213", nombre: "Laboratorio Preparación de Alimentos II", creditos: 3 },
          { codigo: "ALI-214", nombre: "Laboratorio de Control de Alimentos", creditos: 4 }
        ]
      }
    ],

    // 21. T.U. EN AUTOMATIZACIÓN Y ROBÓTICA
    tuar: [
      {
        semestre: 1,
        ramos: [
          { codigo: "MAT-005", nombre: "Elementos de la Matemática", creditos: 5 },
          { codigo: "EFI-100", nombre: "Educación Física", creditos: 1 },
          { codigo: "ELI-101", nombre: "Laboratorio de Redes Eléctricas", creditos: 3 },
          { codigo: "ELI-102", nombre: "Redes Eléctricas I", creditos: 4 },
          { codigo: "ELI-103", nombre: "Electrónica Industrial I", creditos: 4 },
          { codigo: "INF-101", nombre: "Algoritmos y Programación", creditos: 4 }
        ]
      },
      {
        semestre: 2,
        ramos: [
          { codigo: "MAT-006", nombre: "Matemática Aplicada", creditos: 5 },
          { codigo: "FIS-100", nombre: "Introducción a la Física", creditos: 4 },
          { codigo: "HCW-101", nombre: "Inglés I", creditos: 2 },
          { codigo: "ELI-110", nombre: "Redes Eléctricas II", creditos: 4 },
          { codigo: "ELI-111", nombre: "Electrónica Industrial II", creditos: 4 },
          { codigo: "ELI-112", nombre: "Instrumentación y Normas", creditos: 3 }
        ]
      },
      {
        semestre: 3,
        ramos: [
          { codigo: "IND-201", nombre: "Procesos Industriales", creditos: 4 },
          { codigo: "ELI-201", nombre: "Controladores Industriales", creditos: 4 },
          { codigo: "HCW-102", nombre: "Inglés II", creditos: 2 },
          { codigo: "ELI-202", nombre: "Máquinas Eléctricas", creditos: 4 },
          { codigo: "TEL-201", nombre: "Sistemas de Comunicación", creditos: 3 },
          { codigo: "ELI-203", nombre: "Instalaciones Eléctricas Inteligentes", creditos: 4 }
        ]
      },
      {
        semestre: 4,
        ramos: [
          { codigo: "ELI-210", nombre: "Mantenimiento de Equipos de Automatización", creditos: 4 },
          { codigo: "ELI-211", nombre: "Proyectos de Automatización", creditos: 4 },
          { codigo: "MEC-210", nombre: "Accionamientos Electrohidroneumáticos", creditos: 4 },
          { codigo: "ELI-212", nombre: "ERNC y Eficiencia Energética", creditos: 4 },
          { codigo: "ELI-213", nombre: "Automatización Industrial", creditos: 5 }
        ]
      }
    ],

    // 22. T.U. EN BIOTECNOLOGÍA
    tubio: [
      {
        semestre: 1,
        ramos: [
          { codigo: "MAT-005", nombre: "Elementos de la Matemática", creditos: 5 },
          { codigo: "EFI-100", nombre: "Educación Física", creditos: 1 },
          { codigo: "QUI-101", nombre: "Química General", creditos: 4 },
          { codigo: "QUI-102", nombre: "Laboratorio de Química General", creditos: 3 },
          { codigo: "BIO-101", nombre: "Biotecnología y Bioética", creditos: 3 },
          { codigo: "BIO-102", nombre: "Biología celular", creditos: 4 }
        ]
      },
      {
        semestre: 2,
        ramos: [
          { codigo: "MAT-006", nombre: "Matemática Aplicada", creditos: 5 },
          { codigo: "FIS-100", nombre: "Introducción a la Física", creditos: 4 },
          { codigo: "QUI-110", nombre: "Química Cuantitativa", creditos: 4 },
          { codigo: "QUI-111", nombre: "Laboratorio de Química Cuantitativa", creditos: 3 },
          { codigo: "BIO-110", nombre: "Microbiología y Virología", creditos: 4 },
          { codigo: "BIO-111", nombre: "Biología Molecular", creditos: 4 }
        ]
      },
      {
        semestre: 3,
        ramos: [
          { codigo: "BIO-201", nombre: "Biotecnología Industrial y Biorreactores", creditos: 5 },
          { codigo: "BIO-202", nombre: "Operaciones Unitarias", creditos: 4 },
          { codigo: "QUI-201", nombre: "Análisis Instrumental", creditos: 4 },
          { codigo: "BIO-203", nombre: "Biotecnología Vegetal y Agrícola", creditos: 4 },
          { codigo: "HCW-101", nombre: "Inglés I", creditos: 2 },
          { codigo: "BIO-204", nombre: "Técnicas Inmunológicas y Moleculares", creditos: 4 }
        ]
      },
      {
        semestre: 4,
        ramos: [
          { codigo: "BIO-210", nombre: "Laboratorio de Biorreactores", creditos: 3 },
          { codigo: "BIO-211", nombre: "Procesos Biotecnológicos en Alimentos y Medio Ambiente", creditos: 4 },
          { codigo: "IND-210", nombre: "Control de la Calidad de Procesos y Productos", creditos: 4 },
          { codigo: "BIO-212", nombre: "Laboratorio Cultivo Vegetal", creditos: 3 },
          { codigo: "BIO-213", nombre: "Técnicas Biomédicas y Farmacéuticas", creditos: 4 },
          { codigo: "BIO-214", nombre: "Laboratorio de PCR", creditos: 3 }
        ]
      }
    ],

    // 23. T.U. EN CIENCIA DE DATOS
    tucd: [
      {
        semestre: 1,
        ramos: [
          { codigo: "MAT-005", nombre: "Elementos de la Matemática", creditos: 5 },
          { codigo: "EFI-100", nombre: "Educación Física I", creditos: 1 },
          { codigo: "HRW-101", nombre: "Comunicación Efectiva y Liderazgo", creditos: 3 },
          { codigo: "HCW-101", nombre: "Inglés I", creditos: 2 },
          { codigo: "INF-101", nombre: "Introducción a la Ciencia de Datos", creditos: 4 },
          { codigo: "INF-102", nombre: "Pensamiento Computacional", creditos: 4 }
        ]
      },
      {
        semestre: 2,
        ramos: [
          { codigo: "MAT-006", nombre: "Matemática Aplicada", creditos: 5 },
          { codigo: "EFI-200", nombre: "Educación Física II", creditos: 1 },
          { codigo: "MAT-030", nombre: "Estadística Descriptiva", creditos: 4 },
          { codigo: "HCW-102", nombre: "Inglés II", creditos: 2 },
          { codigo: "INF-110", nombre: "Preprocesamiento de Datos", creditos: 4 },
          { codigo: "INF-111", nombre: "Estructura de Datos", creditos: 4 }
        ]
      },
      {
        semestre: 3,
        ramos: [
          { codigo: "INF-201", nombre: "Base de Datos", creditos: 4 },
          { codigo: "ICN-101", nombre: "Administración y Sostenibilidad Organizacional", creditos: 4 },
          { codigo: "INF-202", nombre: "Visualización de Datos e Información", creditos: 4 },
          { codigo: "MAT-240", nombre: "Estadística Aplicada", creditos: 4 },
          { codigo: "INF-203", nombre: "Minería de Datos", creditos: 4 },
          { codigo: "INF-204", nombre: "Taller de Herramientas para el Procesamiento de Datos", creditos: 4 }
        ]
      },
      {
        semestre: 4,
        ramos: [
          { codigo: "INF-210", nombre: "Base de Datos Avanzadas", creditos: 4 },
          { codigo: "INF-211", nombre: "Taller de Big Data", creditos: 4 },
          { codigo: "INF-212", nombre: "Inteligencia de Negocios", creditos: 4 },
          { codigo: "INF-213", nombre: "Seguridad de los Datos e Información", creditos: 3 },
          { codigo: "INF-214", nombre: "Machine Learning", creditos: 4 },
          { codigo: "INF-215", nombre: "Taller de Ciencia de Datos", creditos: 5 }
        ]
      }
    ],

    // 24. T.U. EN CONSTRUCCIÓN
    tuco: [
      {
        semestre: 1,
        ramos: [
          { codigo: "MAT-005", nombre: "Elementos de la Matemática", creditos: 5 },
          { codigo: "HCW-101", nombre: "Inglés I", creditos: 2 },
          { codigo: "FIS-100", nombre: "Introducción a la Física", creditos: 4 },
          { codigo: "CONST-101", nombre: "Dibujo de Construcción", creditos: 3 },
          { codigo: "CONST-102", nombre: "Materiales de Construcción", creditos: 4 },
          { codigo: "CONST-103", nombre: "Tecnología del Hormigón", creditos: 4 }
        ]
      },
      {
        semestre: 2,
        ramos: [
          { codigo: "MAT-006", nombre: "Matemática Aplicada", creditos: 5 },
          { codigo: "CIV-110", nombre: "Topografía I", creditos: 4 },
          { codigo: "CONST-110", nombre: "Edificación I", creditos: 4 },
          { codigo: "CONST-111", nombre: "Tecnología de la Madera", creditos: 3 },
          { codigo: "CONST-112", nombre: "Mecánica de Suelos", creditos: 4 },
          { codigo: "CONST-113", nombre: "Aplicación de Metodología BIM", creditos: 4 }
        ]
      },
      {
        semestre: 3,
        ramos: [
          { codigo: "MEC-201", nombre: "Resistencia de Materiales", creditos: 4 },
          { codigo: "CIV-201", nombre: "Topografía II", creditos: 4 },
          { codigo: "CONST-201", nombre: "Edificación II", creditos: 4 },
          { codigo: "CONST-202", nombre: "Cubicación y Presupuesto", creditos: 4 },
          { codigo: "CIV-202", nombre: "Hidráulica", creditos: 4 },
          { codigo: "CONST-203", nombre: "Instalaciones Domiciliarias I", creditos: 4 },
          { codigo: "EFI-100", nombre: "Educación Física", creditos: 1 }
        ]
      },
      {
        semestre: 4,
        ramos: [
          { codigo: "CONST-210", nombre: "Planificación y Control de Obra", creditos: 4 },
          { codigo: "CONST-211", nombre: "Instalaciones Domiciliarias II", creditos: 4 },
          { codigo: "CIV-210", nombre: "Obras Civiles y Viales", creditos: 4 },
          { codigo: "CONST-212", nombre: "Estructuras Metálicas", creditos: 4 },
          { codigo: "CONST-213", nombre: "Construcción Sustentable", creditos: 3 },
          { codigo: "CONST-214", nombre: "Hormigón Armado", creditos: 4 }
        ]
      }
    ],

    // 25. T.U. EN ELECTRICIDAD
    tuel: [
      {
        semestre: 1,
        ramos: [
          { codigo: "MAT-005", nombre: "Elementos de la Matemática", creditos: 5 },
          { codigo: "FIS-100", nombre: "Introducción a la Física", creditos: 4 },
          { codigo: "ELI-101", nombre: "Redes Eléctricas I", creditos: 4 },
          { codigo: "ELI-102", nombre: "Laboratorio de Redes Eléctricas", creditos: 3 },
          { codigo: "EFI-100", nombre: "Educación Física", creditos: 1 },
          { codigo: "HCW-101", nombre: "Inglés I", creditos: 2 }
        ]
      },
      {
        semestre: 2,
        ramos: [
          { codigo: "MAT-006", nombre: "Matemática Aplicada", creditos: 5 },
          { codigo: "ELI-110", nombre: "Máquinas Eléctricas I", creditos: 4 },
          { codigo: "ELI-111", nombre: "Redes Eléctricas II", creditos: 4 },
          { codigo: "ELI-112", nombre: "Instalaciones Eléctricas I", creditos: 3 },
          { codigo: "ELI-113", nombre: "Electrónica Industrial I", creditos: 4 },
          { codigo: "HCW-102", nombre: "Inglés II", creditos: 2 }
        ]
      },
      {
        semestre: 3,
        ramos: [
          { codigo: "ELI-201", nombre: "Protecciones Eléctricas I", creditos: 4 },
          { codigo: "ELI-202", nombre: "Máquinas Eléctricas II", creditos: 4 },
          { codigo: "ELI-203", nombre: "Control de Accionamientos Eléctricos I", creditos: 4 },
          { codigo: "ELI-204", nombre: "Instalaciones Eléctricas II", creditos: 3 },
          { codigo: "ELI-205", nombre: "Electrónica Industrial II", creditos: 4 },
          { codigo: "ELI-206", nombre: "Seguridad Eléctrica", creditos: 3 }
        ]
      },
      {
        semestre: 4,
        ramos: [
          { codigo: "ELI-210", nombre: "Protecciones Eléctricas II", creditos: 4 },
          { codigo: "ELI-211", nombre: "Mantenimiento Eléctrico", creditos: 4 },
          { codigo: "ELI-212", nombre: "Control de Accionamientos Eléctricos II", creditos: 4 },
          { codigo: "ELI-213", nombre: "Proyecto de Instalaciones Eléctricas", creditos: 4 },
          { codigo: "ELI-214", nombre: "Energías Renovables y Eficiencia Energética", creditos: 4 }
        ]
      }
    ],

    // 26. T.U. EN ELECTRÓNICA
    tuelt: [
      {
        semestre: 1,
        ramos: [
          { codigo: "MAT-005", nombre: "Elementos de la Matemática", creditos: 5 },
          { codigo: "HCW-101", nombre: "Inglés I", creditos: 2 },
          { codigo: "INF-101", nombre: "Programación", creditos: 4 },
          { codigo: "ELI-101", nombre: "Circuito de Corriente Continua", creditos: 4 },
          { codigo: "ELI-102", nombre: "Laboratorio de Circuitos Eléctricos I", creditos: 3 },
          { codigo: "TEL-101", nombre: "Sistemas Digitales", creditos: 4 }
        ]
      },
      {
        semestre: 2,
        ramos: [
          { codigo: "MAT-006", nombre: "Matemática Aplicada", creditos: 5 },
          { codigo: "FIS-100", nombre: "Introducción a la Física", creditos: 4 },
          { codigo: "ELI-110", nombre: "Electrónica I", creditos: 4 },
          { codigo: "ELI-111", nombre: "Circuitos de Corriente Alterna", creditos: 4 },
          { codigo: "ELI-112", nombre: "Laboratorio de Circuitos Eléctricos II", creditos: 3 },
          { codigo: "TEL-110", nombre: "Microcontroladores", creditos: 4 }
        ]
      },
      {
        semestre: 3,
        ramos: [
          { codigo: "EFI-100", nombre: "Educación Física", creditos: 1 },
          { codigo: "HRW-201", nombre: "Comunicación Efectiva y Liderazgo", creditos: 3 },
          { codigo: "ELI-201", nombre: "Electrónica II", creditos: 4 },
          { codigo: "ELI-202", nombre: "Instrumentación Industrial", creditos: 4 },
          { codigo: "ELI-203", nombre: "Electrónica Industrial", creditos: 4 },
          { codigo: "ELI-204", nombre: "Controladores Lógicos Programables", creditos: 4 }
        ]
      },
      {
        semestre: 4,
        ramos: [
          { codigo: "EIN-401", nombre: "Preparación de Proyectos", creditos: 4 },
          { codigo: "TEL-210", nombre: "Redes Computacionales e Industriales", creditos: 4 },
          { codigo: "ELI-210", nombre: "Electrónica No Lineal", creditos: 4 },
          { codigo: "TEL-211", nombre: "Sistemas de Telecomunicaciones", creditos: 4 },
          { codigo: "ELI-211", nombre: "Control de Máquinas Eléctricas", creditos: 4 },
          { codigo: "ELI-212", nombre: "Automatización y Control", creditos: 4 }
        ]
      }
    ],

    // 27. T.U. EN ENERGÍAS RENOVABLES
    tuer: [
      {
        semestre: 1,
        ramos: [
          { codigo: "MAT-005", nombre: "Elementos de la Matemática", creditos: 5 },
          { codigo: "HCW-101", nombre: "Inglés I", creditos: 2 },
          { codigo: "IND-101", nombre: "Riesgos Eléctricos y Mecánicos", creditos: 3 },
          { codigo: "CONST-101", nombre: "Dibujo Técnico para Energías Renovables", creditos: 3 },
          { codigo: "ELI-101", nombre: "Fundamentos de Electricidad", creditos: 4 },
          { codigo: "ERW-101", nombre: "Fundamentos de Energías Renovables", creditos: 4 }
        ]
      },
      {
        semestre: 2,
        ramos: [
          { codigo: "MAT-006", nombre: "Matemática Aplicada", creditos: 5 },
          { codigo: "FIS-100", nombre: "Introducción a la Física", creditos: 4 },
          { codigo: "EFI-100", nombre: "Educación Física", creditos: 1 },
          { codigo: "ERW-110", nombre: "Automatización en Energías Renovables", creditos: 4 },
          { codigo: "ELI-110", nombre: "Electricidad Aplicada I", creditos: 4 },
          { codigo: "ERW-111", nombre: "Instalación de Equipos y Sistemas de Energía Solar Fotovoltaica", creditos: 5 }
        ]
      },
      {
        semestre: 3,
        ramos: [
          { codigo: "MEC-201", nombre: "Mecánica Técnica", creditos: 4 },
          { codigo: "MEC-202", nombre: "Fundamentos de la Mecánica de Fluidos y Termodinámica", creditos: 4 },
          { codigo: "ERW-201", nombre: "Preparación de Proyectos de Especialidad", creditos: 4 },
          { codigo: "ERW-202", nombre: "Alternativas Energéticas", creditos: 3 },
          { codigo: "ELI-201", nombre: "Electricidad Aplicada II", creditos: 4 },
          { codigo: "ERW-203", nombre: "Instalación de Equipos y Sistemas de Energía Solar Térmica", creditos: 4 }
        ]
      },
      {
        semestre: 4,
        ramos: [
          { codigo: "ERW-210", nombre: "Introducción a los Sistemas de Gestión", creditos: 3 },
          { codigo: "ERW-211", nombre: "Administración y Control de Plantas de Energías Renovables", creditos: 4 },
          { codigo: "ERW-212", nombre: "Proyectos Energéticos", creditos: 4 },
          { codigo: "ERW-213", nombre: "Instalación de Equipos y Sistemas de Energía Eólica", creditos: 5 },
          { codigo: "ERW-214", nombre: "Eficiencia Energética", creditos: 3 },
          { codigo: "ERW-215", nombre: "Mantención de Equipos y Sistemas de Energía Renovables", creditos: 4 }
        ]
      }
    ],

    // 28. T.U. EN INFORMÁTICA
    tui: [
      {
        semestre: 1,
        ramos: [
          { codigo: "MAT-005", nombre: "Elementos de la Matemática", creditos: 5 },
          { codigo: "HCW-101", nombre: "Inglés I", creditos: 2 },
          { codigo: "EFI-100", nombre: "Educación Física", creditos: 1 },
          { codigo: "INF-101", nombre: "Análisis de Sistemas de Información", creditos: 4 },
          { codigo: "INF-102", nombre: "Programación", creditos: 5 },
          { codigo: "INF-103", nombre: "Introducción a la Informática y Computación", creditos: 4 }
        ]
      },
      {
        semestre: 2,
        ramos: [
          { codigo: "MAT-006", nombre: "Matemática Aplicada", creditos: 5 },
          { codigo: "HCW-102", nombre: "Inglés II", creditos: 2 },
          { codigo: "INF-110", nombre: "Análisis y Diseño Orientado a Objeto", creditos: 4 },
          { codigo: "INF-111", nombre: "Diseño de Sistemas de Información", creditos: 4 },
          { codigo: "INF-112", nombre: "Estructuras de Datos", creditos: 4 },
          { codigo: "INF-113", nombre: "Programación Orientada a Evento", creditos: 4 }
        ]
      },
      {
        semestre: 3,
        ramos: [
          { codigo: "INF-201", nombre: "Taller de Sistemas de Información I", creditos: 4 },
          { codigo: "HCW-103", nombre: "Inglés III", creditos: 2 },
          { codigo: "INF-202", nombre: "Programación Orientada a Objeto", creditos: 4 },
          { codigo: "INF-203", nombre: "Diseño y Programación Orientada a la Web", creditos: 4 },
          { codigo: "INF-204", nombre: "Bases de Datos", creditos: 4 },
          { codigo: "TEL-201", nombre: "Arquitectura y Organización de Computadores", creditos: 4 }
        ]
      },
      {
        semestre: 4,
        ramos: [
          { codigo: "INF-210", nombre: "Taller de Sistemas de Información II", creditos: 5 },
          { codigo: "HRW-210", nombre: "Humanidades", creditos: 3 },
          { codigo: "INF-211", nombre: "Desarrollo de Aplicaciones Móviles", creditos: 4 },
          { codigo: "INF-212", nombre: "Taller de Desarrollo de Software", creditos: 5 },
          { codigo: "TEL-210", nombre: "Sistemas Operativos", creditos: 4 }
        ]
      }
    ],

    // 29. T.U. EN MANTENIMIENTO AERONÁUTICO
    tuma: [
      {
        semestre: 1,
        ramos: [
          { codigo: "MAT-005", nombre: "Elementos de la Matemática", creditos: 5 },
          { codigo: "FIS-100", nombre: "Introducción a la Física", creditos: 4 },
          { codigo: "ACA-101", nombre: "Tecnologías de los Materiales Aeronáuticos", creditos: 4 },
          { codigo: "ARQ-101", nombre: "Dibujo Técnico", creditos: 3 },
          { codigo: "EFI-100", nombre: "Educación Física", creditos: 1 },
          { codigo: "HCW-101", nombre: "Inglés Técnico I", creditos: 3 }
        ]
      },
      {
        semestre: 2,
        ramos: [
          { codigo: "MAT-006", nombre: "Matemática Aplicada", creditos: 5 },
          { codigo: "ACA-110", nombre: "Gestión del Mantenimiento Aeronáutico", creditos: 4 },
          { codigo: "ACA-111", nombre: "Aerodinámica", creditos: 4 },
          { codigo: "ACA-112", nombre: "Sistemas Eléctricos", creditos: 4 },
          { codigo: "ACA-113", nombre: "Estructuras y Sistemas", creditos: 4 },
          { codigo: "HCW-102", nombre: "Inglés Técnico II", creditos: 3 }
        ]
      },
      {
        semestre: 3,
        ramos: [
          { codigo: "TEL-201", nombre: "Sistemas Digitales", creditos: 4 },
          { codigo: "ACA-201", nombre: "Seguridad Operacional y SMS", creditos: 3 },
          { codigo: "MEC-201", nombre: "Hidroneumática", creditos: 4 },
          { codigo: "ACA-202", nombre: "Motores recíprocos y Hélices", creditos: 5 },
          { codigo: "ACA-203", nombre: "Sistemas Electrónicos", creditos: 4 },
          { codigo: "HCW-103", nombre: "Inglés Técnico III", creditos: 3 }
        ]
      },
      {
        semestre: 4,
        ramos: [
          { codigo: "TEL-210", nombre: "Microprocesadores", creditos: 4 },
          { codigo: "ACA-210", nombre: "Ala Rotatoria", creditos: 4 },
          { codigo: "ACA-211", nombre: "Aviónica", creditos: 4 },
          { codigo: "ACA-212", nombre: "Motores a Turbina", creditos: 5 },
          { codigo: "HCW-104", nombre: "Inglés Conversacional", creditos: 3 }
        ]
      }
    ],

    // 30. T.U. EN MANTENIMIENTO INDUSTRIAL
    tumin: [
      {
        semestre: 1,
        ramos: [
          { codigo: "MAT-005", nombre: "Elementos de la Matemática", creditos: 5 },
          { codigo: "MEC-101", nombre: "Mediciones Mecánicas", creditos: 3 },
          { codigo: "IND-101", nombre: "Procesos Industriales", creditos: 4 },
          { codigo: "MEC-102", nombre: "Taller de Reparaciones Mecánicas", creditos: 4 },
          { codigo: "ELI-101", nombre: "Fundamentos de la Electrotecnia", creditos: 4 },
          { codigo: "ARQ-101", nombre: "Dibujo Técnico", creditos: 3 }
        ]
      },
      {
        semestre: 2,
        ramos: [
          { codigo: "MAT-006", nombre: "Matemática Aplicada", creditos: 5 },
          { codigo: "FIS-100", nombre: "Introducción a la Física", creditos: 4 },
          { codigo: "EFI-100", nombre: "Educación Física", creditos: 1 },
          { codigo: "MEC-110", nombre: "Tecnologías de los Materiales", creditos: 4 },
          { codigo: "MEC-111", nombre: "Soldadura", creditos: 4 },
          { codigo: "MEC-112", nombre: "Taller de Mantenimiento", creditos: 4 }
        ]
      },
      {
        semestre: 3,
        ramos: [
          { codigo: "IND-201", nombre: "Logística", creditos: 4 },
          { codigo: "MEC-201", nombre: "Mecánica Técnica", creditos: 4 },
          { codigo: "HCW-101", nombre: "Inglés I", creditos: 2 },
          { codigo: "MEC-202", nombre: "Fundamentos de la Mecánica de Fluidos y Termodinámica", creditos: 4 },
          { codigo: "MEC-203", nombre: "Mantenimiento Predictivo", creditos: 4 },
          { codigo: "MEC-204", nombre: "Gestión del Mantenimiento", creditos: 4 },
          { codigo: "IND-202", nombre: "Introducción a los Sistemas de Gestión", creditos: 3 }
        ]
      },
      {
        semestre: 4,
        ramos: [
          { codigo: "ERW-210", nombre: "Preparación de Proyectos de Especialidad", creditos: 4 },
          { codigo: "MEC-210", nombre: "Componentes de Máquinas", creditos: 4 },
          { codigo: "HCW-102", nombre: "Inglés II", creditos: 2 },
          { codigo: "MEC-211", nombre: "Mantenimiento de Máquinas Térmicas", creditos: 4 },
          { codigo: "MEC-212", nombre: "Mantenimiento Neumático y Oleohidráulico", creditos: 4 },
          { codigo: "MEC-213", nombre: "Mantenimiento a Equipos Móviles", creditos: 4 }
        ]
      }
    ],

    // 31. T.U. EN MECÁNICA AUTOMOTRIZ
    tumaauto: [
      {
        semestre: 1,
        ramos: [
          { codigo: "MAT-005", nombre: "Elementos de la Matemática", creditos: 5 },
          { codigo: "FIS-100", nombre: "Introducción a la Física", creditos: 4 },
          { codigo: "MEC-101", nombre: "Mediciones Mecánicas", creditos: 3 },
          { codigo: "HCW-101", nombre: "Inglés I", creditos: 2 },
          { codigo: "MEC-102", nombre: "Principios de la Electrotecnia Automotriz", creditos: 4 },
          { codigo: "MEC-103", nombre: "Introducción a la Mecánica Automotriz", creditos: 4 }
        ]
      },
      {
        semestre: 2,
        ramos: [
          { codigo: "MAT-006", nombre: "Matemática Aplicada", creditos: 5 },
          { codigo: "MEC-110", nombre: "Fundamentos de la Mecánica de Fluidos y Termodinámica", creditos: 4 },
          { codigo: "MEC-111", nombre: "Tecnología de los Materiales", creditos: 4 },
          { codigo: "MEC-112", nombre: "Control Electrónico Automotriz", creditos: 4 },
          { codigo: "ELI-110", nombre: "Electricidad Aplicada", creditos: 4 },
          { codigo: "MEC-113", nombre: "Motores de Combustión Interna", creditos: 4 },
          { codigo: "MEC-114", nombre: "Combustibles y Lubricantes", creditos: 3 }
        ]
      },
      {
        semestre: 3,
        ramos: [
          { codigo: "MEC-201", nombre: "Mecánica Técnica", creditos: 4 },
          { codigo: "MEC-202", nombre: "Sistemas Hidroneumáticos", creditos: 4 },
          { codigo: "EFI-100", nombre: "Educación Física", creditos: 1 },
          { codigo: "MEC-203", nombre: "Sistema y Diagnóstico OTTO", creditos: 4 },
          { codigo: "MEC-204", nombre: "Sistema y Diagnóstico Diésel", creditos: 4 },
          { codigo: "MEC-205", nombre: "Chasis", creditos: 4 },
          { codigo: "MEC-206", nombre: "Sistema de Frenos", creditos: 4 }
        ]
      },
      {
        semestre: 4,
        ramos: [
          { codigo: "MEC-210", nombre: "Laboratorio de Máquinas", creditos: 4 },
          { codigo: "ERW-210", nombre: "Preparación de Proyectos de Especialidad", creditos: 4 },
          { codigo: "MEC-211", nombre: "Gestión del Mantenimiento", creditos: 4 },
          { codigo: "MEC-212", nombre: "Electromovilidad", creditos: 4 },
          { codigo: "MEC-213", nombre: "Taller Mantenimiento Automotriz", creditos: 4 },
          { codigo: "MEC-214", nombre: "Transmisiones", creditos: 4 }
        ]
      }
    ],

    // 32. T.U. EN MECÁNICA MANTENIMIENTO
    tumecman: [
      {
        semestre: 1,
        ramos: [
          { codigo: "MAT-005", nombre: "Elementos de la Matemática", creditos: 5 },
          { codigo: "FIS-100", nombre: "Introducción a la Física", creditos: 4 },
          { codigo: "HCW-101", nombre: "Inglés I", creditos: 2 },
          { codigo: "MEC-101", nombre: "Mediciones Mecánicas", creditos: 3 },
          { codigo: "MEC-102", nombre: "Tecnologías de los Materiales", creditos: 4 },
          { codigo: "ARQ-101", nombre: "Dibujo Técnico", creditos: 3 }
        ]
      },
      {
        semestre: 2,
        ramos: [
          { codigo: "MAT-006", nombre: "Matemática Aplicada", creditos: 5 },
          { codigo: "ELI-101", nombre: "Fundamentos de la Electrotecnia", creditos: 4 },
          { codigo: "EFI-100", nombre: "Educación Física", creditos: 1 },
          { codigo: "MEC-110", nombre: "Taller de Mantenimiento", creditos: 4 },
          { codigo: "MEC-111", nombre: "Taller Máquinas Herramientas", creditos: 4 },
          { codigo: "IND-110", nombre: "Introducción a los Sistemas de Gestión", creditos: 3 }
        ]
      },
      {
        semestre: 3,
        ramos: [
          { codigo: "MEC-201", nombre: "Fundamentos de la Mecánica de Fluidos Y Termodinámica", creditos: 4 },
          { codigo: "MEC-202", nombre: "Mecánica Técnica", creditos: 4 },
          { codigo: "HCW-102", nombre: "Inglés II", creditos: 2 },
          { codigo: "MEC-203", nombre: "Electro Oleoneumática", creditos: 4 },
          { codigo: "MEC-204", nombre: "Mantenimiento Predictivo", creditos: 4 },
          { codigo: "MEC-205", nombre: "Dibujo Asistido por Computador", creditos: 4 }
        ]
      },
      {
        semestre: 4,
        ramos: [
          { codigo: "ERW-210", nombre: "Preparación de Proyectos de Especialidad", creditos: 4 },
          { codigo: "MEC-210", nombre: "Componentes de Máquinas", creditos: 4 },
          { codigo: "IND-210", nombre: "Procesos Industriales", creditos: 4 },
          { codigo: "MEC-211", nombre: "Fundamento de Automatismo y Control", creditos: 4 },
          { codigo: "MEC-212", nombre: "Soldadura", creditos: 4 },
          { codigo: "MEC-213", nombre: "CNC – CAD – CAM", creditos: 4 }
        ]
      }
    ],

    // 33. T.U. EN MINAS Y METALURGIA
    tuminas: [
      {
        semestre: 1,
        ramos: [
          { codigo: "MAT-005", nombre: "Elementos de la Matemática", creditos: 5 },
          { codigo: "FIS-100", nombre: "Introducción a la Física", creditos: 4 },
          { codigo: "IND-101", nombre: "Seguridad e Higiene Industrial", creditos: 3 },
          { codigo: "ARQ-101", nombre: "Dibujo Técnico", creditos: 3 },
          { codigo: "MIN-101", nombre: "Introducción a la Minería y Metalurgia", creditos: 4 },
          { codigo: "MEC-101", nombre: "Mediciones Mecánicas", creditos: 3 }
        ]
      },
      {
        semestre: 2,
        ramos: [
          { codigo: "MAT-006", nombre: "Matemática Aplicada", creditos: 5 },
          { codigo: "HCW-101", nombre: "Inglés I", creditos: 2 },
          { codigo: "MEC-110", nombre: "Tecnologías de los Materiales", creditos: 4 },
          { codigo: "MEC-111", nombre: "Fundamentos de la Mecánica de Fluidos y Termodinámica", creditos: 4 },
          { codigo: "MIN-110", nombre: "Geología General", creditos: 4 },
          { codigo: "MIN-111", nombre: "Preparación Mecánica", creditos: 4 }
        ]
      },
      {
        semestre: 3,
        ramos: [
          { codigo: "MIN-201", nombre: "Perforación y Tronadura", creditos: 4 },
          { codigo: "MEC-201", nombre: "Mecánica Técnica", creditos: 4 },
          { codigo: "ELI-201", nombre: "Fundamentos de la Electrotecnia", creditos: 4 },
          { codigo: "MIN-202", nombre: "Carguío y Transporte", creditos: 4 },
          { codigo: "IND-201", nombre: "Introducción a los Sistemas de Gestión", creditos: 3 },
          { codigo: "MIN-203", nombre: "Concentración de Minerales", creditos: 4 },
          { codigo: "EFI-100", nombre: "Educación Física", creditos: 1 }
        ]
      },
      {
        semestre: 4,
        ramos: [
          { codigo: "ERW-210", nombre: "Preparación de Proyectos de Especialidad", creditos: 4 },
          { codigo: "ELI-210", nombre: "Instrumentación y Control", creditos: 4 },
          { codigo: "MIN-210", nombre: "Procesos Industriales Mineros", creditos: 4 },
          { codigo: "MIN-211", nombre: "Métodos de Explotación", creditos: 4 },
          { codigo: "MIN-212", nombre: "Laboratorio Hidrometalúrgico", creditos: 4 },
          { codigo: "MIN-213", nombre: "Procesos Metalúrgicos", creditos: 4 }
        ]
      }
    ],

    // 34. T.U. EN PROYECTOS DE INGENIERÍA
    tupri: [
      {
        semestre: 1,
        ramos: [
          { codigo: "MAT-005", nombre: "Elementos de la Matemática", creditos: 5 },
          { codigo: "MEC-101", nombre: "Tecnología de los Materiales", creditos: 4 },
          { codigo: "ARQ-101", nombre: "Normalización y Dibujo de Ingeniería Asistido por Computador", creditos: 4 },
          { codigo: "HCW-101", nombre: "Inglés I", creditos: 2 },
          { codigo: "IDP-101", nombre: "Taller de Maquetas Tridimensionales", creditos: 4 },
          { codigo: "EFI-100", nombre: "Educación Física", creditos: 1 }
        ]
      },
      {
        semestre: 2,
        ramos: [
          { codigo: "MAT-006", nombre: "Matemática Aplicada", creditos: 5 },
          { codigo: "FIS-100", nombre: "Introducción a la Física", creditos: 4 },
          { codigo: "IDP-110", nombre: "Modelado Tridimensional", creditos: 4 },
          { codigo: "IND-110", nombre: "Plantas y Montaje Industrial", creditos: 4 },
          { codigo: "ARQ-110", nombre: "Dibujo de Ingeniería de Plantas", creditos: 4 },
          { codigo: "HCW-102", nombre: "Inglés II", creditos: 2 }
        ]
      },
      {
        semestre: 3,
        ramos: [
          { codigo: "MEC-201", nombre: "Mecánica Aplicada", creditos: 4 },
          { codigo: "IND-201", nombre: "Proyectos de Tuberías", creditos: 4 },
          { codigo: "INF-201", nombre: "Modelación y Administración de Información Industrial", creditos: 4 },
          { codigo: "CIV-201", nombre: "Obras Civiles y Topografía", creditos: 4 },
          { codigo: "IND-202", nombre: "Planificación y Control de Proyecto I", creditos: 4 },
          { codigo: "ELI-201", nombre: "Dibujo Eléctrico", creditos: 4 }
        ]
      },
      {
        semestre: 4,
        ramos: [
          { codigo: "ICN-210", nombre: "Costo y Presupuesto", creditos: 4 },
          { codigo: "CONST-210", nombre: "Proyectos Estructurales", creditos: 4 },
          { codigo: "MEC-210", nombre: "Modelación y Análisis de Esfuerzos", creditos: 4 },
          { codigo: "IND-210", nombre: "Procesos y Equipos Industriales", creditos: 4 },
          { codigo: "IND-211", nombre: "Planificación y Control de Proyectos II", creditos: 4 }
        ]
      }
    ],

    // 35. T.U. EN QUÍMICA / ANÁLISIS QUÍMICO
    tuqui: [
      {
        semestre: 1,
        ramos: [
          { codigo: "MAT-005", nombre: "Elementos de la Matemática", creditos: 5 },
          { codigo: "EFI-100", nombre: "Educación Física", creditos: 1 },
          { codigo: "QUI-101", nombre: "Química General", creditos: 4 },
          { codigo: "QUI-102", nombre: "Laboratorio de Química General", creditos: 3 },
          { codigo: "QUI-103", nombre: "Introducción a la Química Analítica", creditos: 3 },
          { codigo: "BIO-101", nombre: "Biología General", creditos: 4 }
        ]
      },
      {
        semestre: 2,
        ramos: [
          { codigo: "MAT-006", nombre: "Matemática Aplicada", creditos: 5 },
          { codigo: "FIS-100", nombre: "Introducción a la Física", creditos: 4 },
          { codigo: "QUI-110", nombre: "Química Analítica Cuantitativa", creditos: 4 },
          { codigo: "QUI-111", nombre: "Laboratorio de Química Analítica Cuantitativa", creditos: 3 },
          { codigo: "QUI-112", nombre: "Química Orgánica", creditos: 4 }
        ]
      },
      {
        semestre: 3,
        ramos: [
          { codigo: "QUI-201", nombre: "Análisis Instrumental I", creditos: 4 },
          { codigo: "HCW-101", nombre: "Inglés I", creditos: 2 },
          { codigo: "QUI-202", nombre: "Laboratorio de Análisis Instrumental I", creditos: 3 },
          { codigo: "QUI-203", nombre: "Laboratorio de Análisis Industrial I", creditos: 3 },
          { codigo: "BIO-201", nombre: "Biotecnología", creditos: 4 },
          { codigo: "QUI-204", nombre: "Operaciones Unitarias", creditos: 4 }
        ]
      },
      {
        semestre: 4,
        ramos: [
          { codigo: "QUI-210", nombre: "Análisis Instrumental II", creditos: 4 },
          { codigo: "QUI-211", nombre: "Contaminación y Normativa", creditos: 3 },
          { codigo: "QUI-212", nombre: "Laboratorio de Análisis Instrumental II", creditos: 3 },
          { codigo: "QUI-213", nombre: "Laboratorio de Análisis Industrial II", creditos: 3 },
          { codigo: "QUI-214", nombre: "Tratamiento de Residuos Industriales", creditos: 4 },
          { codigo: "QUI-215", nombre: "Química Industrial", creditos: 4 }
        ]
      }
    ],

    // 36. T.U. EN QUÍMICA INDUSTRIAL
    tuquind: [
      {
        semestre: 1,
        ramos: [
          { codigo: "MAT-005", nombre: "Elementos de la Matemática", creditos: 5 },
          { codigo: "EFI-100", nombre: "Educación Física", creditos: 1 },
          { codigo: "FIS-100", nombre: "Introducción a la Física", creditos: 4 },
          { codigo: "HCW-101", nombre: "Inglés I", creditos: 2 },
          { codigo: "QUI-101", nombre: "Química General", creditos: 4 },
          { codigo: "QUI-102", nombre: "Laboratorio de Química General", creditos: 3 }
        ]
      },
      {
        semestre: 2,
        ramos: [
          { codigo: "MAT-006", nombre: "Matemática Aplicada", creditos: 5 },
          { codigo: "BIO-101", nombre: "Biología General", creditos: 4 },
          { codigo: "QUI-110", nombre: "Introducción a la Metrología", creditos: 3 },
          { codigo: "QUI-111", nombre: "Química Orgánica e Inorgánica", creditos: 4 },
          { codigo: "QUI-112", nombre: "Introducción a la Química Analítica", creditos: 3 },
          { codigo: "QUI-113", nombre: "Operaciones Unitarias", creditos: 4 }
        ]
      },
      {
        semestre: 3,
        ramos: [
          { codigo: "IND-201", nombre: "Control Estadístico de Procesos", creditos: 4 },
          { codigo: "BIO-201", nombre: "Biotecnología", creditos: 4 },
          { codigo: "QUI-201", nombre: "Química Analítica Cuantitativa Aplicada", creditos: 4 },
          { codigo: "QUI-202", nombre: "Laboratorio de Química Analítica Cuantitativa Aplicada", creditos: 3 },
          { codigo: "QUI-203", nombre: "Laboratorio de Industrias Químicas I", creditos: 3 },
          { codigo: "QUI-204", nombre: "Procesos Industriales", creditos: 4 }
        ]
      },
      {
        semestre: 4,
        ramos: [
          { codigo: "IND-210", nombre: "Control de la Calidad", creditos: 4 },
          { codigo: "IND-211", nombre: "Logística y Operaciones", creditos: 4 },
          { codigo: "QUI-210", nombre: "Laboratorio de Industrias Químicas II", creditos: 3 },
          { codigo: "QUI-211", nombre: "Análisis Instrumental", creditos: 4 },
          { codigo: "QUI-212", nombre: "Laboratorio de Análisis Instrumental", creditos: 3 },
          { codigo: "QUI-213", nombre: "Control del Medio Ambiente", creditos: 4 }
        ]
      }
    ],

    // 37. T.U. EN ROBÓTICA Y MECATRÓNICA
    turob: [
      {
        semestre: 1,
        ramos: [
          { codigo: "MAT-005", nombre: "Elementos de la Matemática", creditos: 5 },
          { codigo: "ELI-101", nombre: "Circuitos de Corriente Continua", creditos: 4 },
          { codigo: "TEL-101", nombre: "Introducción a la Mecatrónica", creditos: 4 },
          { codigo: "MEC-101", nombre: "Metrología", creditos: 3 },
          { codigo: "FIS-100", nombre: "Introducción a la Física", creditos: 4 },
          { codigo: "INF-101", nombre: "Programación", creditos: 4 },
          { codigo: "EFI-100", nombre: "Educación Física", creditos: 1 }
        ]
      },
      {
        semestre: 2,
        ramos: [
          { codigo: "MAT-006", nombre: "Matemática Aplicada", creditos: 5 },
          { codigo: "ELI-110", nombre: "Circuitos de Corriente Alterna", creditos: 4 },
          { codigo: "TEL-110", nombre: "Microcontroladores", creditos: 4 },
          { codigo: "ARQ-110", nombre: "Dibujo Asistido por Computador", creditos: 3 },
          { codigo: "MEC-110", nombre: "Mecánica de los Materiales", creditos: 4 },
          { codigo: "ELI-111", nombre: "Electrónica Análogo Digital", creditos: 4 }
        ]
      },
      {
        semestre: 3,
        ramos: [
          { codigo: "HCW-101", nombre: "Inglés I", creditos: 2 },
          { codigo: "ELI-201", nombre: "Electrónica de Potencia", creditos: 4 },
          { codigo: "ELI-202", nombre: "Control Programmable", creditos: 4 },
          { codigo: "TEL-201", nombre: "Robótica I", creditos: 4 },
          { codigo: "MEC-201", nombre: "Sistema Óleo-Neumáticos", creditos: 4 },
          { codigo: "TEL-202", nombre: "Comunicación Industrial", creditos: 4 }
        ]
      },
      {
        semestre: 4,
        ramos: [
          { codigo: "HCW-102", nombre: "Inglés II", creditos: 2 },
          { codigo: "ELI-210", nombre: "Control de Procesos Industriales", creditos: 4 },
          { codigo: "MEC-210", nombre: "Manufactura Flexible", creditos: 4 },
          { codigo: "TEL-210", nombre: "Robótica II", creditos: 4 },
          { codigo: "MEC-211", nombre: "Mecanizado CNC", creditos: 4 }
        ]
      }
    ],

    // 38. T.U. EN TELECOMUNICACIONES Y REDES
    tutel: [
      {
        semestre: 1,
        ramos: [
          { codigo: "MAT-005", nombre: "Elementos de la Matemática", creditos: 5 },
          { codigo: "HRW-101", nombre: "Comunicación Efectiva y Liderazgo", creditos: 3 },
          { codigo: "TEL-101", nombre: "Redes Computacionales I", creditos: 4 },
          { codigo: "INF-101", nombre: "Hardware y Sistemas Operativos", creditos: 4 },
          { codigo: "ELI-101", nombre: "Teoría de Redes Eléctricas", creditos: 4 },
          { codigo: "TEL-102", nombre: "Sistemas Digitales", creditos: 4 }
        ]
      },
      {
        semestre: 2,
        ramos: [
          { codigo: "MAT-006", nombre: "Matemática Aplicada", creditos: 5 },
          { codigo: "INF-110", nombre: "Laboratorio de Sistemas Operativos", creditos: 3 },
          { codigo: "TEL-110", nombre: "Redes Computacionales II", creditos: 4 },
          { codigo: "FIS-100", nombre: "Introducción a la Física", creditos: 4 },
          { codigo: "ELI-110", nombre: "Electrónica General", creditos: 4 },
          { codigo: "INF-111", nombre: "Programación", creditos: 4 }
        ]
      },
      {
        semestre: 3,
        ramos: [
          { codigo: "HCW-101", nombre: "Inglés I", creditos: 2 },
          { codigo: "TEL-201", nombre: "Sistemas de Telecomunicaciones", creditos: 4 },
          { codigo: "TEL-202", nombre: "Redes Computacionales III", creditos: 4 },
          { codigo: "TEL-203", nombre: "Sistemas Embebidos", creditos: 4 },
          { codigo: "TEL-204", nombre: "Sistemas de Telefonía", creditos: 4 },
          { codigo: "EFI-100", nombre: "Educación Física", creditos: 1 }
        ]
      },
      {
        semestre: 4,
        ramos: [
          { codigo: "ERW-210", nombre: "Preparación de Proyectos", creditos: 4 },
          { codigo: "TEL-210", nombre: "Redes Inalámbricas", creditos: 4 },
          { codigo: "TEL-211", nombre: "Redes Computacionales IV", creditos: 4 },
          { codigo: "TEL-212", nombre: "Administración de Redes", creditos: 4 },
          { codigo: "TEL-213", nombre: "Ciberseguridad", creditos: 4 },
          { codigo: "TEL-214", nombre: "Administración de Sistemas", creditos: 4 }
        ]
      }
    ]

  }
};
