import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  images: {
    qualities: [85],
  },
  // TEMPORAL: web en construcción, no debe indexarse todavía.
  // Esta cabecera cubre TODAS las respuestas (páginas, imágenes, PDFs...).
  // Ver docs/NOINDEX-PENDIENTE.md antes del lanzamiento definitivo.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow, noarchive, nosnippet, noimageindex",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
