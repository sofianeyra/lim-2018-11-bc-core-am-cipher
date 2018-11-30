# tuSecret (Cifrado Cesar)

## Resumen del proyecto
Es una página de cifrado y descifrado con el método del cifrado Cesar. Básicamente, es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.


Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

- La letra A se cifra como D.
- La palabra CASA se cifra como FDVD.
- Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

## Definición del producto
La página está orientada a usuarios que quieran enviarse mensajes y no quieran que sus amigxs y familia entiendan la conversación, volviendola secreta. Podrán conversar a traves de cualquier red social con mayor privacidad.

El objetivo de la página es ayudar a proteger la información compartida en mensajes, de esa forma solo los participantes de la conversación puedan entenderla.

En cuestiones de personalización y diseño de la página, utilicé un background con colores gradientes para que la atención del usuario esté centrada en el cifrado y descifrado. Así como el uso de tipografía en color blanco, que "ilumina" la página.

Y un factor importante en toda página,el diseño responsivo, adapté la página para que se visualice adecuadamente en todo dispositivo, como se muestra en la imagen:

![alt text](https://i.ibb.co/7NF4GYZ/responsive.jpg "Page in other Devices")

### Interfaz de usuario (UI)

La interfaz permite al usuario:

- Elegir un código de seguridad (_offset_), indicando cuántas posiciones queremos que el cifrado desplace cada caracter.
- Insertar un mensaje (texto) que queremos cifrar.
- Ver el resultado del mensaje cifrado.
- Insertar un mensaje (texto) a descifrar.
- Ver el resultado del mensaje descifrado.

### Scripts / Archivos

El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias y tests de ejemplo:

```text
./
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── cipher.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── cipher.spec.js
    ├── headless.js
    └── index.html
```
## Recursos y temas relacionados

Diseño de experiencia de usuario (User Experience Design):

- Ideación
- Prototipado (sketching)
- Testeo e Iteración

Desarrollo Front-end:

* Valores
* Tipos
* Variables
* Control de flujo
* Tests unitarios
* [Aprende más sobre `charCodeAt()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/charCodeAt)
* [Aprende más sobre `String.fromCharCode()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/fromCharCode)
* [Aprende más sobre `ASCII`](http://conceptodefinicion.de/ascii/)
* [Documentación de NPM](https://docs.npmjs.com/)
* [Guía de Responsive Web Design](https://developers.google.com/web/fundamentals/design-and-ux/responsive/)

Herramientas:
- GitHub y GitHub Pages.
- [Guía de Scrum](https://www.scrumguides.org/docs/scrumguide/v1/scrum-guide-es.pdf): solamente para comenzar a entender cómo organizar tu trabajo.
