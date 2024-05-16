import React from 'react'
import style1 from '../Components/login_style.module.css'
import { useState } from 'react' 
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

export default function Parent_page() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate()
  const handleLogin = () => {
    // Validate username and password
    if (!username || !password) {
     setError('Please enter both username and password.');
     return;
   }
 
   // Simulate login process (replace this with actual login logic)
   if (username === 'parent' && password === 'parent123') {
     // Clear any existing error
    setError(''); 
     // Navigate to another page upon successful login
     navigate('/parent_home_page')
   } else {
     setError('Invalid username or password.');
   }
   };
  return (
 <>
<div className={style1.border}>
        <div className={style1.title}>
        <h2>Student Login</h2>
        </div>
       <div className={style1.box}>

       {error && <p style={{ color: 'red' }}>{error}</p>}
        
        <div className={style1.login_form}>
        <form action='' method=''>
      <label>Username :</label>
     <input type="text"  value={username} onChange={ (e) => setUsername(e.target.value)} />
     <br/><br/>
     <label>Password :</label>
     <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br/>
     {/* <p>{result}</p> */}
     <button className={style1.login_button}  onClick={handleLogin}>Login</button>
     <nav>
          <Link to='/admin'><span><button className={style1.ind_button}>Admin</button></span></Link>
          <Link to='/teacher'><span><button className={style1.ind_button}>Teacher</button></span></Link>
          <Link to='/student'><span><button className={style1.ind_button}>Student</button></span></Link>
         </nav>
     </form>
        </div>
       </div>
         
     </div>
     
 </>
  )
}
