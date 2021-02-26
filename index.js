const rsa = require('node-rsa');
const fs = require('fs');

const publicKey = new rsa();
const privateKey = new rsa();

const public = fs.readFileSync('./keys/public.pem','utf8');
const private = fs.readFileSync('./keys/private.pem','utf-8');

publicKey.importKey(public);
privateKey.importKey(private);

function CreateLicense(mail){
    const salt = "gduvjdbhhs";
    const salt2 = "duvbvdhfbbhhs";

    const encrypted = privateKey.encryptPrivate(salt+mail+salt2,'base64');
    return encrypted;
}

function checkValidity(license){
    const decrypted = publicKey.decryptPublic(license,'utf8');
    if("gduvjdbhhsabc@example.comduvbvdhfbbhhs" === decrypted){
        return true;
    }
    return false;
}

const ans = CreateLicense('abc@example.com');
console.log(ans);
console.log(checkValidity(ans));




