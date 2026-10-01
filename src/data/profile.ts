import type { ImageMetadata } from "astro"

import appRestaurant from "@/assets/projects/app-restaurant.png"
import fallingBlocks from "@/assets/projects/falling-blocks.png"

export const profile = {
  name: "Carlos Fraile",
  alias: "ThePandogs",
  role: "Desarrollador de software",
  tagline:
    "Desarrollo aplicaciones de escritorio, herramientas internas y videojuegos. Me muevo cómodo entre .NET, Java y Python, y me importa que el software sea claro de usar y fácil de mantener.",
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
  repo: string
  tags: string[]
  image?: ImageMetadata
  preview?: string
}

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
  { group: ".NET", items: ["C#", "VB.NET", "WPF", "Windows Forms"] },
  { group: "Java", items: ["Java", "Swing", "Maven"] },
  { group: "Datos", items: ["SQL Server", "MySQL"] },
  { group: "Otros", items: ["Python", "JavaScript", "Node.js", "Git"] },
]
