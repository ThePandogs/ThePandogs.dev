import type { ImageMetadata } from "astro"

import appRestaurant from "@/assets/projects/app-restaurant.png"
import fallingBlocks from "@/assets/projects/falling-blocks.png"
import caminoGalicia from "@/assets/projects/camino-galicia.png"
import arenasDeAlcabre from "@/assets/projects/arenas-de-alcabre.png"

export const profile = {
  name: "Carlos Fraile",
  alias: "ThePandogs",
  role: "Desarrollador de software",
  tagline:
    "Desarrollador .NET en el día a día, construyendo ERPs e integraciones, y full-stack para mis propios clientes. También hago videojuegos. Me importa que el software sea claro de usar y fácil de mantener.",
  location: "Vigo, España",
  available: true,
  email: "carlosfraileduran@gmail.com",
  links: {
    github: "https://github.com/ThePandogs",
    linkedin: "https://linkedin.com/in/carlosfrailedev",
  },
}

export const about = [
  "Soy Carlos, aunque casi todo el mundo me llama Pandogs. Empecé en la informática por el lado del hardware y los sistemas: técnico, soporte y administración de sistemas, en España, Polonia y Malta. En 2022 decidí convertir mi curiosidad por la programación en mi profesión y me formé en Desarrollo de Aplicaciones Multiplataforma.",
  "Además desarrollo webs para clientes de principio a fin: diseño, frontend, API, base de datos y despliegue. Hoy tengo dos en producción, una agencia del Camino de Santiago y un club de fútbol de Vigo.",
  "Hoy desarrollo ERPs en .NET y lidero proyectos para clientes, y en paralelo dirijo un estudio indie de videojuegos. Disfruto especialmente de la parte de diseño: modelar bien el dominio, separar responsabilidades y construir interfaces que no estorben.",
]

export type Experience = {
  period: string
  role: string
  company: string
  url?: string
  description: string
  tags: string[]
}

export const experience: Experience[] = [
  {
    period: "Jul 2025 — Actualidad",
    role: "Desarrollador de software",
    company: "Inforhouse",
    description:
      "Evolución de Aiko ERP y liderazgo técnico en proyectos y verticalizaciones para clientes: análisis, diseño, reuniones de requisitos y validación de entregables. Servicios web SOAP en .NET con capa proxy a JSON para integrar sistemas externos, soporte del ERP GSBase, SQL Server e informes con Crystal Reports.",
    tags: ["VB.NET", "C#", "SOAP", "SQL Server", "Crystal Reports"],
  },
  {
    period: "Abr 2024 — Jul 2025",
    role: "Desarrollador .NET",
    company: "Esquío Ingeniería",
    description:
      "Lideré la evolución de Nimo ERP: interfaz modernizada y mejor rendimiento con paginación. Remesas SEPA, Verifactu y un sistema de gestión logística completo, de la recepción a la expedición, con EDI (DESADV, DELJIT), inventario, etiquetas y un módulo de lectura para almacén.",
    tags: ["VB.NET", "C#", "WinForms", "WPF", "SQL Server", "EDI"],
  },
  {
    period: "Ene 2023 — Actualidad",
    role: "Cofundador · Programador y diseñador UI/UX",
    company: "The Pandogs Games",
    url: "https://www.thepandogsgames.com",
    description:
      "Estudio indie de videojuegos. Programo, diseño la experiencia de usuario y coordino un equipo de siete desarrolladores con el que hemos recibido varios premios.",
    tags: ["Game dev", "UI/UX", "Gestión de equipos"],
  },
]

/** Etapa anterior como técnico de sistemas y soporte, en formato compacto. */
export const earlierExperience: { period: string; role: string; company: string }[] = [
  { period: "2019 — 2022", role: "Técnico de impresión", company: "Grupo Solitium" },
  { period: "2018 — 2019", role: "Soporte técnico Help Desk", company: "Bosch Service Solutions" },
  { period: "2016 — 2017", role: "Administrador de sistemas", company: "Colegio n.º 28 · Breslavia, Polonia" },
  { period: "2016", role: "Técnico electrónico", company: "Cutajar Limited · Malta" },
]

export const education: { period: string; title: string; center: string }[] = [
  { period: "2022 — 2024", title: "CFGS Desarrollo de Aplicaciones Multiplataforma", center: "IES Teis" },
  { period: "2014 — 2016", title: "CFGM Sistemas Microinformáticos y Redes", center: "IES Teis" },
]

export type Project = {
  title: string
  description: string
  tags: string[]
  /** Repositorio público. Los proyectos de cliente no lo tienen: su código es privado. */
  repo?: string
  /** Web en producción. */
  site?: string
  image?: ImageMetadata
  preview?: string
}

export type ClientProject = Project & {
  client: string
  site: string
  image: ImageMetadata
  highlights: string[]
}

export const clientProjects: ClientProject[] = [
  {
    title: "Wayfare",
    client: "Camino Galicia",
    description:
      "Plataforma white-label para agencias que venden rutas a pie del Camino de Santiago. La primera instancia en producción es Camino Galicia: catálogo de caminos, reservas y panel de administración para gestionar todo el contenido.",
    site: "https://www.caminogaliciapt.com/es",
    image: caminoGalicia,
    tags: ["Next.js", "TypeScript", "Express", "PostgreSQL", "Vercel"],
    highlights: [
      "Una instancia por cliente: base de datos, despliegue y marca propios desde un único fichero de configuración",
      "Web en gallego, castellano e inglés, con SEO y generación estática",
      "API por capas con migraciones y despliegue automático",
    ],
  },
  {
    title: "Arenas de Alcabre",
    client: "Arenas de Alcabre S.C.D.",
    description:
      "Web y panel de gestión de un club de fútbol base de Vigo: noticias, equipos y plantillas, directiva, documentación e inscripciones de jugadores.",
    site: "https://www.arenasdealcabre.com",
    image: arenasDeAlcabre,
    tags: ["React", "Vite", "Tailwind", "Express", "PostgreSQL"],
    highlights: [
      "Panel de administración: noticias con editor enriquecido, jugadores, equipos y páginas editables",
      "Formulario de inscripción y contacto con avisos por correo",
      "Web bilingüe (gallego y castellano) con login y gestión de imágenes",
    ],
  },
]

export const projects: Project[] = [
  {
    title: "AppRestaurante",
    description:
      "Gestión de mesas y comandas de un restaurante con login de usuarios y persistencia en MySQL.",
    repo: "https://github.com/ThePandogs/APP_RestaurantManagement",
    tags: ["Java", "Swing", "MySQL"],
    image: appRestaurant,
    preview: "projects/app-restaurant.gif",
  },
  {
    title: "Falling Blocks",
    description:
      "Juego de bloques inspirado en Tetris con pieza fantasma, puntuación y pausa. Proyecto personal y no comercial.",
    repo: "https://github.com/ThePandogs/Falling-Blocks-Game",
    tags: ["Java", "Swing"],
    image: fallingBlocks,
    preview: "projects/falling-blocks.gif",
  },
  {
    title: "CopyBamboo",
    description:
      "Organizador automático de archivos: los clasifica por fecha (creación, metadatos o modificación) y por tipo, con renombrado opcional.",
    repo: "https://github.com/ThePandogs/CopyBamboo",
    tags: ["Java", "Maven"],
  },
  {
    title: "PokerDQN",
    description:
      "Experimento de aprendizaje por refuerzo: un agente Deep Q-Network que aprende a jugar al póker.",
    repo: "https://github.com/ThePandogs/PokerDQN",
    tags: ["Python", "IA"],
  },
]

export const stack: { group: string; items: string[] }[] = [
  { group: "Web", items: ["TypeScript", "React", "Next.js", "Astro", "Tailwind CSS"] },
  { group: "Backend", items: ["Node.js", "Express", "REST", "JWT"] },
  { group: ".NET", items: ["C#", "VB.NET", "WPF", "Windows Forms", "SOAP", "LINQ", "Crystal Reports"] },
  { group: "Datos", items: ["PostgreSQL", "SQL Server", "MySQL"] },
  { group: "Java y Python", items: ["Java", "Swing", "Maven", "Python"] },
  { group: "Herramientas", items: ["Git", "GitHub Actions", "Vercel"] },
]
