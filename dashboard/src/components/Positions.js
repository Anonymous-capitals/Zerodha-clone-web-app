import React, { useEffect, useState } from "react";
import api from "../api/axiosConfig";

const Positions = () => {
  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const res = await api.get("/userPositions");
        setPositions(res.data || []);
      } catch (err) {
        console.error("Failed to load positions", err);
        setError("Failed to load positions.");
        setPositions([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPositions();
  }, []);

  if (loading) {
    return <p style={{ padding: "20px" }}>Loading positions...</p>;
  }

  if (error) {
    return <p style={{ padding: "20px", color: "red" }}>{error}</p>;
  }

  if (!positions.length) {
    return (
      <div style={{ padding: "20px" }}>
        <h3>Positions (0)</h3>
        <p>No open positions.</p>
      </div>
    );
  }

  const calculatePnL = (avg, ltp, qty) => {
    return (ltp - avg) * qty;
  };

  const totalPnL = positions.reduce((acc, pos) => {
    const avg = Number(pos.avg) || 0;
    const ltp = Number(pos.ltp) || 0;
    const qty = Number(pos.qty) || 0;
    return acc + calculatePnL(avg, ltp, qty);
  }, 0);

  return (
    <div className="positions">
      <h3 className="title">Positions ({positions.length})</h3>

      <div className="positions-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty</th>
              <th>Avg</th>
              <th>LTP</th>
              <th>P&L</th>
            </tr>
          </thead>

          <tbody>
            {positions.map((pos) => {
              const avg = Number(pos.avg) || 0;
              const ltp = Number(pos.ltp) || 0;
              const qty = Number(pos.qty) || 0;
              const pnl = calculatePnL(avg, ltp, qty);

              return (
                <tr key={pos._id || pos.name}>
                  <td>{pos.name || "-"}</td>
                  <td>{qty}</td>
                  <td>{avg.toFixed(2)}</td>
                  <td>{ltp.toFixed(2)}</td>
                  <td className={pnl >= 0 ? "profit" : "loss"}>
                    ₹{pnl.toFixed(2)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div
        style={{
          marginTop: "20px",
          fontWeight: "bold",
          fontSize: "16px",
        }}
      >
        Total P&L:{" "}
        <span className={totalPnL >= 0 ? "profit" : "loss"}>
          ₹{totalPnL.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default Positions;
