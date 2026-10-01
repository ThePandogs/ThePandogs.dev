import { url } from "@/lib/url"

export const languages = { es: "Español", en: "English" } as const
export type Lang = keyof typeof languages
export const defaultLang: Lang = "es"

/** Ruta de la home en cada idioma: el español vive en la raíz y el inglés en /en/. */
export function homePath(lang: Lang) {
  return lang === defaultLang ? url() : url(`${lang}/`)
}

export const ui = {
  es: {
    "meta.description": "{name} ({alias}), {role} en {location}. .NET, desarrollo web full-stack y videojuegos.",
    "nav.label": "Principal",
    "nav.experience": "Experiencia",
    "nav.clients": "Webs",
    "nav.projects": "Proyectos",
    "nav.about": "Sobre mí",
    "nav.contact": "Contacto",
    "nav.theme": "Cambiar tema",
    "nav.language": "Read in English",
    "hero.available": "Abierto a nuevas oportunidades",
    "hero.greeting": "Hola, soy Carlos.",
    "hero.cta": "Hablemos",
    "hero.photoAlt": "Retrato de {name}",
    "section.experience": "Experiencia",
    "section.clients": "Webs en producción",
    "section.projects": "Proyectos personales",
    "section.about": "Sobre mí",
    "section.contact": "Contacto",
    "experience.before": "Antes de programar",
    "experience.education": "Formación",
    "clients.visit": "Ver la web",
    "clients.private": "Código privado",
    "clients.open": "Abrir {host}",
    "clients.screenshotAlt": "Página de inicio de {client}",
    "clients.press": "En la prensa",
    "projects.code": "Código de {title} en GitHub",
    "projects.open": "Abrir {title}",
    "projects.screenshotAlt": "Captura de {title}",
    "contact.title": "¿Tienes un proyecto o una oferta en mente?",
    "contact.body": "Escríbeme y te respondo lo antes posible. También me encontrarás en LinkedIn y GitHub.",
    "contact.copy": "Copiar",
    "contact.copied": "¡Copiado!",
    "contact.copyError": "No se pudo copiar",
    "404.title": "Página no encontrada",
    "404.heading": "Aquí no hay nada",
    "404.body": "La página que buscas no existe o se ha movido.",
    "404.back": "Volver al inicio",
  },
  en: {
    "meta.description": "{name} ({alias}), {role} based in {location}. .NET, full-stack web development and video games.",
    "nav.label": "Main",
    "nav.experience": "Experience",
    "nav.clients": "Live work",
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.theme": "Toggle theme",
    "nav.language": "Leer en español",
    "hero.available": "Open to new opportunities",
    "hero.greeting": "Hi, I'm Carlos.",
    "hero.cta": "Let's talk",
    "hero.photoAlt": "Portrait of {name}",
    "section.experience": "Experience",
    "section.clients": "Live websites",
    "section.projects": "Personal projects",
    "section.about": "About me",
    "section.contact": "Contact",
    "experience.before": "Before coding",
    "experience.education": "Education",
    "clients.visit": "Visit site",
    "clients.private": "Private source code",
    "clients.open": "Open {host}",
    "clients.screenshotAlt": "Home page of {client}",
    "clients.press": "In the press",
    "projects.code": "{title} source code on GitHub",
    "projects.open": "Open {title}",
    "projects.screenshotAlt": "Screenshot of {title}",
    "contact.title": "Got a project or an opportunity in mind?",
    "contact.body": "Drop me a line and I'll get back to you as soon as I can. You can also find me on LinkedIn and GitHub.",
    "contact.copy": "Copy",
    "contact.copied": "Copied!",
    "contact.copyError": "Couldn't copy",
    "404.title": "Page not found",
    "404.heading": "Nothing here",
    "404.body": "The page you're looking for doesn't exist or has moved.",
    "404.back": "Back to home",
  },
} as const

export type UiKey = keyof (typeof ui)["es"]

/** Devuelve la función de traducción de un idioma, con sustitución de {variables}. */
export function useTranslations(lang: Lang) {
  return (key: UiKey, vars: Record<string, string> = {}) =>
    ui[lang][key].replace(/\{(\w+)\}/g, (_, name: string) => vars[name] ?? `{${name}}`)
}

export function formatDate(date: string, lang: Lang) {
  return new Intl.DateTimeFormat(lang === "es" ? "es-ES" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date))
}
