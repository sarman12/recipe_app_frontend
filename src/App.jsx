import React from 'react'
import './App.css'
import Landing_page from './Components/Landing_page/Landing_page'
import { BsLinkedin, BsTwitter } from 'react-icons/bs'
import { FaFacebook, FaGithub } from 'react-icons/fa'
import { ImInstagram } from 'react-icons/im'
function App() {
  return (
    <div>
      <Landing_page/>
      <footer>
        <div className="footer_container">
          <div className="footer_content">
            <ul>
              <li>Trending</li>
              <li>Cuisines </li>
              <li> Seasonal</li>
              <li> Seafood</li>
              <li> Vegan</li>
              <li> Non-vegetarian</li>
            </ul>

          </div>
          
          <div className="footer_navbar">
          <ul>
              <li>Home</li>
              <li>About Us </li>
              <li> Contact Us</li>
              <li> Blogs</li>
            </ul>

          </div>
          <div className="footer_policies">
            <ul>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          
        </div>
        <div className="footer_social">
        <h2>Connect With Us</h2>
          <div>
          <BsLinkedin className='fa'/>
            <FaFacebook className='fa'/>
            <FaGithub className='fa'/>
            <BsTwitter className='fa'/>
            <ImInstagram className='fa'/>

          </div>
            

          </div>
        <div>
          {/* <h1>Food Hunt</h1> */}
        </div>
        <div className="footer_copywrite">
          © 2024 Food Hunt Pvt Ltd. All Right Reserved
        </div>

      </footer>
    </div>
  )
}

export default App