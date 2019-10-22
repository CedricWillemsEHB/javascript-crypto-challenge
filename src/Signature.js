const nacl = require('libsodium-wrappers')

let publicKey, privateKey;

async function ready() {await nacl.ready}

module.exports = {
    verifyingKey: async function ()
    {
        await ready()
        if(privateKey == null)
        {
            let pairKey = nacl.crypto_sign_keypair();
            publicKey = pairKey.publicKey;
            privateKey = pairKey.privateKey;
        }
        return publicKey;
    },
    sign: async function (signedMsg)
    {
        await ready()
        return nacl.crypto_sign(signedMsg, privateKey);
    }
};