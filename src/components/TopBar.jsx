import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const TopBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Check if the page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true); // Activate sticky behavior when scrolled
      } else {
        setIsScrolled(false); // Reset when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const topBarStyle = {
    backgroundColor: "#000", // Black background
    padding: "5px 20px", // Reduced padding for smaller height
    color: "#fff",
    fontSize: "14px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap", // Enable wrapping for smaller screens
    position: isScrolled ? "fixed" : "static", // Sticky top bar when scrolled
    top: 0,
    width: "100%",
    zIndex: 1000,
  };

  const buttonStyle = {
    borderRadius: "4px",
    padding: "8px 16px", // Adjusted padding for the button
    fontSize: "14px",
    fontWeight: "bold",
    border: "1px solid transparent",
    backgroundColor: "#28a745",
    color: "#fff",
    display: "inline-flex",
    alignItems: "center",
  };

  return (
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
      <button style={buttonStyle}>Buy Now</button>
    </div>
  );
};

export default TopBar;
