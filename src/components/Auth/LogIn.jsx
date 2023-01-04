import {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LogIn.css'
import yunkiLogo from '../public/icons/yunki-white.svg'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase/firebaseConfig';


function LogIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate

  const loginUser = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      navigate('/home')
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    alert(error.message)
  });
  }


  return (
    <div className='login__container'>
      <div className='login-contentHolder'>
        <div className='login-nav'>
          <img className='yunki-logo' src={yunkiLogo} alt=''></img>
        </div>
        <h1 className='login-header'>Log in your account.</h1>
        <form className='login-form' onSubmit={loginUser}>
          <label>Email Address:</label>
          <input placeholder='Enter User Email.' 
            type='email' 
            required
            value={email} 
            onChange={(e) => setEmail(e.target.value)}></input>
          <label>Password</label>
          <input placeholder='Enter User Password.' 
            type='password' 
            required
            value={password} 
            onChange={(e) => setPassword(e.target.value)}></input>
          <button className='login-button' type='submit'>Log In</button>
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