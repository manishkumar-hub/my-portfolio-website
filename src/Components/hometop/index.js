import React from 'react'
// import './effect';
import './style.css';
import TypeAnimation from 'react-type-animation';
import manish from '../../assets/img/manish.jpg'
import { FaInstagram,FaLinkedinIn,FaTelegram ,FaGithub } from 'react-icons/fa';
import { RiLinkedinFill } from 'react-icons/ri';
import { MdWavingHand } from 'react-icons/md';

const Home = () => {
    return (
        <>
            <div class="area" id='home' >
                <div className="home-content">
                <div className="home-text">
                <h1 id='top-text' >Hey there <MdWavingHand className='moving-hand'/> </h1>
                <h1>I'm  <span id='my-name' className='animate-charcter' >Manish</span> </h1>
                <h1>I'm a  
                <TypeAnimation
                cursor={true}
                sequence={[' Passionate Coder.', 1000,' Full Stack Developer.', 1000,' Competitive Programmer.', 1000]}
                wrapper="span" repeat={Infinity}
                />
                </h1>
                <br></br>
                <br></br>
                <div className="social-handles">
                <ul class="wrapper">
                <a href="https://www.linkedin.com/in/manish-kumar-pandit-092107214/">
                <li class="icon linkedin">
                <span class="tooltip">Linkedin</span>
                <span><i class="fab fa-facebook-f"><RiLinkedinFill  className='fa-icon linkedin-icon'/></i>  </span>
                </li>
                </a>
                <a href="https://github.com/manishkumar-hub">
                <li class="icon github">
                <span class="tooltip">Github</span>
                <span><i class="fab fa-github"><FaGithub className='fa-icon' /> </i></span>
                </li>
                </a>
                <a href="https://www.instagram.com/manishkumarpandit12/">
                <li class="icon instagram">
                <span class="tooltip">Instagram</span>
                <span><i class="fab fa-instagram"><FaInstagram className='fa-icon insta-icon'/> </i></span>
                </li>
                </a>
                <a href="https://telegram.me/shshhs626">
                <li class="icon linkedin">
                <span class="tooltip">Telegram</span>
                <span><i class="fab fa-facebook-f"><FaTelegram  className='fa-icon linkedin-icon'/></i>  </span>
                </li>
                </a>
</ul>
                </div>
                </div>
                <div className="home-p-img">
                <img className='p-img' src={manish} alt="Manish " />
                </div>
                </div>
                <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div >
        </>
    )
}

export default Home