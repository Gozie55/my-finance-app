"use client"

import { useState } from "react"
import SearchInput from "../components/SearchInput"
import "../assets/css/Users.css"

const Users = () => {
  const [users] = useState([
    {
      id: 1,
      username: "RootUser",
      phone: "09012345678",
      email: "rootuser@thereaktor.com",
      dateCreated: "11/09/2024 08:41:37",
    },
    {
      id: 2,
      username: "RootUser",
      phone: "09012345678",
      email: "rootuser@thereaktor.com",
      dateCreated: "11/09/2024 08:41:37",
    },
    {
      id: 3,
      username: "RootUser",
      phone: "09012345678",
      email: "rootuser@thereaktor.com",
      dateCreated: "11/09/2024 08:41:37",
    },
  ])

  return (
    <div className="users-container">
      <div className="left">
            <h3 className="fw-bold">Users</h3>
            <p className="text-muted">
            Manage your users, create users, view and edit users. Assign roles to users here.
            </p>
          </div>
      <div className="users-header">
        <SearchInput placeholder="Search by username" />
        <button className="btn btn-primary">
          <i className="bi bi-plus"></i> Create User
        </button>
      </div>

      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Date Created</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.dateCreated}</td>
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

export default Users
