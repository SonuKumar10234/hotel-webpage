import React from "react";
import './Navbar.css';
function Navbar() {
  return (
    <div className="navar_container">
      <div className="navar_logo">
      <p style={{color:'blue', fontFamily:'sans-serif', fontWeight:'600'}}>My <span style={{color:'orange'}}>Hotel</span></p>
      </div>
      <div className="navar_logo">
       <p>Need help ? 8107344682</p>
      </div>
    </div>
  );
}

export default Navbar;