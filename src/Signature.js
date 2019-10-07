const nacl = require('libsodium-wrappers')

let sleutel;

(async() =>{
    await sodium.ready;
    sleutel = sodium.crypto_sign_keypair();
})();
module.exports.verifyingKey = async function verifyingKey()
{
    await sodium.ready;
    return CryptoKeyPair.publicKey;
}
module.exports.sign = async function sign(msg)
{
    return sodium.crypto_sign(msg,keypair.privateKey);
}
