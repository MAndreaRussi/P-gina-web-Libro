# ¿Destino o Programación Ancestral? — Landing page

Página web estática (solo HTML/CSS/JS, sin backend) para la venta del libro
de María Andrea Russi.

## Archivos
- `index.html` — contenido y estructura de la página
- `styles.css` — estilos y diseño visual
- `script.js` — animaciones al hacer scroll
- `images/` — portada, contratapa y foto de presentación del libro

## Cómo publicarla en GitHub Pages

1. Creá un repositorio nuevo en GitHub (por ejemplo `libro-destino-o-programacion`).
2. Subí estos 3 archivos y la carpeta `images/` tal cual están, manteniendo
   los mismos nombres (`index.html`, `styles.css`, `script.js`, `images/portada.jpg`, etc.).
   - Podés hacerlo arrastrando los archivos desde la web de GitHub
     ("Add file" → "Upload files"), o con git:
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
- **Fotos**: reemplazá los archivos dentro de `images/` manteniendo el
  mismo nombre, o cambiá el nombre en el `src="images/..."` correspondiente
  dentro de `index.html`.
- **Colores**: están definidos arriba de todo en `styles.css`, dentro de
  `:root { ... }`.
