"use client";

import { useState } from "react";
import SearchInput from "../components/SearchInput";
import "../assets/css/Branches.css";

const Branches = () => {
  const [branches] = useState([
    {
      id: 1,
      name: "Head Office",
      code: "202",
      address: "Ikeki",
      zone: "Lagos",
      dateAdded: "10/18/2024 14:39:58",
    },
    {
      id: 2,
      name: "Head Office",
      code: "202",
      address: "Ikeki",
      zone: "Lagos",
      dateAdded: "10/18/2024 14:39:58",
    },
    {
      id: 3,
      name: "Head Office",
      code: "202",
      address: "Ikeki",
      zone: "Lagos",
      dateAdded: "10/18/2024 14:39:58",
    },
  ]);

  return (
    <div className="branches-container">
      

      
      <div className="card-profile-header">
        <div className="left">
          <h3 className="fw-bold">Branches</h3>
          <p className="text-muted">
            Add branches, view branches and edit branches.
          </p>
        </div>
        <div className="right">
          <button className="btn btn-outline-secondary">
            <i className="bi bi-file-earmark-arrow-up"></i> Upload File
          </button>
        </div>
      </div>

      <div className="card-profile-header">
        <SearchInput placeholder="Search branch" />
        <div className="right">
          <button className="btn btn-primary add-branch-btn">
            <i className="bi bi-plus"></i> Add Branch
          </button>
          <button className="btn btn-outline-secondary">
            <i className="bi bi-upload"></i> Update From Core
          </button>
        </div>
      </div>
     

      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Code</th>
              <th>Address</th>
              <th>Zone</th>
              <th>Date Added</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {branches.map((branch) => (
              <tr key={branch.id}>
                <td>{branch.name}</td>
                <td>{branch.code}</td>
                <td>{branch.address}</td>
                <td>{branch.zone}</td>
                <td>{branch.dateAdded}</td>
                <td>
                  <div className="action-buttons">
                    <button className="action-button delete">
                      <i className="bi bi-trash"></i>
                    </button>
                    <button className="action-button edit">
                      <i className="bi bi-pencil"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Branches;
