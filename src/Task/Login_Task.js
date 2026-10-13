import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login_Task.css';

function Login_Task() {
  const [data, setData] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
    const navigate = useNavigate();
useEffect(() => {
axios.get('https://dummyjson.com/c/a7b4-7c9c-4664-8151')
  .then((res) => {
   setData(res.data);})
      .catch(() => {
        setError('Unable to load login page data.');});
  }, []);
function handleLogin(e) {
  e.preventDefault();
    if (username === ''|| password ==='') {
      alert('Please enter both username and password');
      return;
    }
    navigate('/home');
  }
  if(error){
    return <p>{error}</p>;
  }
  if (!data){
    return <h2>Loading login page...</h2>;
  }

return (
    <div className="login-page">
      <div className="login-card">
     <p className="login-eyebrow">{data.eyebrow}</p>
        <h1>{data.title}</h1>
    <p className="login-subtitle">{data.subtitle}</p>
     <form onSubmit={handleLogin}>
    <label>Username</label>
    <input type="text" placeholder="Enter your username" 
          value={username} onChange={(e) => setUsername(e.target.value)}/>
     <label>Password</label>
          <input type="password" placeholder="Enter your password"
            value={password} onChange={(e) => setPassword(e.target.value)}/>
      <button type="submit">{data.buttonText}</button>
        </form>
      </div>
    </div>
  );
}
export default Login_Task;
