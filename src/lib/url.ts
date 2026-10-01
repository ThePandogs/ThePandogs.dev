/** Prefija una ruta con el `base` configurado en astro.config.mjs. */
export function url(path = "") {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "")
  return `${base}/${path.replace(/^\//, "")}`
}
