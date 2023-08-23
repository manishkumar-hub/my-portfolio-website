import React ,{useState} from 'react'
import './navstyle.css';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { BsLinkedin ,BsGithub } from 'react-icons/bs';
import { TiThMenuOutline } from 'react-icons/ti';
import { RiLinkedinBoxLine } from 'react-icons/ri';
import ScrollToTop from "react-scroll-to-top";
// import Contact from '../contact';

const Navbar = () => {
  const [ShowMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <div>
      <nav className='main-nav' >
      <div className='logo'>
      <h1 className='logo-title'>Portfolio</h1>
      </div>
      <div className={ShowMediaIcons ? "mobile-menu-link" : 'menu-link'}>
    <ul>
    
        <li className='hover-4' > 
        <Link smooth to="#home"> Home</Link>
         </li>
        <li className='hover-4' > 
        <Link smooth to="/path#about"> About</Link>
         </li>
        <li className='hover-4' > <Link to='#projects'> Projects</Link> </li>
        <li className='hover-4' > <Link to='#skills'> Skills</Link> </li>
        <li className='hover-4' > <Link to='#contact' > Contact me</Link> </li>
        {

          // <li className='hover-4'> <Link smooth  to="#projects"> Projects</Link> </li>
          // <li className='hover-4'> <Link smooth to="#skills"> Skills</Link> </li>
          // <li className='hover-4'> <Link smooth to="#contact"> Contacts us</Link> </li>
        }
        
          </ul>
      </div>
      <div className="social-media">
        <ul className=''>
        <a target="_blank" href="https://drive.google.com/file/d/1R3htXU8mGnIrNg9-sJEMWsY0N8_p-Gtl/view?usp=drive_link">
        <button type="button" class="btn btn-light"> <b className='res-btn'>Get Resume</b></button>
        </a>
        </ul>
        {
          <div className='hamburger-menu'>
          <a  onClick={()=>{
            setShowMediaIcons(!ShowMediaIcons);
          }} ><TiThMenuOutline/>  </a></div>
        }
      </div>
      </nav>
      <ScrollToTop smooth color='red' />
    </div>
  )
}

export default Navbar