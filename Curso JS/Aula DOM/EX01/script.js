var p1 = window.document.getElementsByTagName('p')[0] // dentro do colchetes indica o documento que eu quero buscar
window.document.write("Retornando com JS: " + p1.innerHTML); // retorna o texto no corpo do html fotmatado

var d = window.document.getElementById("msg");
d.style.backgroundColor = 'green';