
let count = 0 /* let eh usado para funcoes rapidas e menores*/ 
const getp = document.querySelector ("#count")
resize = () =>{
    
    console.log(count)
    count += 1
    getp.innerHTML = "Ce mexeu nissae umas " + count + " vezes."
}