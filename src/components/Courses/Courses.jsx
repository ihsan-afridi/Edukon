import React, { useState, useEffect } from "react";

const Courses = () => {
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
    handleResize(); // Call on initial load

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Base styles for the component
  const containerStyle = {
    minHeight: "100vh", 
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start", 
    // background: "linear-gradient(to right, #a8e063, #f7e5a5, #ffffff)", 
    padding: "20px",
  };

  const headerStyle = {
    textAlign: "center",
    margin: "20px 0", 
  };

  const mainHeadingStyle = {
    fontSize: isMobile ? "24px" : isTablet ? "28px" : "36px", // Adjust font size for mobile and tablet
    fontWeight: "bold",
    marginBottom: "10px", 
  };

  const breadcrumbStyle = {
    fontSize: isMobile ? "14px" : "18px", // Adjust breadcrumb font size
    color: "gray",
  };

  const filtersContainerStyle = {
    backgroundColor: "#FFDDC1", 
    padding: "20px",
    borderRadius: "8px", 
    display: "flex",
    flexDirection: isMobile || isTablet ? "column" : "row", // Stack filters vertically on smaller screens
    alignItems: "center", 
    gap: "20px", 
    maxWidth: "100%", 
    justifyContent: "center", 
    flexWrap: "wrap", 
    position: "relative", 
    top: "150px", 
  };

  const filtersLabelStyle = {
    display: "flex",
    alignItems: "center",
    fontSize: isMobile ? "16px" : "18px", 
    fontWeight: "bold",
    marginRight: "20px", 
    color: "#FF6347", 
  };

  const filtersIconStyle = {
    marginRight: "10px",
    fontSize: "20px",
  };

  const inputWrapperStyle = {
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
    padding: "10px 15px",
    borderRadius: "4px",
    border: "1px solid #ddd",
    fontSize: "16px",
    cursor: "pointer",
    flex: "1", 
    maxWidth: isMobile ? "100%" : "200px", // Make inputs full width on mobile
    minWidth: "150px", 
    boxSizing: "border-box",
    justifyContent: "space-between", 
  };

  const dropdownIconStyle = {
    marginLeft: "10px", 
    color: "gray",
    fontSize: "18px",
  };

  const inputTextStyle = {
    flex: "1",
    color: "black",
  };

  return (
    <div style={containerStyle}>
      {/* Header Section */}
      <div style={headerStyle}>
        <h1 style={mainHeadingStyle}>Archives: Courses</h1>
        <h5 style={breadcrumbStyle}>Home / Courses Page</h5>
      </div>

      {/* Filters Section */}
      <div style={filtersContainerStyle}>
        {/* Filters Label with Icon */}
        <div style={filtersLabelStyle}>
          <i className="fas fa-filter" style={filtersIconStyle}></i> Filters
        </div>

        {/* Filters Inputs */}
        <div style={inputWrapperStyle}>
          <span style={inputTextStyle}>All Categories</span>
          <i className="fas fa-chevron-down" style={dropdownIconStyle}></i>
        </div>
        <div style={inputWrapperStyle}>
          <span style={inputTextStyle}>All Language</span>
          <i className="fas fa-chevron-down" style={dropdownIconStyle}></i>
        </div>
        <div style={inputWrapperStyle}>
          <span style={inputTextStyle}>All Prices</span>
          <i className="fas fa-chevron-down" style={dropdownIconStyle}></i>
        </div>
        <div style={inputWrapperStyle}>
          <span style={inputTextStyle}>All Skills</span>
          <i className="fas fa-chevron-down" style={dropdownIconStyle}></i>
        </div>
      </div>
    </div>
  );
};

export default Courses;
