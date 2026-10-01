import type { ImageMetadata } from "astro"

import type { Lang } from "@/i18n"

import appRestaurant from "@/assets/projects/app-restaurant.png"
import fallingBlocks from "@/assets/projects/falling-blocks.png"
import caminoGalicia from "@/assets/projects/camino-galicia.png"
import arenasDeAlcabre from "@/assets/projects/arenas-de-alcabre.png"
import pandogsGames from "@/assets/projects/pandogs-games.png"
import mundevo from "@/assets/projects/mundevo.png"

/** Texto en los dos idiomas de la web. */
type L = Record<Lang, string>

export const profile = {
  name: "Carlos Fraile",
  alias: "ThePandogs",
  available: true,
  email: "carlosfraileduran@gmail.com",
  links: {
    github: "https://github.com/ThePandogs",
    linkedin: "https://linkedin.com/in/carlosfrailedev",
  },
  role: { es: "Desarrollador de software", en: "Software developer" } satisfies L,
  location: { es: "Vigo, España", en: "Vigo, Spain" } satisfies L,
  tagline: {
    es: "Desarrollador .NET en el día a día, construyendo ERPs e integraciones, y full-stack para mis propios clientes. También hago videojuegos. Me importa que el software sea claro de usar y fácil de mantener.",
    en: "A .NET developer by day, building ERPs and integrations, and a full-stack developer for my own clients. I also make video games. I care about software that is clear to use and easy to maintain.",
  } satisfies L,
}

export const about: L[] = [
  {
    es: "Soy Carlos, aunque casi todo el mundo me llama Pandogs. Empecé en la informática por el lado del hardware y los sistemas: técnico, soporte y administración de sistemas, en España, Polonia y Malta. En 2022 decidí convertir mi curiosidad por la programación en mi profesión y me formé en Desarrollo de Aplicaciones Multiplataforma.",
    en: "I'm Carlos, though almost everyone calls me Pandogs. I got into IT through hardware and systems: technician, support and system administration in Spain, Poland and Malta. In 2022 I decided to turn my curiosity for programming into my profession and studied Cross-Platform Application Development.",
  },
  {
    es: "Hoy desarrollo ERPs en .NET y lidero proyectos para clientes, construyo webs completas por mi cuenta (diseño, frontend, API, base de datos y despliegue) y, en paralelo, dirijo un estudio indie de videojuegos.",
    en: "Today I build .NET ERPs and lead client projects, I build complete websites on my own (design, frontend, API, database and deployment) and, alongside that, I run an indie game studio.",
  },
  {
    es: "Disfruto especialmente de la parte de diseño: modelar bien el dominio, separar responsabilidades y construir interfaces que no estorben.",
    en: "What I enjoy most is the design side: modelling the domain well, separating responsibilities and building interfaces that stay out of the way.",
  },
]

export type Experience = {
  period: L
  role: L
  company: string
  url?: string
  description: L
  tags: string[]
}

export const experience: Experience[] = [
  {
    period: { es: "Jul 2025 — Actualidad", en: "Jul 2025 — Present" },
    role: { es: "Desarrollador de software", en: "Software developer" },
    company: "Inforhouse",
    description: {
      es: "Evolución de Aiko ERP y liderazgo técnico en proyectos y verticalizaciones para clientes: análisis, diseño, reuniones de requisitos y validación de entregables. Servicios web SOAP en .NET con capa proxy a JSON para integrar sistemas externos, soporte del ERP GSBase, SQL Server e informes con Crystal Reports.",
      en: "Evolving Aiko ERP and technical lead on client projects and vertical solutions: analysis, design, requirements meetings and sign-off of deliverables. .NET SOAP web services with a JSON proxy layer to integrate external systems, GSBase ERP support, SQL Server and Crystal Reports.",
    },
    tags: ["VB.NET", "C#", "SOAP", "SQL Server", "Crystal Reports"],
  },
  {
    period: { es: "Sep 2024 — Actualidad", en: "Sep 2024 — Present" },
    role: { es: "Desarrollador web freelance", en: "Freelance web developer" },
    company: "Freelance",
    description: {
      es: "Webs completas para clientes, de la idea al despliegue. Ahora mismo, Wayfare (plataforma para agencias del Camino de Santiago, en producción con Camino Galicia) y la web y panel de gestión del club Arenas de Alcabre.",
      en: "End-to-end websites for clients, from idea to deployment. Currently Wayfare (a platform for Camino de Santiago agencies, live with Camino Galicia) and the website and management panel for the Arenas de Alcabre football club.",
    },
    tags: ["Next.js", "React", "TypeScript", "Express", "PostgreSQL"],
  },
  {
    period: { es: "Abr 2024 — Jul 2025", en: "Apr 2024 — Jul 2025" },
    role: { es: "Desarrollador .NET", en: ".NET developer" },
    company: "Esquío Ingeniería",
    description: {
      es: "Lideré la evolución de Nimo ERP: interfaz modernizada y mejor rendimiento con paginación. Remesas SEPA, Verifactu y un sistema de gestión logística completo, de la recepción a la expedición, con EDI (DESADV, DELJIT), inventario, etiquetas y un módulo de lectura para almacén.",
      en: "Led the evolution of Nimo ERP: a modernised interface and better performance through pagination. SEPA direct debits, Verifactu e-invoicing and a full logistics system, from goods receipt to dispatch, with EDI (DESADV, DELJIT), inventory, labels and a warehouse scanning module.",
    },
    tags: ["VB.NET", "C#", "WinForms", "WPF", "SQL Server", "EDI"],
  },
  {
    period: { es: "Ene 2023 — Actualidad", en: "Jan 2023 — Present" },
    role: {
      es: "Cofundador y CEO · Desarrollo, game design y gestión del equipo",
      en: "Co-founder & CEO · Development, game design and team management",
    },
    company: "The Pandogs Games",
    url: "https://thepandogsgames.com",
    description: {
      es: "Estudio indie de Vigo que montamos entre tres compañeros. Llevo la parte de dirección y coordino a un equipo de siete personas entre programación, arte, música y diseño. Además programo, diseño mecánicas y me encargo de la UI/UX. Hemos publicado cinco juegos gratuitos y recibido varios premios.",
      en: "An indie studio in Vigo that three of us started together. I handle the management side and coordinate a team of seven across programming, art, music and design. I also code, design mechanics and take care of UI/UX. We've released five free games and won several awards.",
    },
    tags: ["Unity", "C#", "Game design", "UI/UX"],
  },
]

/** Etapa anterior como técnico de sistemas y soporte, en formato compacto. */
export const earlierExperience: { period: string; role: L; company: L }[] = [
  {
    period: "2019 — 2022",
    role: { es: "Técnico de impresión", en: "Printing technician" },
    company: { es: "Grupo Solitium", en: "Grupo Solitium" },
  },
  {
    period: "2018 — 2019",
    role: { es: "Soporte técnico Help Desk", en: "Help desk technical support" },
    company: { es: "Bosch Service Solutions", en: "Bosch Service Solutions" },
  },
  {
    period: "2016 — 2017",
    role: { es: "Administrador de sistemas", en: "System administrator" },
    company: { es: "Colegio n.º 28 · Breslavia, Polonia", en: "Primary School No. 28 · Wrocław, Poland" },
  },
  {
    period: "2016",
    role: { es: "Técnico electrónico", en: "Electronics technician" },
    company: { es: "Cutajar Limited · Malta", en: "Cutajar Limited · Malta" },
  },
]

export const education: { period: string; title: L; center: string }[] = [
  {
    period: "2022 — 2024",
    title: {
      es: "CFGS Desarrollo de Aplicaciones Multiplataforma",
      en: "Higher VET Diploma in Cross-Platform Application Development",
    },
    center: "IES Teis",
  },
  {
    period: "2014 — 2016",
    title: {
      es: "CFGM Sistemas Microinformáticos y Redes",
      en: "VET Diploma in Computer Systems and Networks",
    },
    center: "IES Teis",
  },
]

export type Project = {
  title: string
  description: L
  tags: string[]
  /** Repositorio público. Los proyectos de cliente no lo tienen: su código es privado. */
  repo?: string
  /** Web en producción. */
  site?: string
  /** Ocupa el ancho completo en la rejilla de proyectos. */
  wide?: boolean
  image?: ImageMetadata
  preview?: string
}

export type ClientProject = Project & {
  /** Para quién es: el cliente o "proyecto propio". */
  client: L
  site: string
  image: ImageMetadata
  highlights: L[]
  press?: { outlet: string; title: string; url: string; date: string }
}

export const clientProjects: ClientProject[] = [
  {
    title: "Mundevo",
    client: { es: "Proyecto propio", en: "Own product" },
    description: {
      es: "Motor de decisión para mudarse de ciudad: calcula el sueldo bruto que necesitas para vivir en 104 ciudades de 49 países según tu estilo de vida, con impuestos, visados y coste de vida reales. Incluye comparador de ciudades, corredores de mudanza entre países y una calculadora inversa.",
      en: "A decision engine for relocating: it works out the gross salary you need to live in 104 cities across 49 countries for your lifestyle, using real taxes, visas and cost of living. Includes a city comparator, country-to-country relocation corridors and a reverse calculator.",
    },
    site: "https://www.mundevo.com",
    image: mundevo,
    tags: ["React", "TypeScript", "Vite", "libSQL", "Claude API", "Vercel"],
    highlights: [
      {
        es: "Miles de páginas prerenderizadas (5.356 comparativas y 702 corredores) pensadas para SEO",
        en: "Thousands of prerendered pages (5,356 comparisons and 702 corridors) built for SEO",
      },
      {
        es: "Modelo fiscal por país, conversión de divisas y metodología y fuentes públicas documentadas",
        en: "Per-country tax model, currency conversion, and documented methodology and public sources",
      },
      {
        es: "Contenido y análisis apoyados en la API de Claude, con scripts de verificación e indexación automática",
        en: "Content and analysis assisted by the Claude API, with verification scripts and automated indexing",
      },
    ],
  },
  {
    title: "Wayfare",
    client: { es: "Camino Galicia", en: "Camino Galicia" },
    description: {
      es: "Plataforma white-label para agencias que venden rutas a pie del Camino de Santiago. La primera instancia en producción es Camino Galicia, una agencia de peregrinos de Redondela: catálogo de caminos, reservas y panel de administración para gestionar todo el contenido.",
      en: "A white-label platform for agencies selling walking routes on the Camino de Santiago. The first live instance is Camino Galicia, a pilgrim agency in Redondela: route catalogue, bookings and an admin panel to manage all the content.",
    },
    site: "https://www.caminogaliciapt.com/es",
    image: caminoGalicia,
    tags: ["Next.js", "TypeScript", "Express", "PostgreSQL", "Vercel"],
    highlights: [
      {
        es: "Una instancia por cliente: base de datos, despliegue y marca propios desde un único fichero de configuración",
        en: "One instance per client: its own database, deployment and branding from a single config file",
      },
      {
        es: "Web en gallego, castellano e inglés, con SEO y generación estática",
        en: "Site in Galician, Spanish and English, with SEO and static generation",
      },
      {
        es: "API por capas con migraciones y despliegue automático",
        en: "Layered API with migrations and automated deployment",
      },
    ],
    press: {
      outlet: "G24",
      title: "Nace unha axencia de peregrinos que dá servizo a todos os camiños de Santiago",
      url: "https://www.g24.gal/-/nace-unha-axencia-de-peregrinos-que-da-servizo-a-todos-os-caminos-de-santiago",
      date: "2026-08-25",
    },
  },
  {
    title: "Arenas de Alcabre",
    client: { es: "Arenas de Alcabre S.C.D.", en: "Arenas de Alcabre S.C.D." },
    description: {
      es: "Web y panel de gestión de un club de fútbol base de Vigo: noticias, equipos y plantillas, directiva, documentación e inscripciones de jugadores.",
      en: "Website and management panel for a youth football club in Vigo: news, teams and squads, board, documents and player sign-ups.",
    },
    site: "https://www.arenasdealcabre.com",
    image: arenasDeAlcabre,
    tags: ["React", "Vite", "Tailwind", "Express", "PostgreSQL"],
    highlights: [
      {
        es: "Panel de administración: noticias con editor enriquecido, jugadores, equipos y páginas editables",
        en: "Admin panel: news with a rich-text editor, players, teams and editable pages",
      },
      {
        es: "Formulario de inscripción y contacto con avisos por correo",
        en: "Sign-up and contact forms with email notifications",
      },
      {
        es: "Web bilingüe (gallego y castellano) con login y gestión de imágenes",
        en: "Bilingual site (Galician and Spanish) with login and image management",
      },
    ],
  },
]

export const projects: Project[] = [
  {
    title: "The Pandogs Games",
    description: {
      es: "Nuestro estudio indie: Polaris, Hop-Hop! Pandog!, KnightMadness, Planet Defenders y Mad Bird, todos jugables gratis. Hecho en equipo entre programación, arte, música y diseño.",
      en: "Our indie studio: Polaris, Hop-Hop! Pandog!, KnightMadness, Planet Defenders and Mad Bird, all free to play. A team effort across programming, art, music and design.",
    },
    site: "https://thepandogsgames.com",
    tags: ["Unity", "C#", "Game design", "Pixel art"],
    image: pandogsGames,
    wide: true,
  },
  {
    title: "AppRestaurante",
    description: {
      es: "Gestión de mesas y comandas de un restaurante con login de usuarios y persistencia en MySQL.",
      en: "Table and order management for a restaurant, with user login and MySQL persistence.",
    },
    repo: "https://github.com/ThePandogs/APP_RestaurantManagement",
    tags: ["Java", "Swing", "MySQL"],
    image: appRestaurant,
    preview: "projects/app-restaurant.gif",
  },
  {
    title: "Falling Blocks",
    description: {
      es: "Juego de bloques inspirado en Tetris con pieza fantasma, puntuación y pausa. Proyecto personal y no comercial.",
      en: "A Tetris-inspired block game with ghost piece, scoring and pause. A personal, non-commercial project.",
    },
    repo: "https://github.com/ThePandogs/Falling-Blocks-Game",
    tags: ["Java", "Swing"],
    image: fallingBlocks,
    preview: "projects/falling-blocks.gif",
  },
  {
    title: "CopyBamboo",
    description: {
      es: "Organizador automático de archivos: los clasifica por fecha (creación, metadatos o modificación) y por tipo, con renombrado opcional.",
      en: "Automatic file organiser: sorts files by date (creation, metadata or last modified) and by type, with optional renaming.",
    },
    repo: "https://github.com/ThePandogs/CopyBamboo",
    tags: ["Java", "Maven"],
  },
  {
    title: "PokerDQN",
    description: {
      es: "Experimento de aprendizaje por refuerzo: un agente Deep Q-Network que aprende a jugar al póker.",
      en: "A reinforcement learning experiment: a Deep Q-Network agent that learns to play poker.",
    },
    repo: "https://github.com/ThePandogs/PokerDQN",
    tags: ["Python", "AI"],
  },
]

export const stack: { group: L; items: string[] }[] = [
  { group: { es: "Web", en: "Web" }, items: ["TypeScript", "React", "Next.js", "Astro", "Tailwind CSS"] },
  { group: { es: "Backend", en: "Backend" }, items: ["Node.js", "Express", "REST", "JWT"] },
  {
    group: { es: ".NET", en: ".NET" },
    items: ["C#", "VB.NET", "WPF", "Windows Forms", "SOAP", "LINQ", "Crystal Reports"],
  },
  { group: { es: "Datos", en: "Data" }, items: ["PostgreSQL", "SQL Server", "MySQL"] },
  { group: { es: "Java y Python", en: "Java & Python" }, items: ["Java", "Swing", "Maven", "Python"] },
  { group: { es: "Herramientas", en: "Tools" }, items: ["Git", "GitHub Actions", "Vercel"] },
]
