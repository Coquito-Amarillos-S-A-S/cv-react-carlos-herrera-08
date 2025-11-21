// src/data/cvData.js

// ===============================
// Datos de la cabecera del CV
// ===============================
export const cabecera = {
  nombre: "Carlos Herrera",
  cargo: "Desarrollador Web Frontend",
  ciudad: "Medellín, Colombia",
  contacto: "320 3959625",
};

// ===============================
// Perfil / Resumen profesional
// ===============================
export const perfil = {
  resumen:
    "Desarrollador frontend con experiencia en React, manejo de estados, componentes reutilizables y diseño responsivo.",
};

// ===============================
// Educación (lista de estudios)
// ===============================
export const educacion = [
  {
    id: 1,
    titulo: "Tecnólogo en Desarrollo de Software",
    institucion: "SENA",
    año: "2022 - 2024",
  },
  {
    id: 2,
    titulo: "Curso de React",
    institucion: "Udemy",
    año: "2024",
  },
];

// ===============================
// Experiencia laboral
// ===============================
export const experiencia = [
  {
    id: 1,
    cargo: "Frontend Developer Junior",
    empresa: "Tech Solutions",
    periodo: "2023 - 2024",
  },
  {
    id: 2,
    cargo: "Practicante en Desarrollo Web",
    empresa: "InnovarSoft",
    periodo: "2022 - 2023",
  },
];

// ===============================
// Tecnologías (datos iniciales)
// Estas se convierten en estado dinámico dentro de App.jsx
// ===============================
export const stackTecnologias = [
  {
    id: 1,
    nombre: "HTML",
    tipo: "frontend",
  },
  {
    id: 2,
    nombre: "CSS",
    tipo: "frontend",
  },
  {
    id: 3,
    nombre: "JavaScript",
    tipo: "frontend",
  },
  {
    id: 4,
    nombre: "React",
    tipo: "frontend",
  },
];

// ===============================
// Proyectos
// ===============================
export const proyectos = [
  {
    id: 1,
    nombre: "Landing Page Portafolio",
    descripcion: "Sitio web personal creado con HTML, CSS y JavaScript.",
  },
  {
    id: 2,
    nombre: "App de Tareas",
    descripcion: "Aplicación CRUD creada con React y LocalStorage.",
  },
];

// ===============================
// Habilidades
// ===============================
export const habilidades = [
  "Trabajo en equipo",
  "Comunicación efectiva",
  "Resolución de problemas",
  "Adaptación",
  "Pensamiento lógico",
];
