// src/App.js

import React, { useState, useEffect } from 'react';
import { readDataFromContract, writeToContract, interactWithMetaMask } from './web3Helper';

function App() {
  const [contractData, setContractData] = useState('');
  const [metaMaskData, setMetaMaskData] = useState('');

  useEffect(() => {
    // Read data from the contract when the component mounts
    const fetchData = async () => {
      try {
        const contractResult = await readDataFromContract();
        setContractData(contractResult);
      } catch (error) {
        console.error('Error reading data from the contract:', error);
      }
    };

    fetchData();
  }, []);

  const handleWriteToContract = async () => {
    try {
      // Write data to the contract
      await writeToContract('NewValue');
      // Refresh contract data after writing
      const contractResult = await readDataFromContract();
      setContractData(contractResult);
    } catch (error) {
      console.error('Error writing to the contract:', error);
    }
  };

  const handleInteractWithMetaMask = async () => {
    try {
      // Interact with MetaMask
      const metaMaskResult = await interactWithMetaMask();
      setMetaMaskData(metaMaskResult);
    } catch (error) {
      console.error('Error interacting with MetaMask:', error);
    }
  };

  return (
    <div>
      <h1>Ethereum React App</h1>
      <div>
        <h2>Contract Data</h2>
        <p>{contractData}</p>
        <button onClick={handleWriteToContract}>Write to Contract</button>
      </div>
      <div>
        <h2>MetaMask Interaction</h2>
        <button onClick={handleInteractWithMetaMask}>Interact with MetaMask</button>
        <p>{metaMaskData}</p>
      </div>
    </div>
  );
}

export default App;
