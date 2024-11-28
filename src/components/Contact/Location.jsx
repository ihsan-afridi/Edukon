import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";

const Location = () => {
  const mapStyle = {
    width: "100%",
    height: "350px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  };

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap", // Ensures responsive behavior
    justifyContent: "space-between",
    padding: "20px",
    backgroundColor: "#fff",
    // border: "5px solid red", // Matches red border
    boxSizing: "border-box",
  };

  const mapContainerStyle = {
    flex: "2",
    marginRight: "20px",
    minWidth: "300px", // Ensures responsiveness
  };

  const infoContainerStyle = {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#fff7e6", // Light cream background
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  };

  const cardStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 0",
    borderBottom: "1px solid #ddd", // Add divider between cards
    fontFamily: "Arial, sans-serif",
  };

  const iconStyle = {
    fontSize: "25px",
    color: "orange", // Matches green color
  };

  const textContainerStyle = {
    display: "flex",
    flexDirection: "column",
  };

  const titleStyle = {
    fontWeight: "bold",
    fontSize: "16px",
    marginBottom: "5px",
    color: "#333",
  };

  const textStyle = {
    fontSize: "14px",
    color: "#555",
  };

  // Heading style
  const headingStyle = {
    textAlign: "center",
    color: "#FFA500", // Orange color
    fontSize: "24px",
    marginBottom: "0", // Remove bottom margin to bring both lines closer
  };

  // Subheading style (black color)
  const subheadingStyle = {
    textAlign: "center",
    color: "#000", // Black color for subheading
    fontSize: "25px",
    marginTop: "5px", // Space between the heading and subheading
  };

  return (
    <div>
      {/* Heading */}
      <p style={headingStyle}>Get in touch with us</p>
      <h1 style={subheadingStyle}>We're Always Eager To Hear From You!</h1>

      <div style={containerStyle}>
        {/* Left: Map Section */}
        <div style={mapContainerStyle}>
          <iframe
            style={mapStyle}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.847994640839!2d90.38212101462293!3d23.79285779319101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7112699b65b%3A0x78331e3c51a9e1cd!2sCodexCoder!5e0!3m2!1sen!2sbd!4v1618903150844!5m2!1sen!2sbd"
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>

        {/* Right: Information Section */}
        <div style={infoContainerStyle}>
          {/* Office Address */}
          <div style={cardStyle}>
            <FaMapMarkerAlt style={iconStyle} />
            <div style={textContainerStyle}>
              <span style={titleStyle}>Office Address</span>
              <span style={textStyle}>1201 Park Street, Fifth Avenue</span>
            </div>
          </div>

          {/* Phone Number */}
          <div style={cardStyle}>
            <FaPhoneAlt style={iconStyle} />
            <div style={textContainerStyle}>
              <span style={titleStyle}>Phone Number</span>
              <span style={textStyle}>+22698 745 632</span>
              <span style={textStyle}>02 982 745</span>
            </div>
          </div>

          {/* Send Email */}
          <div style={cardStyle}>
            <FaEnvelope style={iconStyle} />
            <div style={textContainerStyle}>
              <span style={titleStyle}>Send Email</span>
              <span style={textStyle}>adminedukon@gmail.com</span>
            </div>
          </div>

          {/* Website */}
          <div style={cardStyle}>
            <FaGlobe style={iconStyle} />
            <div style={textContainerStyle}>
              <span style={titleStyle}>Our Website</span>
              <a
                href="https://www.edukon.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#555", textDecoration: "none", fontSize: "14px" }}
              >
                www.edukon.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
