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
    "Desarrollo webs a medida, aplicaciones de escritorio y videojuegos. Trabajo con TypeScript, React, .NET y Java, y me importa que el software sea claro de usar y fácil de mantener.",
  location: "Vigo, España",
  available: true,
  email: "carlosfraileduran@gmail.com",
  links: {
    github: "https://github.com/ThePandogs",
    linkedin: "https://linkedin.com/in/carlosfrailedev",
  },
}

export const about = [
  "Soy Carlos, aunque casi todo el mundo me llama Pandogs. La tecnología me ha fascinado desde pequeño, y en 2022 decidí convertir esa curiosidad en mi profesión.",
  "Además desarrollo webs para clientes de principio a fin: diseño, frontend, API, base de datos y despliegue. Hoy tengo dos en producción, una agencia del Camino de Santiago y un club de fútbol de Vigo.",
  "Hoy trabajo con .NET en software de gestión empresarial y, en paralelo, cofundé un estudio indie de videojuegos donde programo y coordino al equipo. Disfruto especialmente de la parte de diseño: modelar bien el dominio, separar responsabilidades y construir interfaces que no estorben.",
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
    period: "Actualidad",
    role: "Programador .NET",
    company: "Esquío Ingeniería",
    description:
      "Desarrollo de Nimo ERP con Visual Basic y C#, con interfaces en Windows Forms y WPF, además de la gestión y administración de bases de datos SQL Server.",
    tags: ["C#", "VB.NET", "WPF", "WinForms", "SQL Server"],
  },
  {
    period: "Actualidad",
    role: "Cofundador · Programador y Project Manager",
    company: "ThePandogsGames",
    url: "https://www.thepandogsgames.com",
    description:
      "Estudio indie de videojuegos. Programo y gestiono un equipo de 8 personas: planificación, reparto de tareas y seguimiento del desarrollo.",
    tags: ["Game dev", "Gestión de equipos"],
  },
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
    site: "https://www.caminogaliciapt.com",
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
  { group: ".NET", items: ["C#", "VB.NET", "WPF", "Windows Forms"] },
  { group: "Datos", items: ["PostgreSQL", "SQL Server", "MySQL"] },
  { group: "Java y Python", items: ["Java", "Swing", "Maven", "Python"] },
  { group: "Herramientas", items: ["Git", "GitHub Actions", "Vercel"] },
]
