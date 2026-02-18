import React, { useContext, useState } from "react";
import api from "../api/axiosConfig";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const AVAILABLE_SHARES = 200;

const SellActionWindow = ({ uid }) => {
  const [stockPrice, setStockPrice] = useState("");
  const [stockQuantity, setStockQuantity] = useState("1");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { closeSellWindow } = useContext(GeneralContext);

  const priceNum = parseFloat(stockPrice) || 0;
  const qtyNum = Math.max(0, Math.floor(parseFloat(stockQuantity) || 0));
  const total = priceNum * qtyNum;

  const hasEnoughShares = qtyNum <= AVAILABLE_SHARES;

  const handleSellClick = async () => {
    setError("");

    if (!priceNum || !qtyNum) {
      setError("Please enter valid quantity and price");
      return;
    }

    if (!hasEnoughShares) {
      setError(`You only have ${AVAILABLE_SHARES} shares available`);
      return;
    }

    setLoading(true);

    try {
      await api.post("/newOrder", {
        name: uid,
        qty: qtyNum,
        price: priceNum,
        mode: "SELL",
      });

      alert("Sell order placed successfully!");
      closeSellWindow();
    } catch (error) {
      console.error("Sell order error:", error);
      setError(error.response?.data?.error || "Failed to place order");
    } finally {
      setLoading(false);
    }
  };

  const handleCancelClick = () => {
    closeSellWindow();
  };

  return (
    <div className="container" id="sell-window">
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
          Total value: <strong>₹{total.toFixed(2)}</strong>
        </div>

        {!hasEnoughShares && qtyNum > 0 && (
          <div className="error-message">
            You only have {AVAILABLE_SHARES} shares available
          </div>
        )}

        {error && <div className="error-message">{error}</div>}
      </div>

      <div className="buttons">
        <span>Available shares: {AVAILABLE_SHARES}</span>
        <div>
          <button
            className="btn btn-blue"
            onClick={handleSellClick}
            disabled={loading || !hasEnoughShares}
          >
            {loading ? "Processing..." : "Sell"}
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

export default SellActionWindow;