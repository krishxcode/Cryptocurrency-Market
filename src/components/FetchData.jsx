import { useEffect, useState } from "react";
import axios from "axios";

const CryptoMarket = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "INR",
              order: "market_cap_desc",
              per_page: 100,
              page: 1,
              sparkline: false,
            },
          }
        );
        setCryptoData(response.data);
        setFilteredData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCryptoData();
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearch(query);
    const filtered = cryptoData.filter(
      (coin) =>
        coin.name.toLowerCase().includes(query) ||
        coin.symbol.toLowerCase().includes(query)
    );
    setFilteredData(filtered);
  };

  if (loading) return <div className="text-center text-lg font-semibold">Loading...</div>;
  if (error) return <div className="text-center text-lg font-semibold text-red-600">Error: {error}</div>;

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Cryptocurrency Market</h1>

      <div className="mb-4">
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search by coin name or symbol..."
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white shadow-lg rounded-lg">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Coin</th>
              <th className="px-4 py-2">Symbol</th>
              <th className="px-4 py-2">Price (INR)</th>
              <th className="px-4 py-2">Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((coin, index) => (
              <tr key={coin.id} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                <td className="border px-4 py-2 text-center">{index + 1}</td>
                <td className="border px-4 py-2 flex items-center">
                  <img
                    src={coin.image}
                    alt={coin.name}
                    width="20"
                    height="20"
                    className="mr-2"
                  />
                  {coin.name}
                </td>
                <td className="border px-4 py-2 text-center">{coin.symbol.toUpperCase()}</td>
                <td 
                  className={`border px-4 py-2 text-center ${coin.price_change_percentage_24h > 0 ? "text-green-500" : "text-red-500"}`}
                >
                  ₹{coin.current_price.toLocaleString()}
                </td>
                <td className="border px-4 py-2 text-center">₹{coin.market_cap.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CryptoMarket;
