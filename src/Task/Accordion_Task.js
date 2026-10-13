
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Accordion_Task.css';

function Accordion_Task() {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [open, setOpen] = useState(null);

  useEffect(() => {
    axios.get('https://dummyjson.com/c/7e17-9cd2-4886-a566')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
        setError('Unable to load information.');
      });
  }, []);

  function handleAccordion(id) {
    if (open === id) {
      setOpen(null);
    } else {
      setOpen(id);
    }
  }

if (error) {
    return <h2 className="accordion-message">{error}</h2>;
  }
if (!data) {
    return <h2 className="accordion-message">Loading...</h2>;
}

return (
<section className="accordion-page">
<div className="accordion-container">
 <div className="accordion-heading">
  <p className="accordion-eyebrow">{data.eyebrow}</p>
<h1>{data.heading}</h1>
  <p>{data.intro}</p>
</div>

<div className="accordion-list">
{(data.items || []).map((item) => (
  <div className="accordion-item" key={item.id}>

  <button className="accordion-question" onClick={() => handleAccordion(item.id)}
   aria-expanded={open === item.id}>
  <span>
  <strong>{item.title}</strong>
  <small>{item.description}</small>
    </span>
  <span className="accordion-icon">
  {open === item.id ? '−' : '+'}
     </span>
 </button>

{open === item.id && (
  <div className="accordion-answer">
 <p>{item.content}</p>
</div>
 )}
 </div>
      ))}
    </div>
</div>
</section>
  );
}

export default Accordion_Task;
