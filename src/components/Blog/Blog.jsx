import React, { useState, useEffect } from "react";

const Blog = () => {
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

  // Styles for the component
  const containerStyle = {
    minHeight: "100vh", 
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    background: "linear-gradient(to bottom, #a8e063, #f7e5a5, #ffffff)", // Mixed gradient background
  };

  const headerStyle = {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  };

  const titleStyle = {
    fontSize: isMobile ? "28px" : isTablet ? "36px" : "48px", // Responsive font size
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const breadcrumbStyle = {
    fontSize: isMobile ? "14px" : "18px", 
    color: "gray",
  };

  const postContainerStyle = {
    display: "grid",
    gridTemplateColumns: isMobile
      ? "1fr" // Single column on mobile
      : isTablet
      ? "1fr 1fr" // Two columns on tablet
      : "1fr 1fr 1fr", // Three columns on larger screens
    gap: "20px", // Space between posts
    width: "100%",
    maxWidth: "1200px", // Limit max width for better appearance
    padding: "10px",
  };

  const postStyle = {
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "15px",
    textAlign: "center",
    transition: "transform 0.3s",
  };

  const postTitleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px",
  };

  const postDescriptionStyle = {
    fontSize: "16px",
    color: "gray",
  };

  const postHoverStyle = {
    ...postStyle,
    transform: "scale(1.05)", // Slight zoom on hover
  };

  return (
    <div style={containerStyle}>
      {/* Header Section */}
      <div style={headerStyle}>
        <h1 style={titleStyle}>Our Blog Posts</h1>
        <h5 style={breadcrumbStyle}>Home / Blog</h5>
      </div>

      {/* Blog Posts Section */}
      <div style={postContainerStyle}>
        {/* Example Blog Posts */}
        {[1, 2, 3, 4, 5, 6].map((post) => (
          <div
            key={post}
            style={postStyle}
            onMouseOver={(e) => (e.currentTarget.style = { ...postHoverStyle })}
            onMouseOut={(e) => (e.currentTarget.style = { ...postStyle })}
          >
            <h3 style={postTitleStyle}>Blog Post {post}</h3>
            <p style={postDescriptionStyle}>
              This is a short description of Blog Post {post}.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
