import React from "react";

const ProjectManagement = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: window.innerWidth <= 768 ? "column" : "row",
    alignItems: "stretch",
    justifyContent: "center",
    maxWidth: "1300px",
    margin: "0 auto",
  };

  const leftSideStyle = {
    flex: 1,
    backgroundColor: "#b2f2bb", // Light green color
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    textAlign: "center",
    
  };

  const rightSideStyle = {
    flex: 1,
    backgroundColor: "black",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "20px",
    textAlign: "center",
  };

  const textStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "orange",
    color: "white",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const featuresGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  };

  const featureStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "left",
    padding: "10px",
  };

  const iconStyle = {
    fontSize: "30px",
    color: "orange",
    marginRight: "10px",
  };

  const featureTextStyle = {
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "1.6",
  };

  return (
    <div style={containerStyle}>
      {/* Left Side */}
      <div style={leftSideStyle}>
        <h1 style={textStyle}>Build Your Project <br/>Management Skills<br/> Online Anytime</h1>
        <button style={buttonStyle}>Sign Up Now</button>
      </div>

      {/* Right Side */}
      <div style={rightSideStyle}>
        <div style={featuresGridStyle}>
          {/* Skilled Instructors */}
          <div style={featureStyle}>
            <i className="bi bi-person-circle" style={iconStyle}></i>
            <div style={featureTextStyle}>
              <strong>Skilled Instructors</strong>
              <p>You pick the schedule.</p>
            </div>
          </div>

          {/* Get Certificate */}
          <div style={featureStyle}>
            <i className="bi bi-award" style={iconStyle}></i>
            <div style={featureTextStyle}>
              <strong>Get Certificate</strong>
              <p>You pick the schedule.</p>
            </div>
          </div>

          {/* Online Classes */}
          <div style={featureStyle}>
            <i className="bi bi-laptop" style={iconStyle}></i>
            <div style={featureTextStyle}>
              <strong>Online Classes</strong>
              <p>You pick the schedule.</p>
            </div>
          </div>

          {/* Educator Helps */}
          <div style={featureStyle}>
            <i className="bi bi-people" style={iconStyle}></i>
            <div style={featureTextStyle}>
              <strong>Educator Helps</strong>
              <p>You pick the schedule.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectManagement;
