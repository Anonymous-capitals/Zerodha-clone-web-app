import React, { useContext, useState } from "react";
import api from "../api/axiosConfig";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const AVAILABLE_FUNDS = 100000; // 1 lakh rupees

const BuyActionWindow = ({ uid }) => {
  const [stockPrice, setStockPrice] = useState("");
  const [stockQuantity, setStockQuantity] = useState("1");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { closeBuyWindow } = useContext(GeneralContext);

  const priceNum = parseFloat(stockPrice) || 0;
  const qtyNum = Math.max(0, Math.floor(parseFloat(stockQuantity) || 0));
  const total = priceNum * qtyNum;

  const hasSufficientFunds = total <= AVAILABLE_FUNDS;

  const handleBuyClick = async () => {
    setError("");

    if (!priceNum || !qtyNum) {
      setError("Please enter valid quantity and price");
      return;
    }

    if (!hasSufficientFunds) {
      setError("Insufficient funds to place this order");
      return;
    }

    setLoading(true);

    try {
      await api.post("/newOrder", {
        name: uid,
        qty: qtyNum,
        price: priceNum,
        mode: "BUY",
      });

      alert("Order placed successfully!");
      closeBuyWindow();
    } catch (error) {
      console.error("Buy order error:", error);
      setError(error.response?.data?.error || "Failed to place order");
    } finally {
      setLoading(false);
    }
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
              min="1"
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              step="0.05"
              value={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
              min="0"
              placeholder="0.00"
            />
          </fieldset>
        </div>

        <div className="order-total">
          Total: <strong>₹{total.toFixed(2)}</strong>
        </div>

        {!hasSufficientFunds && total > 0 && (
          <div className="error-message">
            Insufficient funds. Available: ₹{AVAILABLE_FUNDS.toFixed(2)}
          </div>
        )}

        {error && <div className="error-message">{error}</div>}
      </div>

      <div className="buttons">
        <span>Margin required ₹{total.toFixed(2)}</span>
        <div>
          <button
            className="btn btn-blue"
            onClick={handleBuyClick}
            disabled={loading || !hasSufficientFunds}
          >
            {loading ? "Processing..." : "Buy"}
          </button>

          <button
            className="btn btn-grey"
            onClick={handleCancelClick}
            disabled={loading}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;