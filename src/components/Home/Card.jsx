import React from "react";
import { FaBookOpen, FaUser, FaStar } from "react-icons/fa";
import img from "../../assets/img.jpg"; // Adjust the path if needed
import './Card.css'; // Import the CSS file for styling

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

  return (
    <div className="container">
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h2>Featured Courses</h2>
        <p>Pick A Course To Get Started</p>
      </div>
      <div className="row">
        {courses.map((course, index) => (
          <div key={index} className="card">
            <img src={img} alt={course.title} />
            <div className="card-body">
              <div className="title">
                <span>{course.title}</span>
                <span className="price">{course.price}</span>
              </div>
              <p className="review">
                <FaStar style={{ color: "#ffc107" }} /> {course.reviews}
              </p>
              <p className="description">{course.description}</p>
              <p className="small-text">
                <FaBookOpen /> {course.lessons}
              </p>
              <p className="small-text">
                <FaUser /> {course.mode}
              </p>
            </div>
            <div className="card-footer">
              <small>By {course.author}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
