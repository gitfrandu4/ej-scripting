# Scripting

**Miniejercicios**:

**Ejercicio 1**: Crea un script el cual recibe dos parámetros, el primero es una frase y el segundo será un carácter o una palabra a buscar. Tu script escribirá en consola el número de apariciones.

Ejemplo : `node index.js "Esta es la frase" a`

```bash
⇒ index.js: "El número de apariciones de 'a' es 3"
```

Solución: [Ejercicio 1](ejercicio1.js)

**Ejercicio 2**: Crea un script el cual recibe un parámetro. El parámetro será una frase y tu script escribirá en consola el número de apariciones de cada carácter distinto dentro de la frase.

Ejemplo: `node index.js "Esta es la frase"`

```bash
⇒ index.js: "e: 2, s: 3, t:1, a: 3, l: 1, f: 1, r:1"
```

Pista de una posible solución: usar un objeto como diccionario y método `Object.keys()`

Solución: [Ejercicio 2](ejercicio2.js)

**Ejercicio 2 v2**:

Modifica el ejercicio anterior para que el usuario pueda seguir introduciendo frases y se vayan acumulando los resultados

Ejemplo:

```bash
node index.js "Esta es la frase"

index.js: "e: 2, s: 3, t:1, a: 3, l: 1, f: 1, r:1"
 index.js: "Introduce otra frase"

Usuario : "otra"
index.js: "e: 2, s: 3, t:2, a: 4, l: 1, f: 1, r:2"
```

Pista: `process.stdin`

Solución: [Ejercicio 2v2](ejercicio2-v2.js)

## Módulos

Por ejemplo:

-   [Lodash](https://lodash.com/) - A JavaScript utility library delivering consistency, modularity, performance, & extras.
-   [minimist](https://www.npmjs.com/package/minimist) - Module for parse argument options
-   [Moment.js](https://momentjs.com/) - Parse, validate, manipulate,
    and display dates and times in JavaScript.

**Ejercicio 3**:

Modifica el código anterior ([Ejercicio 2v2](ejercicio2-v2.js)) de manera que si el usuario introduce el flag `--novocals` no se tengan en cuenta las vocales.

Ejemplo: 

```bash
node .\ejercicio3.js  "Aprendiendo scripting" --novocals=true

index.js: "p: 2, r: 2, n: 3, d: 2, s: 1, c: 1, t: 1 g: 1"
```

Solución: [Ejercicio 3](ejercicio3.js)

**Ejercicio 4**:

Modifica el código anterior de manera que si el usuario introduce el flag `--onlywords` se cuentan las apariciones de las distintas palabras.

Ejemplo: 

```bash
node .\ejercicio3.js  "Aprendiendo scripting" --novocals=true

index.js: "Aprendiendo: 1, scripting: 1"
```

Solución: [Ejercicio 4](ejercicio4.js)


### Web scrapping

Ejercicio para practicar scripting.

Módulos que vamos a utilizar para hacer peticiones: 
-   http
-   request
-   [axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js

    ```javascript
    var axios = require("axios");
    var urlWeb = "https://www.mediamarkt.es/es/category/_port%C3%A1tiles-701175.html";
    axios.get(urlWeb).then((response) => {
    	console.log(typeof response.data); // string

    	const posBodyInit = response.data.indexOf("<body");
    	const posBodyEnd = response.data.indexOf("</body>");
    	const aux = response.data.substring(posBodyInit, posBodyEnd);

    	console.log(typeof aux); // string :O
    });
    ```

Módulo para manipular el HTML con jQuery:

-   [cheerios](https://github.com/cheeriojs/cheerio)

    ```javascript
    var axios = require('axios');

    var cheerio = require('cheerio');

    var urlWeb = 'https://airbnb.com';

    axios.get(urlWeb).then(response => {
    var $ = cheerio.load(response.data);
    console.log($('.casa')); // :O So Sexy
    })
    ```

En la terminal de nuestro proyecto:

```bash
npm init
npm install axios
npm install cheerios
````
