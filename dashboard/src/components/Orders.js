import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axiosConfig";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await api.get("/userOrders");
        setOrders(res.data || []);
      } catch (err) {
        console.error("Orders fetch error:", err);
        setError(err.response?.status === 401 ? "Please log in again" : "Failed to load orders");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <p style={{ padding: "20px" }}>Loading orders...</p>;
  }

  if (error) {
    return (
      <div className="orders">
        <p>{error}</p>
        <Link to="/" className="btn">Go back</Link>
      </div>
    );
  }

  return (
    <div className="orders">
      {orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to="/" className="btn">Get started</Link>
        </div>
      ) : (
        <>
          <h3 className="title">Orders ({orders.length})</h3>

          <div className="order-table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Qty.</th>
                  <th>Price</th>
                  <th>Mode</th>
                </tr>
              </thead>

              <tbody>
                {orders.map((stock, index) => (
                  <tr key={index}>
                    <td>{stock.name || "-"}</td>
                    <td>{stock.qty ?? "-"}</td>
                    <td>{stock.price ?? "-"}</td>
                    <td>{stock.mode || "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Orders;
