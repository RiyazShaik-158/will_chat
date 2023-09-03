import React from 'react';
import './home.scss';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='home_main'>
      <h1>Hello People</h1>
      <h4>Welcome to Chat App</h4>
      <h4>Please <Link to='/login'>Login</Link> to continue</h4>
    </div>
  )
}

export default Home;
