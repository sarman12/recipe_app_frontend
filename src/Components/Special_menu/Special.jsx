import React from 'react';
import './Special.css';
import { BsList } from 'react-icons/bs';
import { BiPhone } from 'react-icons/bi';
import { MdClose, MdEmail } from 'react-icons/md';
import { BsGithub } from 'react-icons/bs';
import { LiaLinkedin } from 'react-icons/lia';

function Special({ active, togglenav }) {
    
  return (
    <div>
      <div className={`Landing_page_information ${active ? 'Landing_page_information_show' : ''}`}>
        <div className="contact_form">
          <div>
            <BiPhone />
            <MdEmail />
            <BsGithub />
            <LiaLinkedin />
          </div>
          <div className="contact">
            <input type="text" placeholder="Enter your Name" />
            <input type="email" placeholder='Enter your email' />
            <textarea cols="30" rows="10" placeholder="Enter your queries"></textarea>
            <button>Send</button>
          </div>
        </div>
        <div className="navigation">
          <nav>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Privacy Policy</li>
              <li>Blog</li>
            </ul>
          </nav>
        </div>
        <MdClose className="special_menu" onClick={togglenav} />
      </div>
      <BsList className="special_menu" onClick={togglenav} />
    </div>
  );
}

export default Special;
