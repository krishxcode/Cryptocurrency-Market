# Cryptocurrency Market Tracker

A web application to track cryptocurrency market data, including live prices, market caps, and percentage changes. Users can search for specific coins and view their status (up or down) visually.

---

## **Project ID**

- **Project Name**: Cryptocurrency Market Tracker
- **Version**: 1.0.0
- **Author**: [Your Name]

---

## **Features**

- **Live Cryptocurrency Data**: Fetches live data from the CoinGecko API.
- **Search Functionality**: Search for cryptocurrencies by name or symbol.
- **Price Status**: Indicates price changes with green (up) and red (down) colors.
- **Responsive Design**: Optimized for desktops and mobile devices.
- **Sorting and Display**: Displays key details like rank, name, symbol, price (in INR), and market cap.

---

## **Technologies Used**

- **Frontend**: React, Tailwind CSS
- **Backend/Integration**: Axios (for API integration)
- **API Source**: [CoinGecko API](https://www.coingecko.com/en/api)

---

## **Setup Instructions**

Follow these steps to set up the project locally:

### **1. Clone the Repository**
```bash
git clone https://github.com/yourusername/crypto-market-tracker.git
cd crypto-market-tracker
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Start the Development Server**
```bash
npm start
```

### **4. Build for Production**
```bash
npm run build
```

---

## **File Structure**

```
crypto-market-tracker/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── CryptoTable.js
│   │   ├── SearchBar.js
│   │   └── StatusIndicator.js
│   ├── App.js
│   ├── index.js
│   ├── styles.css
│   └── utils/
│       └── api.js
├── package.json
└── README.md
```

---

## **API Integration**

The application fetches data from the CoinGecko API:

- **Endpoint**: `https://api.coingecko.com/api/v3/coins/markets`
- **Parameters**:
  - `vs_currency`: INR
  - `order`: market_cap_desc
  - `per_page`: 100
  - `page`: 1
  - `sparkline`: false

---

## **Commands for Development**

| Command           | Description                                   |
|-------------------|-----------------------------------------------|
| `npm install`     | Installs project dependencies.               |
| `npm start`       | Runs the application in development mode.    |
| `npm run build`   | Builds the app for production.               |
| `npm run test`    | Runs test cases (if applicable).             |

---

## **Screenshots**

### **Homepage**
![Homepage Screenshot](https://via.placeholder.com/800x400.png?text=Homepage+Screenshot)

### **Search Functionality**
![Search Screenshot](https://via.placeholder.com/800x400.png?text=Search+Functionality)

---

## **Future Enhancements**

- Add sorting functionality for columns (price, market cap, etc.).
- Include graph-based visualizations for price trends.
- Add user authentication and watchlist features.

---

## **Contributing**

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

---

## **License**

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## **Contact**

For any inquiries or feedback, feel free to reach out:

- **Email**: your.email@example.com
- **GitHub**: [YourUsername](https://github.com/yourusername)
- **LinkedIn**: [YourProfile](https://linkedin.com/in/yourprofile)

