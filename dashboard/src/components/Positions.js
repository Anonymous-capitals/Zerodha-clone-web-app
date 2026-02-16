import React, { useEffect, useState } from "react";
import api from "../api/axiosConfig";

const Positions = () => {
  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const res = await api.get("/userPositions");
        setPositions(res.data || []);
      } catch (err) {
        console.error("Failed to load positions", err);
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
            {positions.map((pos, index) => {
              const avg = Number(pos.avg) || 0;
              const ltp = Number(pos.ltp) || 0;
              const pnl = (ltp - avg) * (pos.qty || 0);

              return (
                <tr key={index}>
                  <td>{pos.name || "-"}</td>
                  <td>{pos.qty ?? "-"}</td>
                  <td>{avg.toFixed(2)}</td>
                  <td>{ltp.toFixed(2)}</td>
                  <td className={pnl >= 0 ? "profit" : "loss"}>
                    {pnl.toFixed(2)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Positions;
