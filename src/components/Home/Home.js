import React from 'react';
import './Home.css';
import ima from "../../images/portfolio.png"
function Home(){
  return (
    
    <div className='Intro-container'>
        <div className='Intro-text'>
            <div className='Intro-roots'>
                <h1 className="Intro-roots-1">Hello,</h1>
                    <h1 className='Intro-root-2'>I'm Rakshit Verma</h1>

                <h1 className='Intro-roots-1'>Web Developer</h1>
            </div>
            <p className='Intro-base'>Front-End developer / Software-developer</p>
            <div className='intr0-btn-container'>
            <a href='../Contact/Contact.js' className='Intro-btn'>
                    <span className='Intro-btn-text'>
                        Contact
                    </span>
            </a>
            </div>
        </div>
        <div className='Intro-image-container'>
            <img className='Intro-images' src={ima} alt='' >

            </img>
        </div>
        
    </div>
    
  )
}

export default Home;