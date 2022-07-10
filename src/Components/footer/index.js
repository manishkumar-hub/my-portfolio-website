import React from 'react'
import flag from '../../assets/img/flag.png'
import './style.css'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='copwrt' >No &#169; Copyright Issues </div>
        <div className='thanks'>
        Thanks for Visiting!
        </div>
        <div className='made-in'> 
        Made with <span style={{color:"red"}} >&#10084;</span> in <img src={flag} alt="" />
        </div>
    </div>
  )
}

export default Footer