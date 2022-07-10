import React,{useEffect, useRef} from 'react'
import connImg from '../../assets/img/connect.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './style.css'
import { FaInstagram, FaLinkedinIn, FaTelegram, FaGithub } from 'react-icons/fa';
import { RiLinkedinFill } from 'react-icons/ri';
import { BsLinkedin } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import emailjs from "emailjs-com"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Contact = () => {
 
  useEffect(() => {
    Aos.init({ duration: 700, once: true, offset: 0, easing: 'ease-in-sine' });
}, []);
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_htrkac3', 'template_sfra2kq',e.target, 'haz75pBOAvb1X7h_w')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
     
      toast('Thanks for messaging!!', {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      e.target.reset();
  }
 
  return (
    <div  className='container ' data-aos="slide-up" id='contact' >
    <ToastContainer />
      <div className="about-header"> <h1 className='animate-charcter'> Contact me</h1></div> 
      <br></br>
      <div className='contact-main'>
        <div className='contact-details'>
          <h2 className='conn-title'>Let's Connect</h2>
          <img className='conn-img' src={connImg} alt="" />
          <h2 className='conn-title'>Find me on..</h2>
          <div className='social-icon-wrapper'>
            <ul class="wrapper">
              <a href="https://www.linkedin.com/in/manish-kumar-pandit-092107214/">
                <li class="icon linkedin">
                  <span class="tooltip">Linkedin</span>
                  <span><i class="fab fa-facebook-f"><RiLinkedinFill className='fa-icon linkedin-icon' /></i>  </span>
                </li>
              </a>
              <a href="https://github.com/manishkumar-hub">
                <li class="icon github">
                  <span class="tooltip">Github</span>
                  <span><i class="fab fa-github"><FaGithub className='fa-icon' /> </i></span>
                </li>
              </a>
              <a href="mailto:manishkumarpandit12@gmail.com">
                <li class="icon instagram">
                  <span class="tooltip">Gmail</span>
                  <span><i class="fab fa-instagram"><SiGmail className='fa-icon insta-icon' /> </i></span>
                </li>
              </a>
              <a href="https://www.instagram.com/manishkumarpandit12/">
                <li class="icon instagram">
                  <span class="tooltip">Instagram</span>
                  <span><i class="fab fa-instagram"><FaInstagram className='fa-icon insta-icon' /> </i></span>
                </li>
              </a>
              <a href="https://telegram.me/shshhs626">
                <li class="icon linkedin">
                  <span class="tooltip">Telegram</span>
                  <span><i class="fab fa-facebook-f"><FaTelegram className='fa-icon linkedin-icon' /></i>  </span>
                </li>
              </a>
            </ul>
          </div>

        </div>
        <div className='message-form'>
          <h2 className='conn-title'>Send a Message...</h2>
          <div class="wrapper">
            <article class="letter">
            <form onSubmit={sendEmail}>
            <div class="side">
            <p>
            <textarea name='message' placeholder="Your message"></textarea>
            </p>
            </div>
            <div class="side">
            <p>
            <input type="text" name='name' placeholder="Your name" />
            </p>
            <p>
            <input type="email" name='email' placeholder="Your email" />
            </p>
            <p>
            <button id="sendLetter" type='submit' >Send</button>
            </p>
            </div>
            </form>
            </article>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact