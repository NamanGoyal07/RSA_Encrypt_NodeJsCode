const rsa = require('node-rsa');
const fs = require('fs');

function generatePair(){
    const key = new rsa().generateKeyPair();

    const public_key = key.exportKey('public');
    const private_key = key.exportKey('private');

    fs.openSync("./keys/public.pem","w");
    fs.writeFileSync("./keys/public.pem",public_key,"utf8");

    fs.openSync("./keys/private.pem","w");
    fs.writeFileSync("./keys/private.pem",private_key,"utf8");
}

generatePair();

