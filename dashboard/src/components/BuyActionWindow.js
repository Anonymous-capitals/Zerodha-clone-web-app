import React, { useContext, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import api from "../api/axiosConfig";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const AVAILABLE_FUNDS = 100000; // 1 lakh rupees

const BuyActionWindow = ({ uid }) => {
  const [stockPrice, setStockPrice] = useState("");
  const [stockQuantity, setStockQuantity] = useState("1");
  const [loading, setLoading] = useState(false);
  const { closeBuyWindow } = useContext(GeneralContext);

  const priceNum = parseFloat(stockPrice) || 0;
  const qtyNum = Math.max(0, Math.floor(parseFloat(stockQuantity) || 0));
  const total = priceNum * qtyNum;

  const handlePriceChange = useCallback((e) => {
    const val = e.target.value;
    setStockPrice(val);
    const p = parseFloat(val);
    if (p > 0) {
      const maxQty = Math.max(1, Math.floor(AVAILABLE_FUNDS / p));
      setStockQuantity(String(maxQty));
    }
  }, []);

  const handleQuantityChange = useCallback((e) => {
    const val = e.target.value;
    setStockQuantity(val);
    const q = parseFloat(val);
    if (q > 0) {
      const optimalPrice = (AVAILABLE_FUNDS / q).toFixed(2);
      setStockPrice(optimalPrice);
    }
  }, []);

  const handleBuyClick = async () => {
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
        mode: "BUY",
      });
      alert("Order placed successfully!");
      closeBuyWindow();
    } catch (error) {
      console.error("Buy order error:", error);
      alert(error.response?.data?.error || "Failed to place order");
    } finally {
      setLoading(false);
    }
  };

  const handleCancelClick = () => {
    closeBuyWindow();
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
          Total: <strong>₹{total.toFixed(2)}</strong>
          {priceNum > 0 && (
            <span className="order-total-hint">
              (At this price you can buy up to {Math.max(1, Math.floor(AVAILABLE_FUNDS / priceNum))} shares)
            </span>
          )}
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹{total.toFixed(2)}</span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick} disabled={loading}>
            {loading ? "Processing..." : "Buy"}
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;