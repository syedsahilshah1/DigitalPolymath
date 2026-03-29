import React from 'react';
import { coursesData } from '../data/courses';
import { BookOpen, CheckSquare, Award, Cloud, ArrowRight, LayoutDashboard, User, Settings } from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-layout animate-fade-in">
      {/* Sidebar */}
      <aside className="dashboard-sidebar glass">
        <div className="sidebar-header">
          <h2>Learning Hub</h2>
          <p>ADVANCED IT CURRICULUM</p>
        </div>
        
        <nav className="sidebar-nav">
          <a href="#" className="nav-item active"><LayoutDashboard size={18} /> Dashboard</a>
          <a href="#" className="nav-item"><BookOpen size={18} /> My Courses</a>
          <a href="#" className="nav-item"><User size={18} /> Profile</a>
          <a href="#" className="nav-item"><Settings size={18} /> Settings</a>
        </nav>
        
        <div className="upgrade-card bg-primary text-white">
          <h3>Upgrade to Pro</h3>
          <p>Access premium labs and certification paths.</p>
          <button className="btn btn-primary bg-white text-primary btn-sm mt-3">Upgrade Now</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main p-section">
        <header className="dashboard-header">
          <div>
            <h1 className="dashboard-greeting">Welcome back, Student!</h1>
            <p className="dashboard-subtitle">Your learning journey is 64% complete this month.</p>
          </div>
          <div className="header-actions">
            <div className="notification-bell"></div>
            <img src="https://i.pravatar.cc/150?u=10" alt="Profile" className="profile-avatar" />
          </div>
        </header>

        <div className="stats-grid">
          <div className="stat-card glass shadow-sm">
            <div className="stat-icon bg-blue-light text-primary"><BookOpen /></div>
            <div className="stat-info">
              <span className="stat-label">ENROLLED COURSES</span>
              <span className="stat-value">12</span>
            </div>
          </div>
          <div className="stat-card glass shadow-sm">
            <div className="stat-icon bg-purple-light text-secondary"><CheckSquare /></div>
            <div className="stat-info">
              <span className="stat-label">COMPLETED</span>
              <span className="stat-value">08</span>
            </div>
          </div>
          <div className="stat-card glass shadow-sm">
            <div className="stat-icon bg-green-light text-green"><Award /></div>
            <div className="stat-info">
              <span className="stat-label">CERTIFICATES EARNED</span>
              <span className="stat-value">05</span>
            </div>
          </div>
        </div>

        <section className="enrolled-section mt-10">
          <div className="section-head-sm">
            <h2 className="section-title-sm">My Enrolled Courses</h2>
            <a href="#" className="text-primary font-medium text-sm">View all my courses</a>
          </div>
          
          <div className="enrolled-grid">
            {coursesData.slice(0, 2).map((course, idx) => (
              <div key={idx} className="enrolled-course-card glass shadow-sm">
                <img src={course.image} alt={course.title} className="enrolled-img" />
                <div className="enrolled-content">
                  <span className="enrolled-cat">{course.category}</span>
                  <h3 className="enrolled-title">{course.title}</h3>
                  <div className="progress-container mt-auto">
                    <div className="progress-header">
                      <span>Progress</span>
                      <span>{idx === 0 ? '60%' : '15%'}</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill bg-primary" style={{width: idx === 0 ? '60%' : '15%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="recommended-section mt-10">
          <h2 className="section-title-sm mb-4">Recommended for You</h2>
          <p className="text-muted text-sm mb-6">Based on your recent interest in Fullstack Engineering.</p>
          
          <div className="recommended-split">
            <div className="rec-banner shadow-xl">
              <div className="badge badge-purple mb-4">BESTSELLER</div>
              <h3 className="rec-title">System Design for High-Scale Platforms</h3>
              <p className="rec-desc">Master the architecture behind Netflix, Twitter, and Uber. Learn load balancing, sharding, and caching at scale.</p>
              <button className="btn btn-outline border-white text-white bg-glass mt-4">
                Explore Curriculum <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
            
            <div className="rec-card glass shadow-sm">
              <div className="feature-icon bg-blue-light mb-4"><Cloud className="text-primary" /></div>
              <h3 className="rec-title-sm">AWS Cloud Architect Certification</h3>
              <p className="rec-desc-sm text-muted">Prepare for the SAA-C03 exam with hands-on labs and real-world deployment scenarios using Terraform and Kubernetes.</p>
              
              <div className="rec-tags mt-4 mb-6">
                <span className="tag bg-purple-light text-secondary">48 HOURS</span>
                <span className="tag bg-gray-light text-main">EXPERT</span>
              </div>
              
              <button className="btn btn-primary w-full shadow-md">Enroll Now</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
