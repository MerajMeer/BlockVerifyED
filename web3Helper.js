// web3Helper.js

const Web3 = require('web3');
const fs = require('fs');

// Set up a Web3 provider (replace with your Ethereum node URL)
const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/YOUR_INFURA_PROJECT_ID'));

// Load the ABI (replace 'YourContract.json' with your compiled contract's ABI file)
const contractABI = JSON.parse(fs.readFileSync('YourContract.json', 'utf-8'));

// Replace 'YourContractAddress' with your deployed contract address
const contractAddress = 'YourContractAddress';

// Create a contract instance
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Example: Read data from the contract
async function readDataFromContract() {
  try {
    // Replace 'getData' with the function you want to call
    const result = await contract.methods.getData().call();
    console.log('Result:', result);
    return result;
  } catch (error) {
    console.error('Error reading data from the contract:', error);
    throw error;
  }
}

// Example: Write data to the contract
async function writeToContract(value) {
  try {
    // Replace 'setData' with the function that modifies state
    const accounts = await web3.eth.getAccounts();
    const result = await contract.methods.setData(value).send({
      from: accounts[0],
      gas: 200000, // Adjust gas based on your contract's requirements
    });
    console.log('Transaction hash:', result.transactionHash);
    return result;
  } catch (error) {
    console.error('Error writing to the contract:', error);
    throw error;
  }
}

// Export functions for use in other files
module.exports = {
  readDataFromContract,
  writeToContract,
};


// web3Helper.js

const Web3 = require('web3');
const fs = require('fs');

// Set up a Web3 provider (replace with your Ethereum node URL)
const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/YOUR_INFURA_PROJECT_ID'));

// Load the ABI (replace 'YourContract.json' with your compiled contract's ABI file)
const contractABI = JSON.parse(fs.readFileSync('YourContract.json', 'utf-8'));

// Replace 'YourContractAddress' with your deployed contract address
const contractAddress = 'YourContractAddress';

// Create a contract instance
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Example: Transfer ERC-20 tokens
async function transferTokens(receiver, amount) {
  try {
    // Replace 'transfer' with the function to transfer tokens in your ERC-20 contract
    const tokenContractAddress = 'YourERC20TokenContractAddress';
    const tokenContractABI = JSON.parse(fs.readFileSync('YourERC20TokenContract.json', 'utf-8'));
    const tokenContract = new web3.eth.Contract(tokenContractABI, tokenContractAddress);

    // Replace 'YourPrivateKey' with the private key of the sender's wallet
    const accounts = await web3.eth.getAccounts();
    const privateKey = 'YourPrivateKey';

    const data = tokenContract.methods.transfer(receiver, amount).encodeABI();
    const gas = await tokenContract.methods.transfer(receiver, amount).estimateGas({ from: accounts[0] });

    const signedTransaction = await web3.eth.accounts.signTransaction(
      {
        to: tokenContractAddress,
        data: data,
        gas: gas,
      },
      privateKey
    );

    const result = await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction);
    console.log('Transaction hash:', result.transactionHash);
    return result;
  } catch (error) {
    console.error('Error transferring tokens:', error);
    throw error;
  }
}

// Example: Query transaction details
async function getTransactionDetails(transactionHash) {
  try {
    const transaction = await web3.eth.getTransaction(transactionHash);
    console.log('Transaction details:', transaction);
    return transaction;
  } catch (error) {
    console.error('Error querying transaction details:', error);
    throw error;
  }
}

// Example: Check ERC-20 token balance
async function getTokenBalance(tokenAddress, ownerAddress) {
  try {
    // Replace 'balanceOf' with the function in your ERC-20 contract to check the balance
    const tokenContractABI = JSON.parse(fs.readFileSync('YourERC20TokenContract.json', 'utf-8'));
    const tokenContract = new web3.eth.Contract(tokenContractABI, tokenAddress);
    const balance = await tokenContract.methods.balanceOf(ownerAddress).call();
    console.log('Token balance:', balance);
    return balance;
  } catch (error) {
    console.error('Error checking token balance:', error);
    throw error;
  }
}

// Example: Handle user interactions with MetaMask (requires browser environment)
async function interactWithMetaMask() {
  // Check if MetaMask is installed
  if (window.ethereum) {
    try {
      // Request permission to access accounts
      await window.ethereum.request({ method: 'eth_requestAccounts' });

      // Get the current account
      const accounts = await web3.eth.getAccounts();
      console.log('Connected account:', accounts[0]);

      // Read data from the contract (replace 'getData' with your function)
      const result = await contract.methods.getData().call();
      console.log('Result:', result);
      return result;
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
      throw error;
    }
  } else {
    console.error('MetaMask not detected. Please install MetaMask extension.');
  }
}

// Export functions for use in other files
module.exports = {
  transferTokens,
  getTransactionDetails,
  getTokenBalance,
  interactWithMetaMask,
};

// web3Helper.js

const Web3 = require('web3');
const fs = require('fs');

// Set up a Web3 provider (replace with your Ethereum node URL)
const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/YOUR_INFURA_PROJECT_ID'));

// Load the ABI (replace 'YourContract.json' with your compiled contract's ABI file)
const contractABI = JSON.parse(fs.readFileSync('YourContract.json', 'utf-8'));

// Replace 'YourContractAddress' with your deployed contract address
const contractAddress = 'YourContractAddress';

// Create a contract instance
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Example: Transfer ERC-20 tokens
async function transferTokens(receiver, amount) {
  try {
    // Replace 'transfer' with the function to transfer tokens in your ERC-20 contract
    const tokenContractAddress = 'YourERC20TokenContractAddress';
    const tokenContractABI = JSON.parse(fs.readFileSync('YourERC20TokenContract.json', 'utf-8'));
    const tokenContract = new web3.eth.Contract(tokenContractABI, tokenContractAddress);

    // Replace 'YourPrivateKey' with the private key of the sender's wallet
    const accounts = await web3.eth.getAccounts();
    const privateKey = 'YourPrivateKey';

    const data = tokenContract.methods.transfer(receiver, amount).encodeABI();
    const gas = await tokenContract.methods.transfer(receiver, amount).estimateGas({ from: accounts[0] });

    const signedTransaction = await web3.eth.accounts.signTransaction(
      {
        to: tokenContractAddress,
        data: data,
        gas: gas,
      },
      privateKey
    );

    const result = await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction);
    console.log('Transaction hash:', result.transactionHash);
    return result;
  } catch (error) {
    console.error('Error transferring tokens:', error);
    throw error;
  }
}

// Example: Query transaction details
async function getTransactionDetails(transactionHash) {
  try {
    const transaction = await web3.eth.getTransaction(transactionHash);
    console.log('Transaction details:', transaction);
    return transaction;
  } catch (error) {
    console.error('Error querying transaction details:', error);
    throw error;
  }
}

// Example: Check ERC-20 token balance
async function getTokenBalance(tokenAddress, ownerAddress) {
  try {
    // Replace 'balanceOf' with the function in your ERC-20 contract to check the balance
    const tokenContractABI = JSON.parse(fs.readFileSync('YourERC20TokenContract.json', 'utf-8'));
    const tokenContract = new web3.eth.Contract(tokenContractABI, tokenAddress);
    const balance = await tokenContract.methods.balanceOf(ownerAddress).call();
    console.log('Token balance:', balance);
    return balance;
  } catch (error) {
    console.error('Error checking token balance:', error);
    throw error;
  }
}

// Example: Handle user interactions with MetaMask (requires browser environment)
async function interactWithMetaMask() {
  // Check if MetaMask is installed
  if (window.ethereum) {
    try {
      // Request permission to access accounts
      await window.ethereum.request({ method: 'eth_requestAccounts' });

      // Get the current account
      const accounts = await web3.eth.getAccounts();
      console.log('Connected account:', accounts[0]);

      // Read data from the contract (replace 'getData' with your function)
      const result = await contract.methods.getData().call();
      console.log('Result:', result);
      return result;
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
      throw error;
    }
  } else {
    console.error('MetaMask not detected. Please install MetaMask extension.');
  }
}

// Export functions for use in other files
module.exports = {
  transferTokens,
  getTransactionDetails,
  getTokenBalance,
  interactWithMetaMask,
};

