import React from "react";
import { FaLaptopCode, FaBuilding, FaChartLine, FaDatabase, FaGraduationCap, FaCogs } from "react-icons/fa";

const Category = () => {
  // Style Objects
  const containerStyle = {
    padding: "20px",
    textAlign: "center",
    // background: "linear-gradient(to bottom right, #a8e063, #f7e5a5, #ffffff)",
  };

  const headingStyle = {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "orange",
  };

  const subHeadingStyle = {
    fontSize: "2rem",
    color: "black",
    marginBottom: "30px",
  };

  const categoryListStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  };

  const categoryCardStyle = {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    padding: "15px 20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    flex: "1 1 calc(33.333% - 40px)", // Default: three cards per row
    textAlign: "left",
    maxWidth: "300px",
  };

  const iconStyle = {
    fontSize: "2rem",
    color: "#ff5722", // Orange icon color
  };

  const textContainerStyle = {
    flex: "1",
  };

  const titleStyle = {
    fontSize: "1rem",
    fontWeight: "bold",
    marginBottom: "5px",
  };

  const courseStyle = {
    fontSize: "0.9rem",
    color: "#777",
  };

  const buttonStyle = {
    marginTop: "30px",
    padding: "10px 20px",
    backgroundColor: "#ff5722", // Orange color
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
    fontWeight: "bold",
  };

  // Media Query for Responsiveness
  const mediaQueryStyle = `
    @media (max-width: 768px) {
      .category-card {
        flex: 1 1 calc(50% - 20px); /* Two cards per row */
      }
    }
    @media (max-width: 480px) {
      .category-card {
        flex: 1 1 100%; /* One card per row */
      }
    }
  `;

  return (
    <div style={containerStyle}>
      {/* Inline CSS for Media Queries */}
      <style>{mediaQueryStyle}</style>

      {/* Heading */}
      <p style={headingStyle}>Popular Category</p>
      <h1 style={subHeadingStyle}>Popular Category For Learn</h1>

      {/* Categories */}
      <div style={categoryListStyle}>
        {/* Card 1 */}
        <div style={{ ...categoryCardStyle }} className="category-card">
          <FaLaptopCode style={iconStyle} />
          <div style={textContainerStyle}>
            <p style={titleStyle}>Computer Science</p>
            <p style={courseStyle}>24 Course</p>
          </div>
        </div>
        {/* Card 2 */}
        <div style={{ ...categoryCardStyle }} className="category-card">
          <FaBuilding style={iconStyle} />
          <div style={textContainerStyle}>
            <p style={titleStyle}>Civil Engineering</p>
            <p style={courseStyle}>04 Course</p>
          </div>
        </div>
        {/* Card 3 */}
        <div style={{ ...categoryCardStyle }} className="category-card">
          <FaChartLine style={iconStyle} />
          <div style={textContainerStyle}>
            <p style={titleStyle}>Business Analysis</p>
            <p style={courseStyle}>27 Course</p>
          </div>
        </div>
        {/* Card 4 */}
        <div style={{ ...categoryCardStyle }} className="category-card">
          <FaDatabase style={iconStyle} />
          <div style={textContainerStyle}>
            <p style={titleStyle}>Data Science Analytics</p>
            <p style={courseStyle}>28 Course</p>
          </div>
        </div>
        {/* Card 5 */}
        <div style={{ ...categoryCardStyle }} className="category-card">
          <FaGraduationCap style={iconStyle} />
          <div style={textContainerStyle}>
            <p style={titleStyle}>Learning Management</p>
            <p style={courseStyle}>78 Course</p>
          </div>
        </div>
        {/* Card 6 */}
        <div style={{ ...categoryCardStyle }} className="category-card">
          <FaCogs style={iconStyle} />
          <div style={textContainerStyle}>
            <p style={titleStyle}>Computer Engineering</p>
            <p style={courseStyle}>38 Course</p>
          </div>
        </div>
      </div>

      {/* Button */}
      <button style={buttonStyle}>Browse All Categories</button>
    </div>
  );
};

export default Category;
