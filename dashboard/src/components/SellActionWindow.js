import React, { useContext, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import api from "../api/axiosConfig";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const [stockPrice, setStockPrice] = useState("");
  const [stockQuantity, setStockQuantity] = useState("1");
  const [loading, setLoading] = useState(false);
  const { closeSellWindow } = useContext(GeneralContext);

  const priceNum = parseFloat(stockPrice) || 0;
  const qtyNum = Math.max(0, Math.floor(parseFloat(stockQuantity) || 0));
  const total = priceNum * qtyNum;

  const handlePriceChange = useCallback((e) => {
    const val = e.target.value;
    setStockPrice(val);
    // When price is entered, keep quantity as is
    // User can then adjust quantity manually to see different totals
  }, []);

  const handleQuantityChange = useCallback((e) => {
    const val = e.target.value;
    setStockQuantity(val);
    // When quantity is entered, calculate optimal price to match the price
    // that would give a reasonable total, but allow user to override
  }, []);

  const handleSellClick = async () => {
    if (!qtyNum || !priceNum) {
      alert("Please enter valid quantity and price");
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
      alert("Order placed successfully!");
      closeSellWindow();
    } catch (error) {
      console.error("Sell order error:", error);
      alert(error.response?.data?.error || "Failed to place order");
    } finally {
      setLoading(false);
    }
  };

  const handleCancelClick = () => {
    closeSellWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={handleQuantityChange}
              value={stockQuantity}
              min="1"
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={handlePriceChange}
              value={stockPrice}
              min="0"
              placeholder="0.00"
            />
          </fieldset>
        </div>
        <div className="order-total">
          Total value: <strong>₹{total.toFixed(2)}</strong>
        </div>
      </div>

      <div className="buttons">
        <span>Required: ₹{total.toFixed(2)}</span>
        <div>
          <Link className="btn btn-blue" onClick={handleSellClick} disabled={loading}>
            {loading ? "Processing..." : "Sell"}
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;