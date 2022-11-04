import React from 'react';
import { Link } from 'react-router-dom';
import './LogIn.css'
import yunkiLogo from './public/icons/yunki-red.svg'

function LogIn() {
  return (
    <div className='login__container'>
      <div className='login-contentHolder'>
        <div className='login-nav'>
          <img className='yunki-logo' src={yunkiLogo} alt=''></img>
        </div>
        <h1 className='login-header'>Log in your account.</h1>
        <form className='login-form'>
          <label>Email Address:</label>
          <input placeholder='Enter User Email.' type='email' required></input>
          <label>Password</label>
          <input placeholder='Enter User Password.' type='password' required></input>
          <button className='login-button' type='confirm'>Log In</button>
        </form>
        <div className='login-text'>
          <h3 className='password-reset'>forgot password?</h3>
          <h2>Need an account? <span><Link to='/signin' className='signin-link'>Sign In</Link></span></h2>
        </div>
      </div>
    </div>
  )
}

export default LogIn