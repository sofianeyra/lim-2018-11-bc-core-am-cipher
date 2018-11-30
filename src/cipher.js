window.cipher = {
    //CIFRADO
    encode: (offset, string) => {

        let resultEncode = '';
        let convertLettersToAscii;
        let convertingMessage;
        //convirtiendoletraaAscci
        for (let i = 0; i < string.length; i++) {
            convertLettersToAscii = string.charCodeAt(i);
            //mayusculas
            if (convertLettersToAscii >= 65 && convertLettersToAscii <= 90) {
                convertingMessage = ((convertLettersToAscii - 65 + offset) % 26 + 65);
                resultEncode += String.fromCharCode(convertingMessage);
            }
            //minusculas
            else if (convertLettersToAscii >= 97 && convertLettersToAscii <= 122) {
                convertingMessage = ((convertLettersToAscii - 97 + offset) % 26 + 97)
                resultEncode += String.fromCharCode(convertingMessage);
            }
            //otros caracteres
            else {
                resultEncode += String.fromCharCode(convertLettersToAscii);
            }
        }
        return resultEncode;
    },

    decode: (offset, string) => {
        offset = parseInt(offset);
        let resultEncode = '';
        let convertLettersToAscii;
        let convertingMessage;
        //
        for (let i = 0; i < string.length; i++) {
            convertLettersToAscii = string.charCodeAt(i);
            //mayusculas
            if (convertLettersToAscii >= 65 && convertLettersToAscii <= 90) {
                convertingMessage = ((convertLettersToAscii - 90 - offset) % 26 + 90)
                resultEncode += String.fromCharCode(convertingMessage);
            }
            //minusculas
            else if (convertLettersToAscii >= 97 && convertLettersToAscii <= 122) {
                convertingMessage = ((convertLettersToAscii - 122 - offset) % 26 + 122)
                resultEncode += String.fromCharCode(convertingMessage);
            }
            //otros caracteres
            else {
                resultEncode += String.fromCharCode(convertingMessage);
            }
        }
        return resultEncode;
    },

    createCipherWithOffset: (offset) => {
        let objectCipher = {
            encode: (string) =>
                cipher.encode(offset, string),
            decode: (string) =>
                cipher.decode(offset, string),
        };
        return objectCipher;
    }
};
