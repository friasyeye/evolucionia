import type { MetadataRoute } from "next";

const BASE_URL = "https://evolucionia.com";

const STATIC_PATHS = [
  "",
  "/servicios",
  "/servicios/automatizacion-de-procesos",
  "/casos-de-exito",
  "/casos-de-exito/mao-studio",
  "/casos-de-exito/montea-arquitectura",
  "/casos-de-exito/obras-insignia",
  "/casos-de-exito/eko-tour",
  "/casos-de-exito/decor-revestimientos",
  "/contacto",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return STATIC_PATHS.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));
}
