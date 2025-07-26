import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, RefreshCw } from 'lucide-react';

interface Stock {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
}

export function StockTracker() {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());

  // Mock stock data
  const mockStocks: Stock[] = [
    { symbol: 'AAPL', name: 'Apple Inc.', price: 175.43, change: 2.15, changePercent: 1.24, volume: 45678900 },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 142.56, change: -1.23, changePercent: -0.85, volume: 23456700 },
    { symbol: 'MSFT', name: 'Microsoft Corp.', price: 378.85, change: 5.67, changePercent: 1.52, volume: 34567800 },
    { symbol: 'TSLA', name: 'Tesla Inc.', price: 248.42, change: -3.21, changePercent: -1.28, volume: 56789000 },
    { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 145.24, change: 1.89, changePercent: 1.32, volume: 67890100 },
    { symbol: 'NVDA', name: 'NVIDIA Corp.', price: 485.09, change: 12.45, changePercent: 2.64, volume: 78901200 },
  ];

  const generateRandomChange = (currentPrice: number): { change: number; changePercent: number } => {
    const maxChangePercent = 3; // Max 3% change
    const changePercent = (Math.random() - 0.5) * maxChangePercent;
    const change = (currentPrice * changePercent) / 100;
    return { change, changePercent };
  };

  const updateStockPrices = () => {
    setStocks(prevStocks => 
      prevStocks.map(stock => {
        const { change, changePercent } = generateRandomChange(stock.price);
        const newPrice = stock.price + change;
        return {
          ...stock,
          price: Math.round(newPrice * 100) / 100,
          change: Math.round(change * 100) / 100,
          changePercent: Math.round(changePercent * 100) / 100,
          volume: stock.volume + Math.floor(Math.random() * 1000000)
        };
      })
    );
  };

  const refreshData = () => {
    setIsLoading(true);
    setTimeout(() => {
      updateStockPrices();
      setLastUpdate(new Date());
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    // Initialize with mock data
    setStocks(mockStocks);
    
    // Update prices every 30 seconds
    const interval = setInterval(() => {
      updateStockPrices();
      setLastUpdate(new Date());
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number): string => {
    if (num >= 1e9) return (num / 1e9).toFixed(1) + 'B';
    if (num >= 1e6) return (num / 1e6).toFixed(1) + 'M';
    if (num >= 1e3) return (num / 1e3).toFixed(1) + 'K';
    return num.toString();
  };

  return (
    <motion.div
      className="bg-gray-800 rounded-xl border border-gray-700 p-6 shadow-sm"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-gray-100">Stocks & Currencies</h3>
        <motion.button
          onClick={refreshData}
          disabled={isLoading}
          className="text-blue-400 hover:text-blue-300 disabled:opacity-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={isLoading ? { rotate: 360 } : {}}
          transition={isLoading ? { duration: 1, repeat: Infinity, ease: "linear" } : {}}
        >
          <RefreshCw size={20} />
        </motion.button>
      </div>

      {/* Search Bar */}
      <div className="mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search Company Symbol..."
            className="w-full bg-gray-700 text-gray-100 px-4 py-2 rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-400"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm text-gray-400">
          Last updated: {lastUpdate.toLocaleTimeString()}
        </p>
      </div>

      <div className="space-y-3 max-h-80 overflow-y-auto">
        <AnimatePresence>
          {stocks.map((stock, index) => (
            <motion.div
              key={stock.symbol}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-gray-700 rounded-lg p-4 border border-gray-600 hover:border-gray-500 transition-colors"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-bold text-gray-100">{stock.symbol}</h4>
                  <p className="text-sm text-gray-300">{stock.name}</p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-gray-100 text-lg">
                    ${stock.price.toFixed(2)}
                  </div>
                  <div className={`flex items-center gap-1 text-sm ${
                    stock.change >= 0 ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {stock.change >= 0 ? (
                      <TrendingUp size={14} />
                    ) : (
                      <TrendingDown size={14} />
                    )}
                    <span>
                      {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)} 
                      ({stock.changePercent >= 0 ? '+' : ''}{stock.changePercent.toFixed(2)}%)
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="text-xs text-gray-400">
                Volume: {formatNumber(stock.volume)}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-700">
        <p className="text-xs text-gray-500 text-center">
          Data updates every 30 seconds • Mock data for demonstration
        </p>
      </div>
    </motion.div>
  );
} 