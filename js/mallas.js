// js/mallas.js - Base de Datos de Mallas y Ofertas Académicas USM

const datosUSM = {
  sedes: [
    { id: "sj", nombre: "Campus Santiago San Joaquín" },
    { id: "vito", nombre: "Campus Santiago Vitacura" },
    { id: "cc", nombre: "Campus Casa Central Valparaíso" },
    { id: "vña", nombre: "Sede Viña del Mar" },
    { id: "conco", nombre: "Sede Concepción" }
  ],
  carreras: {
    sj: [
      { id: "icse", nombre: "Ingeniería Civil Informática" },
      { id: "plancomun", nombre: "Ingeniería Plan Común" }
    ],
    vito: [
      { id: "icse", nombre: "Ingeniería Civil Informática" },
      { id: "plancomun", nombre: "Ingeniería Plan Común" }
    ],
    cc: [
      { id: "icse", nombre: "Ingeniería Civil Informática" },
      { id: "plancomun", nombre: "Ingeniería Plan Común" }
    ],
    vña: [
      { id: "plancomun", nombre: "Ingeniería Plan Común" }
    ],
    conco: [
      { id: "plancomun", nombre: "Ingeniería Plan Común" }
    ]
  },
  mallas: {
    icse: [
      {
        semestre: 1,
        ramos: [
          { codigo: "HCW-100", nombre: "Comunicación Efectiva en Español / Inglés I", creditos: 3 },
          { codigo: "EFI-100", nombre: "Educación Física I", creditos: 2 },
          { codigo: "IWG-101", nombre: "Introducción a la Ingeniería Informática", creditos: 3 },
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
          { codigo: "FIS-120", nombre: "Calor y Ondas", creditos: 5 },
          { codigo: "INF-134", nombre: "Estructuras de Datos", creditos: 5 },
          { codigo: "MAT-072", nombre: "Cálculo en Varias Variables", creditos: 6 },
          { codigo: "MAT-073", nombre: "Ecuaciones Diferenciales Elementales", creditos: 6 }
        ]
      },
      {
        semestre: 4,
        ramos: [
          { codigo: "HCW-300", nombre: "Comunicación Efectiva en Español / Inglés III", creditos: 3 },
          { codigo: "FIS-130", nombre: "Electricidad y Magnetismo", creditos: 5 },
          { codigo: "INF-155", nombre: "Bases de Datos", creditos: 5 },
          { codigo: "MAT-240", nombre: "Probabilidad y Estadística", creditos: 5 },
          { codigo: "ICN-100", nombre: "Administración y Sostenibilidad Organizacional", creditos: 4 }
        ]
      }
    ],
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
          { codigo: "FIS-120", nombre: "Calor y Ondas", creditos: 5 },
          { codigo: "QUI-100", nombre: "Química para Ingeniería", creditos: 5 },
          { codigo: "MAT-072", nombre: "Cálculo en Varias Variables", creditos: 6 },
          { codigo: "MAT-073", nombre: "Ecuaciones Diferenciales Elementales", creditos: 6 }
        ]
      },
      {
        semestre: 4,
        ramos: [
          { codigo: "HCW-300", nombre: "Comunicación Efectiva en Español / Inglés III", creditos: 3 },
          { codigo: "FIS-130", nombre: "Electricidad y Magnetismo", creditos: 5 },
          { codigo: "MAT-240", nombre: "Probabilidad y Estadística", creditos: 5 },
          { codigo: "ICN-100", nombre: "Administración y Sostenibilidad Organizacional", creditos: 4 }
        ]
      }
    ]
  }
};
