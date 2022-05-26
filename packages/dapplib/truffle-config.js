require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth oil purpose include problem blue gauge'; 
let testAccounts = [
"0x94946bc5f2c4e54423e261d861a990e3c57cd799ade1d7f3d9fc14e56635fe53",
"0x80be35ba7a325fbca1ebdca5470d03ec2e7b43e2a519bf9025492aadca33e325",
"0xa7290ad1747763d81ebb0f2b2ada8488a440d03eace94b6407236334492fb092",
"0xb1799e88175b883d3b06103c2d0ff2fe105b291697864546ba1be04735a4c84d",
"0x6fdc740e34ac9bd427323e7383bb01deb5cd44e703ba057b7df279478460977e",
"0xaccd1599ffd172763a28e4753afb90b0b7229d1eac344f6fc2c45b68e0c4bb68",
"0x0f1e7132a9a4b9205d74dcb3378b94f99d8f1ecf12e9ff22fea6f16742fd152e",
"0xba254c37d832ef6cef50293ff7a7d590bcc88020a7bff059133027d832fdc8e2",
"0xe3dd52437ede986887cc38805951a7eb94fbc84cded2a19a3ab0d442677910ee",
"0x45f7f4f0541a1774708fa0e19089113e9782871ce2feb693c2a2eca4cc352db7"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


