const input = require('fs').readFileSync('stdin', 'utf8');

const lines = input.split('\n');


class Crypt { constructor(msg) { this.msgArray = msg; }

encrypted(){
    const arraynovo = [];
    this.msgArray.forEach((val) => {
        let letter = this.lettersRight(val);
       arraynovo.push(letter);
    });
    arraynovo.reverse();
    this.lettersLeft(arraynovo);

}

lettersLeft(array){
    const lastArray = [];
    let half1 = [];
    let half2 = [];
    const even = parseInt(array.length / 2);
    const odd = parseInt((array.length / 2) + 1);

    if (array.length % 2 === 0){
        half1 = array.slice(0, even);
        half2 = array.slice(-even); 
    }else{
    half1 = array.slice(0, even);
    half2 = array.slice(-odd);
    }

    half1.forEach(i => lastArray.push(i));

    half2.forEach(i =>{

        let code = i.charCodeAt();
        let newLetter = String.fromCharCode(code-1);

         lastArray.push(newLetter);
    });

    return lastArray.join('');

}

lettersRight(letter) {
    const code = letter.charCodeAt();
    if(code >= 65 && code <= 90 || code >= 97 && code <= 122){  
        return String.fromCharCode(code+3);
    }
    return String.fromCharCode(code);
}
}

const msgnova = new Crypt(lines);

msgnova.encrypted();