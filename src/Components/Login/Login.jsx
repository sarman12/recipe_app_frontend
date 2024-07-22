import React from 'react';
import './Login.css';
import { BsEye } from 'react-icons/bs';
import { GrGoogle } from 'react-icons/gr';
import { FaFacebook, FaUserSecret } from 'react-icons/fa';
import logo from '../../assets/logo.svg';
import { BiUser } from 'react-icons/bi';
import { PiPassword } from 'react-icons/pi';
import { CgClose } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/register');
  };

  return (
    <div className="login_container">
      <CgClose className='close_btn' onClick={() => navigate('/')}/>
      <div className="logo">
        <h1>Presenting Food hunt.</h1>
        <p>by</p>
        <img src={logo} alt="Logo" />
      </div>
      <div className="login_part">
        <h1>Login</h1>
        <div>
          <BiUser className='fa' />
          <input type="email" placeholder='Enter your email.....' />
        </div>
        <div>
          <PiPassword className='fa' />
          <input type="password" placeholder='Enter your Password.....' />
        </div>
        <div className="button">
          <button className='login_btn'>Login</button>
          <button className='sign_up_btn' onClick={handleSignUpClick}>Sign In</button>
        </div>
        <p>or</p>
        <div className="other_way">
          <GrGoogle />
          <FaFacebook />
        </div>
      </div>
    </div>
  );
}

export default Login;
