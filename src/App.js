// Import necessary packages and assets
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import pattyone from "./asset/pattyone.png";
import pro from "./asset/pro.jpg";
import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

const App = () => {
  const [menu, setMenu] = useState("home");
  const formRef = useRef();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    emailjs
      .sendForm(
        "service_dcu6xdk", // EmailJS Service ID
        "template_rq75d0o", // Replace with your EmailJS Template ID
        formRef.current, // Reference to the form
        "uKTom6u8t5aW14LuP" // Replace with your EmailJS User ID
      )
      .then(
        (result) => {
          // Open the modal with success message
          document.getElementById("exampleModalCenterTitle").innerText = "Success!";
          document.getElementById("modalMessage").innerText = "Message sent successfully!";
          const successModal = new window.bootstrap.Modal(document.getElementById('exampleModalCenter'));
          successModal.show();
        },
        (error) => {
          // Open the modal with error message
          document.getElementById("exampleModalCenterTitle").innerText = "Error!";
          document.getElementById("modalMessage").innerText = "An error occurred, please try again.";
          const errorModal = new window.bootstrap.Modal(document.getElementById('exampleModalCenter'));
          errorModal.show();
        }
      );

    // Clear the form fields after submission
    e.target.reset();
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-lg">
        <div className="container">
          <a className="navbar-brand logo" href="#home">N.Patrick</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li onClick={() => setMenu("about")} className="nav-item">
                <a className={menu === "about" ? "nav-link active" : "nav-link"} href="#about">About</a>
              </li>
              <li onClick={() => setMenu("projects")} className="nav-item">
                <a className={menu === "projects" ? "nav-link active" : "nav-link"} href="#projects">Projects</a>
              </li>
              <li onClick={() => setMenu("contact")} className="nav-item">
                <a className={menu === "contact" ? "nav-link active" : "nav-link"} href="#contact">Contact</a>
              </li>
            </ul>
            <div className="ms-auto d-flex align-items-center">
              <a href="https://web.facebook.com/profile.php?id=61566738491069" target="_blank" rel="noopener noreferrer" className="mx-2">
                <i className="fab fa-facebook fa-lg"></i>
              </a>
              <a href="https://instagram.com/patty.wrld" target="_blank" rel="noopener noreferrer" className="mx-2">
                <i className="fab fa-instagram fa-lg text-danger"></i>
              </a>
              <a href="https://www.linkedin.com/in/niyigena-patrick-78096a328/" target="_blank" rel="noopener noreferrer" className="mx-2">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
              <a href="https://github.com/PattyWambere" target="_blank" rel="noopener noreferrer" className="mx-2">
                <i className="fab fa-github fa-lg text-dark"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="bg-light text-center py-5 hero-section" style={{
        backgroundImage: `url(${pro})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        color: "white",
      }}>
        <div className="overlay d-flex flex-column justify-content-center align-items-center h-100 fake">
          <h1 className="display-4">I'm <strong>Patrick</strong>, Welcome to My Portfolio</h1>
          <p className="lead">I'm a web developer, graphic designer, and software developer.</p>
          <a href="#projects" className="btn btn-outline-light btn-lg rounded-0">View My Work</a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="container text-center py-5">
        <h3 className="p-5 display-5">About Me</h3>
        <hr className="p-5"></hr>
        <div className="row align-items-center">
          <div className="col-md-6 mb-4">
            <img src={pattyone} alt="Your Name" className="img-fluid rounded-circle" width="60%" />
          </div>
          <div className="col-md-6">
            <p>Hello! I'm NIYIGENA Patrick, a passionate web developer, graphic designer, and software developer from Kigali, Rwanda. I specialize in creating beautiful, responsive, and user-friendly web applications. With a strong background in both front-end and back-end technologies, I enjoy bringing ideas to life through coding and design.</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-light py-5">
        <div className="container text-center">
          <h3 className="p-5 display-5">My Projects</h3>
          <hr className="p-5" />
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-3 custom-card">
                <img src={pro} className="card-img-top small-img" alt="Project 1" />
                <div className="card-body">
                  <h5 className="card-title">Business Card Generator</h5>
                  <p className="card-text">A web app that enables users to create personalized business cards with customizable templates, allowing for professional branding.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-3 custom-card">
                <img src={pro} className="card-img-top small-img" alt="Project 2" />
                <div className="card-body">
                  <h5 className="card-title">Smart Bus Payment</h5>
                  <p className="card-text">A payment system for public transport that allows users to pay bus fares quickly and securely via a mobile app or digital wallet.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-3 custom-card">
                <img src={pro} className="card-img-top small-img" alt="Project 3" />
                <div className="card-body">
                  <h5 className="card-title">Products MS</h5>
                  <p className="card-text">A tool for managing product inventory and sales, featuring stock tracking, order processing, and report generation to enhance business operations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section with EmailJS integration */}
      <section id="contact" className="container text-center py-5">
        <h3 className="p-5 display-5">Contact Me</h3>
        <hr className="p-5"></hr>
        <p>If you would like to get in touch, feel free to reach out!</p>
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control border-info rounded-0" id="name" name="from_name" placeholder="Your Name" required />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control border-info rounded-0" id="email" name="reply_to" placeholder="you@example.com" required />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control border-info rounded-0" id="message" name="message" rows="4" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100 rounded-0">Send Message</button>
        </form>
      </section>

      {/* Bootstrap Modal */}
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalCenterTitle">Modal title</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p id="modalMessage"></p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white mt-5">
        <div className="container py-4">
          <div className="row">
            {/* About Section */}
            <div className="col-md-4">
              <h5>About Us</h5>
              <p>
                We are a passionate team dedicated to delivering high-quality projects and services. Stay connected with us for more updates.
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-md-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="#about" className="text-white">About</a></li>
                <li><a href="#projects" className="text-white">Projects</a></li>
                <li><a href="#contact" className="text-white">Contact</a></li>
                <li><a href="#faq" className="text-white">FAQ</a></li>
              </ul>
            </div>

            {/* Contact Info & Social Icons */}
            <div className="col-md-4">
              <h5>Contact Us</h5>
              <p>Email: <a href="mailto:info@yourdomain.com" className="text-white">pattywrld2003@gmail.com</a></p>
              <p>Phone: +250 786 352 983</p>
              <div className="social-icons">
                <a href="https://web.facebook.com/profile.php?id=61566738491069" target="_blank" rel="noopener noreferrer" className="text-white mx-1"><i className="fab fa-facebook"></i></a>
                <a href="https://instagram.com/patty.wrld" target="_blank" rel="noopener noreferrer" className="text-white mx-1"><i className="fab fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/niyigena-patrick-78096a328/" target="_blank" rel="noopener noreferrer" className="text-white mx-1"><i className="fab fa-linkedin"></i></a>
                <a href="https://github.com/PattyWambere" target="_blank" rel="noopener noreferrer" className="text-white mx-1"><i className="fab fa-github"></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>


      <div className="animated-background">
        <div className="floating-shape shape1"></div>
        <div className="floating-shape shape2"></div>
        <div className="floating-shape shape3"></div>
        <div className="floating-shape shape4"></div>
        <div className="floating-shape shape5"></div>
      </div>
    </div>
  );
};

export default App;
