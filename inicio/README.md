# Kit Infantil de Jiu-Jitsu Creativo

Landing estática lista para subir a GitHub y publicar en un alojamiento web.

## Archivos
- `index.html`: página principal.
- `styles.css`: estilos.
- `app.js`: galería y preguntas frecuentes.
- `assets/`: imágenes, tipografías, favicon y estilos de fuentes.

## Subir y publicar
1. Descomprime el ZIP.
2. Sube **todo su contenido** a la raíz del repositorio, conservando la carpeta `assets/` y los nombres de archivo. `index.html` debe quedar en la raíz, no dentro de otra carpeta.
3. Un repositorio de GitHub por sí solo no publica la página: activa GitHub Pages o conecta el repositorio a tu alojamiento estático.
4. Para un alojamiento estático, usa la raíz del repositorio como carpeta de publicación. No requiere instalación de dependencias ni comando de build.
5. Abre la URL publicada y comprueba las imágenes, la galería y el botón de compra.

Puedes abrir `index.html` localmente para revisar el diseño. Los servicios externos de medición y el checkout necesitan conexión a internet; verifica la medición también en la URL final.

## Configuración conservada
- Precio mostrado: US$14.99.
- Compra: https://pay.hotmart.com/R108017189H?checkoutMode=10
- Botón: “Quiero que mi hijo aprenda Jiu-Jitsu jugando”.
- Los enlaces internos a la oferta usan `#planes`.
- Meta Pixel y UTMify conservan los scripts y los identificadores actuales. Las fuentes y las imágenes son locales; las rutas relativas permiten publicar en una subcarpeta.

## Antes de publicar
La versión actual conserva la etiqueta `noindex,nofollow`, que pide a los buscadores no indexar la página. Si deseas posicionarla en buscadores, revisa esa etiqueta en `index.html`.
También conserva el texto de preguntas frecuentes que indica que las condiciones de licencia para academias están pendientes de definir. Revisa ese punto antes de promocionar ese uso.
Revisa las obligaciones de privacidad y consentimiento aplicables a tus herramientas de medición.
