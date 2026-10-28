# El teléfono: un viaje por el tiempo — Adriana Ojeda

Sitio web interactivo para la exposición de 2° básico de la Escuela Litoral Austral. Diseño beige cálido con 16 diapositivas, seis fotografías proporcionadas por el usuario, video local y un cuestionario de cuatro preguntas.

## Probar en un computador

Abre `index.html` en Chrome, Edge o Firefox. No requiere instalación, conexión a internet ni servidor. Para pantalla completa usa el botón **Presentar**. Navega con las flechas de la parte inferior o del teclado.

Las fotos están en `assets/fotos/` y el video en `assets/video/`. Todo está incluido para funcionar sin conexión.

## Publicar gratis en GitHub Pages

1. Crea un repositorio **público** en github.com/new; por ejemplo `el-telefono-adriana`.
2. Descomprime el ZIP. En el repositorio selecciona **Add file → Upload files**.
3. Sube todos los archivos y carpetas **de dentro** de la carpeta del proyecto, de manera que `index.html` quede en la raíz del repositorio, junto a `app.js`, `styles.css` y `assets/`.
4. Confirma los cambios con **Commit changes**.
5. Ve a **Settings → Pages**. En **Build and deployment**, selecciona **Deploy from a branch**, rama `main` y carpeta `/(root)`, y guarda.
6. La URL pública tendrá el formato: `https://TU-USUARIO.github.io/el-telefono-adriana/`. Reemplaza `TU-USUARIO` por tu usuario real.

## Contenido y accesibilidad

- 16 diapositivas, con índice, navegación por flechas, pantalla completa, fotos, juego y video.
- La diapositiva de juego permite seleccionar Verdadero o Falso y luego usar el botón **Siguiente pregunta**. El cuestionario tiene cuatro preguntas y muestra resultado final. El botón de navegación inferior sigue avanzando entre diapositivas.
- En celulares y pantallas pequeñas, la composición cambia a una columna y permite desplazar dentro de la diapositiva si fuera necesario.
- `GUION_PARA_PRACTICAR.txt` es un documento separado y **no aparece en la presentación**.
- En la carpeta `assets/fotos` hay versiones WebP de las seis imágenes que aportó la familia. No dependen de Wikimedia u otros servidores.

## Licencias de las fotografías

Las seis fotografías fueron aportadas por la familia, pero no se han verificado los términos de uso de cada fotografía. Antes de hacer público el sitio conviene revisar sus fuentes originales y permisos de reutilización, y agregar atribución donde corresponda.

## Modificaciones

Para cambiar textos/diapositivas: `app.js`. Para modificar colores/tipografías: `styles.css`. Para cambiar fotos: reemplaza el WebP correspondiente por otra imagen con el mismo nombre.
