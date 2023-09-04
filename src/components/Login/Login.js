import React from 'react';
import './login.scss';

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault()
  }
  return (
    <div className='Login_head'>
       <h4>Welcome to Login</h4>
       <form className='form' onSubmit={handleSubmit}>
        <label htmlFor='email'>Enter Email</label>
        <input id='email' name='email' type='text' placeholder="Ex:JohnDalton@gmail.com"/>
        <label htmlFor='password'>Enter Password</label>
        <input id='password' name='password' type='password' placeholder='******'/>
        <label>Give Profile Pic</label>
        <input type='file' accept='images/*'/>
        <button>Submit</button>
       </form>
    </div>
  )
}

export default Login;
