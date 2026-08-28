# Flower Garage Door Repair — flowersgaragedoorrepairservice.site

Sitio estático en HTML + CSS puro (sin JavaScript, sin librerías, sin dependencias
externas). Mismo formato que la referencia de Trevino, con paleta cálida propia.

## ⚠️ Antes de publicar

- [ ] **Teléfono real.** El actual, `(561) 703-4820`, es inventado (ver abajo cómo cambiarlo).
- [ ] **Correo real.** `privacy@flowersgaragedoorrepairservice.site` aparece en el
      apartado 7 y en el 12 de `privacy-policy.html` — **2 sustituciones**.
      `service@flowersgaragedoorrepairservice.site` es el correo de contacto del resto del sitio.
- [ ] Enlaces de redes sociales del pie (están en `#`).
- [x] ~~Fotos reales en `img/`~~ — conectadas el 28 ago 2026.
- [x] ~~SEO~~ — hecho el 28 ago 2026 (ver más abajo). Queda lo de fuera del código: Google Business, Search Console y el envío del sitemap.
- [ ] Revisión de un abogado para la política de privacidad.
- [ ] La política declara Google Analytics, Google Ads y Meta Pixel, que **todavía no
      están instalados**. Si al final no se usan, quitar ese apartado.

## Estructura

```
index.html                    ->  /                      home
DelrayBeach/index.html        ->  /DelrayBeach           oficina principal (despacho)
Doral/index.html              ->  /Doral
FortLauderdale/index.html     ->  /FortLauderdale
Jupiter/index.html            ->  /Jupiter
WestPalmBeach/index.html      ->  /WestPalmBeach
privacy-policy.html           ->  /privacy-policy.html
css/styles.css                ->  estilos base (header, navbar, footer, botones, tarjetas)
css/location.css              ->  componentes de las páginas de ubicación
img/                          ->  logo + fotos (ver img/LEEME.txt)
robots.txt  ·  sitemap.xml
```

Cada carpeta con `index.html` genera la URL limpia (`/WestPalmBeach`).
Subí todo a la raíz del hosting.

## Datos del negocio

| Dato | Valor actual |
|---|---|
| Marca | Flower Garage Door Repair |
| Dominio | flowersgaragedoorrepairservice.site |
| Teléfono | +1 (561) 703-4820 — *inventado, cambiar* |
| Email | service@flowersgaragedoorrepairservice.site |
| Despacho principal | 550 SE 6th Ave, Ste 17, Delray Beach, FL 33483 |
| Horario | Lun–Sáb 7:00 AM – 9:00 PM · Dom y feriados: emergencias 24/7 |

### Cambiar el teléfono

Aparece en 3 formatos. Buscar y reemplazar en los 7 archivos `.html`:

1. `+15617034820` → en los `href="tel:..."` (96 apariciones)
2. `(561) 703-4820` → texto visible (33)
3. `+1-561-703-4820` → dentro del JSON-LD (schema.org) (10)

### Coverage areas

| Ciudad | URL | Dirección | Condado |
|---|---|---|---|
| Delray Beach | /DelrayBeach | 550 SE 6th Ave, Ste 17, Delray Beach, FL 33483 | Palm Beach |
| Doral | /Doral | 6700 NW 77th Ct, Unit 1017, Doral, FL 33122 | Miami-Dade |
| Fort Lauderdale | /FortLauderdale | 599 SW 2nd Ave, Fl 191, Fort Lauderdale, FL 33301 | Broward |
| Jupiter | /Jupiter | 601 Heritage Dr, Ste 3003, Jupiter, FL 33458 | Palm Beach |
| West Palm Beach | /WestPalmBeach | 500 S Australian Ave, Fl 10, West Palm Beach, FL 33401 | Palm Beach |

La home enlaza a las cinco desde "Coverage Areas"; cada página de ciudad enlaza a
las otras cuatro en "Other nearby locations". Cada una lleva su propio JSON-LD
`HomeAndConstructionBusiness` con su dirección, y la home las declara como `department`.

## Las 5 páginas de ubicación

Idénticas en estructura; sólo cambian ciudad, dirección, ZIP, mapa, barrios y el
texto de conocimiento local. Secciones, en orden:

1. Header sticky — logo, navbar estándar, botón *Call Now*
2. Hero — breadcrumb `Home / Locations / Ciudad`, badge `FL · ZIP`, H1 con ciudad + ZIP,
   párrafo, botones *Call* y *See the coverage map*, y 4 tarjetas de garantía
3. Mapa + tarjeta **Garage door service in {Ciudad} — coverage** (despacho, teléfono, email, horario)
4. **Why {ciudad} chooses Flower** — foto + 5 puntos con check *(id `#about`)*
5. **How a {ciudad} visit works** — 4 puntos de proceso + foto
6. **Our Garage Door Services in {ciudad}** — 6 tarjetas con `id` propio
7. Nota de conocimiento local (texto propio de cada ciudad)
8. **Where we work in {ciudad}** — píldoras de barrios
9. **Other nearby locations** — tarjetas a las otras 4 (interlinking)
10. Banda CTA *Ready to fix that door?*
11. Footer de 4 columnas + barra de llamada fija en móvil

## Navbar estándar

Los cinco apartados de siempre, iguales en las 7 páginas: **Home · Services
(desplegable) · About us · Contact · Privacy policy**, más el botón *Call Now*.

El desplegable de Services **no lleva JavaScript**: abre con `:hover` y con
`:focus-within`, tiene puente invisible sobre el hueco, fondo dorado `#f5a623`
(tokens `--drop-bg` / `--drop-ink`) y las cinco subsecciones de siempre: Garage
Door Repair, Installation, Springs, Openers, Overhead Doors. En móvil el panel
pasa a `position: static` y queda desplegado dentro del menú.

## Reglas de contenido aplicadas

- **Sin precios** de ningún tipo, ni promesas de tarifa ("free estimate", "flat
  pricing", `priceRange`). Se sustituyen por promesas de proceso: *written
  estimate before we start*, *measured on site*, *same crew at night and on weekends*.
- **Sin reseñas ni testimonios.** En su lugar: "The three calls we get every day"
  en la home y las píldoras de barrios en las páginas de ciudad.
- **Sin "licensed and insured"** ni credenciales. En su lugar: horario, cobertura,
  garantía de mano de obra y *someone answers at 3 AM*.
- **Oficina remota:** las direcciones se presentan como *dispatch point*, nunca se
  invita al cliente a acercarse. El encuadre es **"we come to you"**.

## Paleta

Ciruela profunda + terracota + caléndula, en variables CSS al inicio de
`css/styles.css`. Ni un azul en todo el sitio:

- `--deep-900 #2a0f16`, `--deep-800 #431a22`, `--deep-700 #5f2630`, `--deep-600 #83343a`
- `--rose #b8483c`, `--rose-dark #93332d`
- `--accent #f5a623` (caléndula), `--accent-dark #d5860a`, `--accent-light #ffd08a`
- Neutros cálidos: `--ink #2c1a16`, `--body #6b564e`, `--line #ecdcd4`, `--bg-soft #fbf5f1`

Cambiando esas variables cambia el color de todo el sitio (el dorado del
desplegable es deliberadamente el mismo en todas las marcas: no se repaletiza).

## SEO (28 ago 2026)

Se aplicó el baseline de las landings anteriores (modelo Ursavior) y algo más.

**En el `<head>` de las 7 páginas:**

- `<title>` y `<meta description>` únicos, con la palabra clave delante
  ("Garage Door Repair in {Ciudad}, FL {ZIP} | …") y dentro del largo útil.
- `canonical` propio · `robots: index, follow, max-image-preview:large`.
- Open Graph completo **con `og:image` absoluto** (`home-hero.jpg` en la home,
  `hero-garage.jpg` en las ciudades) + Twitter `summary_large_image`.
- `theme-color`, `apple-touch-icon` y `geo.region` / `geo.position` / `ICBM`.
- `<link rel="preload" as="image" fetchpriority="high">` del hero: es el LCP de
  la página y así no espera a que el CSS descubra el `background-image`.
- No hay webfonts: la tipografía es de sistema, así que no hay `@import` que
  quitar ni `preconnect` que añadir.

**Datos estructurados (JSON-LD), validados:**

| Página | Bloques |
|---|---|
| Home | `HomeAndConstructionBusiness` (con `geo`, `image`, `logo`, `hasOfferCatalog` de 7 servicios y las 4 ciudades como `department`) + **`FAQPage`** con las 7 preguntas visibles |
| Cada ciudad | `@graph` con `HomeAndConstructionBusiness` propio (dirección, `geo`, `areaServed` ciudad + condado, `hasOfferCatalog`, `parentOrganization`) + **`BreadcrumbList`** |

**Nunca** `aggregateRating` ni `review`: no hay reseñas reales. Tampoco
`priceRange`, por la regla de precios.

⚠️ Las coordenadas `geo` son **aproximadas a la manzana**, sacadas de la
dirección. Si alguna ficha de Google Business tiene el pin exacto, conviene
copiarlo (están en el `<head>` y en el JSON-LD de cada página, y en `gen.sh`).

**Estructura y enlazado:**

- Un solo `<h1>` por página, con ciudad + ZIP en las de ubicación.
- Cada tarjeta de servicio tiene su `id` (`#repair`, `#installation`, `#springs`,
  `#openers`, `#overhead`, `#emergency`, `#cables`) y **el desplegable de Services
  apunta a ellos** en vez de todo a `#services`. En las páginas de ciudad se
  cambió "Preventive Maintenance" por "Overhead & Commercial Doors" para que el
  menú, la rejilla de servicios y la home hablen del mismo catálogo.
- Migas de pan reales (`<nav aria-label="Breadcrumb">`) en las 5 ciudades.
- `sitemap.xml` con `lastmod`, prioridades y extensión de imágenes;
  `robots.txt` bloquea `/img/_originales/`.
- Accesibilidad, que también se lee como calidad: `aria-hidden` en los iconos
  decorativos, `aria-label` en el nav y en el logo, y `role="img"` +
  `aria-label` descriptivo en los dos bloques de foto que van por CSS (son
  `background-image`, así que sin eso no tenían texto alternativo).

**Lo que queda fuera del código** (no lo puedo hacer yo): dar de alta el perfil
de Google Business con esta dirección, verificar el dominio en Search Console y
enviar el sitemap, y conseguir citas NAP coherentes. El teléfono inventado
bloquea las tres cosas.

## Imágenes (conectadas el 28 ago 2026)

| Archivo | Dónde se usa | Tamaño |
|---|---|---|
| `img/logo.png` | logo de la cabecera, en las 7 páginas | 512×512, alfa real |
| `img/logo-light.png` | el mismo logo con contorno crema, para el **pie oscuro** | 512×512, alfa real |
| `img/home-hero.jpg` | fondo del hero de la home | 1920×1072 · 413 KB |
| `img/hero-garage.jpg` | fondo del hero de las 5 páginas de ciudad | 1920×1072 · 309 KB |
| `img/why-garage.jpg` | "Why {ciudad} chooses Flower" | 1200×896 · 121 KB |
| `img/process-garage.jpg` | "How a {ciudad} visit works" | 1200×896 · 116 KB |

Total servido: **1,33 MB** (los originales de Gemini pesaban 16 MB). Los `.jfif`
originales están en `img/_originales/`: si hay que recomprimir, se relee de ahí.

**El logo va en dos archivos a propósito.** El pie es ciruela casi negro y el
contorno del logo es `#2a0f16`: con el logo normal desaparecería. Si se cambia el
logo hay que regenerar los dos.

Owen descartó la opcional `about-garage.jpg` (28 ago 2026): el bloque "About" de
la home se queda con la textura de portón dibujada con CSS.
Los prompts de Gemini de todas las imágenes están en `img/PROMPTS.md`.
