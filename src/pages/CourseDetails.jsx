import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { coursesData } from '../data/courses';
import { CheckCircle, PlayCircle, Lock, Star, ChevronDown, ChevronUp, Clock, MonitorPlay, FileText, Award } from 'lucide-react';
import './CourseDetails.css';

const CourseDetails = () => {
  const { id } = useParams();
  // For demo, just use the first course if id is 1, else find it
  const course = coursesData.find(c => c.id === parseInt(id)) || coursesData[0];
  
  const [openModule, setOpenModule] = useState(2); // "Advanced React Patterns" module open by default

  const toggleModule = (modNum) => {
    setOpenModule(openModule === modNum ? null : modNum);
  };

  return (
    <div className="course-details-page animate-fade-in bg-background">
      <div className="container layout-grid">
        
        {/* Main Content Area */}
        <div className="main-col">
          <div className="breadcrumbs section-pt text-sm font-bold text-muted tracking-widest uppercase mb-4">
            <Link to="/courses" className="hover:text-primary">COURSES</Link> <span className="mx-2">&gt;</span> FULL STACK
          </div>
          
          <h1 className="course-title-huge">{course.title}</h1>
          <p className="course-subtitle-large">Master the architecture of modern web applications. From reactive state management to high-performance rendering strategies.</p>
          
          <div className="instructor-meta flex items-center gap-6 my-6">
            <div className="flex items-center gap-3">
              <img src={course.instructorImage} alt={course.instructor} className="avatar-md" />
              <div>
                <div className="text-xs font-bold text-muted uppercase">INSTRUCTOR</div>
                <div className="font-medium">{course.instructor}</div>
              </div>
            </div>
            <div className="divider-v"></div>
            <div>
              <div className="text-xs font-bold text-muted uppercase">RATING</div>
              <div className="flex items-center gap-1 font-medium">
                <Star size={16} className="text-yellow" fill="currentColor" /> 4.9 <span className="text-muted font-normal">(12,450 students)</span>
              </div>
            </div>
          </div>
          
          <div className="badges-row flex gap-2 mb-12">
            <span className="badge badge-purple">BESTSELLER</span>
            <span className="badge badge-dark">{course.level.toUpperCase()}</span>
            <span className="badge bg-gray text-main">24H CONTENT</span>
          </div>
          
          <section className="mt-16 mb-16">
            <h2 className="section-title-md mb-6">What You'll Learn</h2>
            <div className="learning-grid bg-surface rounded-lg p-8 grid md:grid-cols-2 gap-6 border-light">
              <div className="flex gap-3">
                <CheckCircle className="text-primary shrink-0 mt-1" size={20} />
                <p>Architect scalable React & Next.js applications</p>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="text-primary shrink-0 mt-1" size={20} />
                <p>Master advanced state management with Redux & Zustand</p>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="text-primary shrink-0 mt-1" size={20} />
                <p>Implement high-performance SSR and ISR strategies</p>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="text-primary shrink-0 mt-1" size={20} />
                <p>Build secure authentication systems with NextAuth</p>
              </div>
            </div>
          </section>
          
          <section className="mb-16">
            <div className="flex justify-between items-end mb-6">
              <h2 className="section-title-md">Course Curriculum</h2>
              <p className="text-muted">12 Modules • 144 Lessons</p>
            </div>
            
            <div className="curriculum-accordion flex flex-col gap-4">
              {/* Module 1 */}
              <div className={`module-card bg-surface rounded-lg border-light overflow-hidden transition-all ${openModule === 1 ? 'border-primary' : ''}`}>
                <div className="module-header p-5 flex justify-between items-center cursor-pointer" onClick={() => toggleModule(1)}>
                  <div className="flex items-center gap-4">
                    <span className="mod-num bg-primary text-white rounded font-bold px-2 py-1 text-sm">01</span>
                    <h3 className="font-bold">The Modern Web Landscape</h3>
                  </div>
                  <div className="flex items-center gap-4 text-muted text-sm">
                    <span>4 Lessons • 45m</span>
                    {openModule === 1 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </div>
              </div>
              
              {/* Module 2 */}
              <div className={`module-card bg-surface rounded-lg border-light overflow-hidden transition-all ${openModule === 2 ? 'border-primary shadow-md' : ''}`}>
                <div className="module-header p-5 flex justify-between items-center cursor-pointer" onClick={() => toggleModule(2)}>
                  <div className="flex items-center gap-4">
                    <span className="mod-num bg-primary text-white rounded font-bold px-2 py-1 text-sm">02</span>
                    <h3 className="font-bold">Advanced React Patterns</h3>
                  </div>
                  <div className="flex items-center gap-4 text-muted text-sm">
                    <span>8 Lessons • 2h 15m</span>
                    {openModule === 2 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </div>
                {openModule === 2 && (
                  <div className="module-content p-5 pt-0 border-t border-light mt-2">
                    <div className="lesson-item flex justify-between py-3 border-b border-light last:border-0 hover:text-primary transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <PlayCircle size={18} className="text-muted" />
                        <span>Compound Components & Context</span>
                      </div>
                      <span className="text-muted text-sm">16:24</span>
                    </div>
                    <div className="lesson-item flex justify-between py-3 border-b border-light last:border-0 hover:text-primary transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <PlayCircle size={18} className="text-muted" />
                        <span>Higher-Order Components vs. Hooks</span>
                      </div>
                      <span className="text-muted text-sm">22:18</span>
                    </div>
                    <div className="lesson-item flex justify-between py-3 border-b border-light last:border-0 hover:text-primary transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <Lock size={18} className="text-muted" />
                        <span className="text-muted">Render Props in Modern Context</span>
                      </div>
                      <span className="text-muted text-sm">18:45</span>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Module 3 */}
              <div className={`module-card bg-surface rounded-lg border-light overflow-hidden transition-all ${openModule === 3 ? 'border-primary' : ''}`}>
                <div className="module-header p-5 flex justify-between items-center cursor-pointer" onClick={() => toggleModule(3)}>
                  <div className="flex items-center gap-4">
                    <span className="mod-num bg-primary text-white rounded font-bold px-2 py-1 text-sm">03</span>
                    <h3 className="font-bold">Performance Optimization</h3>
                  </div>
                  <div className="flex items-center gap-4 text-muted text-sm">
                    <span>12 Lessons • 3h 40m</span>
                    {openModule === 3 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section className="mb-20">
            <h2 className="section-title-md mb-6">Your Instructor</h2>
            <div className="instructor-profile flex flex-col md:flex-row gap-8 items-start">
              <img src={course.instructorImage} alt={course.instructor} className="avatar-xl rounded-2xl object-cover shrink-0" />
              <div>
                <h3 className="text-2xl font-outfit font-bold text-primary mb-1">{course.instructor}</h3>
                <p className="text-xs font-bold text-muted uppercase tracking-widest mb-4">LEAD SOFTWARE ARCHITECT @ TECHGLOBAL</p>
                <p className="text-muted leading-relaxed mb-6">
                  With over 15 years in the industry, {course.instructor.split(' ')[0]} has led development teams at Fortune 500 companies. He specializes in distributed systems and modern front-end architectures. His teaching philosophy focuses on "First Principles" learning—understanding the 'why' before the 'how'.
                </p>
                <div className="flex gap-8">
                  <div>
                    <div className="text-xl font-bold font-outfit">45k+</div>
                    <div className="text-xs font-bold text-muted uppercase">STUDENTS</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold font-outfit">12</div>
                    <div className="text-xs font-bold text-muted uppercase">COURSES</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold font-outfit">4.9</div>
                    <div className="text-xs font-bold text-muted uppercase">RATING</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
        </div>

        {/* Sidebar / Sticky Col */}
        <div className="sidebar-col">
          <div className="sticky-sidebar">
            <div className="enroll-card bg-surface rounded-2xl border-light shadow-xl overflow-hidden p-6 relative">
              <div className="preview-img-wrapper rounded-xl overflow-hidden mb-6 relative group cursor-pointer">
                <img src={course.image} alt={course.title} className="w-full h-48 object-cover transition-transform group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <PlayCircle size={48} className="text-white" />
                </div>
              </div>
              
              <div className="price-row flex items-baseline gap-3 mb-6">
                <span className="text-4xl font-outfit font-bold text-primary">
                  {course.price === 0 ? 'Free' : `$${course.price.toFixed(2)}`}
                </span>
                {course.price > 0 && <span className="text-muted line-through text-lg">$450.00</span>}
              </div>
              
              <button className="btn btn-primary w-full py-4 text-lg shadow-primary hover-lift mb-3 shadow-lg">
                Enroll Now
              </button>
              <p className="text-center text-xs text-muted mb-8">30-Day Money-Back Guarantee</p>
              
              <div className="includes-list">
                <h4 className="font-bold mb-4 text-sm">Includes:</h4>
                <ul className="flex flex-col gap-3 text-sm text-muted">
                  <li className="flex gap-3"><MonitorPlay size={18} className="text-primary shrink-0" /> Full lifetime access</li>
                  <li className="flex gap-3"><FileText size={18} className="text-primary shrink-0" /> 35 downloadable resources</li>
                  <li className="flex gap-3"><Award size={18} className="text-primary shrink-0" /> Certificate of completion</li>
                </ul>
              </div>
            </div>
            
            <div className="requirements-card bg-surface rounded-2xl border-light shadow-sm p-6 mt-6">
              <h4 className="font-bold mb-4 text-sm">Course Requirements</h4>
              <ul className="flex flex-col gap-4 text-sm text-muted">
                <li className="flex gap-3 items-start"><span className="text-secondary shrink-0 font-bold">&lt;&gt;</span> Solid understanding of JavaScript (ES6+)</li>
                <li className="flex gap-3 items-start"><MonitorPlay size={16} className="text-secondary shrink-0 mt-0.5" /> Familiarity with Terminal/Command Line</li>
                <li className="flex gap-3 items-start"><Award size={16} className="text-secondary shrink-0 mt-0.5" /> Basic React knowledge is recommended</li>
              </ul>
            </div>
            
            <div className="testimonial-card bg-primary text-white p-6 rounded-2xl shadow-xl mt-6 relative overflow-hidden text-sm">
              <div className="absolute -top-4 -right-4 text-primary-light opacity-30 text-8xl font-serif">"</div>
              <p className="italic leading-relaxed relative z-10 mb-4">"This course completely changed how I think about application state. {course.instructor.split(' ')[0]} makes incredibly complex topics feel intuitive."</p>
              <div className="flex items-center gap-3 relative z-10">
                <img src="https://i.pravatar.cc/150?u=9" alt="Student" className="w-10 h-10 rounded-full border border-white/20" />
                <div>
                  <div className="font-bold text-xs">Sarah Jenkins</div>
                  <div className="text-primary-light text-xs">Senior Frontend Dev @ Vercel</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default CourseDetails;
