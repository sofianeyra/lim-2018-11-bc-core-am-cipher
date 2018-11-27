window.cipher = {
//CIFRADO
  encode:function (string,offset){

  offset = parseInt(offset);
  let resultEncode = '';
  let mayusText = string.toUpperCase();

  for (let i = 0 ; i < mayusText.length ; i++){
    if(mayusText[i] === ' '){
       resultEncode += ' ';
  }
    else {
  const cifrando = String.fromCharCode((mayusText.charCodeAt(i)-65+offset)%26+65);
  resultEncode += cifrando;
  }
  }
  console.log("entro code");
  return resultEncode;
  },
//DESCIFRADO
  decode:function (string,offset) {

  offset = parseInt(offset);
  let resultDecode = '';
  let mayusText = string.toUpperCase();

  for (let i = 0 ; i < mayusText.length ; i++){
    if(mayusText[i] === ' '){
       resultDecode += ' ';
  }
    else {
  const cifrando = String.fromCharCode((mayusText.charCodeAt(i)-65-(offset%26))%26+65);
  resultDecode += cifrando;
  }
  }
  console.log("entro decode");
  return resultDecode;
  }
  };
