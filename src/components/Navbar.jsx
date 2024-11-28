import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Import the logo

const Navbar = () => {
  // Top bar style
  const topBarStyle = {
    backgroundColor: "#000", // Black background
    padding: "10px 20px",
    color: "#fff",
    fontSize: "14px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap", // Enable wrapping for smaller screens
  };

  // White bar style
  const whiteBarStyle = {
    backgroundColor: "#fff", // White background
    padding: "10px 20px",
    fontSize: "14px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap", // For better responsiveness
  };

  // Navbar link style
  const navLinkStyle = {
    margin: "0 15px",
    color: "#000",
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "16px",
  };

  // General button style
  const buttonStyle = {
    borderRadius: "4px",
    padding: "8px 20px", // Increased padding for more height
    fontSize: "14px",
    fontWeight: "bold",
    border: "1px solid transparent",
    display: "inline-flex",
    alignItems: "center",
  };

  // Button styles
  const buyNowButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#28a745", // Green background
    color: "#fff",
  };

  const loginButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#fff",
    color: "#f56a00", // Orange color
    border: "1px solid #f56a00", // Orange border
    marginRight: "10px",
  };

  const signUpButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#f56a00", // Orange background
    color: "#fff",
  };

  return (
    <div>
      {/* Top Bar */}
      <div style={topBarStyle}>
        <div>
          {/* Envato Market with Icon */}
          <i
            className="bi bi-shop"
            style={{ marginRight: "8px", fontSize: "20px", color: "green" }}
          ></i>
          <span style={{ fontSize: "18px", fontWeight: "bold", color: "green" }}>
            Envato Market
          </span>
        </div>
        <button style={buyNowButtonStyle}>Buy Now</button>
      </div>

      {/* White Info Bar */}
      <div style={whiteBarStyle}>
        <div className="d-flex align-items-center flex-wrap">
          {/* Left side with contact info and online icons */}
          <i className="bi bi-telephone-fill"></i>&nbsp;+800-123-4567 6587 &nbsp;|&nbsp;
          <i className="bi bi-geo-alt-fill"></i>&nbsp;Beverley, New York 224 USA
        </div>
        <div className="d-flex flex-wrap">
          Find us on:&nbsp;
          <a href="#" style={{ margin: "0 8px", color: "orange" }}>
            <i className="bi bi-messenger"></i>
          </a>
          <a href="#" style={{ margin: "0 8px", color: "orange" }}>
            <i className="bi bi-twitter"></i>
          </a>
          <a href="#" style={{ margin: "0 8px", color: "orange" }}>
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" style={{ margin: "0 8px", color: "orange" }}>
            <i className="bi bi-wifi"></i>
          </a>
          <a href="#" style={{ margin: "0 8px", color: "orange" }}>
            <i className="bi bi-skype"></i>
          </a>
        </div>
      </div>
      <hr />
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm" style={{ padding: "10px 20px" }}>
        <div className="container">
          {/* Logo */}
          <div className="d-flex align-items-center">
            <img src={logo} alt="Logo" className="logo" style={{ maxWidth: "100px", height: "auto" }} />
          </div>

          {/* Toggle Button for Small Screens */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ border: "none", background: "none" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div
            className="collapse navbar-collapse d-lg-flex align-items-center"
            id="navbarNav"
            style={{ flexGrow: "1", justifyContent: "center" }}
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link style={navLinkStyle} to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link style={navLinkStyle} to="/courses">
                  Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link style={navLinkStyle} to="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link style={navLinkStyle} to="/pages">
                  Pages
                </Link>
              </li>
              <li className="nav-item">
                <Link style={navLinkStyle} to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Buttons */}
          <div className="d-flex flex-wrap">
            <button style={loginButtonStyle}>
              <i className="bi bi-person"></i>&nbsp;Login
            </button>
            <button style={signUpButtonStyle}>
              <i className="bi bi-person-plus"></i>&nbsp;Sign Up
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
