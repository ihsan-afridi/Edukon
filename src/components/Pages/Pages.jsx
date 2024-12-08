import React, { useState, useEffect } from "react";

const Page = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Check the screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setIsMobile(true);
        setIsTablet(false);
      } else if (window.innerWidth <= 768) {
        setIsTablet(true);
        setIsMobile(false);
      } else {
        setIsMobile(false);
        setIsTablet(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
    // background: "linear-gradient(to bottom right, #a8e063, #f7e5a5, #ffffff)", // Mixed color gradient
    padding: "20px",
  };

  const headingStyle = {
    fontSize: isMobile ? "28px" : isTablet ? "36px" : "48px", // Adjust font size
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: "20px",
  };

  const breadcrumbStyle = {
    fontSize: isMobile ? "14px" : "18px", // Adjust font size for different screens
    color: "gray",
    marginTop: "10px",
  };

  // const lineStyle = {
  //   width: isMobile ? "60%" : isTablet ? "40%" : "20%", // Adjust line width
  //   height: "4px",
  //   backgroundColor: "#2c3e50",
  //   margin: "20px auto",
  // };

  return (
    <div style={containerStyle}>
      {/* Heading */}
      <h1 style={headingStyle}>About Our Edukon</h1>

      {/* Horizontal Divider
      <div style={lineStyle}></div> */}

      {/* Breadcrumb */}
      <h5 style={breadcrumbStyle}>
        Home / About
      </h5>
    </div>
  );
};

export default Page;
