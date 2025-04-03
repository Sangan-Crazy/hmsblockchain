import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const servicesData = [
    {
        title: "Physiotherapy Camp",
        description: "Exceptuer sint occaecat cupidatat non proident, sunt in culpa qui officia.",
        time: "1:00 - 3:00 pm",
        date: "Saturday, October 15 2020",
        image: "https://surl.li/lzkxam", // Replace with actual image URL
    },
    {
        title: "General Fitness Session",
        description: "Exceptuer sint occaecat cupidatat non proident, sunt in culpa qui officia.",
        time: "1:00 - 3:00 pm",
        date: "Saturday, October 15 2020",
        image: "https://surl.li/rtqksy",
    },
    {
        title: "Online Dental Care",
        description: "Exceptuer sint occaecat cupidatat non proident, sunt in culpa qui officia.",
        time: "1:00 - 3:00 pm",
        date: "Saturday, October 15 2020",
        image: "https://surl.li/gsrvcu",
    }
];
const departmentsData = [
  { name: "Orthopaedic", icon: "https://surl.li/pnzkqm", description: "Expert orthopedic care for all ages." },
  { name: "Neurology", icon: "https://surl.li/sxrehj", description: "Advanced treatment for neurological disorders." },
  { name: "Ophthalmology", icon: "https://surl.li/wnokgc", description: "Eye care services with modern technology." },
  { name: "Cardiology", icon: "https://surl.li/qggnvd", description: "Comprehensive heart care and diagnostics." },
  { name: "Urology", icon: "https://surl.li/nrfrnf", description: "Specialized urology treatments for men and women." },
  { name: "Infertility", icon: "https://surl.li/vwnpvj", description: "Helping families with reproductive health services." },
  { name: "Emergency", icon: "https://surl.li/rggntz", description: "24/7 emergency care for all medical needs." },
  { name: "Out Patient", icon: "https://surl.gd/ikgmgm", description: "Comprehensive outpatient services and diagnostics." },
];

const HomePage = () => {
    return (
        <div className="home-container">
            <header className="header">
                <h1>Welcome to Our Hospital Management System</h1>
                <nav>
                    <ul>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <Link to="/MainPage">
                    <button className="get-started-btn">Get Started</button>
                </Link>
            </header>
            
            <main className="main-content">
                <section id="services">
                    <h2>Upcoming Health camps</h2>
                    <p>We offer a wide range of medical services to cater to your health needs.</p>
                    
                    <div className="services-list">
                        {servicesData.map((service, index) => (
                            <div className="service-card" key={index}>
                                <img src={service.image} alt={service.title} className="service-image" />
                                <div className="service-info">
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                    <p><b>{service.time}</b></p>
                                    <p>{service.date}</p>
                                    <button className="join-btn">JOIN NOW</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
{/* about us section */}
                <section className="about-us">
            <div className="about-content">
                <h2>About Our Hospital</h2>
                <p className="about-highlight">
                    Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
                </p>
                <button className="about-btn">KNOW OUR DOCTORS</button>
            </div>
            <div className="about-image">
                <img src="https://surl.li/mbqzzg" alt="Doctor Treating Patient" />
            </div>
        </section>

{/* Our Hospitals Section */}
<section className="hospitals-section">
                    <h2 className="section-title">Our Hospitals</h2>
                    <div className="hospitals-container">
                        <div className="hospital-card">
                            <img src="https://surl.li/ffmkcb" alt="Hospital 1" className="hospital-image" />
                            <div className="hospital-info">
                                <h3>Dharmashala Narayana Hospital, RR Nagar</h3>
                                <p>8 Ideal Homes HBCS Layout, RR Nagar, Bangalore, Karnataka 560098</p>
                                <div className="hospital-actions">
                                    <button className="explore-btn">Explore</button>
                                </div>
                            </div>
                        </div>

                        <div className="hospital-card">
                            <img src="https://surl.li/hayjwz" alt="Hospital 2" className="hospital-image" />
                            <div className="hospital-info">
                                <h3>Manipal Hospital, Yeswanthpur</h3>
                                <p>4/1, Tumkur Road, Yeswanthpur, Bangalore, Karnataka 560022</p>
                                <div className="hospital-actions">
                                    <button className="explore-btn">Explore</button>
                                </div>
                            </div>
                        </div>

                        <div className="hospital-card">
                            <img src="https://surl.li/ipques" alt="Hospital 3" className="hospital-image" />
                            <div className="hospital-info">
                                <h3>Apollo Hospital, Infantry Road</h3>
                                <p>Opp Police Commissioner’s office, No 146, Prestige Opal, Infantry Road, Bengaluru, Karnataka 560001</p>
                                <div className="hospital-actions">
                                    <button className="explore-btn">Explore</button>
                                </div>
                            </div>
                        </div>
                        <div className="hospital-card">
                            <img src="https://surl.li/zttubu" alt="Hospital 4" className="hospital-image" />
                            <div className="hospital-info">
                                <h3>ST.John's Medical College, Infantry Road</h3>
                                <p>Opp Police Commissioner’s office, No 146, Prestige Opal, Infantry Road, Bengaluru, Karnataka 560001</p>
                                <div className="hospital-actions">
                                    <button className="explore-btn">Explore</button>
                                </div>
                            </div>
                        </div>
                        <div className="hospital-card">
                            <img src="https://surl.li/vybdqn" alt="Hospital 5" className="hospital-image" />
                            <div className="hospital-info">
                                <h3>The Bangalore Hospital, Infantry Road</h3>
                                <p>Opp Police Commissioner’s office, No 146, Prestige Opal, Infantry Road, Bengaluru, Karnataka 560001</p>
                                <div className="hospital-actions">
                                    <button className="explore-btn">Explore</button>
                                </div>
                            </div>
                        </div>
                        <div className="hospital-card">
                            <img src="https://surl.li/vgslvn" alt="Hospital 6" className="hospital-image" />
                            <div className="hospital-info">
                                <h3>Ramaiah Medical College, Infantry Road</h3>
                                <p>Opp Police Commissioner’s office, No 146, Prestige Opal, Infantry Road, Bengaluru, Karnataka 560001</p>
                                <div className="hospital-actions">
                                    <button className="explore-btn">Explore</button>

                                </div>
                            </div>
                        </div>
                    </div>
{/* Our Doctors Section */}
<section className="doctors-section">
    <h2 className="section-title">Our Speciality Doctors</h2>
    <div className="doctors-container">
        {[
            {
                name: "Dr. Sharan Shivaraj Patil",
                specialty: "Orthopaedic, Joint Replacement",
                hospital: "SPARSH Hospital, Infantry Road",
                image: "https://surl.li/lqlplw",
            },
            {
                name: "Dr. Ravikumar Mukarithal",
                specialty: "Orthopaedic, Joint Replacement",
                hospital: "SPARSH Hospital, Infantry Road, SSIMS-SPARSH Hospital, Davanagere",
                image: "https://surl.li/gmkfxv",
            },
            {
                name: "Dr. Ranjan Shetty",
                specialty: "Cardiac Sciences, Interventional Cardiology",
                hospital: "SPARSH Hospital, Infantry Road",
                image: "https://surl.li/uhqurh",
            },
            {
                name: "Dr. Prathima Reddy",
                specialty: "Obstetrics and Gynaecology",
                hospital: "SPARSH Hospital, Infantry Road, SPARSH Hospital for Women and Children",
                image: "https://surli.cc/jppncn",
            },
            {
              name: "Dr. Rajgopalan Reddy",
              specialty: "Obstetrics and Gynaecology",
              hospital: "Apollo Hospital, Infantry Road, SPARSH Hospital for Women and Children",
              image: "https://surl.li/dzxoxx",
          },
          {
            name: "Dr. Suma Reddy",
            specialty: "Obstetrics and Gynaecology",
            hospital: "St.John's Hospital,  Kormangala, St.John's Hospital for Women and Children",
            image: "https://surl.li/mughpw",
        },
        {
          name: "Dr. Raj kumar Choudry",
          specialty: "Obstetrics and Gynaecology",
          hospital: "SPARSH Hospital, Infantry Road, SPARSH Hospital for Women and Children",
          image: "https://surl.lu/flqynv",
      },
      {
        name: "Dr. Sushmita Chourasia",
        specialty: "Obstetrics and Gynaecology",
        hospital: "SPARSH Hospital, Infantry Road, SPARSH Hospital for Women and Children",
        image: "https://surl.li/cjlacg",
    },
        ].map((doctor, index) => (
            <div className="doctor-card" key={index}>
                <img src={doctor.image} alt={doctor.name} className="doctor-image" />
                <div className="doctor-info">
                    <h3>{doctor.name}</h3>
                    <p><strong>{doctor.specialty}</strong></p>
                    <p>{doctor.hospital}</p>
                </div>
            </div>
        ))}
    </div>
    
 {/* Hospital Departments Section */}
 <section className="departments-section">
        <h2 className="section-title">Hospital Departments</h2>
        <p className="section-description">Our hospital provides specialized medical care in various fields.</p>
        <div className="departments-container">
          {departmentsData.map((dept, index) => (
            <div className="department-card" key={index}>
              <img src={dept.icon} alt={dept.name} className="department-icon" />
              <h3>{dept.name}</h3>
              <p>{dept.description}</p>
            </div>
          ))}
        </div>
      </section>

<button className="view-all-btn">View All</button>
</section>
</section>

                <section id="contact">
                    <h2>Contact Us</h2>
                    <p>If you have any questions, feel free to reach out! 
                      call us 8792656567
                    </p>
                </section>
            </main>
            
            <footer className="footer">
                <p>&copy; 2025 Hospital Management System. All rights reserved.
                  
                </p>
            </footer>
        </div>
    );
};

export default HomePage;
