import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Import the logo

const Navbar = () => {
  const topBarStyle = {
    backgroundColor: "#000", // Black background
    padding: "5px 15px",
    color: "#fff",
    fontSize: "14px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap", // Enable wrapping for smaller screens
  };

  const whiteBarStyle = {
    backgroundColor: "#fff", // White background
    padding: "5px 15px", // Reduced padding for a smaller height
    fontSize: "14px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap", // Enable wrapping for smaller screens
  };

  const navLinkStyle = {
    margin: "0 12px", // Reduced margin for smaller height
    color: "#000",
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "16px",
  };

  const buttonStyle = {
    borderRadius: "5px",
    padding: "10px 20px", // Reduced padding for smaller height
    fontSize: "12px",
    fontWeight: "bold",
    border: "1px solid transparent",
    display: "inline-flex",
    alignItems: "center",
  };

  const loginButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#fff",
    color: "#f56a00",
    border: "1px solid #f56a00",
    borderRadius: "0",
  };

  const signUpButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#f56a00",
    color: "#fff",
    borderRadius: "0",
  };

  const stickyNavbarStyle = {
    position: "sticky",
    top: 0,
    zIndex: 1000, // Ensure it stays above other content
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Optional: Adds a shadow effect
  };

  return (
    <div style={stickyNavbarStyle}>
      {/* Top Bar */}
      <div style={topBarStyle}>
        <div className="d-flex align-items-center flex-wrap">
          <i
            className="bi bi-shop me-2"
            style={{ fontSize: "20px", color: "green" }}
          ></i>
          <span style={{ fontSize: "18px", fontWeight: "bold" }}>
            Envato Market
          </span>
        </div>
        <button
          style={{ ...buttonStyle, backgroundColor: "#28a745", color: "#fff" }}
        >
          Buy Now
        </button>
      </div>

      {/* White Info Bar */}
      <div style={whiteBarStyle}>
        {/* Contact Information */}
        <div
          className="d-flex align-items-center flex-wrap"
          style={{ fontSize: "16px", gap: "10px" }} // Reduced font size
        >
          <i className="bi bi-telephone-fill"></i>
          &nbsp;+800-123-4567 6587 &nbsp;|&nbsp;
          <i className="bi bi-geo-alt-fill"></i>
          &nbsp;Beverley, New York 224 USA
        </div>

        {/* Social Media Links */}
        <div
          className="d-flex align-items-center flex-wrap"
          style={{ fontSize: "16px", gap: "15px" }} // Reduced font size
        >
          Find us on:&nbsp;
          <a href="#" style={{ color: "orange" }}>
            <i className="bi bi-messenger"></i>
          </a>
          <a href="#" style={{ color: "orange" }}>
            <i className="bi bi-twitter"></i>
          </a>
          <a href="#" style={{ color: "orange" }}>
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" style={{ color: "orange" }}>
            <i className="bi bi-wifi"></i>
          </a>
          <a href="#" style={{ color: "orange" }}>
            <i className="bi bi-skype"></i>
          </a>
        </div>
      </div>
         
      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-light bg-white shadow-sm"
        style={{ padding: "5px 15px" }} // Reduced padding for smaller height
      >
        <div className="container-fluid">
          {/* Logo */}
          <img
            src={logo}
            alt="Logo"
            className="logo"
            style={{ maxWidth: "120px", height: "auto" }} // Reduced logo size
          />

          {/* Toggle Button */}
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
            className="collapse navbar-collapse"
            id="navbarNav"
            style={{ justifyContent: "center" }}
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link style={navLinkStyle} to="/">
                  Home +
                </Link>
              </li>
              <li className="nav-item">
                <Link style={navLinkStyle} to="/courses">
                  Courses +
                </Link>
              </li>
              <li className="nav-item">
                <Link style={navLinkStyle} to="/blog">
                  Blog +
                </Link>
              </li>
              <li className="nav-item">
                <Link style={navLinkStyle} to="/pages">
                  Pages +
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
          <div className="d-flex flex-wrap mt-2 mt-lg-0">
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
