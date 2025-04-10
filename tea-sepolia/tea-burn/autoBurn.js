const { ethers } = require('ethers');
require('dotenv').config();

// Konfigurasi jaringan Tea Sepolia
const networkConfig = {
  name: 'Tea Sepolia',
  chainId: 10218,
  url: 'https://tea-sepolia.g.alchemy.com/public',
  contractAddress: '0x2Ea52eeA63Bcf6a185cd2a616420f08B4E879De6',
  explorerUrl: 'https://sepolia.tea.xyz'
};

// ABI untuk fungsi burn
const contractABI = [
  {
    "inputs": [],
    "name": "burn",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }
];

// Gas configuration
const GAS_PRICE = ethers.parseUnits('52', 'gwei'); // 52 gwei fixed
const MIN_GAS_LIMIT = 25000;
const MAX_GAS_LIMIT = 100000;

async function main() {
  if (!process.env.PRIVATE_KEY) {
    throw new Error('Please set your PRIVATE_KEY in .env file');
  }

  const provider = new ethers.JsonRpcProvider(networkConfig.url);
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

  console.log(`Connected with address: ${wallet.address}`);
  console.log(`Network: ${networkConfig.name} (Chain ID: ${networkConfig.chainId})`);

  const contract = new ethers.Contract(
    networkConfig.contractAddress,
    contractABI,
    wallet
  );

  // Fungsi untuk menghasilkan jumlah acak antara 0.001 - 0.01 TEA
  function getRandomAmount() {
    const min = 0.01;
    const max = 0.5;
    const randomEth = Math.random() * (max - min) + min;
    return ethers.parseEther(randomEth.toFixed(6)); // max 6 desimal
  }

  // Fungsi untuk menghasilkan gas limit acak
  function getRandomGasLimit() {
    return Math.floor(Math.random() * (MAX_GAS_LIMIT - MIN_GAS_LIMIT + 1)) + MIN_GAS_LIMIT;
  }

  async function executeBurn() {
    try {
      const amountToSend = getRandomAmount();
      const gasLimit = getRandomGasLimit();
      
      console.log(`Preparing to send ${ethers.formatEther(amountToSend)} TEA to burn...`);
      console.log(`Gas settings - Price: 52 gwei, Limit: ${gasLimit}`);

      const balance = await provider.getBalance(wallet.address);
      console.log(`Current balance: ${ethers.formatEther(balance)} TEA`);

      if (balance < amountToSend) {
        throw new Error('Insufficient balance for random burn amount');
      }

      // Calculate total estimated cost
      const estimatedGasCost = GAS_PRICE * BigInt(gasLimit);
      const totalCost = amountToSend + estimatedGasCost;
      
      if (balance < totalCost) {
        throw new Error(`Insufficient balance for transaction (need ${ethers.formatEther(totalCost)} TEA)`);
      }

      const tx = await contract.burn({
        value: amountToSend,
        gasPrice: GAS_PRICE,
        gasLimit: gasLimit
      });

      console.log(`Transaction sent: ${networkConfig.explorerUrl}/tx/${tx.hash}`);
      console.log('Waiting for confirmation...');

      const receipt = await tx.wait();
      console.log(`Confirmed in block ${receipt.blockNumber}`);
      console.log(`Gas used: ${receipt.gasUsed.toString()}`);
      console.log(`Total gas cost: ${ethers.formatEther(receipt.gasUsed * GAS_PRICE)} TEA`);

    } catch (error) {
      console.error('Error executing burn:', error.message);
    }
  }

  function getRandomDelay() {
    const min = 5 * 60 * 1000;  // 5 menit
    const max = 60 * 60 * 1000; // 60 menit
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  async function startLoop() {
    while (true) {
      await executeBurn();
      const delay = getRandomDelay();
      const nextExecution = new Date(Date.now() + delay);
      console.log(`Next burn at: ${nextExecution.toLocaleTimeString()}`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }

  await startLoop();
}

main().catch(console.error);