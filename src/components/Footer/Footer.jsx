import React from "react";
import "./Footer.css";
import { FaSearch, FaChartLine, FaCheckCircle } from "react-icons/fa";
import { SiSolana } from "react-icons/si";

const Footer = () => {
  return (
    <div className="footer">
      <footer className="modern-footer">
        <p>
          <div className="action-group">
            <span className="action">
              <FaSearch /> Discover
            </span>
            <span className="action">
              <FaChartLine /> Track
            </span>
            <span className="action">
              <FaCheckCircle /> Decide
            </span>
          </div>
          <span className="brand">
            Crypto<span className="hub">Hub</span>
          </span>
          <span className="powered">
            Powered by <SiSolana /> <span className="solana">Solana</span>{" "}
            Technology
          </span>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
