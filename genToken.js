// sign with RSA SHA256
const fs = require('fs')
const jwt = require('jsonwebtoken')
const jwkToPem = require('jwk-to-pem')
const jwksClient = require('jwks-rsa');
const payload = {
    scope: 'test',
    iss: 'test2',
    aud: 'https://accounts.google.com/o/oauth2/token',
    iat: Math.floor(new Date() / 1000),
    exp: Math.floor(new Date() / 1000) + 3600
}

const privateKey = fs.readFileSync('privateKey.pem', 'utf-8');
// const pKey = JSON.parse(privateKey)
// const publicKey = fs.readFileSync('publicKey.pem', 'utf-8');
const publicKey = require('./publicKey.json')
const pem = jwkToPem(publicKey)
// const token = jwt.sign(payload, privateKey, {algorithm: 'RS256'});
const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDEzNTEzMDcsImV4cCI6MTcwMzk0MzMwNywidG9rZW4iOiJKRXVnNUhiN0tHSkFZZmhId3hidlB6TkQiLCJ1c2VySWQiOjI3LCJ1c2VybmFtZSI6IjhkZmU5MTc0ZGZmOTY3MTE4N2IyY2Q4NzJhZGM1Yzg1XzNiNjZmNThlLTI4YTAtNGMzMC1hOTBjLTNhZDk5ODJjZTE3ZiJ9.Z4mNIhGAkLKtgpV3AofdRJ1MxCfJQeXNQdCeEhakJUuz_bHLNNMcKgbpkHlXwrlAzEc6ctEF2hkr_N0Vd473ghaQkxuW1uHK5XwzUuPihvZqKrOCoke8DREoeC0gKJAyqPsDJvzBBGj48UqRE0Wdzk1U_roCKouGP2GOeOB1OTlR3tMPBdzecZjeEu69raCqCpPkQvxviUFxoeDqg3Rb53IUx2N1vwlZkNCfamIF5a2ZwNApwggOUtVUHwDqGTsGVe6vcJWCc_UW9KiB_0VHuAOSbzzjJgoyKjrwj40UBnQnDUgRv21Dy2b_8dTH2IeXbe6Bx7mJmH8_wYQdqaFMkA';
console.log(token)
const a = jwt.verify(token, pem, function(err, decoded) {
    console.log(decoded)
})

