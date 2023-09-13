
import React from 'react';
import './Navbar.css';


function Navbar({ setShowCourse, showCourse }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="logo.jpeg" alt="Logo" />

      </div>

      <ul className="navbar-links">
        <li>
          <li onClick={
            () => { setShowCourse(!showCourse) }
          }>Colleges</li>
        </li>
        <li><a href="/about">Courses</a></li>
        <li><a href="/services">Exams</a></li>
        <li><a href="/contact">Study Abroad</a></li>
        <li><a href="/contact">Get Counselling</a></li>
        <li><a href="/contact">Latest News</a></li>

      </ul>
    </nav>
  );
}

export default Navbar;
