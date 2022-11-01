const Wallet = require('ethereumjs-wallet');
for(let index=0; index < 4; index++) {
    let wallet = Wallet.default.generate();
    console.log(`Private key: ${wallet.getPrivateKeyString()}`);
    console.log(`Address: ${wallet.getAddressString()}`);
}