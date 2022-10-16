const btn = document.querySelector ("#nome");
// Set a same-site cookie for first-party contexts
document.cookie = 'cookie1=value1; SameSite=Lax';
// Set a cross-site cookie for third-party contexts
document.cookie = 'cookie2=value2; SameSite=None; Secure';

btn.addEventListener("click", function(e){

e.preventDefault();
const name = document.querySelector("#nome");
const value = name.value;

console.log(value);
});

function myFunction()
{
var x;

var idade=prompt("Digite sua idade:");

if (idade!=null)
  {
  x="idade: " + idade + " anos.";
  document.getElementById("demo").innerHTML=x;
  }
}