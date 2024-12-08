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
    flexDirection: isMobile ? "column" : "row",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: "100vh",
    padding: isMobile ? "20px" : "40px",
    backgroundColor: "#f9f9f9",
    boxSizing: "border-box", // Ensure consistent sizing
  };

  const leftContentStyle = {
    maxWidth: isMobile ? "100%" : "600px",
    textAlign: isMobile ? "center" : "left",
    padding: isMobile ? "20px 10px" : "40px",
    flex: "1",
    minWidth: "300px",
    boxSizing: "border-box",
  };

  const headingStyle = {
    fontSize: isMobile ? "2.5rem" : "3.5rem",
    fontWeight: "bold",
    marginBottom: "20px",
    lineHeight: "1.2",
    color: "#333",
  };

  const orangeLineStyle = {
    fontSize: isMobile ? "1.8rem" : "2.5rem",
    fontWeight: "bold",
    color: "#ff5722",
    marginBottom: "30px",
    marginTop: "20px",
  };

  const descriptionStyle = {
    fontSize: isMobile ? "1rem" : "1.2rem",
    marginBottom: "30px",
    color: "#555",
    lineHeight: "1.6",
  };

  const inputGroupStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row", // Stack vertically on mobile
    alignItems: "center",
    marginBottom: "20px",
    width: "100%",
  };

  const inputStyle = {
    flex: "1",
    padding: "15px",
    border: "1px solid #ccc",
    borderRadius: "0px",
    fontSize: "1rem",
    boxSizing: "border-box",
    marginBottom: isMobile ? "10px" : "0", // Add margin between input and button on mobile
  };

  const buttonStyle = {
    padding: "15px 20px",
    backgroundColor: "#ff5722",
    color: "#fff",
    border: "none",
    borderRadius: "0px",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "bold",
    textAlign: "center",
    width: isMobile ? "100%" : "auto", // Full width on mobile
  };

  const rightImageContainerStyle = {
    flex: "1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%", // Ensure the image takes the full width of its container
    padding: isMobile ? "20px" : "0",
    boxSizing: "border-box",
  };

  const rightImageStyle = {
    width: "100%",
    height: isMobile ? "auto" : "90%", // Maintain aspect ratio while increasing height
    objectFit: "cover",
    borderRadius: "10px",
  };

  return (
    <div style={containerStyle} className="container-fluid">
      {/* Left Content */}
      <div style={leftContentStyle}>
        <div style={orangeLineStyle}>Online Education</div>
        <h1 style={headingStyle}>
          Learn The Skills <br />You
          Need To Succeed
        </h1>
        <p style={descriptionStyle}>
          Free online courses from the world’s leading experts. Join 18+ million
          learners today and enhance your skills from anywhere in the world.
          Start learning now and shape your future.
        </p>
        <div style={inputGroupStyle}>
          <input
            type="text"
            placeholder="Enter keywords of your course"
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
