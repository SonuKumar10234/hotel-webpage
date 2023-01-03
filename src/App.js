import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import './App.css'
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Header/>
     <Content/>
    </div>
  );
}

export default App;
