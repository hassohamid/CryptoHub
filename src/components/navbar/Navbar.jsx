import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../../assets/solana.png";
import { FaArrowUpRightDots } from "react-icons/fa6";
import { CoinContext } from "../../context/CoinContext";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd":
        setCurrency({ name: "usd", symbol: "$" });
        break;
      case "eur":
        setCurrency({ name: "eur", symbol: "€" });
        break;
      case "sek":
        setCurrency({ name: "sek", symbol: "kr" });
        break;
      default:
        setCurrency({ name: "usd", symbol: "$" });
    }
  };

  return (
    <div className="navbar">
      <div className="flex items-center">
        <img src={logo} alt="Solana" className="logo" />
        <h1> CryptoHub </h1>
      </div>
      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="sek">SEK</option>
        </select>
        <button>
          Sign up <FaArrowUpRightDots color="black" size={18} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
