import React from 'react'

import { Link } from 'react-router-dom';

const UserLogin = () => {
  return (
    <div>
      <h1>this is user login page</h1>
     
      <nav>
    <Link to='/admin'><span><button type="button" class="btn btn-primary">Admin Login</button></span></Link>
<Link to='/teacher'><span><button type="button" class="btn btn-secondary">Teacher Login</button></span></Link>
<Link to='/student'><span><button type="button" class="btn btn-success">Student Login</button></span></Link>
<Link to='/parent'><span><button type="button" class="btn btn-danger">Parent Loging</button></span></Link>
      </nav>
    </div>
  )
}

export default UserLogin
