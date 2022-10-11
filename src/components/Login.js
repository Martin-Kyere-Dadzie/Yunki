import React from 'react';
import './Login.css';
import yunkiRedLogo from './public/icons/yunki-red.svg';
import react, { useRef } from 'react';
import {useAuth} from './AuthContext';


function Login () {

    // const emailRef = useRef();
    // const passwordRef = useRef();
    // const passwordConfirmRef = useRef();
    // const {signup} = useAuth();

    // const handleSubmit = (e) => {
    //     e.preventDefault()

    //     signup(emailRef.current.value, passwordRef.current.value)
    // }

  return (
    <div className="Login__Section">
        <div className='Login__Contents'>
            <div className='Login__Nav'>
                <img alt='' src={yunkiRedLogo}></img>
            </div>
            <div className='Login__Text'>
                <h1>be the first to shop</h1>
                <h3>Sign in for Yunki to be the first to see inspiring content, news and exclusive offers.</h3>
            </div>
            <form className='Login__form'>
                <label>Name:</label>
                <input type={'text'} placeholder='Enter User Name.' required></input>
                <label>Email Address:</label>
                <input type={'email'} placeholder='Enter User Email.' required></input>
                <label>Password:</label>
                <input type={'password'} placeholder='Enter User Password.' required></input>
                <button type='submit' className='form__btn'>Sign In</button>
            </form>
            <div className='user__login'>Already have an account? <span>Log In</span></div>
            <div className='login__footer'>
                <h3>By signing in, you agree to Yunki's Privacy Policy and Terms of Use.</h3>
            </div>
        </div>
    </div>
  )
};

export default Login;
