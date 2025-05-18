"use client";

import { useState } from "react";
import SearchInput from "../components/SearchInput";
import "../assets/css/AuthorizationList.css";

const AuthorizationList = () => {
  const [authorizations] = useState([
    { id: 1, menu: "Users", access: "Create", enabled: true },
    { id: 2, menu: "Users", access: "Edit", enabled: true },
    { id: 3, menu: "Roles", access: "Full", enabled: true },
    { id: 4, menu: "Roles", access: "Create", enabled: false },
  ]);

  return (
    <div className="authorization-list-container">
      <div className="left">
        <h3 className="fw-bold">Authorization List</h3>
        <p className="text-muted">
          Add branches, view branches and edit branches.
        </p>
      </div>
      <div className="authorization-list-header">
        <SearchInput placeholder="Search user" />
        <button className="btn btn-outline-secondary">
          <i className="bi bi-funnel"></i> Filter
        </button>
      </div>

      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Menu</th>
              <th>Access</th>
              <th>Enabled</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {authorizations.map((auth) => (
              <tr key={auth.id}>
                <td>{auth.menu}</td>
                <td>{auth.access}</td>
                <td>
                  <div
                    className={`toggle-switch ${auth.enabled ? "enabled" : ""}`}
                  >
                    <div className="toggle-slider"></div>
                  </div>
                </td>
                <td>
                  <button className="btn btn-sm btn-outline-primary">
                    Configure
                  </button>
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

export default AuthorizationList;
