let message;
let string = [];
let code = [];
let n;
let j;
let newCode = [];
//FunciónCifrado
function encodeText()
{
message = document.getElementById("mensajeCipher").value;
n = document.getElementById("key").value;
for(j = 0; j < message.length; j++){
  string.push((message.charCodeAt(j))-65+n%26+65);
  code.push(String.fromCharCode(string[j]));
}
newCode = code.join("");
document.getElementById("descifrado").innerHTML = (newCode.toUpperCase());

string = [];
code = [];
}
//FunciónDescifrado
function uncodeText()
{
message = document.getElementById("mensajeCipher").value;
n = document.getElementById("key").value;
for(j = 0; j < message.length; j++){
  string.push((message.charCodeAt(j))+65-n%26-65);
  code.push(String.fromCharCode(string[j]));
}
newCode = code.join("");
document.getElementById("descifrado").innerHTML = (newCode.toUpperCase());

 /* console.log(string); muestra codigo ASCII
 console.log(code); muestra mensaje desencriptado */
string = []; //vacia la cadena
code = []; //vacia la cadena
}
