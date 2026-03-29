import React from 'react';
import CourseCard from '../components/CourseCard';
import { coursesData } from '../data/courses';
import { Filter, Star } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section container section">
        <div className="hero-content animate-fade-in">
          <div className="hero-label">ADVANCED IT CURRICULUM</div>
          <h1 className="hero-title">
            Master the <span className="text-primary">Digital Craft.</span>
          </h1>
          <p className="hero-description">
            An editorial collection of high-end technical courses designed for the modern polymath. Bridge the gap between theory and industrial mastery.
          </p>
          <div className="hero-badge">
            <span className="badge badge-purple"><Star size={12} style={{display:'inline', marginRight: '4px'}} /> Top Rated 2024</span>
          </div>
        </div>
      </section>

      <section className="courses-section container pb-section">
        <div className="filter-bar glass">
          <div className="filter-group">
            <Filter size={18} className="filter-icon" />
            <select className="filter-select">
              <option>All Categories</option>
              <option>Full Stack</option>
              <option>Cybersecurity</option>
            </select>
          </div>
          <div className="filter-group">
            <select className="filter-select">
              <option>Skill Level</option>
              <option>Beginner</option>
              <option>Advanced</option>
            </select>
          </div>
          <div className="filter-group">
            <select className="filter-select">
              <option>Price Range</option>
              <option>Free</option>
              <option>Paid</option>
            </select>
            <button className="btn btn-primary filter-apply-btn">
              <Filter size={16} />
            </button>
          </div>
        </div>

        <div className="courses-grid">
          {coursesData.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        
        <div className="pagination">
          <button className="page-btn">&lt;</button>
          <button className="page-btn active">1</button>
          <button className="page-btn">2</button>
          <button className="page-btn">3</button>
          <span className="page-dots">...</span>
          <button className="page-btn">12</button>
          <button className="page-btn">&gt;</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
