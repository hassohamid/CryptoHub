import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import { CoinContext } from "../../context/CoinContext";

const Home = () => {
  const { allCoins, currency } = useContext(CoinContext);

  const [displayCoin, setDisplayCoin] = useState([]);

  useEffect(() => {
    setDisplayCoin(allCoins);
  }, [allCoins]);

  return (
    <div className="home">
      <div className="hero">
        <h1>Largest Crypto Marketplace</h1>
        <p>
          Track your portfolio, and stay ahead in the crypto world. Your journey
          starts here! Sign up to explore more.
        </p>
        <form>
          <input type="text" placeholder="Search Crypto.." />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p className="text-center">24H Change</p>
          <p className="market-cap">Market Cap</p>
        </div>

        {displayCoin.slice(0, 10).map((item, index) => (
          <div className="table-layout" key={index}>
            <p>{item.market_cap_rank}</p>
            <div>
              <img src={item.image} />
              <p> {item.name}</p>
            </div>
            <p>
              {currency.symbol} {item.current_price.toLocaleString()}
            </p>
            <p
              className={item.price_change_percentage_24h < 0 ? "red" : "green"}
            >
              {Math.floor(item.price_change_percentage_24h * 100) / 100} %
            </p>
            <p className="market-cap">
              {currency.symbol} {item.market_cap.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
