/** Modifica el código anterior de manera que si el usuario 
 * introduce el flag --novocals no se tengan en cuenta las 
 * vocales.
 */

var minimist = require('minimist');

var argv = require('minimist')(process.argv.slice(2));

let phrase0 = argv['_'].pop()
let novocals = argv['novocals']
let novocalsRegex = /[aeiou\ ]/gi

let charsOccurrences = getCharsOccurrences(phrase0);
printOccurrences(charsOccurrences);
getPhraseStdin();

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

    if(novocals){
        phrase = phrase.replace(novocalsRegex, "")
    } else {
        phrase = phrase.replace(/[\ ]/g, "")
    }

	while (phrase.length > 0) {
		let char = phrase.charAt(0);

		if (!Object.keys(occurrences).includes(char)) {
                occurrences[char] = countOccurrences(char, phrase);
        }
		phrase = phrase.slice(1);
	}
	return occurrences;
}

function combineCharsOccurrences(charsOccurrences1, charsOccurrences2) {
	Object.keys(charsOccurrences1).forEach((key) => {
		if (charsOccurrences2[key] != undefined) {
			charsOccurrences2[key] = charsOccurrences1[key] + charsOccurrences2[key];
		} else {
			charsOccurrences2[key] = charsOccurrences1[key];
		}
	});
	return charsOccurrences2;
}

function getPhraseStdin() {
	process.stdin.setEncoding("utf8");
	process.stdin.resume();

	// Enter any texts ( User input)
	process.stdin.on("data", function (newPhrase) {
		process.stdout.write("Usuario: " + newPhrase);
		newCharsOccurrences = getCharsOccurrences(newPhrase.replace("\r\n", ""));
		charsOccurrences = combineCharsOccurrences(newCharsOccurrences, charsOccurrences);
		printOccurrences(charsOccurrences);
	});
}

// process.stdin.on("end", function () {
//     process.stdout.write("end");
// });
