import React from 'react';
import { GrGoogle } from 'react-icons/gr';
import { FaFacebook } from 'react-icons/fa';
import logo from '../../assets/logo.svg';
import { BiUser } from 'react-icons/bi';
import { PiPassword } from 'react-icons/pi';
import { GiConfirmed } from 'react-icons/gi';
import { CgClose } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';
import './Sign_up.css'
function Sign_up() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="login_container">
      <CgClose className='close_btn' onClick={() => navigate('/')}/>
      <div className="login_part"  style={{ borderRadius: '1rem 0px 0px 1rem'}}>
        <h1>Create your account</h1>
        <div>
          <BiUser className='fa' />
          <input type="email" placeholder='Enter your email.....' />
        </div>
        <div>
          <PiPassword className='fa' />
          <input type="password" placeholder='Enter your Password.....' />
        </div>
        <div>
          <GiConfirmed className='fa' />
          <input type="password" placeholder='Confirm your Password.....' />
        </div>
        <div className="button">
          <button className='sign_up_btn'>Register</button>
          <button className='login_btn' onClick={handleLoginClick}>Login</button>
        </div>
        <p>or</p>
        <div className="other_way">
          <GrGoogle />
          <FaFacebook />
        </div>
      </div>
      <div className="logo" style={{ borderRadius: '0px 1rem 1rem 0px'}}>
        <h1>Presenting Food hunt.</h1>
        <p>by</p>
        <img src={logo} alt="Logo" />
      </div>
      
    </div>
  );
}

export default Sign_up;
