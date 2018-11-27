//declarando variables y botones
let string = '';
let offset = '';
let btnCifrado = document.getElementById('botoncifro');
let btnDescifrado = document.getElementById('botondescifro');
let mensajeCifrado = document.getElementById('message1');
let resultado = '';
//evento del botón cifrar
btnCifrado.addEventListener('click',()=>{
string = document.getElementById('message1').value;
offset = document.getElementById('key').value;
resultado = cipher.encode(string,offset);
console.log("entro1")
mensajeCifrado.value = resultado ;
});
//evento del botón descifrar
btnDescifrado.addEventListener('click',()=>{
string = document.getElementById('message1').value;
offset = document.getElementById('key').value;
resultado = cipher.decode(string,offset);
console.log("entro2")
mensajeCifrado.value = resultado;
});
