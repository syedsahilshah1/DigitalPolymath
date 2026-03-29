import React from 'react';
import { Link } from 'react-router-dom';
import './CourseCard.css';

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <div className="card-image-wrapper">
        <img src={course.image} alt={course.title} className="card-image" />
        <span className={`card-badge badge-${course.categoryColor}`}>{course.category}</span>
      </div>
      <div className="card-content">
        <span className="card-level">LEVEL: {course.level}</span>
        <h3 className="card-title">{course.title}</h3>
        
        <div className="card-instructor">
          <img src={course.instructorImage} alt={course.instructor} className="instructor-avatar" />
          <span className="instructor-name">By {course.instructor}</span>
        </div>
        
        <div className="card-footer">
          <span className="card-price">{course.price === 0 ? 'Free' : `$${course.price.toFixed(2)}`}</span>
          <Link to={`/course/${course.id}`} className="btn btn-secondary card-btn">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
