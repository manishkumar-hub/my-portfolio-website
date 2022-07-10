import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { BsGlobe } from 'react-icons/bs';
import manish from '../../assets/img/manish.jpg'
const ProjectCard = (props) => {
  return (
    <div>
    <div className=' ' >
                    <ul className='card-ul' >
                        <li className="booking-card " style={{backgroundImage: `url(${props.imgSRC})`} } >
                            <div className="book-container">
                                <div className="content">
                                    <button className="btn">{props.tech}</button>
                                </div>
                            </div>
                            <div className="informations-container">
                                <h2 className="project-title ">{props.title}</h2>

                                <p className="sub-title">{props.subtitle}</p>
                                <div className="more-information">
                                    <div className="info-and-date-container">
                                        <div className="">
                                        <a href={props.githubLink} target="_blank"> 
                                        <li class="icon github">
                                        <span class="tooltip">Github</span>
                                        <span><i class="fab fa-github"><FaGithub className='fa-icon-card' /> </i></span>
                                        </li>
                                        </a>
                                        </div>{
                                        props.web&&<div className="">
                                        <a href={props.weblink} target="_blank">
                                        <li class="icon github">
                                        <span class="tooltip">Github</span>
                                        <span><i class="fab fa-github"><BsGlobe className='fa-icon-card' /> </i></span>
                                        </li>
                                        </a>
                                        </div> }
                                    </div>
                                    <p className="disclaimer">{props.desc}</p>
                                    <p></p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
    </div>
  )
}

export default ProjectCard