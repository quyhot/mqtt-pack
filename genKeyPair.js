// Node.js program to demonstrate the flow of crypto.generateKeyPair() method

// Importing generateKeyPair from crypto module
const {
    generateKeyPair,
} = require('node:crypto');
const crypto = require('crypto')
const fs = require("fs");

// Calling generateKeyPair() method with the below parameters
generateKeyPair('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
        type: 'spki',
        format: 'jwk'
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'jwk',
        cipher: 'aes-256-cbc',
        passphrase: 'top secret',
    }
}, (err, publicKey, privateKey) => { // Callback function
    if (!err) {
        // This will print the asymmetric key pair
        console.log("Public Key is: ", publicKey);
        // console.log("Public Key in hex is: ", publicKey.toString('hex'));
        console.log();
        console.log("Private Key is: ", privateKey);
        // console.log("Private Key in hex is: ",
        //     privateKey.toString('hex'));
        fs.writeFileSync('privateKey.json', JSON.stringify(privateKey), 'utf8')
        fs.writeFileSync('publicKey.json', JSON.stringify(publicKey), 'utf8')
        const pubKeyPem = crypto.createPublicKey({
            key: publicKey,
            format: 'jwk'
        })
        const privateKeyPem = crypto.createPrivateKey({
            key: privateKey,
            format: 'jwk'
        })
        console.log('pubKeyPem', pubKeyPem.export({ type: 'spki', format: 'pem' }))
        console.log('pubKeyPem', privateKeyPem.export({ type: 'pkcs8', format: 'pem' }))
        fs.writeFileSync('publicKey.pem', pubKeyPem.export({ type: 'spki', format: 'pem' }))
        fs.writeFileSync('privateKey.pem', privateKeyPem.export({ type: 'pkcs8', format: 'pem' }))
    } else {
        // Prints error if any
        console.log("Errr is: ", err);
    }
});