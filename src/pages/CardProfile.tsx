"use client";

import { useState } from "react";
import SearchInput from "../components/SearchInput";
import "../assets/css/CardProfile.css";

const CardProfile = () => {
  const [cardProfiles] = useState([
    {
      id: 1,
      name: "Verve-1",
      currency: "NGN",
      expiration: "40 months",
      binPrefix: "5061234",
      dateCreated: "11/10/2024 23:21:03",
    },
    {
      id: 2,
      name: "Verve-1",
      currency: "NGN",
      expiration: "40 months",
      binPrefix: "5061234",
      dateCreated: "11/10/2024 23:21:03",
    },
    {
      id: 3,
      name: "Verve-1",
      currency: "NGN",
      expiration: "40 months",
      binPrefix: "5061234",
      dateCreated: "11/10/2024 23:21:03",
    },
  ]);

  return (
    <div className="card-profile-container">
      <div className="left">
        <h3 className="fw-bold">Card Profile</h3>
        <p className="text-muted">Create, view and edit card profiles here."</p>
      </div>
      <div className="card-profile-header">
        <SearchInput placeholder="Search by card name" />
        <button className="btn btn-primary add-profile-btn">
          <i className="bi bi-plus"></i> Add Profile
        </button>
      </div>

      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Card Name</th>
              <th>Currency</th>
              <th>Expiration</th>
              <th>Bin Prefix</th>
              <th>Date Created</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cardProfiles.map((profile) => (
              <tr key={profile.id}>
                <td>{profile.name}</td>
                <td>{profile.currency}</td>
                <td>{profile.expiration}</td>
                <td>{profile.binPrefix}</td>
                <td>{profile.dateCreated}</td>
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

export default CardProfile;
