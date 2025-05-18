import { Link, useLocation } from "react-router-dom";
import "../assets/css/Sidebar.css";
import logo from "../assets/images/logo.png";
import cardInfra from "../assets/images/cardInfra.png";

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <div className="sidebar ">
      <div className="logo-container">
        <img src={logo} alt="LAPO Logo" className="logo" />
      </div>

      <div className="menu-scroll-area">
        <div className="sidebar-item">
          <Link to="/" className={`sidebar-link ${isActive("/")}`}>
            <i className="bi bi-house-door"></i>
            <span>Dashboard</span>
          </Link>
        </div>

        <div className="sidebar-header">MAIN MENU</div>

        <div className="sidebar-deco">
          <div className="sidebar-item">
            <Link
              to="/branches"
              className={`sidebar-link ${isActive("/branches")}`}
            >
              <i className="bi bi-building"></i>
              <span>Branches</span>
            </Link>
          </div>

          <div className="sidebar-item">
            <Link to="/roles" className={`sidebar-link ${isActive("/roles")}`}>
              <i className="bi bi-person-badge"></i>
              <span>Roles</span>
            </Link>
          </div>

          <div className="sidebar-item">
            <Link to="/users" className={`sidebar-link ${isActive("/users")}`}>
              <i className="bi bi-people"></i>
              <span>Users</span>
            </Link>
          </div>

          <div className="sidebar-item">
            <Link
              to="/card-scheme"
              className={`sidebar-link ${isActive("/card-scheme")}`}
            >
              <i className="bi bi-credit-card-2-front"></i>
              <span>Card Scheme</span>
            </Link>
          </div>

          <div className="sidebar-item">
            <Link
              to="/card-profile"
              className={`sidebar-link ${isActive("/card-profile")}`}
            >
              <i className="bi bi-credit-card"></i>
              <span>Card Profile</span>
            </Link>
          </div>

          <div className="sidebar-item">
            <Link
              to="/card-request"
              className={`sidebar-link ${isActive("/card-request")}`}
            >
              <i className="bi bi-card-list"></i>
              <span>Card Request</span>
            </Link>
          </div>

          <div className="sidebar-item">
            <Link to="/stock" className={`sidebar-link ${isActive("/stock")}`}>
              <i className="bi bi-box"></i>
              <span>Stock</span>
            </Link>
          </div>

          <div className="sidebar-item">
            <Link to="/cards" className={`sidebar-link ${isActive("/cards")}`}>
              <i className="bi bi-credit-card-2-back"></i>
              <span>Cards</span>
            </Link>
          </div>

          <div className="sidebar-item">
            <Link
              to="/authorization-list"
              className={`sidebar-link ${isActive("/authorization-list")}`}
            >
              <i className="bi bi-list-check"></i>
              <span>Authorization List</span>
            </Link>
          </div>

          <div className="sidebar-item">
            <Link
              to="/authorization-queue"
              className={`sidebar-link ${isActive("/authorization-queue")}`}
            >
              <i className="bi bi-collection"></i>
              <span>Authorization Queue</span>
            </Link>
          </div>

          <div className="sidebar-item">
            <Link to="/trail" className={`sidebar-link ${isActive("/trail")}`}>
              <i className="bi bi-journal-text"></i>
              <span>Trail</span>
            </Link>
          </div>

          <div className="sidebar-item">
            <Link
              to="/account"
              className={`sidebar-link ${isActive("/account")}`}
            >
              <i className="bi bi-person-circle"></i>
              <span>Account</span>
            </Link>
          </div>
        </div>

        
      </div>
      <div className="sidebar-footer">
          <div className="sidebar-item logout">
            <Link
              to="/logout"
              className={`sidebar-link ${isActive("/logout")}`}
            >
              <i className="bi bi-box-arrow-left"></i>
              <span>Logout</span>
            </Link>
          </div>

          <div>
            <div className="powered-by">
              <span>POWERED BY</span>
            </div>

            <div className="cardinfra-logo-container">
              <img
                src={cardInfra}
                alt="Cardintra Logo"
                className="cardinfra-logo"
              />
            </div>
          </div>
        </div>
    </div>
  );
};

export default Sidebar;
