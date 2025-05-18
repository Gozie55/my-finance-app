"use client";

import { useState } from "react";
import SearchInput from "../components/SearchInput";
import "../assets/css/Cards.css";

const Cards = () => {
  const [activeTab, setActiveTab] = useState("personalized");
  const [cards] = useState([
    {
      id: 1,
      cardholder: "Nazeer Ajibola",
      maskedPAN: "506123******4362",
      dateIssued: "11/04/2024 10:27:43",
      expiry: "32 months",
      batch: "847264905",
    },
    {
      id: 2,
      cardholder: "Nazeer Ajibola",
      maskedPAN: "506123******4362",
      dateIssued: "11/04/2024 10:27:43",
      expiry: "32 months",
      batch: "847264905",
    },
    {
      id: 3,
      cardholder: "Nazeer Ajibola",
      maskedPAN: "506123******4362",
      dateIssued: "11/04/2024 10:27:43",
      expiry: "32 months",
      batch: "847264905",
    },
    {
      id: 4,
      cardholder: "Nazeer Ajibola",
      maskedPAN: "506123******4362",
      dateIssued: "11/04/2024 10:27:43",
      expiry: "32 months",
      batch: "847264905",
    },
    {
      id: 5,
      cardholder: "Nazeer Ajibola",
      maskedPAN: "506123******4362",
      dateIssued: "11/04/2024 10:27:43",
      expiry: "32 months",
      batch: "847264905",
    },
    {
      id: 6,
      cardholder: "Nazeer Ajibola",
      maskedPAN: "506123******4362",
      dateIssued: "11/04/2024 10:27:43",
      expiry: "32 months",
      batch: "847264905",
    },
    {
      id: 7,
      cardholder: "Nazeer Ajibola",
      maskedPAN: "506123******4362",
      dateIssued: "11/04/2024 10:27:43",
      expiry: "32 months",
      batch: "847264905",
    },
    {
      id: 8,
      cardholder: "Nazeer Ajibola",
      maskedPAN: "506123******4362",
      dateIssued: "11/04/2024 10:27:43",
      expiry: "32 months",
      batch: "847264905",
    },
    {
      id: 9,
      cardholder: "Nazeer Ajibola",
      maskedPAN: "506123******4362",
      dateIssued: "11/04/2024 10:27:43",
      expiry: "32 months",
      batch: "847264905",
    },
    {
      id: 10,
      cardholder: "Nazeer Ajibola",
      maskedPAN: "506123******4362",
      dateIssued: "11/04/2024 10:27:43",
      expiry: "32 months",
      batch: "847264905",
    },
    {
      id: 11,
      cardholder: "Nazeer Ajibola",
      maskedPAN: "506123******4362",
      dateIssued: "11/04/2024 10:27:43",
      expiry: "32 months",
      batch: "847264905",
    },
    {
      id: 12,
      cardholder: "Nazeer Ajibola",
      maskedPAN: "506123******4362",
      dateIssued: "11/04/2024 10:27:43",
      expiry: "32 months",
      batch: "847264905",
    },
    {
      id: 13,
      cardholder: "Nazeer Ajibola",
      maskedPAN: "506123******4362",
      dateIssued: "11/04/2024 10:27:43",
      expiry: "32 months",
      batch: "847264905",
    },
    {
      id: 14,
      cardholder: "Nazeer Ajibola",
      maskedPAN: "506123******4362",
      dateIssued: "11/04/2024 10:27:43",
      expiry: "32 months",
      batch: "847264905",
    },
    {
      id: 15,
      cardholder: "Nazeer Ajibola",
      maskedPAN: "506123******4362",
      dateIssued: "11/04/2024 10:27:43",
      expiry: "32 months",
      batch: "847264905",
    },
  ]);

  return (
    <div className="cards-container">
      <div className="left">
        <h3 className="fw-bold">Cards</h3>
        <p className="text-muted">Shows list of all users with authorized roles.</p>
      </div>
      <div className="cards-tabs">
        <button
          className={`tab-button ${
            activeTab === "personalized" ? "active" : ""
          }`}
          onClick={() => setActiveTab("personalized")}
        >
          <span className="tab-dot"></span>
          Personalized
        </button>
        <button
          className={`tab-button ${activeTab === "instant" ? "active" : ""}`}
          onClick={() => setActiveTab("instant")}
        >
          Instant
        </button>
        <button
          className={`tab-button ${activeTab === "blocked" ? "active" : ""}`}
          onClick={() => setActiveTab("blocked")}
        >
          Blocked
        </button>
        <button
          className={`tab-button ${
            activeTab === "pin-reissue" ? "active" : ""
          }`}
          onClick={() => setActiveTab("pin-reissue")}
        >
          Pin Reissue
        </button>
      </div>

      <div className="cards-actions">
        <div className="search-area">
          <SearchInput placeholder="Search card" />
        </div>
        <div className="action-buttons">
          <button className="btn btn-outline-secondary">
            <i className="bi bi-calendar"></i> Date
          </button>
          <button className="btn btn-outline-secondary">
            <i className="bi bi-funnel"></i> Filter
          </button>
          <button className="btn btn-primary">
            <i className="bi bi-credit-card"></i> Issue Card
          </button>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Cardholder</th>
              <th>Masked PAN</th>
              <th>Date Issued</th>
              <th>Expiry</th>
              <th>Batch</th>
            </tr>
          </thead>
          <tbody>
            {cards.map((card) => (
              <tr key={card.id}>
                <td>{card.cardholder}</td>
                <td>{card.maskedPAN}</td>
                <td>{card.dateIssued}</td>
                <td>{card.expiry}</td>
                <td>{card.batch}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <span className="page-info">Page 1 of 20</span>
        <div className="page-buttons">
          <button className="btn btn-outline-secondary">Previous</button>
          <button className="btn btn-outline-secondary">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
