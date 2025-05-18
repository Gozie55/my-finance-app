import { Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import CardProfile from "./pages/CardProfile";
import Cards from "./pages/Cards";
import AuthorizationList from "./pages/AuthorizationList";
import Branches from "./pages/Branches";
import CardRequest from "./pages/CardRequest";
import CardScheme from "./pages/CardScheme";
import Users from "./pages/Users";
import Stock from "./pages/Stock";
import Roles from "./pages/Roles";
import AuthorizationQueue from "./pages/AuthorizationQueue";
import Trail from "./pages/Trail";
import Account from "./pages/Account";
import "./App.css";


function App() {
  

  return (
    <div className={"app-container"}>
      <Sidebar />
      <div className="content-area">
      <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/card-profile" element={<CardProfile />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/authorization-list" element={<AuthorizationList />} />
            <Route path="/branches" element={<Branches />} />
            <Route path="/card-request" element={<CardRequest />} />
            <Route path="/card-scheme" element={<CardScheme />} />
            <Route path="/users" element={<Users />} />
            <Route path="/stock" element={<Stock />} />
            <Route path="/roles" element={<Roles />} />
            <Route
              path="/authorization-queue"
              element={<AuthorizationQueue />}
            />
            <Route path="/trail" element={<Trail />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
