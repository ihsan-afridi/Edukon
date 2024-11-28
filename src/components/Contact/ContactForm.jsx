import React, { useState, useEffect } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480); // Update state based on screen width
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check on mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  const containerStyle = {
    maxWidth: "600px",
    margin: "auto",
    padding: isMobile ? "10px" : "20px",
  };

  const headingStyle = {
    color: "#FFA500",
    fontSize: isMobile ? "20px" : "24px",
    textAlign: "center",
    marginBottom: "20px",
  };

  const subheadingStyle = {
    color: "#000",
    fontSize: isMobile ? "16px" : "18px",
    textAlign: "center",
    marginBottom: "20px",
  };

  const inputStyle = {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    fontSize: "16px",
    width: "100%",
  };

  const textareaStyle = {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    fontSize: "16px",
    width: "100%",
    height: "150px",
  };

  const buttonStyle = {
    backgroundColor: "#FFA500",
    color: "#fff",
    border: "none",
    padding: "10px 16px",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    width: "100%",
    marginTop: "20px",
  };

  const rowStyle = {
    display: "flex",
    gap: "20px",
    flexWrap: isMobile ? "wrap" : "nowrap",
    marginBottom: "20px",
  };

  const halfWidthInput = {
    flex: "1",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Get in touch with us</h1>
      <p style={subheadingStyle}>
        Fill the form below so we can get to know you and your needs better.
      </p>

      <form onSubmit={handleSubmit}>
        {/* First Row: Name and Email */}
        <div style={rowStyle}>
          <div style={halfWidthInput}>
            {/* <label>Your Name *</label> */}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={inputStyle}
              placeholder="Your Name *"
              required
            />
          </div>
          <div style={halfWidthInput}>
            {/* <label>Your Email *</label> */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
              placeholder="Your Email *"
              required
            />
          </div>
        </div>

        {/* Second Row: Mobile and Subject */}
        <div style={rowStyle}>
          <div style={halfWidthInput}>
            {/* <label>Mobile Number *</label> */}
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              style={inputStyle}
              placeholder="Mobile Number *"
              required
            />
          </div>
          <div style={halfWidthInput}>
            {/* <label>Your Subject *</label> */}
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              style={inputStyle}
              placeholder="Your Subject *"
              required
            />
          </div>
        </div>

        {/* Message Input */}
        <div>
          {/* <label>Your Message *</label> */}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={textareaStyle}
            placeholder="Your Message *"
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" style={buttonStyle}>
          Send Our Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
