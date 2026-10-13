
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Skills_Task.css';
function Skills_Task() {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('https://dummyjson.com/c/e8eb-b3c2-47fa-8af3')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
        setError('Unable to load skills information.');
      });
  }, []);
if (error) {
    return <h2 className="skills-message">{error}</h2>;
}
if (!data) {
    return <h2 className="skills-message">Loading skills...</h2>;
}

return (
    <section className="skills-page">
      <div className="skills-container">
<div className="skills-heading">
    <p className="skills-eyebrow">{data.eyebrow}</p>
  <h1>{data.heading}</h1>
  <p>{data.intro}</p>
    </div>
<div className="skills-grid">
 {(data.skills || []).map((skill) => (
  <div className="skill-card" key={skill.id}>

  
<h2>{skill.name}</h2>
  <p className="skill-category">{skill.category}</p>

  
</div>
 ))}
</div>
 </div>
    </section>
  );
}

export default Skills_Task;