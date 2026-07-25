# ¿Destino o Programación Ancestral? — Landing page

Página web estática (solo HTML/CSS/JS, sin backend) para la venta del libro
de María Andrea Russi.

## Archivos
- `index.html` — contenido, estructura y las 3 imágenes del libro
  (tapa, contratapa y foto del evento) ya incrustadas dentro del propio
  archivo, para que no dependan de ninguna carpeta ni nombre de archivo.
- `styles.css` — estilos y diseño visual
- `script.js` — animaciones al hacer scroll

Ya no hace falta subir una carpeta `images/` aparte: las fotos viajan
adentro del `index.html`, así que con subir estos 3 archivos alcanza.

## Cómo publicarla en GitHub Pages

1. Creá un repositorio nuevo en GitHub (por ejemplo `libro-destino-o-programacion`).
2. Subí `index.html`, `styles.css` y `script.js` (los 3 archivos, en la raíz
   del repositorio, sin ponerlos dentro de ninguna carpeta).
   - Podés arrastrarlos desde la web de GitHub ("Add file" → "Upload files"),
     o con git:
     ```bash
     git init
     git add .
     git commit -m "Landing page del libro"
     git branch -M main
     git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
     git push -u origin main
     ```
3. En el repositorio, andá a **Settings → Pages**.
4. En "Branch" elegí `main` y la carpeta `/ (root)`, luego **Save**.
5. En un par de minutos GitHub te va a dar la URL pública, algo como:
   `https://TU-USUARIO.github.io/TU-REPO/`

## Datos que ya están cargados
- WhatsApp: 095 428 693 (Uruguay) → los botones abren `wa.me` con un mensaje
  predefinido.
- Instagram: `@equilibra21`
- Precio: $850, envío a todo el país pagado en destino, despacho dentro
  de las 48 hs de realizada la compra.

## Cómo cambiar algo más adelante
- **Precio o texto**: abrí `index.html` con cualquier editor de texto y
  buscá la palabra que querés cambiar (por ejemplo `$850`).
- **Fotos**: como están incrustadas en base64 dentro del `index.html`, para
  reemplazar alguna es más prolijo pedirme que la actualice de nuevo (decime
  cuál foto cambiar y te regenero el archivo).
- **Colores**: están definidos arriba de todo en `styles.css`, dentro de
  `:root { ... }`.
