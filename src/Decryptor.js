const nacl = require('libsodium-wrappers')
let sleutel;

module.exports.setKey = async (key) => 
{
    sleutel = key;
}

module.exports.decrypt = async (ciphertext, nonce) => 
{
    if (!sleutel) 
    { 
        throw "no key"; 
    }
    return sodium.crypto_secretbox_open_easy(ciphertext, nonce, key);
}