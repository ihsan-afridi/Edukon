import React from "react";
import profileImage from "../../assets/profile.png"; // Path to your profile image

const Profile = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: window.innerWidth <= 768 ? "column" : "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    maxWidth: "1300px",
    margin: "0 auto",
  };

  const leftSideStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: window.innerWidth <= 768 ? "0 0 auto" : "1 1 40%",
    margin: "20px",
  };

  const profileImageStyle = {
    borderRadius: "50%",
    width: "100%",
    maxWidth: window.innerWidth <= 768 ? "200px" : "400px", // Adjust size dynamically
    height: "auto", // Maintain aspect ratio
    display: window.innerWidth <= 500 ? "none" : "block", // Hide for smaller screens
  };

  const rightSideStyle = {
    flex: window.innerWidth <= 768 ? "0 0 auto" : "1 1 55%",
    textAlign: window.innerWidth <= 768 ? "center" : "left",
    padding: "20px",
  };

  const headingStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "orange",
    marginBottom: "15px",
  };

  const paragraphStyle = {
    fontSize: "16px",
    color: "#555",
    marginBottom: "20px",
    lineHeight: "1.6",
  };

  const featureStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
    textAlign: "left",
  };

  const iconStyle = {
    fontSize: "30px",
    color: "#f56a00",
    marginRight: "15px",
  };

  const featureTextStyle = {
    fontSize: "18px",
    fontWeight: "500",
    color: "#333",
    marginBottom: "5px",
  };

  const featureDescStyle = {
    fontSize: "14px",
    color: "#555",
  };

  return (
    <div style={containerStyle}>
      {/* Left Side: Profile Image */}
      <div style={leftSideStyle}>
        <img
          src={profileImage}
          alt="Profile"
          style={profileImageStyle}
        />
        {/* Fallback Hidden Text */}
        <p style={{ display: "none" }}>Profile Image</p>
      </div>

      {/* Right Side: Text and Features */}
      <div style={rightSideStyle}>
        <h2 style={headingStyle}>About Our Edukon</h2>
        <h1>Good Qualification Services And Better Skills</h1>
        <p style={paragraphStyle}>
          Distinctively provide access to multifunctional users while leveraging transparent processes that incentivize efficient functionalities and extensible architecture. Communicate leveraged services and cross-platform solutions.
        </p>

        {/* Feature: Skilled Instructors */}
        <div style={featureStyle}>
          <i className="bi bi-person-circle" style={iconStyle}></i>
          <div>
            <div style={featureTextStyle}>Skilled Instructors</div>
            <p style={featureDescStyle}>
              Access multifunctional users and communicate leveraged services.
            </p>
          </div>
        </div>

        {/* Feature: Get Certificate */}
        <div style={featureStyle}>
          <i className="bi bi-award" style={iconStyle}></i>
          <div>
            <div style={featureTextStyle}>Get Certificate</div>
            <p style={featureDescStyle}>
              Leverage transparent processes for extensible architecture.
            </p>
          </div>
        </div>

        {/* Feature: Online Classes */}
        <div style={featureStyle}>
          <i className="bi bi-laptop" style={iconStyle}></i>
          <div>
            <div style={featureTextStyle}>Online Classes</div>
            <p style={featureDescStyle}>
              Communicate leveraged services with cross-platform solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
