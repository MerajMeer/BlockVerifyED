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
    // Replace 'methodName' with the function you want to call
    const result = await contract.methods.methodName().call();
    console.log('Result:', result);
  } catch (error) {
    console.error('Error reading data:', error);
  }
}

// Example: Send a transaction to the contract (requires a private key)
async function sendTransactionToContract() {
  try {
    // Replace 'methodName' and provide any required parameters
    const result = await contract.methods.methodName(parameter1, parameter2).send({
      from: 'YourWalletAddress', // Replace with your wallet address
      gas: 200000, // Adjust gas based on your contract's requirements
    });
    console.log('Transaction hash:', result.transactionHash);
  } catch (error) {
    console.error('Error sending transaction:', error);
  }
}

// Call the example functions
readDataFromContract();
// Uncomment the line below to send a transaction
// sendTransactionToContract();

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

// Example: Query transaction details
async function getTransactionDetails(transactionHash) {
  try {
    const transaction = await web3.eth.getTransaction(transactionHash);
    console.log('Transaction details:', transaction);
  } catch (error) {
    console.error('Error querying transaction details:', error);
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
  } catch (error) {
    console.error('Error checking token balance:', error);
  }
}

// Example: Handle user interactions with a basic web interface
function setupWebInterface() {
  // Replace 'buttonId' and 'resultElementId' with HTML elements IDs
  const button = document.getElementById('buttonId');
  const resultElement = document.getElementById('resultElementId');

  // Example: Read data from the contract when the button is clicked
  button.addEventListener('click', async () => {
    try {
      const result = await contract.methods.getData().call();
      resultElement.innerText = 'Result: ' + result;
    } catch (error) {
      resultElement.innerText = 'Error: ' + error.message;
    }
  });
}

// Uncomment the line below to query transaction details (replace 'YourTransactionHash')
// getTransactionDetails('YourTransactionHash');
// Uncomment the line below to check ERC-20 token balance (replace 'YourTokenAddress' and 'YourOwnerAddress')
// getTokenBalance('YourTokenAddress', 'YourOwnerAddress');
// Uncomment the lines below to set up a basic web interface
// document.addEventListener('DOMContentLoaded', setupWebInterface);


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
  } catch (error) {
    console.error('Error transferring tokens:', error);
  }
}

// Example: Interact with MetaMask (requires browser environment)
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
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
    }
  } else {
    console.error('MetaMask not detected. Please install MetaMask extension.');
  }
}

// Call the example functions
// Uncomment the line below to transfer ERC-20 tokens
// transferTokens('ReceiverAddress', 'Amount');
// Uncomment the lines below to interact with MetaMask
// interactWithMetaMask();

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
  } catch (error) {
    console.error('Error reading data:', error);
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
  } catch (error) {
    console.error('Error writing to contract:', error);
  }
}

// Example: Listen for contract events
function listenForEvents() {
  // Replace 'DataUpdated' with the name of the event you want to listen to
  contract.events.DataUpdated({ fromBlock: 0 }, (error, event) => {
    if (error) {
      console.error('Error listening for events:', error);
    } else {
      console.log('Event received:', event.returnValues);
    }
  });
}

// Example: Get wallet balance
async function getWalletBalance() {
  try {
    const accounts = await web3.eth.getAccounts();
    const balance = await web3.eth.getBalance(accounts[0]);
    console.log('Wallet balance:', web3.utils.fromWei(balance, 'ether'), 'ETH');
  } catch (error) {
    console.error('Error getting wallet balance:', error);
  }
}

// Call the example functions
readDataFromContract();
// Uncomment the line below to write to the contract
// writeToContract('NewValue');
// Uncomment the line below to listen for events
// listenForEvents();
// Uncomment the line below to get wallet balance
// getWalletBalance();
