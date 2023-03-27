import React, { useState, useEffect } from 'react'
import './style.css';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { } from 'react-icons/bs';
import { } from 'react-icons/ti';
import { } from 'react-icons/ri';
// import styles from 'https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic';

const About = () => {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true, offset: 0, easing: 'ease-in-sine' });
    }, []);
    return (
        <div className='container about' id='about' data-aos="slide-up" >

            <div className="about-header"> <h1 className='animate-charcter'> About me</h1></div>
            <div className="about-text-div">
                <p className='about-text'>Hii , I am  Manish , currently pursuing my B-tech in Computer science and Engineering from National Institute of Technology Sikkim .I am an enthusiastic full-stack MERN & PHP web developer who enjoys experimenting with new programming concepts & technologies.I found it interesting to dive my head in solving DS and algorithmic puzzles . Apart from it , i am also Technical member of Web Devlopment Cell ,NIT Sikkim . <br />
                    Want to know more . Have a look at my resume
                </p>
                <div className="get-resume">
                    <a target="_blank" href="https://drive.google.com/file/d/1N48hikAukAkp9afb26XQvlKnJg9r5Z92/view?usp=sharing">
                        <div className="box">Resume</div>
                    </a>
                </div>
            </div>
            <div className="timeline-header">
                <h2 className='animate-charcter timeline-header'>My Brief Timeline</h2>
            </div>
            <div className="timeline">
                <ul className="timeline">
                    <li>
                        <div className="direction-l">
                            <div className="flag-wrapper">
                                <span className="flag">Software Developer Intern @ <a href="https://identifyyou.in/">IdentifyYou technologies</a>  </span>
                                <span className="time-wrapper"><span className="time">Dec,2022-Current</span></span>
                            </div>
                            <div className="desc"><span className='event-desc '> Working on building microservice for ERP system Typescript and
                            Node js </span> </div>
                        </div>
                    </li>
                    <li>
                        <div className="direction-r">
                            <div className="flag-wrapper">
                                <span className="flag">Fullstack Developer Intern @ <a href="https://blaccsckull.com/">Blaccsckull</a>  </span>
                                <span className="time-wrapper"><span className="time">Aug, 2022-Nov, 2022</span></span>
                            </div>
                            <div className="desc"><span className='event-desc '> Worked on  building a social Media website using React js, Tailwind CSS and Node js</span> </div>
                        </div>
                    </li>
                    <li>
                        <div className="direction-l">
                            <div className="flag-wrapper">
                                <span className="flag">B-tech  </span>
                                <span className="time-wrapper"><span className="time">2020-Current</span></span>
                            </div>
                            <div className="desc"><span className='event-desc'> Currently pursuing my B-tech in Computer Science and engineering from National Institute of Technology Sikkim </span> </div>
                        </div>
                    </li>
                    <li>
                        <div className="direction-r">
                            <div className="flag-wrapper">
                                <span className="flag">Passed 12<sup>th</sup></span>
                                <span className="time-wrapper"><span className="time">2017-19</span></span>
                            </div>
                            <div className="desc">Passed class 12<sup> th</sup> examination from Central Public School with 88.20%  </div>
                        </div>
                    </li>

                    <li>
                        <div className="direction-l">
                            <div className="flag-wrapper">
                                <span className="flag">Passed 10<sup>th</sup> </span>
                                <span className="time-wrapper"><span className="time">2017</span></span>
                            </div>
                            <div className="desc">Passed class 10<sup> th</sup> examination from S.S. Public School with 10 CGPA </div>
                        </div>
                    </li>
                    <li>
                        <div className="direction-r">
                            <div className="flag-wrapper">
                                <span className="flag">Born </span>
                                <span className="time-wrapper"><span className="time">09-Mar-2002</span></span>
                            </div>
                            <div className="desc"></div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default About