import { useLocation } from "react-router-dom";
import "../assets/css/Header.css";
import SearchInput from "./SearchInput";

const Header = () => {
  const location = useLocation();
  const isDashboard = location.pathname === "/";

  
  const getPageTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Dashboard";
      case "/card-profile":
        return "Card Profile";
      case "/cards":
        return "Cards";
      case "/authorization-list":
        return "Authorization List";
      case "/branches":
        return "Branches";
      case "/card-request":
        return "Card Request";
      case "/card-scheme":
        return "Card Scheme";
      case "/users":
        return "Users";
      case "/stock":
        return "Stock";
      case "/roles":
        return "Roles";
      case "/authorization-queue":
        return "Authorization Queue";
      case "/trail":
        return "Trail";
      case "/account":
        return "Account";
      default:
        return "Dashboard";
    }
  };

  return (
    <header className="app-header">
      <div className="header-content">
        <div className="page-info">
          <i className="bi bi-credit-card me-2"></i>
          <div>
            <h1 className="page-title">{getPageTitle()}</h1>
          </div>
        </div>

        <div className="header-right">
          {isDashboard && (
            <SearchInput placeholder="Search" style={{ borderRadius: "30px" }} />
          )}

          <div className="header-actions">
            <div className="notification-icon">
              <i className="bi bi-bell"></i>
            </div>
            <div className="user-profile">
              <i className="bi bi-person-circle"></i>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
