# Prompts para Gemini — Flower Garage Door Repair

> **Estado (28 ago 2026):** entregados y conectados el logo, `hero-garage`,
> `why-garage`, `process-garage` y `home-hero`. No queda ninguna pendiente.
> El nº 7 (`about-garage.jpg`) lo descartó Owen. El nº 2 (logo claro) NO hizo falta
> pedirlo: se generó recoloreando el logo A por luminancia.

Paleta de la marca (usarla literalmente en los prompts):
`#2a0f16` ciruela oscuro · `#b8483c` terracota · `#f5a623` caléndula ·
`#fbf5f1` crema. **Nada de azul, gris frío ni turquesa.**

Cuando lleguen los archivos, guardarlos tal cual (Gemini los devuelve en `.jfif`
de 3–4 MB) y avisarme: yo los convierto a `.jpg`, los recomprimo y los conecto.

---

## 1. LOGO — variante A (para cabecera clara)

> A flat vector logo for a garage door repair company called "Flower Garage Door
> Repair". The mark is a single stylized flower seen from the front: five rounded
> petals arranged around a circular center. Each petal is drawn as a small garage
> door — three horizontal slats separated by thin gaps — so the flower reads as a
> flower first and as garage doors second. The center of the flower is a solid
> circle. Petals in warm marigold #f5a623, center circle in terracotta #b8483c,
> outlines and slat gaps in deep plum #2a0f16. Clean geometric vector style, thick
> confident shapes, flat colors only, no gradients, no shading, no 3D, no bevel,
> no glow. Perfectly symmetrical, centered, with generous empty margin around the
> mark. Square 1:1 composition. Icon only — absolutely no text, no letters, no
> wordmark, no tagline. Background: fully transparent PNG. If transparency is not
> possible, place the mark on a single flat solid #ffffff background with no
> shadow, no gradient and no checkerboard pattern.

## 2. LOGO — variante B (misma marca, para el pie oscuro)

> Same flat vector flower-garage-door logo, identical shapes and proportions, but
> recolored for use on a very dark background: petals in cream #fbf5f1, center
> circle in marigold #f5a623, outlines in cream #fbf5f1. Flat colors, no gradients,
> no shadow. Square 1:1, centered, generous margin. Icon only, no text. Transparent
> PNG background; if not possible, a single flat solid #2a0f16 background, no
> checkerboard.

> **Por qué dos:** el pie de la web es ciruela casi negro. Un logo con contornos
> oscuros desaparece ahí — ya pasó con Optimus.

---

## 3. `hero-garage.jpg` — fondo del hero de las 5 páginas de ciudad

Formato: **16:9 horizontal**, 1920×1080. Va detrás de un velo ciruela oscuro con
el titular en blanco encima, así que tiene que ser una foto **amplia y sin
detalle importante en el centro-izquierda**.

> Wide cinematic photograph of the front of a modern single-family South Florida
> home at golden hour, seen slightly from the left. A large closed sectional garage
> door in warm sand-beige with clean horizontal panels takes the right half of the
> frame. Paver driveway, palm trees, clipped tropical landscaping, stucco walls in
> warm cream and terracotta tones. Late afternoon sunlight, long warm shadows, sky
> in warm amber and soft peach — no blue hour, no cool tones. Photorealistic,
> architectural photography, sharp focus, no people, no cars, no visible text, no
> signage, no brand names, no watermark. Horizontal 16:9 composition with open sky
> and empty wall space on the left side for a headline overlay.

## 4. `why-garage.jpg` — sección "Why {ciudad} chooses Flower"

Formato: **4:3 vertical-ish horizontal**, 1200×900. Se ve entera dentro de una
tarjeta redondeada, con una etiqueta caléndula abajo a la izquierda.

> Photograph of a professional garage door technician working on the torsion
> spring and steel shaft above an open residential garage door. He is on a step
> ladder, hands on the winding bars, wearing a plain warm-terracotta work shirt
> with no logos and no readable text. Inside of a clean suburban garage, warm
> daylight coming in from the driveway, warm neutral tones, cream and sand walls.
> Photorealistic documentary style, natural light, shallow depth of field with the
> spring assembly sharp. No blue or teal color cast anywhere. No visible brand
> names, no license plates, no text, no watermark. Horizontal 4:3 composition,
> technician placed slightly right of center.

## 5. `process-garage.jpg` — sección "How a {ciudad} visit works"

Formato: **4:3**, 1200×900. Es el contrapunto de la anterior: detalle de
herramienta y herraje, no persona entera.

> Close-up photograph of garage door hardware being replaced: a new galvanized
> torsion spring, black nylon rollers and a steel cable drum mounted on the shaft
> above a garage door track. A gloved hand holds a socket wrench on the set screw.
> Clean, well-lit garage interior in warm cream and sand tones, warm daylight from
> the side. Photorealistic macro detail, sharp focus on the spring and hardware,
> softly blurred background. Warm color grade — amber and terracotta highlights, no
> blue or cool grey tint. No text, no brand names, no logos, no watermark.
> Horizontal 4:3 composition.

---

## Opcionales (si las quieres, dímelo y las conecto)

Ahora mismo la home no usa fotos: el hero es un degradado ciruela y el bloque
"About" es una textura de portón dibujada con CSS. Funciona, pero con foto queda
mejor. Si generas estas dos, hay que tocar el CSS (poco):

### 6. `home-hero.jpg` — fondo del hero de la home · **16:9**, 2000×1125

> Wide cinematic photograph of a warm South Florida street of single-family homes
> at sunset, with two closed sectional garage doors visible on the right side of the
> frame. Warm amber and terracotta light, palms, paver driveways, stucco in cream
> and sand. Photorealistic architectural photography, no people, no cars in motion,
> no text, no signage, no watermark. Wide 16:9 composition with clear open space on
> the left third for a large headline overlay. Warm color grade, no blue hour.

### 7. `about-garage.jpg` — bloque "About" de la home · **4:3**, 1200×900

> Photograph of a service van parked in a residential driveway at golden hour with
> its side doors open, showing organized shelves of garage door parts: coiled
> springs, rollers, cables and tools. The van is plain warm terracotta with no logos
> and no text on the body. Warm South Florida suburban background, palms, soft long
> shadows. Photorealistic, warm color grade, no blue tones, no people, no readable
> text, no license plate, no watermark. Horizontal 4:3 composition.

---

## Notas para pedírselas a Gemini

1. **Una imagen por conversación.** Si le pides varias seguidas, arrastra el
   estilo y la proporción de la anterior.
2. **Repetir la proporción al final del prompt** ("horizontal 16:9", "horizontal
   4:3"). Gemini ya ha devuelto cuadrada la foto que iba en hueco panorámico dos
   veces.
3. Si sale con tinte azulado o gris frío, insistir: *"warmer color grade, amber
   and terracotta, remove all blue and teal tones"*.
4. Del logo, pedirle **PNG**. Si devuelve el damero gris pintado (le pasa casi
   siempre), no importa: se desfonda aquí. Lo que sí hay que evitar es que meta
   sombra o degradado detrás del logo.
5. Guardar los originales tal cual llegan; yo los proceso antes de conectarlos.
