let countString = (string="", w="") => {
    count = 0;
    while (string.indexOf(w)!==-1 && w!==""){
        string = string.slice(string.indexOf(w)+1)
        count++
    }
    return count;
}

// https://nodejs.org/api/process.html#process_process_argv
const frase = process.argv[2]
const word = process.argv[3]

console.log(`El número de apariciones de '${word}' es: ` + countString(frase, word))