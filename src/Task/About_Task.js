
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './About_Task.css';
function About_Task() {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

useEffect(() => {
    axios.get('https://dummyjson.com/c/7a59-d161-4a6c-97ef')
      .then((res) => {
        setData(res.data);
      })
      .catch(() =>{
        setError('Unable to load About information.');
      });
  }, []);

  if (error) return <p>{error}</p>;
  if (!data) return <h2>Loading...</h2>;

  return (
    <div className="about-page">
<section className="about-header">
  <p className="about-tag">{data.eyebrow}</p>
<h1>About <span>Me</span></h1>
  <p className="about-summary">{data.intro}</p>
  </section>
  <section className="about-profile">
  <div className="about-left">
  <h2>Hello, I'm {data.name}</h2>
  <h3>{data.role}</h3>
<p>{data.intro}</p>
   <p><strong>My Interests:</strong> {data.interests}</p>
   <p><strong>My Strengths:</strong> {data.strengths}</p>
<p><strong>Career Goal:</strong> {data.goal}</p>
<Link to="/projects" className="about-btn">
      Explore My Projects 
  </Link>
       </div>
  <div className="about-right">
  <h2>Quick Information</h2>
<div className="about-info">
  <span>Education</span>
  <p>{data.education}</p>
</div>

<div className="about-info">
  <span>College</span>
  <p>{data.college}</p>
</div>

<div className="about-info">
<span>Location</span>
 <p>{data.location}</p>
  </div>
<div className="about-info">
  <span>Email ID</span>
<p>
<a href={`mailto:${data.email}`}>
{data.email}
 </a></p>
  </div>

<div className="about-info">
<span>GitHub ID</span>
<p><a href={data.github} target="_blank" rel="noreferrer">
  {data.github}
 </a>
 </p>
    </div>

<div className="about-info">
<span>LinkedIn ID</span>
<p> <a href={data.linkedin}target="_blank" rel="noreferrer">View LinkedIn Profile</a></p>
</div>
 </div>
</section>
 </div>
  );
}
export default About_Task;
