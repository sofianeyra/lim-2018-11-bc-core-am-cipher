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
