import React, { useState, useEffect } from "react";

const FooterBottom = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Update the screen width state on window resize
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Set responsive styles
  const bottomSectionStyle = {
    backgroundColor: "white",
    color: "#555",
    padding: screenWidth <= 768 ? "20px 10px" : "30px 20px", // Adjust padding for mobile screens
    textAlign: "center",
    fontSize: screenWidth <= 768 ? "14px" : "18px", // Adjust font size for mobile screens
    minHeight: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    flexDirection: screenWidth <= 768 ? "column" : "row", // Stack vertically on small screens
  };

  const spanStyle = {
    color: "black",
    fontSize: screenWidth <= 768 ? "16px" : "18px", // Adjust span font size for mobile screens
  };

  return (
    <div style={bottomSectionStyle}>
      <div>© 2022 <span style={spanStyle}>Edukon </span>| Designed by <span style={spanStyle}>CodexCoder</span></div>
    </div>
  );
};

export default FooterBottom;
