//declarando variables y botones

const inputKey = document.getElementById('key');
const inputText = document.getElementById('message1');
const inputResult = document.getElementById('result');
const buttonEncode = document.getElementById('botoncifro');
const buttonDecode = document.getElementById('botondescifro');

//llamandoalosbotones

buttonEncode.addEventListener('click', () => {
  const offset= parseInt(inputKey.value);
  inputResult.value=cipher.encode(offset,inputText.value);
});
buttonDecode.addEventListener('click', () => {
  const offset= parseInt(inputKey.value);
  inputResult.value=cipher.decode(offset,inputText.value);
});
