import React from 'react';
import './SignIn.css';
import yunkiRedLogo from '../public/icons/yunki-red.svg';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../Firebase/firebaseConfig';
import { useState } from 'react';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');

    const navigate = useNavigate()

    const registerUser = (e) => {
        e.preventDefault();
        if(password !== cPassword) {
            alert('password dont match')
        }

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            alert('successfully registered to yunki')
            navigate('/')
        })
        .catch((error) => {
            alert(error.message)
        });
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
            <form className='Login__form' onSubmit={registerUser} >
                <label>Email:</label>
                <input type={'email'} 
                    placeholder='enter user email.' 
                    required 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}></input>
                <label>Password:</label>
                <input type={'password'} 
                    placeholder='enter user password.' 
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}></input>
                <label>Confirm Password:</label>
                <input type={'password'} 
                    placeholder='confirm user password.' 
                    required
                    value={cPassword}
                    onChange={(e) => setCPassword(e.target.value)}></input>
                <button type='submit' className='form__btn'>create your yunki account</button>
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
