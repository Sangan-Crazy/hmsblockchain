import React from 'react';
import { Bell, Moon, ShoppingCart, MessageCircle, Bot, User, Users, Calendar, PlusCircle, Clock, LogOut } from 'lucide-react';
import './App.css';

function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <div className="logo">
          <h2>ERES</h2>
        </div>
        
        <nav>
          <div className="nav-section">
            <a href="#" className="nav-item active">
              <span className="icon">⌂</span>
              Dashboard
            </a>
            <a href="#" className="nav-item">
              <Users size={20} />
              Patient
            </a>
            <a href="#" className="nav-item">
              <User size={20} />
              Doctor
            </a>
            <a href="#" className="nav-item">
              <PlusCircle size={20} />
              Add Medicine
            </a>
            <a href="#" className="nav-item">
              <Calendar size={20} />
              All Appointments
            </a>
            <a href="#" className="nav-item">
              <User size={20} />
              User
            </a>
            <a href="#" className="nav-item">
              <Clock size={20} />
              Update
            </a>
          </div>

          <div className="nav-section">
            <a href="#" className="nav-item">
              <User size={20} />
              Profile
            </a>
            <a href="#" className="nav-item">
              <ShoppingCart size={20} />
              Shop
            </a>
            <a href="#" className="nav-item">
              <MessageCircle size={20} />
              Chat
            </a>
            <a href="#" className="nav-item">
              <Bot size={20} />
              Ask AI
            </a>
          </div>
        </nav>

        <button className="schedule-btn">
          Check your job schedule
        </button>
      </aside>

      <main className="main-content">
        <header>
          <h1>Dashboard</h1>
          <div className="header-right">
            <Bell size={24} />
            <div className="cart-icon">
              <ShoppingCart size={24} />
              <span className="cart-badge">1</span>
            </div>
            <Moon size={24} />
            <div className="user-profile">
              <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150" alt="Doctor profile" />
              <span>Hello, Dr</span>
            </div>
          </div>
        </header>

        <div className="welcome-section">
          <h2>Welcome to Eres!</h2>
          <p>Hospital Decentralized Medicial Center</p>
        </div>

        <div className="stats-grid">
          <div className="stat-card pink">
            <div className="stat-content">
              <div>
                <h3>Total Patient</h3>
                <h2>5</h2>
              </div>
              <span className="trend">+4.9%</span>
            </div>
            <div className="stat-icon">❤️</div>
          </div>

          <div className="stat-card green">
            <div className="stat-content">
              <div>
                <h3>Doctor</h3>
                <h2>4</h2>
              </div>
              <span className="trend">+4%</span>
            </div>
            <div className="stat-icon">👨‍⚕️</div>
          </div>

          <div className="stat-card blue">
            <div className="stat-content">
              <div>
                <h3>Appointment</h3>
                <h2>6</h2>
              </div>
              <span className="trend">+2%</span>
            </div>
            <div className="stat-icon">📅</div>
          </div>

          <div className="stat-card purple">
            <div className="stat-content">
              <div>
                <h3>Notifications</h3>
                <h2>48</h2>
              </div>
              <span className="trend">+15%</span>
            </div>
            <div className="stat-icon">🔔</div>
          </div>
        </div>

        <div className="dashboard-grid">
          <div className="balance-card">
            <h3>Balance</h3>
            <div className="balance">
              <h2>10241.98</h2>
              <button className="go-btn">GO</button>
            </div>
          </div>

          <div className="patient-stats">
            <div className="stats-header">
              <h3>Patient Statistic</h3>
              <div className="stats-filters">
                <button className="active">Monthly</button>
                <button>Weekly</button>
                <button>Today</button>
              </div>
            </div>
            {/* Add chart here if needed */}
          </div>
        </div>

        <div className="bottom-grid">
          <div className="doctors-section">
            <div className="section-header">
              <h3>Top Rated Doctors</h3>
              <a href="#" className="view-more">View more ≫</a>
            </div>
            <div className="doctors-grid">
              <div className="doctor-card">
                <img src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=150" alt="Doctor" />
                <span className="doctor-id">#Dr-001</span>
              </div>
              <div className="doctor-card">
                <img src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=150" alt="Doctor" />
                <span className="doctor-id">#Dr-002</span>
              </div>
              <div className="doctor-card">
                <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150" alt="Doctor" />
                <span className="doctor-id">#Dr-003</span>
              </div>
            </div>
          </div>

          <div className="recent-patients">
            <div className="section-header">
              <h3>Recent Patient</h3>
              <a href="#" className="view-more">View more ≫</a>
            </div>
            <div className="patient-list">
              <div className="patient-item">
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150" alt="Patient" />
                <div>
                  <h4>Mrs. Alice Johnson</h4>
                  <p>Meadowland</p>
                </div>
              </div>
              <div className="patient-item">
                <img src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=150" alt="Patient" />
                <div>
                  <h4>Mr. Robert Smith</h4>
                  <p>Greenfield</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
