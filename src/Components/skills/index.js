import React, { useState, useEffect } from 'react'
import './style.css';
import Aos from 'aos'
import 'aos/dist/aos.css'
import Clang from '../../assets/img/icons8-c-programming-48.png'
import Cpplang from '../../assets/img/c++-lang.png'
import javalang from '../../assets/img/java-logo.jpg'
import pythonlang from '../../assets/img/python.jpg'
import HTMLlang from '../../assets/img/html.png'
import CSSlang from '../../assets/img/css.png'
import JSlang from '../../assets/img/js.png'
import ReactLang from '../../assets/img/reactjs.png'
import php from '../../assets/img/php.png'
import nodejs from '../../assets/img/node.png'
import mongodb from '../../assets/img/mongodb.png'
import mysql from '../../assets/img/mysql.png'
import dsa from '../../assets/img/dsa.png'
import oops from '../../assets/img/oops.jpg'
import dbms from '../../assets/img/dbms.jpg'
import typescript from '../../assets/img/typescript.png'
import networking from '../../assets/img/networking.png'

const Skills = () => {
    useEffect(() => {
        Aos.init({ duration: 2000, once: true, offset: 0, easing: 'ease-in-sine' });
    }, []);
  return (
    <div className='container' id='skills' data-aos="slide-up" >
    <div className="about-header"> <h1 className='animate-charcter'>Skills</h1></div>
    <div className='skill-box  '>
    <img src={Clang} className="skill-icon" alt="C" /> 
    <img src={Cpplang} className="skill-icon" alt="C" /> 
  
    <img src={javalang}  className="skill-icon" alt="C" /> 
    <img src={pythonlang} className="skill-icon" alt="C" /> 
    </div>
    <div className='skill-box  '>
    <img src={dsa} className="skill-icon" alt="C" /> 
    <img src={oops}  className="skill-icon" alt="C" /> 
  
    <img src={networking} className="skill-icon" alt="C" /> 

    </div>
    <div className='skill-box  '>
    <img src={HTMLlang} className="skill-icon" alt="C" /> 
    <img src={CSSlang} className="skill-icon" alt="C" /> 
    <img src={JSlang} className="skill-icon" alt="C" /> 
    <img src={typescript} className="skill-icon" alt="Typescript" /> 
    <img src={ReactLang} className="skill-icon" alt="C" /> 
    <img src={nodejs} className="skill-icon" alt="C" /> 
    <img src={php} className="skill-icon" alt="C" /> 
    </div>
    <div className='skill-box  '>
    <img src={mongodb} className="skill-icon" alt="C" /> 
    <img src={mysql} className="skill-icon" alt="C" /> 
    
    </div>
    </div>
  )
}

export default Skills