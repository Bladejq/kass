import React, { useState } from "react";
import Header from "./components/Header";
import Middle from "./components/Middle";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("doc"); 

  const handleTabChange = (value) => {
    setActiveTab(value);
  };

  return (
    <div id="root">
      <div className="container">
        <Header onTabChange={handleTabChange} />
        <Middle activeTab={activeTab} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
