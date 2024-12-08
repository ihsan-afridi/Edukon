import React from "react";
import { FaCalendarAlt, FaUser, FaCommentAlt, FaArrowRight } from "react-icons/fa";
import blogImage from "../../assets/img4.jpg"; // Replace with your image path

const BlogPosts = () => {
  // Inline styles
  const containerStyle = {
    padding: "40px 20px",
    // background: "linear-gradient(to bottom right, #a8e063, #f7e5a5, #ffffff)"
  };

  const headingStyle = {
    textAlign: "center",
    color: "orange",
    fontSize: "20px",
    marginBottom: "10px",
  };

  const titleStyle = {
    textAlign: "center",
    color: "black",
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "30px",
  };

  const cardsContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  };

  const cardStyle = {
    flex: "1 1 300px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "15px",
  };

  const imageStyle = {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "10px",
  };

  const contentStyle = {
    textAlign: "left",
    marginTop: "15px",
    flex: "1",
    width: "100%",
  };

  const blogTitleStyle = {
    color: "#000",
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const infoStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "orange",
    fontSize: "14px",
    marginBottom: "10px",
  };

  const descriptionStyle = {
    color: "#555",
    fontSize: "14px",
    lineHeight: "1.5",
    marginBottom: "10px",
  };

  const hrStyle = {
    border: "0",
    borderTop: "1px solid black",
    margin: "10px 0",
  };

  const footerStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  };

  const readMoreStyle = {
    color: "orange",
    fontSize: "14px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "5px",
  };

  const commentsStyle = {
    color: "orange",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    gap: "5px",
  };

  return (
    <div style={containerStyle}>
      <p style={headingStyle}>FROM OUR BLOG POSTS</p>
      <h1 style={titleStyle}>More Articles From Resource Library</h1>
      <div style={cardsContainerStyle}>
        {/* Card 1 */}
        <div style={cardStyle}>
          <img src={blogImage} alt="Blog Post" style={imageStyle} />
          <div style={contentStyle}>
            <p style={blogTitleStyle}>
              Scottish Creatives To Receive Funded Business.
            </p>
            <div style={infoStyle}>
              <FaUser />
              <span>Begrass Tyson</span>
              <FaCalendarAlt />
              <span>April 23, 2022</span>
            </div>
            <p style={descriptionStyle}>
              Pluoresnts customize prancing apcentered customer service anding
              ands asing straelg Interacvely cordinate performe...
            </p>
            <hr style={hrStyle} />
            <div style={footerStyle}>
              <span style={readMoreStyle}>
                Read More <FaArrowRight />
              </span>
              <span style={commentsStyle}>
                <FaCommentAlt /> 4
              </span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div style={cardStyle}>
          <img src={blogImage} alt="Blog Post" style={imageStyle} />
          <div style={contentStyle}>
            <p style={blogTitleStyle}>
              Scottish Creatives To Receive Funded Business.
            </p>
            <div style={infoStyle}>
              <FaUser />
              <span>Begrass Tyson</span>
              <FaCalendarAlt />
              <span>April 23, 2022</span>
            </div>
            <p style={descriptionStyle}>
              Pluoresnts customize prancing apcentered customer service anding
              ands asing straelg Interacvely cordinate performe...
            </p>
            <hr style={hrStyle} />
            <div style={footerStyle}>
              <span style={readMoreStyle}>
                Read More <FaArrowRight />
              </span>
              <span style={commentsStyle}>
                <FaCommentAlt /> 4
              </span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div style={cardStyle}>
          <img src={blogImage} alt="Blog Post" style={imageStyle} />
          <div style={contentStyle}>
            <p style={blogTitleStyle}>
              Scottish Creatives To Receive Funded Business.
            </p>
            <div style={infoStyle}>
              <FaUser />
              <span>Begrass Tyson</span>
              <FaCalendarAlt />
              <span>April 23, 2022</span>
            </div>
            <p style={descriptionStyle}>
              Pluoresnts customize prancing apcentered customer service anding
              ands asing straelg Interacvely cordinate performe...
            </p>
            <hr style={hrStyle} />
            <div style={footerStyle}>
              <span style={readMoreStyle}>
                Read More <FaArrowRight />
              </span>
              <span style={commentsStyle}>
                <FaCommentAlt /> 4
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
