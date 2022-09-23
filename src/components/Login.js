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
                <input type={'text'} placeholder='Enter User Name.' required></input>
                <label>Email Address:</label>
                <input type={'text'} placeholder='Enter User Email.' required></input>
                <label>Password:</label>
                <input type={'password'} placeholder='Enter User Password.' required></input>
                <button type='submit' className='form__btn'>Sign In</button>
            </form>
            <div className='login__footer'></div>
        </div>
    </div>
  )
}

export default Login
