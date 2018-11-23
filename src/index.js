<<<<<<< HEAD
//declaracion de variables y arreglos vacios

let message;
let string = [];
let code = [];
let n;
let j;
let newCode = [];
//FunciónCifrado
function encodeText()
{
message = document.getElementById("fraseInicial").value; //guarda el valor del mensaje ingresado
n = document.getElementById("key").value;
//n guarda el desplazamiento del cifrado
for(j = 0; j < message.length; j++){
  string.push((message.charCodeAt(j))-65+n%26+65);
  code.push(String.fromCharCode(string[j]));
}
  newCode = code.join("");
	//muestra el mensaje ya cifrado o descifrado
  document.getElementById("descifrado").innerHTML = (newCode.toUpperCase());

 /* console.log(string); muestra codigo ASCII
 console.log(code); muestra mensaje cifrado */
  //vacia las cadenas
  string = [];
  code = [];
}
//FunciónDescifrado
function uncodeText()
{
  message = document.getElementById("fraseInicial").value;
  n = document.getElementById("key").value; //n guarda el numero el desplazamiento del descifrado
  for(j = 0; j < message.length; j++){
  string.push((message.charCodeAt(j))+65-n%26-65);
  code.push(String.fromCharCode(string[j]));
}
  newCode = code.join("");
 //muestra el mensaje descifrado
	document.getElementById("descifrado").innerHTML = (newCode.toUpperCase());

 /* console.log(string); muestra codigo ASCII
 console.log(code); muestra mensaje descifrado */
  string = []; 
  code = [];
}
=======
const desplazamiento = document.getElementById("desplazamiento");
const texto = document.getElementById("texto");
const textoCifrado = document.getElementById("cifrado");

function cifrado(){
const textoIngresado = texto.value;
textoCifrado.value = textoIngresado.split('').map(c=>{
let mayus = (c === c.toUpperCase()) ? true : false;
let valorEntero = c.toLowerCase().charCodeAt(0);
	if(valorEntero >= 97 && valorEntero <= 122)
{
const valorDesplazamiento = parseInt(desplazamiento.value);
  if(valorEntero + valorDesplazamiento > 122)
valorEntero = 97 + (valorEntero - 122) + valorDesplazamiento - 1;
  else
valorEntero = valorEntero + valorDesplazamiento;
}
let cifrado = String.fromCharCode(valorEntero);
	return mayus ? cifrado.toUpperCase() : cifrado;
}).join('');
}
texto.addEventListener("keyup",cifrado);
desplazamiento.addEventListener("change", cifrado);
>>>>>>> b6000fc807d1f2e02ba6c6c069ea29390fb489f1
