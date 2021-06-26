var CryptoJS = require("crypto-js");
 
// Encrypt
// var ciphertext = CryptoJS.SHA256('my message', 'secret key 123').toString();
let ciphertext = CryptoJS.SHA256("Fazztrack").toString()

console.log(ciphertext);