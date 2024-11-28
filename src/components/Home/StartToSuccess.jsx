import React from "react";

const StartToSuccess = () => {
  // Inline styles
  const containerStyle = {
    padding: "40px 20px",
    textAlign: "center",
    background: "linear-gradient(to bottom right, #a8e063, #f7e5a5, #ffffff)", // Gradient background
    minHeight: "100vh", // Full viewport height
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflowX: "hidden", // Prevent horizontal scrolling
  };

  const highlightTextStyle = {
    color: "orange",
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const mainHeadingStyle = {
    fontSize: "32px",
    color: "#333",
    marginBottom: "30px",
  };

  const statsContainerStyle = {
    display: "flex",
    flexWrap: "nowrap", // No wrapping, all cards in one row
    justifyContent: "center",
    gap: "15px",
    overflowX: "auto", // Add horizontal scrolling for small screens
    margin: "0 auto", // Center the container
  };

  const statCardStyle = {
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "15px", // Reduced padding
    textAlign: "center",
    width: "200px", // Reduced width for smaller cards
    minWidth: "200px",
    boxShadow: "0 3px 5px rgba(0, 0, 0, 0.1)",
    transition: "0.3s ease-in-out",
  };

  const statNumberStyle = {
    fontSize: "32px", // Reduced font size
    color: "orange",
    marginBottom: "8px",
  };

  const statDescriptionStyle = {
    fontSize: "14px", // Reduced font size
    color: "#555",
    lineHeight: "1.4",
  };

  return (
    <div style={containerStyle}>
      <p style={highlightTextStyle}>START TO SUCCESS</p>
      <h2 style={mainHeadingStyle}>Achieve Your Goals With Edukon</h2>
      <div style={statsContainerStyle}>
        {/* Stat Card 1 */}
        <div style={statCardStyle}>
          <h3 style={statNumberStyle}>30+</h3>
          <p style={statDescriptionStyle}>
            Years of Language Education Experience
          </p>
        </div>
        {/* Stat Card 2 */}
        <div style={statCardStyle}>
          <h3 style={statNumberStyle}>3084+</h3>
          <p style={statDescriptionStyle}>
            Learners Enrolled in Edukon Courses
          </p>
        </div>
        {/* Stat Card 3 */}
        <div style={statCardStyle}>
          <h3 style={statNumberStyle}>330+</h3>
          <p style={statDescriptionStyle}>
            Qualified Teachers And Language Experts
          </p>
        </div>
        {/* Stat Card 4 */}
        <div style={statCardStyle}>
          <h3 style={statNumberStyle}>2300+</h3>
          <p style={statDescriptionStyle}>
            Innovative Foreign Language Courses
          </p>
        </div>
      </div>
    </div>
  );
};

export default StartToSuccess;
