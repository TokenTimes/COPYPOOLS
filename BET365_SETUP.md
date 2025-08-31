# 🎯 Getting Real Bet365 Data

Currently you're seeing mock data because no real API key is configured. Here's how to get real Bet365 odds:

## 🚀 Quick Setup (5 minutes)

### 1. Get The Odds API Key (FREE)

- Go to **https://the-odds-api.com/**
- Click "Get Free API Key"
- Sign up with your email
- Copy your API key from the dashboard

### 2. Configure Your Server

```bash
cd server
echo "ODDS_API_KEY=your_actual_api_key_here" >> .env
npm start
```

### 3. That's it!

Your app will now show real Bet365 odds for thousands of games.

---

## 📊 What You Get With Real Data

### **Free Tier (500 calls/month)**

- ✅ Real-time Bet365 odds
- ✅ 40+ bookmakers included
- ✅ Multiple sports coverage
- ✅ Live odds updates

### **Sports Available**

- ⚽ **Soccer**: Premier League, Champions League, World Cup, etc.
- 🏀 **Basketball**: NBA, NCAAB, EuroLeague
- 🏈 **American Football**: NFL, NCAAF
- 🎾 **Tennis**: ATP, WTA, Grand Slams
- 🥊 **MMA/UFC**: All major events
- ⚾ **Baseball**: MLB, NPB
- 🏒 **Hockey**: NHL, KHL
- And 20+ more sports!

### **Markets Available**

- **Head-to-Head** (Match Winner)
- **Spreads/Handicaps**
- **Totals/Over-Under**
- **Player Props** (some sports)

---

## 🔧 Current Mock Data

While testing, you have access to:

- **4 Premier League matches**
- **2 NBA games**
- **2 Champions League matches**
- **2 Tennis matches**
- **2 MMA fights**

Plus a **dynamic "new market"** that appears every 3 minutes to test the new pool detection!

---

## 🌟 Alternative APIs

If you need different data sources:

### **RapidAPI Sports**

- More comprehensive coverage
- $10-50/month plans
- Multiple bookmaker comparison

### **SportRadar**

- Professional sports data
- Enterprise-grade reliability
- Custom pricing

### **BetFair API**

- Exchange betting data
- Real-time market movements
- Free tier available

---

## 🚨 Important Notes

1. **Rate Limits**: Free tier = 500 calls/month (~16/day)
2. **Caching**: The app caches results for 30 seconds to save API calls
3. **Regions**: Set regions to "uk,eu" for best Bet365 coverage
4. **Mock Fallback**: If API fails, falls back to mock data automatically

---

## 🎮 Testing New Pool Detection

The mock data includes a special feature that adds a new "Aston Villa vs West Ham" match every 3 minutes. This lets you test the new pool detection system without using real API calls!

**Watch for**:

- 🆕 Green "NEW" badges
- 🟢 Green highlighting on new rows
- 📊 "X new pools discovered!" banner

---

Ready to get real data? Just add your API key and restart! 🚀
