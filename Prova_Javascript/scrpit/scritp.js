function ex01() {
    var init = parseInt(prompt('Insira o Inicio: ')); 
    var frase = prompt("Insira sua frase:  ");
    var fim = parseInt(prompt('Insira o fim: ')); 
    document.getElementById("results").innerHTML = ("Resultado: ") + frase; // retorna o texto no corpo do html fotmatado
}

function ex02() {
    var frase_inserida = prompt("Insira sua frase:  ");
    var resultado = frase_inserida.replace(/substituir/gi, "por");
    if (frase_inserida === ""){
        alert("Entrada vazia, faça novamente!!")
    }
   else if (frase_inserida != "") {

        
        document.getElementById("results").innerHTML = frase_inserida;
        document.getElementById("amostragem").innerHTML = resultado;
    }
}
