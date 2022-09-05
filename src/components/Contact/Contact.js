import React from 'react';
import './Contact.css';
import phone from '../../images/phone.png';
import envelope from '../../images/envelope.png';
import location from '../../images/location.png';


export default function Contact() {
    
  return (
    <>
    <div className="Con-container">
        <div className='Con-left'>
            <h1 className='Con-left-title'>Get In Touch With Me</h1>
            <div className='Con-left-describ'>
                <div className='Con-left-describe-items'>
                <img src={phone}  alt='' className='Con-logo'></img> 9528 576 147
                </div>
                <div className='Con-left-describe-items'>
                <img src={envelope} alt='' className='Con-logo'></img> rakshit.verma0911@gmail.com
                </div>
                <div className='Con-left-describe-items'>
                <img src={location} alt='' className='Con-logo'></img> NSUT,sector-3,dwarka
                </div>
            </div>
            
        </div>
        <div className='Con-right'>
            <form  method="POST" action="https://formspree.io/f/mdojaeej" className='Con-form'>
                <input type="text" placeholder='Name' name='username' ></input>
                <input type="text" placeholder='Subject' name='subject' ></input>
                <input type="text" placeholder='Email' name='Email' ></input>
                <textarea rows="5" placeholder='Message' name='message' ></textarea>
                <button>Submit</button>
            </form>
        </div>
    </div>
    </>
  )
  }
  