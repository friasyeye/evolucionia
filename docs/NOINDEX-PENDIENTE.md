# ⚠️ PENDIENTE: quitar el bloqueo de indexación antes del lanzamiento

**Estado: la web está BLOQUEADA para buscadores.** Puesto el 2026-09-17 para poder
desplegar y enseñarla a clientes potenciales sin que Google la indexe a medias
(indexar una web incompleta perjudica el SEO posterior).

## Qué hay que revertir cuando la web esté terminada

Tres capas, hay que quitar las tres:

1. **`next.config.ts`** — eliminar el bloque `async headers()` que envía
   `X-Robots-Tag: noindex, nofollow, noarchive, nosnippet, noimageindex`.
   Es la capa más fuerte: si esta cabecera sigue puesta, Google no indexará
   aunque el resto esté correcto.

2. **`src/app/robots.ts`** — cambiar el `disallow: "/"` por las reglas
   definitivas (normalmente `allow: "/"` + `sitemap`).

3. **`src/app/layout.tsx`** — borrar el objeto `robots: { index: false, ... }`
   de `export const metadata`.

## Cómo verificar tras el despliegue definitivo

```bash
curl -sI https://TU-DOMINIO/ | grep -i x-robots-tag   # no debe devolver nada
curl -s  https://TU-DOMINIO/robots.txt                # no debe tener Disallow: /
```

Y en el HTML no debe aparecer `<meta name="robots" content="noindex...">`.

## Después de quitarlo

- Crear/publicar `sitemap.ts` y enviarlo en Google Search Console.
- Pedir indexación de la home en Search Console (URL Inspection → Solicitar indexación).
