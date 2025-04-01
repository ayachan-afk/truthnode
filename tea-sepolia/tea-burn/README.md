# 🔥 Tea Burn Auto Script  

This is an automated script to interact with the burn() function on the *Tea Sepolia* testnet. The script periodically sends 0.01 TEA to burn, waits for transaction confirmation, and then pauses for a random interval between *5 to 60 minutes* before repeating the process.  

🔗 *Leaderboard:* [tea-burn.truthnode.xyz](https://tea-burn.truthnode.xyz)  

## 📌 Features  
✅ Sends *0.01 TEA* to burn() function automatically  
✅ Waits for transaction confirmation before proceeding  
✅ Random delay between *5 - 60 minutes* to simulate organic activity  
✅ Automatically retries if an error occurs  
✅ *Weekly TEA Distribution from the Pool* 🎉  

---

## 💰 Weekly TEA Rewards  
Each week, a portion of the TEA accumulated in the *pool contract* is distributed to the top participants on the leaderboard.  
- 🏆 *Top Burners* will receive TEA rewards based on their ranking.  
- 📊 *Leaderboard updates automatically* at [tea-burn.truthnode.xyz](https://tea-burn.truthnode.xyz).  
- 🔄 *Rewards are distributed every week*, so keep burning to climb the ranks!  

---

## 🚀 Installation & Setup  

### 1️⃣ Install Dependencies  
Ensure you have *Node.js* installed, then run:  
```sh
npm install ethers dotenv