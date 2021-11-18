import React from "react";
import "./styles/index.css";
import "./App.css";
import Header from "./components/section-components/Header";
import Home from "./views/Home";
import Navbar from "./views/Navbar";
import Sidebar from "./views/Sidebar";

function App() {
  return (
    <div className="center_view">
      <Header/>
      <div className="center_view landscape_view">
        <Navbar/>
        <div className="marginal_center_view">
          <Home />
        </div>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
