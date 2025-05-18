"use client"

import { useState } from "react"
import SearchInput from "../components/SearchInput"
import "../assets/css/Roles.css"

const Roles = () => {
  const [roles] = useState([
    { id: 1, name: "Admin", dateCreated: "11/07/2024 19:55:57" },
    { id: 2, name: "Admin", dateCreated: "11/07/2024 19:55:57" },
    { id: 3, name: "Admin", dateCreated: "11/07/2024 19:55:57" },
    { id: 4, name: "Admin", dateCreated: "11/07/2024 19:55:57" },
    { id: 5, name: "Admin", dateCreated: "11/07/2024 19:55:57" },
  ])

  return (
    <div className="roles-container">
      <div className="left">
            <h3 className="fw-bold">Roles</h3>
            <p className="text-muted">
            Manage your roles, create roles, view roles and edit roles. Select privileges and set account permissions here.
            </p>
          </div>
      <div className="roles-header">
        <SearchInput placeholder="Search role" />
        <button className="btn btn-primary">
          <i className="bi bi-plus"></i> Create Role
        </button>
      </div>

      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Date Created</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => (
              <tr key={role.id}>
                <td>{role.name}</td>
                <td>{role.dateCreated}</td>
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
  )
}

export default Roles
