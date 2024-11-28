import React from "react";
import img5 from "../../assets/img5.png"; // Import image 1
import img6 from "../../assets/img6.png"; // Import image 2

const ResponsiveCards = () => {
  // Inline styles
  const containerStyle = {
    padding: "40px 20px",
    background: "linear-gradient(to bottom right, #a8e063, #f7e5a5, #ffffff)", // Gradient background
    display: "flex",
    flexWrap: "nowrap", // Keep cards in one row
    overflowX: "auto", // Allow horizontal scrolling for small screens
    gap: "20px",
    minHeight: "100vh", // Full height for the viewport
    alignItems: "center", // Center cards vertically
  };

  const cardStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: "5px",
    padding: "40px",
    minWidth: "400px", // Ensures card width is suitable for all screen sizes
    maxWidth: "600px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "0.3s ease-in-out",
  };

  const textContainerStyle = {
    flex: 1,
    textAlign: "left",
    marginRight: "20px",
  };

  const headingStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px",
  };

  const descriptionStyle = {
    fontSize: "16px",
    color: "#555",
    lineHeight: "1.5",
    marginBottom: "15px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "orange",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  };

  const imageStyle = {
    width: "180px", // Increased image width
    height: "auto", // Maintain aspect ratio
    borderRadius: "10px",
    marginTop: "80px",
  };

  return (
    <div style={containerStyle}>
      {/* Card 1 */}
      <div style={cardStyle}>
        <div style={textContainerStyle}>
          <h1 style={headingStyle}>Start Teaching Today</h1>
          <p style={descriptionStyle}>
            Seamlessly engage technically sound collaborative reintermed goal
            oriented content rather than ethical.
          </p>
          <button style={buttonStyle}>Become An Instructor</button>
        </div>
        <img src={img5} alt="Teaching" style={imageStyle} />
      </div>

      {/* Card 2 */}
      <div style={cardStyle}>
        <div style={textContainerStyle}>
          <h1 style={headingStyle}>If You Join Our Course</h1>
          <p style={descriptionStyle}>
            Seamlessly engage technically sound collaborative reintermed goal
            oriented content rather than ethical.
          </p>
          <button style={buttonStyle}>Register For Free</button>
        </div>
        <img src={img6} alt="Course" style={imageStyle} />
      </div>
    </div>
  );
};

export default ResponsiveCards;
