// Buatlah sebuah function untuk mengenkripsi dan mendekripsi suatu text menggunakan
// package crypto-js


//memanggil file package  crypto-js
let CryptoJS = require("crypto-js");
const text ="Fazztrack"
const enkripsi = (text) => {
    let result = CryptoJS.AES.encrypt(text,"123").toString()
    return result
}
encrypt = enkripsi(text)
console.log(encrypt)

const dekripsi = (text) => {
    let decrypt = CryptoJS.AES.decrypt(text,"123").toString(CryptoJS.enc.Utf8)
    return decrypt
}
console.log (dekripsi(encrypt))