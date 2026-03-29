import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="navbar-container glass">
      <div className="container p-nav">
        <div className="navbar">
          <div className="navbar-logo">
            <Link to="/">
              <span className="logo-text">Digital Polymath</span>
            </Link>
          </div>

          <nav className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <li><Link to="/" className={isActive('/')} onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              <li><Link to="/courses" className={isActive('/courses')} onClick={() => setIsMenuOpen(false)}>Courses</Link></li>
              <li><Link to="/dashboard" className={isActive('/dashboard')} onClick={() => setIsMenuOpen(false)}>Dashboard</Link></li>
            </ul>
          </nav>

          <div className="navbar-actions">
            <div className="search-box">
              <Search size={18} className="search-icon" />
              <input type="text" placeholder="Search curriculum..." />
            </div>
            <Link to="/dashboard">
              <button className="btn btn-primary sign-in-btn">Sign In</button>
            </Link>
            
            <button className="mobile-menu-btn" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
