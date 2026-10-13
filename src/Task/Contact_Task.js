
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Contact_Task.css';

function Contact_Task() {
const [data, setData] = useState(null);
const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('https://dummyjson.com/c/982d-0d11-4beb-80da')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
        setError('Unable to load contact information.');
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (name === '' || email === '' || message === '') {
      alert('Please fill all the fields');
      return;
    }

    alert('Contact form submitted for demonstration!');
    setName('');
    setEmail('');
    setMessage('');
  }
  if (error) {
    return <h2>{error}</h2>;
  }
  if (!data) {
    return <h2 className="contact-loading">Loading...</h2>;
  }

  return (
    <section className="contact-page">
    <div className="contact-container">
    <div className="contact-heading">
    <p>{data.eyebrow}</p>
    <h1>{data.heading}</h1>
    <p>{data.intro}</p>
        </div>
    <div className="contact-content">
    <div className="contact-info">
    <h2>Get In Touch</h2>
  <div className="info-item">
     <h3>Email</h3>
      <a href={`mailto:${data.email}`}>
        {data.email}</a>
  </div>
   <div className="info-item">
    <h3>Location</h3>
     <p>{data.location}</p>
      </div>

   <div className="info-item">
     <h3>GitHub</h3>
    <a href={data.github}target="_blank" rel="noreferrer">Visit my GitHub</a>
    </div>
    <div className="info-item">
    <h3>LinkedIn</h3>
    <a href={data.linkedin} target="_blank" rel="noreferrer">
    Visit my LinkedIn</a>
    </div>
  </div>

  <form className="contact-form" onSubmit={handleSubmit}>
  <h2>Send a Message</h2>
 <label>Your Name</label>
  <input type="text" placeholder="Enter your name"
   value={name} onChange={(e) => setName(e.target.value)}/>
    <label>Your Email</label>
  <input type="email" placeholder="Enter your email" 
  value={email} onChange={(e) => setEmail(e.target.value)}/>

   <label>Your Message</label>
    <textarea placeholder="Write your message" rows="4" 
    value={message} onChange={(e) => setMessage(e.target.value)}/>
   <button type="submit">Submit Message</button>
     </form>
    </div>
      </div>
    </section>
  );
}
export default Contact_Task;
