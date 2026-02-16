import React, { useState, useEffect } from "react";
import { VerticalGraph } from "./VerticalGraph";
import api from "../api/axiosConfig";

const Holdings = () => {
  const [holdings, setHoldings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchHoldings = async () => {
      try {
        const res = await api.get("/userHoldings");
        setHoldings(res.data || []);
      } catch (err) {
        console.error("Failed to load holdings", err);
        setError("Failed to load holdings.");
        setHoldings([]);
      } finally {
        setLoading(false);
      }
    };

    fetchHoldings();
  }, []);

  if (loading) {
    return <p style={{ padding: "20px" }}>Loading holdings...</p>;
  }

  if (error) {
    return <p style={{ padding: "20px", color: "red" }}>{error}</p>;
  }

  if (!holdings.length) {
    return (
      <div style={{ padding: "20px" }}>
        <h3>Holdings (0)</h3>
        <p>No holdings available.</p>
      </div>
    );
  }

  // 🔹 Portfolio Calculations
  const totalInvestment = holdings.reduce((acc, stock) => {
    const qty = Number(stock.qty) || 0;
    const avg = Number(stock.avg) || 0;
    return acc + qty * avg;
  }, 0);

  const totalCurrentValue = holdings.reduce((acc, stock) => {
    const qty = Number(stock.qty) || 0;
    const price = Number(stock.price) || 0;
    return acc + qty * price;
  }, 0);

  const totalPnL = totalCurrentValue - totalInvestment;
  const totalReturnPercent =
    totalInvestment > 0
      ? ((totalPnL / totalInvestment) * 100).toFixed(2)
      : 0;

  // 🔹 Graph Data
  const data = {
    labels: holdings.map((h) => h.name || "—"),
    datasets: [
      {
        label: "Current Price (LTP)",
        data: holdings.map((h) => Number(h.price) || 0),
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <>
      <h3 className="title">Holdings ({holdings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Current value</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>

          <tbody>
            {holdings.map((stock) => {
              const qty = Number(stock.qty) || 0;
              const avg = Number(stock.avg) || 0;
              const price = Number(stock.price) || 0;

              const currentValue = qty * price;
              const pnl = currentValue - qty * avg;

              const pnlClass = pnl >= 0 ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={stock._id || stock.name}>
                  <td>{stock.name || "-"}</td>
                  <td>{qty}</td>
                  <td>{avg.toFixed(2)}</td>
                  <td>{price.toFixed(2)}</td>
                  <td>₹{currentValue.toFixed(2)}</td>
                  <td className={pnlClass}>₹{pnl.toFixed(2)}</td>
                  <td className={pnlClass}>{stock.net ?? "-"}</td>
                  <td className={dayClass}>{stock.day ?? "-"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* 🔹 Portfolio Summary */}
      <div className="row">
        <div className="col">
          <h5>₹{totalInvestment.toFixed(2)}</h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>₹{totalCurrentValue.toFixed(2)}</h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5 className={totalPnL >= 0 ? "profit" : "loss"}>
            ₹{totalPnL.toFixed(2)} ({totalReturnPercent}%)
          </h5>
          <p>Total P&amp;L</p>
        </div>
      </div>

      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;
