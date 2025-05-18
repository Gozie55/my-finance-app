"use client"

import { useState } from "react"
import SearchInput from "../components/SearchInput"
import "../assets/css/CardScheme.css"

const CardScheme = () => {
  const [schemes] = useState([
    { id: 1, name: "Verve", panLength: 18 },
    { id: 2, name: "Verve", panLength: 18 },
    { id: 3, name: "Verve", panLength: 18 },
  ])

  return (
    <div className="card-scheme-container">
      <div className="left">
            <h3 className="fw-bold">Card Scheme</h3>
            <p className="text-muted">
            Add, view and edit card schemes here.
            
            </p>
          </div>
      <div className="card-scheme-header">
        <SearchInput placeholder="Search by scheme name" />
        <button className="btn btn-primary">
          <i className="bi bi-plus"></i> Add Scheme
        </button>
      </div>

      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>Scheme Name</th>
              <th>PAN Length</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {schemes.map((scheme) => (
              <tr key={scheme.id}>
                <td>{scheme.name}</td>
                <td>{scheme.panLength}</td>
                <td>
                  <div className="action-buttons">
                    <button className="action-button delete" title="Delete Scheme">
                      <i className="bi bi-trash"></i>
                    </button>
                    <button className="action-button edit" title="Edit Scheme">
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

export default CardScheme
