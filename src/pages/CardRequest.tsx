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
      status: "Ready",
    },
    {
      id: 2,
      branch: "Corporate",
      initiator: "RootUser",
      quantity: 10,
      batch: "847264905",
      dateRequested: "11/14/2024 10:27:43",
      status: "Ready",
    },
    {
      id: 3,
      branch: "Corporate",
      initiator: "RootUser",
      quantity: 10,
      batch: "847264905",
      dateRequested: "11/14/2024 10:27:43",
      status: "In Progress",
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
      status: "Acknowledged",
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
        <h3 className="fw-bold">Card Request</h3>
        <p className="text-muted">View and attend to card requests here.</p>
      </div>
      <div className="card-request-header">
        <SearchInput placeholder="Search by branch" />
      </div>

      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Branch</th>
              <th>Initiator</th>
              <th>Quantity</th>
              <th>Batch</th>
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
                <td>{request.batch}</td>
                <td>{request.dateRequested}</td>
                <td>
                  <span className={getStatusClass(request.status)}>
                    {request.status}
                  </span>
                </td>
                <td>
                  <a href="#" className="view-link">
                    View
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CardRequest;
