import React from "react";
import { FaBookOpen, FaUser, FaStar } from "react-icons/fa";
import img from "../../assets/img.jpg"; // Adjust the path if needed

const Card = () => {
  const courses = [
    {
      price: "$30",
      title: "Adobe XD",
      reviews: "03 reviews",
      description: "Fundamentals of Adobe XD Theory Learn New",
      lessons: "18x Lesson",
      mode: "Online Class",
      author: "William Smith",
    },
    {
      price: "$30",
      title: "Certified Graphic Design",
      reviews: "03 reviews",
      description: "Certified Graphic Design with Free Project Course",
      lessons: "18x Lesson",
      mode: "Online Class",
      author: "Lora Smith",
    },
    {
      price: "$30",
      title: "Theory Learn New",
      reviews: "03 reviews",
      description: "Theory Learn New Student And Fundamentals",
      lessons: "18x Lesson",
      mode: "Online Class",
      author: "Robot Smith",
    },
    {
      price: "$30",
      title: "Computer Fundamentals",
      reviews: "03 reviews",
      description: "Computer Fundamentals Basic Startup Ultricies Vitae",
      lessons: "18x Lesson",
      mode: "Online Class",
      author: "Zinat Zaara",
    },
    {
      price: "$30",
      title: "Boozy Halloween Drinks",
      reviews: "03 reviews",
      description: "Boozy Halloween Drinks for the Grown Eleifend Kuismod",
      lessons: "18x Lesson",
      mode: "Online Class",
      author: "Rajib Raj",
    },
    {
      price: "$30",
      title: "Science And Arts",
      reviews: "03 reviews",
      description: "Student Want to Learn About Science And Arts",
      lessons: "18x Lesson",
      mode: "Online Class",
      author: "Angel Mili",
    },
  ];

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    background: "linear-gradient(to bottom right, #a8e063, #f7e5a5, #ffffff)"
  };

  const rowStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
  };

  const cardStyle = {
    flex: "1 1 calc(33.333% - 20px)", // 3 cards per row with gaps
    maxWidth: "calc(33.333% - 20px)",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  };

  const cardImageStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  };

  const cardBodyStyle = {
    padding: "15px",
    flex: "1",
  };

  const cardFooterStyle = {
    padding: "10px 15px",
    background: "#f9f9f9",
    textAlign: "right",
    fontSize: "14px",
    color: "#555",
  };

  const titleStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "18px",
    marginBottom: "10px",
  };

  const reviewStyle = {
    fontSize: "14px",
    color: "#888",
    marginBottom: "10px",
  };

  const descriptionStyle = {
    fontSize: "15px",
    color: "#555",
    marginBottom: "10px",
  };

  const smallTextStyle = {
    fontSize: "14px",
    color: "#888",
  };

  const priceStyle = {
    color: "#007bff",
  };

  return (
    <div style={containerStyle}>
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h2>Featured Courses</h2>
        <p>Pick A Course To Get Started</p>
      </div>
      <div style={rowStyle}>
        {courses.map((course, index) => (
          <div style={cardStyle} key={index}>
            <img src={img} alt={course.title} style={cardImageStyle} />
            <div style={cardBodyStyle}>
              <div style={titleStyle}>
                <span>{course.title}</span>
                <span style={priceStyle}>{course.price}</span>
              </div>
              <p style={reviewStyle}>
                <FaStar style={{ color: "#ffc107" }} /> {course.reviews}
              </p>
              <p style={descriptionStyle}>{course.description}</p>
              <p style={smallTextStyle}>
                <FaBookOpen /> {course.lessons}
              </p>
              <p style={smallTextStyle}>
                <FaUser /> {course.mode}
              </p>
            </div>
            <div style={cardFooterStyle}>
              <small>By {course.author}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
