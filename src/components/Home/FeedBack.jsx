import React from "react";
import { FaStar } from "react-icons/fa";
import profileImg from "../../assets/img3.jpg"; // Replace with your image path

const Feedback = () => {
  // Inline styles
  const containerStyle = {
    padding: "40px 20px",
    background: "linear-gradient(to bottom right, #a8e063, #f7e5a5, #ffffff)"
  };

  const headingStyle = {
    textAlign: "center",
    marginBottom: "10px",
    color: "orange",
    fontSize: "20px",
  };

  const titleStyle = {
    textAlign: "center",
    marginBottom: "30px",
    color: "black",
    fontSize: "28px",
    fontWeight: "bold",
  };

  const contentContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    alignItems: "flex-start",
    justifyContent: "center",
  };

  const videoContainerStyle = {
    flex: "1 1 50%",
  };

  const videoStyle = {
    width: "100%",
    height: "350px", // Increased height for better visibility
    borderRadius: "3px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const cardsContainerStyle = {
    flex: "1 1 45%",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  };

  const cardStyle = {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const starsStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    color: "orange",
    display: "flex",
  };

  const profileSectionStyle = {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  };

  const profileImgStyle = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    objectFit: "cover",
  };

  const nameStyle = {
    fontWeight: "bold",
    fontSize: "16px",
    marginBottom: "5px",
  };

  const roleStyle = {
    color: "#6c757d",
    fontSize: "14px",
    marginBottom: "10px",
  };

  const feedbackStyle = {
    color: "#555",
    fontSize: "14px",
    lineHeight: "1.5",
    marginTop: "10px",
  };

  const dividerStyle = {
    border: "0",
    borderTop: "1px solid black",
    margin: "10px 0",
  };

  return (
    <div style={containerStyle}>
      <p style={headingStyle}>Loved by 200,000+ students</p>
      <h1 style={titleStyle}>Students Community Feedback</h1>
      <div style={contentContainerStyle}>
        {/* Video Section */}
        <div style={videoContainerStyle}>
          <video
            style={videoStyle}
            controls
            src="https://www.w3schools.com/html/mov_bbb.mp4" // Replace with a study-related video link
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Cards Section */}
        <div style={cardsContainerStyle}>
          {/* Card 1 */}
          <div style={cardStyle}>
            <div style={profileSectionStyle}>
              <img
                src={profileImg}
                alt="Oliver Beddows"
                style={profileImgStyle}
              />
              <div>
                <p style={nameStyle}>Oliver Beddows</p>
                <p style={roleStyle}>UX Designer</p>
              </div>
            </div>
            <hr style={dividerStyle} />
            <p style={feedbackStyle}>
              Rapidiously build collaboration and ideas sharing via bleeding
              edge interfaces. Energistically plagiarize teams and building
              paradigms whereas going forward process and monetize.
            </p>
            <div style={starsStyle}>
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>

          {/* Card 2 */}
          <div style={cardStyle}>
            <div style={profileSectionStyle}>
              <img
                src={profileImg}
                alt="Oliver Beddows"
                style={profileImgStyle}
              />
              <div>
                <p style={nameStyle}>Oliver Beddows</p>
                <p style={roleStyle}>UX Designer</p>
              </div>
            </div>
            <hr style={dividerStyle} />
            <p style={feedbackStyle}>
              Rapidiously build collaboration and ideas sharing via bleeding
              edge interfaces. Energistically plagiarize teams and building
              paradigms whereas going forward process and monetize.
            </p>
            <div style={starsStyle}>
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
