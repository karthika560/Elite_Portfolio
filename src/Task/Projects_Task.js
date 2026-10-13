
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Projects_Task.css';
function Projects_Task() {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('https://dummyjson.com/c/8fd5-9fca-43eb-be09')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
        setError('Unable to load project information.');
      });
  }, []);

  if (error) {
    return <h2 className="projects-message">{error}</h2>;
  }

  if (!data) {
    return <h2 className="projects-message">Loading projects...</h2>;
  }

  return (
    <section className="projects-page">
      <div className="projects-container">
   <div className="projects-heading">
    <p className="projects-eyebrow">{data.eyebrow}</p>
  <h1>{data.heading}</h1>
    <p>{data.intro}</p>
        </div>
 <div className="projects-grid">
    {(data.projects || []).map((project) => (
   <div className="project-card" key={project.id}>
   <div className="project-number"> PROJECT {project.id}</div>

    <h2>{project.title}</h2>
    <p className="project-description">
    {project.description}
    </p>

     <div className="project-technologies">
      {(project.technologies || []).map((tech) => (
     <span className="tech-tag" key={tech}>{tech}</span>
       ))}
    </div>

   <a className="project-link" href={project.github}target="_blank" rel="noreferrer">View on GitHub</a>
</div>
     ))}
  </div>
</div>
    </section>
  );
}
export default Projects_Task;
