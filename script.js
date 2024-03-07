function encrypt() {
    const message = document.getElementById('message').value;
    const shift = parseInt(document.getElementById('shift').value);
    const encryptedMessage = caesarCipher(message, shift);
    document.getElementById('result').innerText = encryptedMessage;
}

function decrypt() {
    const message = document.getElementById('message').value;
    const shift = parseInt(document.getElementById('shift').value);
    const decryptedMessage = caesarCipher(message, -shift);
    document.getElementById('result').innerText = decryptedMessage;
}

function caesarCipher(str, shift) {
    return str
        .split('')
        .map(char => {
            let code = char.charCodeAt(0);

            if (code >= 65 && code <= 90) {
                code = ((code - 65 + shift) % 26 + 26) % 26 + 65;
            }

            else if (code >= 97 && code <= 122) {
                code = ((code - 97 + shift) % 26 + 26) % 26 + 97;
            }
          
            else if (code >= 48 && code <= 57) {
                code = ((code - 48 + shift) % 10 + 10) % 10 + 48;
            }
          
            else if (code >= 32 && code <= 126) {
                code = ((code - 32 + shift) % 95 + 95) % 95 + 32;
            }

            return String.fromCharCode(code);
        })
        .join('');
}
