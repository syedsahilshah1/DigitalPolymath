import React from 'react';
import CourseCard from '../components/CourseCard';
import { coursesData } from '../data/courses';
import { ArrowRight, CheckCircle, Calendar, Users } from 'lucide-react';
import './Courses.css';

const Courses = () => {
  return (
    <div className="courses-page animate-fade-in">
      {/* Intro Section */}
      <section className="courses-intro container section">
        <div className="intro-grid">
          <div className="intro-content">
            <div className="badge badge-purple mb-4">FUTURE-PROOF YOUR CAREER</div>
            <h1 className="intro-title">
              Unlock Your <span className="text-secondary italic">IT</span> <span className="text-secondary italic">Potential</span>
            </h1>
            <p className="intro-desc">
              High-end editorial IT education designed for the modern architect. Master complex systems through curated curriculum and expert-led labs.
            </p>
            <div className="btn-group">
              <button className="btn btn-primary">Browse Courses <ArrowRight size={16} style={{marginLeft: '0.5rem'}} /></button>
              <button className="btn btn-secondary">View Syllabus</button>
            </div>
            
            <div className="platform-rating glass">
              <div className="stars">★★★★★</div>
              <div className="rating-text">TOP RATED PLATFORM</div>
              <div className="rating-sub">Join 50k+ professionals mastering systems.</div>
            </div>
          </div>
          
          <div className="intro-image-wrapper">
            <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1000" alt="Student using laptop" className="intro-main-image" />
          </div>
        </div>
      </section>

      {/* Curated Paths (Horizontal scroll or grid) */}
      <section className="curated-paths container section bg-accent">
        <div className="section-head">
          <div>
            <h2 className="section-title">Curated Learning Paths</h2>
            <p className="section-subtitle">Rigorous modules designed by industry veterans to bridge the gap between theory and high-level execution.</p>
          </div>
          <button className="btn btn-outline border-none text-primary">View all tracks <ArrowRight size={16} style={{marginLeft: '0.5rem'}} /></button>
        </div>
        
        <div className="courses-grid limited-grid">
          {coursesData.slice(0, 3).map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* Academic Edge */}
      <section className="academic-edge container section">
        <div className="edge-grid">
          <div className="edge-content">
            <h2 className="section-title mb-4">The Academic Edge</h2>
            <p className="section-subtitle mb-8">Digital Polymath is not just a course platform. We are a digital campus where high-end technology meets rigorous pedagogy.</p>
            
            <div className="edge-features">
              <div className="feature">
                <div className="feature-icon bg-blue-light"><CheckCircle className="text-primary" /></div>
                <div className="feature-text">
                  <h3>Certified Instructors</h3>
                  <p>Learn from Ph.D. holders and FAANG engineers who are at the forefront of the digital revolution.</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon bg-purple-light"><Calendar className="text-secondary" /></div>
                <div className="feature-text">
                  <h3>Flexible Learning</h3>
                  <p>Asynchronous modules designed to fit into a professional's schedule without compromising depth.</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon bg-gray-light"><Users className="text-main" /></div>
                <div className="feature-text">
                  <h3>Community Support</h3>
                  <p>Join a global network of polymaths. Private Slack channels, peer reviews, and weekly masterminds.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="edge-code">
            <div className="code-window shadow-xl">
              <div className="window-header">
                <span className="dot bg-red"></span>
                <span className="dot bg-yellow"></span>
                <span className="dot bg-green"></span>
              </div>
              <pre className="code-block">
                <code>
{`// Polymath Logic Engine
class Curriculum {
  constructor(student) {
    this.rigor = 'Academic';
    this.speed = 'Digital';
  }

  evaluate(level) {
    return this.student.apply(this.rigor * this.speed);
  }
}

const studentPath = new Curriculum('You');
// Output: Mastering the Future`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section container section">
        <div className="cta-banner gradient-blue">
          <h2>Ready to start your journey?</h2>
          <p>Enroll now and get immediate access to our introductory IT Architecture workshop.</p>
          <div className="btn-group centered mt-6">
            <button className="btn btn-primary bg-white text-primary">Get Started Free</button>
            <button className="btn btn-outline border-white text-white">Explore tracks</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
