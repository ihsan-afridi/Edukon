import React from "react";
import profileImage from "../../assets/profile.png"; // Path to the profile image

const Profile = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    margin: "0 auto",
    maxWidth: "1300px",
    // background: "linear-gradient(to bottom right, #a8e063, #f7e5a5, #ffffff)",
  };

  const leftSideStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px",
    flex: "1 1 40%",
  };

  const profileImageStyle = {
    borderRadius: "50%",
    width: "100%", // Ensure image adapts to container
    maxWidth: "300px", // Limit max size for smaller screens
    height: "auto", // Maintain aspect ratio
    position: "relative",
    zIndex: 2,
  };

  const rightSideStyle = {
    flex: "1 1 55%",
    textAlign: "left",
    padding: "20px",
  };

  const headingStyle = {
    fontSize: "20px",
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

  // Responsive adjustments using inline styles with media queries
  const responsiveContainer = {
    ...containerStyle,
    flexDirection: "column",
    alignItems: "center",
  };

  const responsiveRightSideStyle = {
    ...rightSideStyle,
    textAlign: "center", // Center text on smaller screens
  };

  return (
    <div style={window.innerWidth <= 768 ? responsiveContainer : containerStyle}>
      {/* Left Side: Profile Image */}
      <div style={leftSideStyle}>
        <img src={profileImage} alt="Profile" style={profileImageStyle} />
      </div>

      {/* Right Side: Text and Features */}
      <div style={window.innerWidth <= 768 ? responsiveRightSideStyle : rightSideStyle}>
        <h2 style={headingStyle}>About Our Edukon</h2>
        <h1>Good Qualification Services And Better Skills</h1>
        <p style={paragraphStyle}>
          Distinctively provide
          access multifunction to users whereas transparent processes incentivize
          efficient functionalities rather than extensible architecture. Communicate
          leveraged services and cross-platform.
        </p>

        {/* Feature: Skilled Instructors */}
        <div style={featureStyle}>
          <i className="bi bi-person-circle" style={iconStyle}></i>
          <div>
            <div style={featureTextStyle}>Skilled Instructors</div>
            <p style={featureDescStyle}>
              Distinctively provide access multifunction to users whereas communicate
              leveraged services.
            </p>
          </div>
        </div>

        {/* Feature: Get Certificate */}
        <div style={featureStyle}>
          <i className="bi bi-award" style={iconStyle}></i>
          <div>
            <div style={featureTextStyle}>Get Certificate</div>
            <p style={featureDescStyle}>
              Distinctively provide access multifunction to users whereas communicate
              leveraged services.
            </p>
          </div>
        </div>

        {/* Feature: Online Classes */}
        <div style={featureStyle}>
          <i className="bi bi-laptop" style={iconStyle}></i>
          <div>
            <div style={featureTextStyle}>Online Classes</div>
            <p style={featureDescStyle}>
              Distinctively provide access multifunction to users whereas communicate
              leveraged services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
