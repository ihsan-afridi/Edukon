import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from "./components/Navbar";
import Footer from './components/Footer'
import FooterBottom from './components/FooterBottom'
import Home from "./components/Home/Home";
import Courses from "./components/Courses/Courses";
import Blog from "./components/Blog/Blog";
import Pages from "./components/Pages/Pages";
import Contact from "./components/Contact/Contact";
import Category from "./components/Home/Category";
import Card from './components/Home/Card'
import Profile from "./components/Home/Profile";
import Classes from "./components/Home/Classes";
import Feedback from "./components/Home/FeedBack";
import BlogPosts from "./components/Home/BlogPosts";
import StartToSuccess from './components/Home/StartToSuccess'
import ResponsiveCards from "./components/Home/ResponsiveCards";
import Location from "./components/Contact/Location";
import ContactForm from "./components/Contact/ContactForm";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
        <>
        <Home />
        <Category/>
        <Card/>
        <Profile/>
        <Classes/>
        <Feedback/>
        <BlogPosts/>
        <StartToSuccess/>
        <ResponsiveCards/>
        </>
        } />
        <Route path="/courses" element={
        <>
        <Courses />
        <Card/>
        </>
        } />
        <Route path="/blog" element={
        <>
        <Blog />
        <Card/>
        </>
        } />
        <Route path="/pages" element={
        <>
        <Pages />
        <Profile/>
        <Feedback/>
        <Classes/>
        <StartToSuccess/>
        <BlogPosts/>
        </>
        } />
        <Route path="/contact" element={
        <>
        <Contact />
        <Location/>
        <ContactForm/>
        </>
        } />
      </Routes>
      <Footer/>
      <FooterBottom/>
    </Router>
  );
}

export default App;
