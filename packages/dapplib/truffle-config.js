require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture gloom bubble tooth notice crime remember clump idea kite bridge smooth'; 
let testAccounts = [
"0x9b6562c2616beca08de0bd3f13da192aef878bd034c4229d5a1c0502b10509d6",
"0x538cf8cf4d50986c89d23e393c44d421043549d906267508893f7cc5b23cff59",
"0x82078049b045c4888f5fa9b67805249e2d3aa81e53df14aa884c4dcefc313370",
"0x97e667e2096e741dc46d9ec891834d6d3b546410bfa187ff6e6d163a510cd5ca",
"0x735890e7e92ce3675c947e9113f974f9f92af31f7eff7f6db630560a48d166a3",
"0x04836718f2a588eabaaae986fc31f86b7a9104f78b3543a78d272f2767f3f6bc",
"0x815e724b16b522b52250cf215c38ff879906ea52e13e674633462a2f68b67ef9",
"0xec85d6bfb22ed7e5511aab6a813194f6d7500c0379962810fb1b3dbd443db923",
"0x8c71b0ecf71f883382a71a4a1360a8daaba56fc2bfd0b21d6152eeed2e3ddfaf",
"0xc2268481a26113197932f27e6278dd8269a10e4199a5dfe95d6adab7107bcda6"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

