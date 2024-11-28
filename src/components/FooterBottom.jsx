import React from "react";

const FooterBottom = () => {
  const bottomSectionStyle = {
    backgroundColor: "white",
    color: "#555",
    padding: "30px 20px", // Increased padding for more space
    textAlign: "center",
    fontSize: "18px",
    minHeight: "60px", // Ensures a taller height
    display: "flex", // Centering content vertically and horizontally
    alignItems: "center",
    justifyContent: "center",
    gap: '8 px'
  };

  return (
    <div style={bottomSectionStyle}>
      © 2022  <span style={{color: 'black', fontSize: '20px'}}>Edukon </span>| Designed by <span style={{color: 'black', fontSize: '20px'}}>CodexCoder </span>
    </div>
  );
};

export default FooterBottom;
