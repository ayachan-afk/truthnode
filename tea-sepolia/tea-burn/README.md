# 🔥 Tea Burn Auto Script

This is an automated script to interact with the `burn()` function on the Tea Sepolia testnet. The script periodically sends random `0.01-0.5 TEA` to burn, waits for transaction confirmation, and then pauses for a random interval between `5 to 60 minutes` before repeating the process.

🔗 **Leaderboard**: [TEA BURN GAME](https://tea-burn.truthnode.xyz)

---

## 📌 Features
✅ Sends Random `0.01-0.05 TEA` to `burn()` function automatically  
✅ Waits for transaction confirmation before proceeding  
✅ Random delay between `5 - 60 minutes` to simulate organic activity  
✅ Automatically retries if an error occurs  
✅ 3 Days TEA Distribution from the Pool 🎉  

---

## 💰 3 Days TEA Rewards
Each 3 Days, a portion of the TEA accumulated in the pool contract is distributed to the top participants on the leaderboard.

- 🏆 **Top 10 Burners** will receive TEA rewards based on their ranking.
- 📊 **Leaderboard updates automatically** at [TEA BURN GAME](https://tea-burn.truthnode.xyz).
- 🔄 **Rewards are distributed every week**, so keep burning to climb the ranks!

---

## 🔍 Smart Contract Details
- **Network**: Tea Sepolia Testnet  
- **Contract Address**: `0x2Ea52eeA63Bcf6a185cd2a616420f08B4E879De6`  
- **Block Explorer**: [View Contract](https://sepolia.tea.xyz/0x2Ea52eeA63Bcf6a185cd2a616420f08B4E879De6)

---

## 🚀 Installation & Setup

### 1️⃣ Install Dependencies
Ensure you have Node.js installed, then run:
```sh
npm install ethers dotenv
```

### 2️⃣ Edit .env File
Edit the `.env` file in the project directory and add your private key details:
```sh
PRIVATE_KEY=your_private_key_here
```

### 3️⃣ Run the Script
Start the script by running:
```sh
node autoBurn.js
```

---

## 🤝 Contributing
Feel free to fork this repository and improve the script. Pull requests are welcome!

