import React from "react";

const Contact = () => {
  const containerStyle = {
    minHeight: "100vh", // Full viewport height
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    // background: "linear-gradient(to bottom right, #a8e063, #f7e5a5, #ffffff)", // Gradient background
    padding: "20px",
  };

  const headingStyle = {
    fontSize: "36px", // Adjust font size as needed
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: "10px",
  };

  const breadcrumbStyle = {
    fontSize: "18px",
    color: "gray",
  };

  return (
    <div style={containerStyle}>
      {/* Heading */}
      <h1 style={headingStyle}>Get In Touch With Us</h1>

      {/* Breadcrumb */}
      <h5 style={breadcrumbStyle}>Home / Contact Us</h5>
    </div>
  );
};

export default Contact;
