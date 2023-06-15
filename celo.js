import { newKit } from "@celo/contractkit"; 
const kit = newKit("https://alfajores-forno.celo-testnet.org");




// generate wallet 
const generateWallet = async () => {
    const account = await kit.web3.eth.accounts.create();
    console.log("account", account);
}

// get balance of wallet address
const getBalance = async (address) => {

    const balance = await kit.web3.eth.getBalance(address);
    console.log("balance", balance);
}

const address = '0xa6D9710Ab605175bEce1828Fb155Bd158D9D7A0C'

getBalance(address)