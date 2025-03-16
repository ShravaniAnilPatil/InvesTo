import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile"; 
import SignupForm from "./components/SignUp";
import {  AuthProvider } from "./context/AuthContext";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import "./App.css";
import StockDetails from "./pages/StockDetails";
import StockList from "./pages/StockList";
import BondsList from "./pages/BondList";
import Table from "./components/table"
import Collabform from "./components/CollabForm";
import Buyform from "./components/buyform";
import Suggestions from "./components/Suggestion";

function Layout() {
  const location = useLocation(); 
  const showSidebar = location.pathname !== "/"; 

  return (
    <div className="app-container">
<Sidebar/>
        <div className="page-content">
          <AuthProvider>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signup" element={<SignupForm/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/stock-list" element={<StockList />} />
            <Route path="table" element={<Table/>}/>
            <Route path="/stock/:symbol" element={<StockDetails/>}/>
            <Route path="/bonds" element={<BondsList />} />
            <Route path="/suggestion" element={<Suggestions/>}/>
            <Route path="/collabform" element={<Collabform/>}/>
            <Route path="/buyform" element={<Buyform/>}/>
            </Routes>
            </AuthProvider>
        </div>
      </div>
    // </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;