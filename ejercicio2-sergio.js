/**
 * Ejemplo: `node index.js "Esta es la frase"`
 * ⇒ index.js: "e: 2, s: 3, t:1, a: 3, l: 1, f: 1, r:1"
 *
 * Pista de una posible solución: usar un objeto como
 * diccionario y método Object.keys()
 *
 * */

// Solución de sergio

function printColection(colection) {
	for (let [key, value] of colection) {
		console.log(`${key}' : ${value.val}`);
	}
}

function arriquitaun(frase) {
	let colection = new Map();
	[...frase].forEach((element) => {
		if (colection.has(element)) {
			colection.get(element).val++;
		} else {
			if (element !== " ") {
				colection.set(element, { val: 1 });
			}
		}
	});

	return colection;
}

const frase = process.argv[2];

const colection = arriquitaun(frase);

printColection(colection);

/**
 * Modoficar el ejercicio anterior y usar minimist
 */
// // Modifica el código anterior de manera que si el usuario introduce el flag --novocals no se tengan en cuenta las vocales
// // Recuerda el módulo minimist

var argv = require('minimist')(process.argv.slice(2));