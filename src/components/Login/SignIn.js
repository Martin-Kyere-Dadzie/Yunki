// import React, { useState } from 'react';
import './SignIn.css';
import yunkiRedLogo from '../public/icons/yunki-red.svg';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase';
import { useState } from 'react';

function SignIn () {

    const auth = getAuth(app);

    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const createAccount = () => {
        createUserWithEmailAndPassword(auth, name, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            alert('You successfully created your Yunki account');
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            // const errorMessage = error.message;
            console.log(errorCode);
            alert(errorCode);
          });     
    }

    const signIn = () => {
      signInWithEmailAndPassword(auth, name, email, password)
      .then((userCredential) => {
        // Sing in
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      })
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
            <form className='Login__form' >
                <label>Name:</label>
                <input type={'text'} placeholder='Enter User Name.' required onChange={(e) => setName(e.target.value)}></input>
                <label>Email Address:</label>
                <input type={'email'} placeholder='Enter User Email.' required onChange={(e) => setEmail(e.target.value)}></input>
                <label>Password:</label>
                <input type={'password'} placeholder='Enter User Password.' required onChange={(e) => setPassword(e.target.value)}></input>
                <button onClick={createAccount} type='submit' className='form__btn'>create your yunki account</button>
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
