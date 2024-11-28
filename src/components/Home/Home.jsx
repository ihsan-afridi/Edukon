import React, { useState, useEffect } from "react";
import background from "../../assets/background.jpg"; // Importing the background image

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen size is below 768px
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call initially to set state

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Styles
  const containerStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row", // Stack content vertically on mobile
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: "100vh", // Full viewport height
    padding: isMobile ? "20px" : "40px", // Adjust padding for smaller screens
    background: "linear-gradient(to bottom right, #a8e063, #f7e5a5, #ffffff)",
  };

  const leftContentStyle = {
    maxWidth: isMobile ? "100%" : "600px", // Full width on mobile
    textAlign: isMobile ? "center" : "left",
    padding: "20px",
    flex: "1",
    minWidth: "300px",
  };

  const headingStyle = {
    fontSize: isMobile ? "2rem" : "3rem", // Reduce font size on smaller screens
    fontWeight: "bold",
    marginBottom: "10px",
    lineHeight: "1.2",
  };

  const orangeLineStyle = {
    fontSize: isMobile ? "1.5rem" : "2rem",
    fontWeight: "bold",
    color: "#ff5722",
    marginBottom: isMobile ? "10px" : "20px",
    marginTop: "20px",
  };

  const descriptionStyle = {
    fontSize: isMobile ? "1rem" : "1.2rem", // Adjust font size for responsiveness
    marginBottom: "20px",
    color: "#555",
  };

  const inputGroupStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row", // Stack input and button on mobile
    alignItems: "center",
    marginBottom: "20px",
    gap: isMobile ? "10px" : "0", // Add spacing between elements on mobile
  };

  const inputStyle = {
    flex: "1",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "1rem",
    width: isMobile ? "100%" : "auto", // Full width on mobile
  };

  const buttonStyle = {
    marginLeft: isMobile ? "0" : "10px", // No margin on mobile
    padding: "10px 20px",
    backgroundColor: "#ff5722",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "bold",
    width: isMobile ? "100%" : "auto", // Full width on mobile
  };

  const rightImageContainerStyle = {
    flex: "1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    overflow: "hidden",
  };

  const rightImageStyle = {
    width: "100%",
    height: isMobile ? "300px" : "100%", // Adjust height for mobile
    objectFit: "cover", // Ensure the image covers the container while maintaining aspect ratio
  };

  return (
    <div style={containerStyle} className="container-fluid">
      {/* Left Content */}
      <div style={leftContentStyle}>
        <div style={orangeLineStyle}>Online Education</div>
        <h1 style={headingStyle}>
          Learn The Skills You <br />
          Need To Succeed
        </h1>
        <p style={descriptionStyle}>
          Free online courses from the world’s leading experts. Join 18+ million learners today.
        </p>
        <div style={inputGroupStyle}>
          <input
            type="text"
            placeholder="Keywords of your course"
            style={inputStyle}
          />
          <button style={buttonStyle}>Search Course</button>
        </div>
      </div>

      {/* Right Image */}
      <div style={rightImageContainerStyle}>
        <img src={background} alt="Background" style={rightImageStyle} />
      </div>
    </div>
  );
};

export default Home;
