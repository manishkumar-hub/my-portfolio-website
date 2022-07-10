import React,{useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import ProjectCard from './projectCard';
import './style.css';
require('../../assets/img/manish.jpg')


const Projects = () => {
    useEffect(() => {
        Aos.init({ duration: 700, once: true, offset: 0, easing: 'ease-in-sine' });
    }, []);
    return (
        <div data-aos="slide-up" id='projects'>
        <div className="about-header"> <h1 className='animate-charcter'> My Projects</h1></div>
        <div className='container project-cont'>
        <div className='project-card'>
        <ProjectCard title={"The Craft House"} subtitle={"An Ecommerece website"} tech={"MERN & Paytm API"} imgSRC={require('../../assets/img/proj1.png')} desc={"The Craft House is a fully responsive, secure ecommerce web application having variety of local and handmade art and craft products .It also has integrated Paytm Payment Gate… "} githubLink={"https://github.com/manishkumar-hub/The-craft-House"} web={true} weblink={"https://the-craft-house.vercel.app/"}  />
        </div>
        <div>
        <ProjectCard title={"Rojgar.com"} subtitle={"website"} tech={"MERN"} imgSRC={require('../../assets/img/proj2.png')} desc={"Rojgar.com is a simple secure and responsive web portal where user can get access to millions of jobs available User will find all ... "} githubLink={"https://github.com/manishkumar-hub/Rojgar.com-Team--bit_by_bit---server"} web={false} weblink={""}/>
        </div>
        <div>
        <ProjectCard title={"Shiv Academy"} subtitle={"school alumni portal"} tech={"MERN"} imgSRC={require('../../assets/img/proj3.png')} desc={"It is a newly built school alumni portal to connect alumni with students  ... "} githubLink={"https://github.com/manishkumar-hub/Shiv-Academy"} web={true} weblink={"https://shiv-academy.netlify.app/"} />
        </div>
        
        </div>
        </div>
    )
}

export default Projects