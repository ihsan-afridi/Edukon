import React from "react";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "black",
    color: "white",
    padding: "60px 20px",
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    minHeight: "500px", // Ensures the footer takes some height
    justifyContent: "space-between", // Pushes bottom section to the bottom
  };

  const topRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexWrap: "wrap",
    gap: "20px",
  };

  const sectionStyle = {
    flex: "1 1 200px",
    minWidth: "200px",
  };

  const headingStyle = {
    fontSize: "30px",
    marginBottom: "10px",
    fontWeight: "bold",
    color: "#f8f9fa",
  };

  const inputSectionStyle = {
    display: "flex",
    alignItems: "center",
    position: "relative",
    maxWidth: "400px",
    width: "100%",
  };

  const inputStyle = {
    padding: "15px 50px 15px 45px",
    border: "1px solid #ccc",
    borderRadius: "2px",
    flex: "1",
    outline: "none",
    fontSize: "16px",
  };

  const buttonStyle = {
    position: "absolute",
    right: "5px",
    top: "5px",
    bottom: "5px",
    backgroundColor: "green",
    color: "#fff",
    border: "none",
    padding: "0 20px",
    borderRadius: "4px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    fontSize: "16px",
  };

  const iconContainerStyle = {
    position: "absolute",
    left: "10px",
    color: "green",
    display: "flex",
    alignItems: "center",
    fontSize: "20px",
  };

  const listStyle = {
    listStyle: "none",
    padding: 0,
    margin: 0,
  };

  const listItemStyle = {
    marginBottom: "8px",
  };

  const hrStyle = {
    border: "0.5px solid #fff",
    margin: "30px 0",
  };

  return (
    <footer style={footerStyle}>
      {/* Top Row */}
      <div style={topRowStyle}>
        {/* Left Side */}
        <div style={sectionStyle}>
          <h1 style={headingStyle}>
            Want Us To Email You About <br />
            Special Offers And Updates?
          </h1>
        </div>

        {/* Right Side */}
        <div style={inputSectionStyle}>
          <div style={iconContainerStyle}>
            <i className="fas fa-envelope"></i>
          </div>
          <input
            type="email"
            placeholder="Enter Your Email"
            style={inputStyle}
          />
          <button style={buttonStyle}>Subscribe Now</button>
        </div>
      </div>

      <hr style={hrStyle} />

      {/* Site Map */}
      <div style={topRowStyle}>
        <div style={sectionStyle}>
          <h4 style={headingStyle}>Site Map</h4>
          <ul style={listStyle}>
            <li style={listItemStyle}>Documentation</li>
            <li style={listItemStyle}>Feedback</li>
            <li style={listItemStyle}>Plugins</li>
            <li style={listItemStyle}>Support Forums</li>
            <li style={listItemStyle}>Themes</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div style={sectionStyle}>
          <h4 style={headingStyle}>Useful Links</h4>
          <ul style={listStyle}>
            <li style={listItemStyle}>About Us</li>
            <li style={listItemStyle}>Help Link</li>
            <li style={listItemStyle}>Terms & Conditions</li>
            <li style={listItemStyle}>Contact Us</li>
            <li style={listItemStyle}>Privacy Policy</li>
          </ul>
        </div>

        {/* Social Contact */}
        <div style={sectionStyle}>
          <h4 style={headingStyle}>Social Contact</h4>
          <ul style={listStyle}>
            <li style={listItemStyle}>Facebook</li>
            <li style={listItemStyle}>Twitter</li>
            <li style={listItemStyle}>Instagram</li>
            <li style={listItemStyle}>YouTube</li>
            <li style={listItemStyle}>Github</li>
          </ul>
        </div>

        {/* Our Support */}
        <div style={sectionStyle}>
          <h4 style={headingStyle}>Our Support</h4>
          <ul style={listStyle}>
            <li style={listItemStyle}>Help Center</li>
            <li style={listItemStyle}>Paid with Mollie</li>
            <li style={listItemStyle}>Status</li>
            <li style={listItemStyle}>Changelog</li>
            <li style={listItemStyle}>Contact Support</li>
          </ul>
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;
