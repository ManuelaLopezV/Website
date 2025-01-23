import { FaGithub, FaLinkedin, FaXTwitter, FaDiscord } from "react-icons/fa6";

import seguridad from "../assets/seguridad-a-la-mano.png";
import happyPets from "../assets/happy-pets.png";
import blogSoluproint from "../assets/blog-soluproint.png";
import psicodava from "../assets/psicodava.png";
import videoplayer from "../assets/videoplayer.png";
import fupammar from "../assets/fupammar.png";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiJavascript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";


export const GREETING = {
  name: "Manuela López",
  greet: "Hola,",
  description: "DESARROLLADORA FULLSTACK JR",
};

export const NAVIGATION_LINKS = [
  { label: "Acerca de mi", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Proyectos", href: "#projects" },
  { label: "Experiencia", href: "#work" },
  { label: "Educación", href: "#education" },
  { label: "Contacto", href: "#contact" },
];

export const ABOUT_ME = [
  {
    firstParagraph:
      "Desarrolladora Fullstack con más de 2 años de experiencia práctica en el desarrollo de aplicaciones web y móviles modernas, creando soluciones innovadoras y eficientes utilizando JavaScript y sus frameworks más populares como React y Node.js.",
  },
  {
    firstParagraph:
      "Soy proactiva, orientada a resultados, competente en varias plataformas, lenguajes y sistemas integrados. Cuento con excelentes habilidades de comunicación y trabajo en equipo lo que me permite contribuir efectivamente a proyectos de desarrollo de software.",
  },
  {
    secondParagraph:
      "Me apasiona aprender, estoy en constante actualización de tendencias y nuevas tecnologías, siempre buscando mejorar mis habilidades y conocimientos.",
  },
];

export const STACK = [
  {
    icon: <RiReactjsLine className="text-3xl text-cyan-400 md:text-4xl lg:text-5xl" />,
    name: "React",
    experience: "1.5+ years",
  },
  {
    icon: <FaNodeJs className="text-3xl text-green-600 md:text-4xl lg:text-5xl" />,
    name: "Node.js",
    experience: "3+ years",
  },
  {
    icon: <SiJavascript className="text-2xl text-yellow-500 md:text-4xl lg:text-5xl" />,
    name: "JavaScript",
    experience: "3+ years",
  },
  {
    icon: <TbBrandNextjs className="text-3xl text-gray-400 md:text-4xl lg:text-5xl" />,
    name: "Next.js",
    experience: "1+ year",
  },
  {
    icon: <SiMongodb className="text-3xl text-green-600 md:text-4xl lg:text-5xl" />,
    name: "MongoDB",
    experience: "1+ year",
  },
  {
    icon: <BiLogoPostgresql className="text-3xl text-sky-800 md:text-4xl lg:text-5xl" />,
    name: "PostgreSQL",
    experience: "1+ year",
  },
  {
    icon: <FaHtml5 className="text-3xl text-red-500 md:text-4xl lg:text-5xl" />,
    name: "HTML5",
    experience: "3+ years",
  },
  {
    icon: <IoLogoCss3 className="text-3xl text-sky-600 md:text-4xl lg:text-5xl" />,
    name: "CSS3",
    experience: "3+ years",
  },
];

export const PROJECTS = [
  {
    id: 1,
    titleColor: "light",
    textColor: "white",
    name: "App Seguridad a la mano",
    description:
      "Aplicación web-móvil dirigida hacia el personal de la seguridad privada en Colombia, dónde pueden registrarse, buscar ofertas de empleo, actualizar cursos y conectarse con empresas del sector.",
    technologies: "Next.js, SASS, Node.js, MongoDB",
    image: seguridad,
    github: "https://github.com/Soluproint/Seguridad-a-la-mano-2024",
    link: "https://app-web.seguridadalamano.com/",
  },
  {
    id: 2,
    titleColor: "dark",
    textColor: "black",
    name: "Happy Pets",
    description:
      "Gestión de mascotas para una veterinaria, dónde se pueden registrar, editar y eliminar mascotas, ver su información y agendar citas.",
    technologies: "Next.js, React, Material-UI",
    image: happyPets,
    github: "https://github.com/ManuelaLopezV/happy-pets",
    link: "https://happy-pets-beryl.vercel.app/",
  },
  {
    id: 3,
    titleColor: "light",
    textColor: "white",
    // name: "CyberByte Blog",
    name: "Blog Soluproint",
    description:
      "Blog de la empresa Soluproint dónde comparto noticias sobre tendencias actuales en ciberseguridad y seguridad de la información.",
    technologies: "React, Strapi, PostgreSQL",
    image: blogSoluproint,
    github: "https://github.com/Soluproint/Blog-Soluproint",
    link: "https://www.soluproint.com/blog",
  },
  {
    id: 4,
    titleColor: "dark",
    textColor: "black",
    name: "PSICODAVA",
    description:
      "Landing Page de la Psicologa Dahiana Valencia, donde brinda información sobre sus servicios, modalidades de terapia e información de contacto.",
    technologies: "HTML, CSS, JavaScript",
    image: psicodava,
    github: "https://github.com/PSICODAVA/website",
    link: "https://psicodava.github.io/website/",
  },
  {
    id: 5,
    titleColor: "light",
    textColor: "white",
    name: "Video Player",
    description:
      "Proyecto del curso de introducción a la web, donde construyo un reproductor de video desde cero con todos sus componentes.",
    technologies: "HTML, CSS, JavaScript",
    image: videoplayer,
    github: "https://github.com/ManuelaLopezV/video-player",
    link: "https://manuelalopezv.github.io/video-player/",
  },
  {
    id: 6,
    titleColor: "dark",
    textColor: "black",
    name: "FUPAMMAR",
    description:
      "Página web de la fundación FUPAMMAR que permite adopciones y donaciones a una fundación de perros.",
    technologies: "HTML, CSS, Node.js, Oracle",
    image: fupammar,
    github: "https://github.com/ManuelaLopezV/FUPAMMAR",
    link: "",
  },
];

export const EXPERIENCES = [
  {
    title: "Desarrollador Fullstack Jr",
    company: "Soluproint SAS - Seguridad a la mano",
    duration: "Abril 2024 - Actualidad",
    description:
      "Estoy a cargo del desarrollo de una aplicación web-móvil dirigida al personal de seguridad privada en Colombia, cuenta con una interfaz intuitiva y funcional que permite  a los usuarios registrarse y participar en servicios diseñados para vigilantes, escoltas y profesionales del sector. La App-Web Seguridad a la mano le brinda al usuario gestión de ofertas laborales, actualización de cursos y conexión con empresas. A través de este proyecto, he fortalecido mis habilidades técnicas y de comunicación, trabajando en equipo y cumpliendo con los plazos de entrega.",
    industry: "Vigilancia, Seguridad Privada.",
  },
  {
    title: "Desarrollador Web Freelancer",
    company: "PSICODAVA",
    duration: "Diciembre 2023",
    description:
      "Desarrollé un sitio web moderno y responsivo para la Psicóloga Dahiana Valencia, enfocado en la promoción de sus servicios de terapia virtual y presencial. Implementé una interfaz intuitiva que facilita la navegación y mejora la experiencia del usuario, asegurando que los pacientes puedan encontrar fácilmente la información que necesitan.",
    industry: "Psicoterapia, Salud Mental",
  },
  {
    title: "Desarrollador Frontend Jr",
    company: "Soluproint SAS",
    duration: "Octubre 2023 - Abril 2024",
    description:
      "Desarrollé la página web corporativa de la empresa Soluproint, destacando la misión, visión y valores de la organización, así como el portafolio de servicios ofrecidos, mejorando la presencia en línea y la comunicación con los clientes. Propuse y desarrollé un blog centrado en tendencias de ciberseguridad y seguridad de la información, implementando un CMS Strapi junto con PostgreSQL, lo que facilitó la publicación de noticias y la gestión del contenido del blog. Ejecuté pruebas de software y ataques de penetración para detectar y mitigar vulnerabilidades en la aplicación web, garantizando que las soluciones desarrolladas cumplieran con los estándares de calidad y las necesidades del negocio.",
    industry: "Seguridad de la información, Ciberseguridad",
  },
];

export const EDUCATION = [
  {
    degree: "Técnica Profesional en Programación de Sistemas de Información",
    institution: "Politécnico Colombiano Jaime Isaza Cadavid",
    duration: "Febrero 2022 - Septiembre 2024",
    description:
      "Formación sólida base en el desarrollo de software y gestión de sistemas de información, con énfasis en lenguajes de programación como Java, Python, JavaScript. Desarrollé habilidades en bases de datos, tanto en conocimiento de SQL, cómo en modelado y gestión de bases de datos. Aprendí a diseñar, implementar y mantener aplicaciones informáticas, aplicando metodologías de desarrollo ágil y buenas prácticas de programación. Realicé varios proyectos cómo programas de escritorio, de desarrollo de fullstack, algoritmos y estructuras de datos.",
    aditional: "Graduada con promedio 4,2.",
  },
  {
    degree: "Node.js: De cero a experto",
    institution: "Udemy",
    duration: "Octubre 2024 - Enero 2025",
    description:
      "Este curso me proporcionó una comprensión sólida y profunda de Node.js, dónde adquirí conocimientos sobre su arquitectura, gestión de módulos, paquetes y dependencias, desarrollo de aplicaciones web con Express implementando servidores, manejo de rutas y gestión de solicitudes, integración con bases de datos realizando operaciones CRUD de manera eficiente y desarrollo de APIs RESTfull siguiendo las mejores prácticas, facilitando la comunicación entre el frontend y el backend.",
  },
  {
    degree: "Universidad JavaScript - De cero a experto",
    institution: "Udemy",
    duration: "Octubre 2024 - Enero 2024",
    description:
      "Curso avanzado de JavaScript donde obtuve formación completa y actualizada del lenguaje. Inluye teoría que cubre todos los conceptos fundamentales y avanzados, desde la sintaxis básica hasta las últimas actualizaciones. Además, el curso integra un enfoque práctico basado en proyectos reales, permitiendo desarrollar habilidades de programación a través de la creación de aplicaciones y soluciones.",
  },
  {
    degree: "JavaScript Moderno: Guía para dominar el lenguaje",
    institution: "{d/t} - DevTalles",
    duration: "Octubre 2024 - Enero 2025",
    description:
      "Este curso me llevo desde un nivel básico hasta un dominio avanzado de JavaScript, preparándome para el mercado laboral actual aprendiendo fundamentos, módulos y herramientas, manejo de asincronía, operaciones CRUD y manipulación del DOM. Todo esto a través de ejercicios prácticos y proyectos reales que me prepararon para enfrentar desafíos en el desarrollo de aplicaciones web con diferentes frameworksy librerías.",
  },
  {
    degree: "Curso de Terminal para Frontends",
    institution: "Leonidas Esteban",
    duration: "Abril 2024 - Abril 2024",
    description:
      "Aprendí sobre navegación y gestión de archivos y directorios, realizando tareas como moverme entre carpetas, crear, copiar, mover y eliminar. También se comprendí la estructura y componentes de los comandos de una terminal, incluyendo opciones y parámetros. Por último se incluyeron prácticas para inicializar proyectos en React (frontend) y Express (backend).",
  },
  {
    degree: "Curso Definitivo de HTNL y CSS",
    institution: "Platzi",
    duration: "Abril 2024 - Abril 2024",
    description:
      "Curso avanzado de HTML y CSS, donde aprendí a crear sitios web modernos y responsivos, utilizando las últimas tecnologías y técnicas de diseño. Adquirí conocimientos sobre maquetación, diseño web, animaciones, flexbox, grid, responsive design, entre otros. Realicé varios proyectos prácticos que me permitieron aplicar los conceptos aprendidos y mejorar mis habilidades de desarrollo frontend.",
  },
  {
    degree: "Diplomado en Programación en Java:",
    institution: "Politécnico de Colombia",
    duration: "Agosto 2023- Septiembre 2023",
    description:
      "Conocimiento de los conceptos básicos y aplicaciones del lenguaje Java para la programación en cuanto a variables, operadores, tipos de datos, clases de Java, también se abordan diferentes módulos de estructuras condicionales y  de iteración para almacenamiento de datos en vectores y matrices, estructuración de la programación orientada a objetos y sus componentes y  caracteristicas teoricas de la programación web en Java.",
  },
];

export const SOCIAL_LINKS = [
  {
    href: "https://github.com/ManuelaLopezV",
    icon: (
      <FaGithub fontSize={25} className="hover:opacity-80 cursor-pointer" />
    ),
  },
  {
    href: "https://www.linkedin.com/in/manuela-lopez-v/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/manulopez_v",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
];

export const SOCIAL_LINKS_HOME = [
  {
    href: "https://github.com/ManuelaLopezV",
    icon: (
      <FaGithub fontSize={28} className="hover:opacity-80 cursor-pointer" />
    ),
  },
  {
    href: "https://www.linkedin.com/in/manuela-lopez-v/",
    icon: <FaLinkedin fontSize={28} className="hover:opacity-80 cursor-pointer" />,
  },
  {
    href: "",
    icon: <FaDiscord fontSize={28} className="hover:opacity-80 cursor-pointer" />,
  },
  {
    href: "https://x.com/manulopez_v",
    icon: <FaXTwitter fontSize={28} className="hover:opacity-80 cursor-pointer" />,
  },
];
