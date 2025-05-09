import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="patientdashboard-header">
        <div className="logo">PRS HOSPITALS</div>
        <nav className="main-nav">
          <ul>
            <li>Home</li>
            <li>Appointments</li>
            <li>Medical Records</li>
            <li>Billing</li>
            <li>Profile</li>
          </ul>
        </nav>
        <button>LOGIN</button>
      </header>
    </>
  );
};

export default Header;
