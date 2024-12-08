import React from "react";
import { FaStar } from "react-icons/fa";
import profileImage from "../../assets/img2.jpg";

const instructors = [
  {
    name: "Emilee Logan",
    title: "Master of Education Degree",
    courses: "08 courses",
    students: "30 students",
    stars: 4.5,
  },
  {
    name: "Donald Logan",
    title: "Master of Education Degree",
    courses: "08 courses",
    students: "30 students",
    stars: 4.8,
  },
  {
    name: "Oliver Porter",
    title: "Master of Education Degree",
    courses: "08 courses",
    students: "30 students",
    stars: 4.7,
  },
  {
    name: "Nahla Jones",
    title: "Master of Education Degree",
    courses: "08 courses",
    students: "30 students",
    stars: 4.9,
  },
];

const Classes = () => {
  const containerStyle = {
    padding: "40px 20px",
    textAlign: "center",
  };

  const scrollContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    paddingBottom: "20px",
  };

  const cardStyle = {
    flex: "0 0 auto",
    width: "220px",
    border: "none",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    textAlign: "center",
  };

  const profileImageStyle = {
    width: "80%",
    height: "auto",
    objectFit: "cover",
    borderRadius: "50%",
    marginTop: "15px",
  };

  const cardBodyStyle = {
    padding: "15px",
  };

  const titleStyle = {
    fontSize: "1rem",
    fontWeight: "700",
    margin: "10px 0",
  };

  const textStyle = {
    fontSize: "0.8rem",
    color: "#6c757d",
  };

  const starsStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "0.9rem",
    marginBottom: "10px",
  };

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "8px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "0.8rem",
  };

  const ctaStyle = {
    textAlign: "center",
    marginTop: "40px",
  };

  const ctaButtonStyle = {
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    padding: "12px 30px",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyle}>
      <p
        style={{
          textAlign: "center",
          marginBottom: "10px",
          color: "orange",
          fontSize: "25px",
        }}
      >
        World-class Instructors
      </p>
      <h1 style={{ textAlign: "center", marginBottom: "30px", color: "black" }}>
        Classes Taught By Real Creators
      </h1>
      <div style={scrollContainerStyle}>
        {instructors.map((instructor, index) => (
          <div key={index} style={cardStyle}>
            <img
              src={profileImage}
              alt={instructor.name}
              style={profileImageStyle}
            />
            <div style={cardBodyStyle}>
              <h5 style={titleStyle}>{instructor.name}</h5>
              <p style={textStyle}>{instructor.title}</p>
              <p style={textStyle}>
                <strong>{instructor.courses}</strong> |{" "}
                <strong>{instructor.students}</strong>
              </p>
              <div style={starsStyle}>
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar
                    key={i}
                    color={i < Math.floor(instructor.stars) ? "orange" : "#ccc"}
                  />
                ))}
                <span style={{ marginLeft: "8px" }}>
                  {instructor.stars.toFixed(1)}
                </span>
              </div>
              <button style={buttonStyle}>View Profile</button>
            </div>
          </div>
        ))}
      </div>
      <div style={ctaStyle}>
        <h5>
          Want to help people learn, grow, and achieve more in life?{" "}
          <span style={{ color: "orange" }}>Become an instructor</span>
        </h5>
        <button style={ctaButtonStyle}>Become an Instructor</button>
      </div>
    </div>
  );
};

export default Classes;
