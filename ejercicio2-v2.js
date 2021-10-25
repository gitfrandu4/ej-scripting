/** Modifica el ejercicio anterior para que el usuario
 * pueda seguir introduciendo frases y se vayan acumulando
 * los resultados
 */

const { log } = require("console");

const phrase = process.argv[2];
let charsOccurrences = getCharsOccurrences(phrase);
printOccurrences(charsOccurrences);
getPhraseStdin()

function printOccurrences(charOccurrences) {
	// console.log(Object.keys(charOccurrences))
	Object.keys(charOccurrences).forEach((key) => {
		console.log(`${key}: ${charOccurrences[key]}`);
	});
}

function countOccurrences(char, phrase) {
	let count = 0;
	for (let index = 0; index < phrase.length; index++) {
		if (phrase[index] === char) count++;
	}
	return count;
}

function getCharsOccurrences(phrase) {
	const occurrences = [];
	while (phrase.length > 0) {
		let char = phrase[0];

		if (!Object.keys(occurrences).includes(char)) {
			occurrences[char] = countOccurrences(char, phrase);
		}
		phrase = phrase.slice(1);
	}
	return occurrences;
}

function combineCharsOccurrences(charsOccurrences1, charsOccurrences2){

    Object.keys(charsOccurrences1).forEach((key) => {

        if (charsOccurrences2[key] != undefined) {
            charsOccurrences2[key] = charsOccurrences1[key] + charsOccurrences2[key]
        } else {
            charsOccurrences2[key] = charsOccurrences1[key]
        }
	});
		return charsOccurrences2;
}

function getPhraseStdin(){

        process.stdin.setEncoding("utf8");
        process.stdin.resume();
    
        // Enter any texts ( User input)
        process.stdin.on("data", function (newPhrase) {
            process.stdout.write("Usuario: " + newPhrase);
            newCharsOccurrences = getCharsOccurrences(newPhrase.replace("\r\n", ""))
            charsOccurrences = combineCharsOccurrences(newCharsOccurrences, charsOccurrences)
            printOccurrences(charsOccurrences)
        });   
}

// process.stdin.on("end", function () {
//     process.stdout.write("end");
// });

