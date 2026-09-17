import type { MetadataRoute } from "next";

// TEMPORAL: bloqueo total de rastreo mientras la web está en construcción.
// Antes del lanzamiento definitivo hay que revertirlo.
// Ver docs/NOINDEX-PENDIENTE.md
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
  };
}
