import React from 'react'
import './Login.css';
import yunkiRedLogo from './public/icons/yunki-red.svg';

function Login () {
  return (
    <div className="Login__Section">
        <div className='Login__Contents'>
            <div className='Login__Nav'>
                <img alt='' src={yunkiRedLogo}></img>
            </div>
            <div className='Login__Text'>
                <h1>be the first to shop</h1>
                <h3>Sign up for Yunki to be the first to see inspiring content, news and exclusive offers.</h3>
            </div>
            <form className='Login__form'>
                <label>Name:</label>
                <input type={'text'} placeholder='Enter User Name.'></input>
                <label>Email Address:</label>
                <input type={'text'} placeholder='Enter User Email.'></input>
                <label>Password:</label>
                <input type={'password'} placeholder='Enter User Password.'></input>
            </form>
        </div>
    </div>
  )
}

export default Login
