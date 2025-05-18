"use client";

import { useState } from "react";
import SearchInput from "../components/SearchInput";
import "../assets/css/CardRequest.css";

const CardRequest = () => {
  const [requests] = useState([
    {
      id: 1,
      branch: "Corporate",
      initiator: "RootUser",
      quantity: 10,
      batch: "847264905",
      dateRequested: "11/14/2024 10:27:43",
      status: "Pending",
    },
    {
      id: 2,
      branch: "Corporate",
      initiator: "RootUser",
      quantity: 10,
      batch: "847264905",
      dateRequested: "11/14/2024 10:27:43",
      status: "Pending",
    },
    {
      id: 3,
      branch: "Corporate",
      initiator: "RootUser",
      quantity: 10,
      batch: "847264905",
      dateRequested: "11/14/2024 10:27:43",
      status: "Pending",
    },
    {
      id: 4,
      branch: "Corporate",
      initiator: "RootUser",
      quantity: 10,
      batch: "847264905",
      dateRequested: "11/14/2024 10:27:43",
      status: "Pending",
    },
    {
      id: 5,
      branch: "Corporate",
      initiator: "RootUser",
      quantity: 10,
      batch: "847264905",
      dateRequested: "11/14/2024 10:27:43",
      status: "Pending",
    },
  ]);

  const getStatusClass = (status: string) => {
    switch (status) {
      case "Ready":
        return "status-ready";
      case "In Progress":
        return "status-progress";
      case "Pending":
        return "status-pending";
      case "Acknowledged":
        return "status-acknowledged";
      default:
        return "";
    }
  };

  return (
    <div className="card-request-container">
      <div className="left">
        <h3 className="fw-bold">Authorization Queue</h3>
        <p className="text-muted">
          Show the different requests for authorized roles.
        </p>
      </div>
      <div className="card-request-header">
        <SearchInput placeholder="Search by branch" />
      </div>

      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Initiator</th>
              <th>Menu</th>
              <th>Access</th>
              <th>Date Requested</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr key={request.id}>
                <td>{request.branch}</td>
                <td>{request.initiator}</td>
                <td>{request.quantity}</td>
                <td>{request.dateRequested}</td>
                <td>
                  <span className={getStatusClass(request.status)}>
                    {request.status}
                  </span>
                </td>
                <td>
                  <a
                    style={{ color: "green", marginRight: 10 }}
                    href="#"
                    className="view-link"
                  >
                    Approve
                  </a>
                  <a href="#" className="view-link" style={{ color: "red" }}>
                    Decline
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <span className="page-info">Page 1 of 1</span>
        <div className="page-buttons">
          <button className="btn btn-outline-secondary">Previous</button>
          <button className="btn btn-outline-secondary">Next</button>
        </div>
      </div>
    </div>
  );
};

export default CardRequest;
