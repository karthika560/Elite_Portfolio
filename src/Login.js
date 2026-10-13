
import React from "react";
import image from "./clg logo.jpeg";
import building from "./mcebuild.jpeg";
import {Link, useNavigate } from "react-router-dom";
import "./Login.css";
function Login() {
  const navigate = useNavigate();
  return (
    <>
    <nav className="top-nav">
  <Link to="/"><button>Home</button></Link>
  <Link to="/product/shoes"><button>Show Shoes</button></Link>
  <Link to="/product/socks"><button>Show Socks</button></Link>
</nav>
    <div className="admission-page">
      
      <header className="college-header">
        <div className="college-brand"></div>
      </header>
      
     <main className="admission-hero"
  style={{
    backgroundImage: `linear-gradient(rgba(35, 42, 100, 0.4), rgba(35, 42, 100, 0.4)), url("${building}")`
  }}
>
    
  <div className="hero-content">
    <h1>LEARN <span>&<br/></span> DISCOVER.</h1>
  </div>
        <div className="admission-card">
          <h2>ONLINE ADMISSION ENQUIRY - 2026</h2>
          <form className="admission-form">
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Name" required />
            </div>
            <div className="form-group">
              <label>Father Name</label>
              <input type="text" placeholder="Father Name" required />
            </div>
            <div className="form-group">
              <label>Date of Birth</label>
              <input type="date" required />
            </div>
            <div className="form-group">
              <label>Gender</label>
              <select defaultValue="" required>
                <option value="" disabled>Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Register Number [+2 / Diploma / UG]</label>
              <input
                type="text"
                placeholder="Register Number"
                required
              />
            </div>

        <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Email Id"
                required
              />
            </div>

        <div className="form-group">
              <label>Mobile Number</label>
              <input
                type="tel"
                placeholder="Mobile Number"
                required
              />
            </div>
      <div className="form-group">
          <label>Parent Mobile Number</label>
        <input type="tel" placeholder="Parent Mobile Number"
                required
              />
            </div>

      <div className="form-group">
      <label>Community</label>
  <select defaultValue="" required>
                <option value="" disabled>Select</option>
                <option>OC</option>
                <option>BC</option>
                <option>BCM</option>
                <option>MBC/DNC</option>
                <option>SC</option>
                <option>SCA</option>
                <option>ST</option>
              </select>
            </div>

       <div className="form-group">
         <label>First Graduate</label>
       <select defaultValue="" required>
                <option value="" disabled>Select</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>

        <div className="form-group">
              <label>Address</label>
              <input type="text" placeholder="Address" required />
      </div>

        <div className="form-group">
              <label>City / Town</label>
              <input type="text" placeholder="City / Town" required />
            </div>

        <div className="form-group">
             <label>District</label>
              <input type="text" placeholder="District" required />
            </div>

      <div className="form-group">
           <label>State</label>
              <select defaultValue="" required>
                <option value="" disabled>Select</option>
                <option>Tamil Nadu</option>
                <option>Kerala</option>
                <option>Karnataka</option>
                <option>Andhra Pradesh</option>
                <option>Other</option>
              </select>
            </div>

        <div className="form-group">
          <label>Course</label>
          <select defaultValue="" required>
                <option value="" disabled>Select</option>
                <option>B.E. Computer Science and Engineering</option>
                <option>B.E. Electronics and Communication Engineering</option>
                <option>B.E. Electrical and Electronics Engineering</option>
                <option>B.E. Mechanical Engineering</option>
                <option>B.Tech. Information Technology</option>
                <option>B.Tech. Artificial Intelligence and Data Science</option>
                <option>M.E.</option>
                <option>MBA</option>
                <option>MCA</option>
              </select>
       </div>

            <div className="form-group">
              <label>Referred by</label>
              <input type="text" placeholder="Name & Mobile No."/>
            </div>

            <div className="apply-container">
              <button type="submit">Apply</button>
            </div>

          </form>
        </div>
      </main>
    </div>
    </>
  );
}

export default Login;