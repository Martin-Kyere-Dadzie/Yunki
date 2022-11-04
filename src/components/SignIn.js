// import React, { useState } from 'react';
import './SignIn.css';
import yunkiRedLogo from './public/icons/yunki-red.svg';
import { Link } from 'react-router-dom';
// import LogIn from './LogIn';
import react, { useRef } from 'react';
import {useAuth} from './AuthContext';
import { useState } from 'react';


function SignIn () {

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const signIn = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await signIn(nameRef.current.value, emailRef.current.value, passwordRef.current.value)
        } catch (error) {
            console.log(error.message);
        }
        
        setLoading(false)
    }

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
            <form onSubmit={handleSubmit} className='Login__form' >
                <label>Name:</label>
                <input ref={nameRef} type={'text'} placeholder='Enter User Name.' required></input>
                <label>Email Address:</label>
                <input ref={emailRef} type={'email'} placeholder='Enter User Email.' required></input>
                <label>Password:</label>
                <input ref={passwordRef} type={'password'} placeholder='Enter User Password.' required></input>
                <button disabled={loading} type='submit' className='form__btn'>create your yunki account</button>
            </form>
            <div className='user__login'>Already have an account? <span><Link to='/login' className='User__Account'>Log In</Link></span></div>
            <div className='login__footer'>
                <h3>By signing in, you agree to Yunki's Privacy Policy and Terms of Use.</h3>
            </div>
        </div>
    </div>
  )
};

export default SignIn;
