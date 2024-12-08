import React from "react";
import img5 from "../../assets/img5.png"; // Import image 1
import img6 from "../../assets/img6.png"; // Import image 2

const ResponsiveCards = () => {
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    padding: "40px 20px",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
  };

  const cardStyle = {
    display: "flex",
    flexDirection: "row", // Place items side by side
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px",
    width: "100%",
    transition: "transform 0.3s ease-in-out",
  };

  const textContainerStyle = {
    flex: "1",
    padding: "10px 20px",
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
    lineHeight: "1.6",
    marginBottom: "20px",
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
    flex: "1",
    width: "100%", // Make image responsive
    maxWidth: "200px", // Limit maximum size
    height: "auto", // Maintain aspect ratio
    borderRadius: "10px",
  };

  const responsiveCardStyle = {
    ...cardStyle,
    flexDirection: "column", // Stack items on smaller screens
    textAlign: "center", // Center-align text for smaller screens
  };

  return (
    <div style={containerStyle}>
      {/* Card 1 */}
      <div
        style={window.innerWidth <= 768 ? responsiveCardStyle : cardStyle}
      >
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
      <div
        style={window.innerWidth <= 768 ? responsiveCardStyle : cardStyle}
      >
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
