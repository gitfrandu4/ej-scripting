
function printOccurrences(charOccurrences){
    // console.log(Object.keys(charOccurrences))
    Object.keys(charOccurrences).forEach(key => {
        console.log(`${key}: ${charOccurrences[key]}`)
    });
}

function countOccurrences(char, phrase){
    let count = 0;
    for (let index = 0; index < phrase.length; index++) {
        if(phrase[index] === char) count++;        
    }
    return count;
}

function getCharsOccurrences(phrase) {
    const occurrences = []
    while(phrase.length > 0){

        let char = phrase[0]

        if(!Object.keys(occurrences).includes(char)) {
            occurrences[char] = countOccurrences(char, phrase)
        }
        phrase = phrase.slice(1)
    }
    return occurrences;
}

const phrase = process.argv[2]

let charOccurrences = getCharsOccurrences(phrase)

printOccurrences(charOccurrences)