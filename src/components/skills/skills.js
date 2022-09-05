import React from 'react';
import cslogo from '../../images/c++logo.png';
import clogo from '../../images/clogo.png';
import python from '../../images/pythonlogo.png';
import github from '../../images/githublogo.png';
import html from '../../images/htmllogo.png';
import cssl from '../../images/csslogo.png';
import javascript from '../../images/javasciptlogo.png';
import reactl from '../../images/reactlogo.png';
import './skills.css';

export default function skills () {
  return (
    <div className='skills'>
        <h1 className='skills-heading'> Skills </h1>
        <div className='skills-logo'>
            <div className='skills-logo-container-1'>
                <img className='skills-logo-img  ' src={clogo} alt=''></img>
                <img className='skills-logo-img  ' src={cslogo}  alt=''></img>
                <img className='skills-logo-img  ' src={python} alt=''></img>
                <img className='skills-logo-img  ' src={github} alt=''></img>
            </div>
            <div className='skills-logo-container-2'> 
            <img className='skills-logo-img ' src={html} alt=''></img>
                <img className='skills-logo-img ' src={cssl} alt=''></img>
                <img className='skills-logo-img  ' src={javascript} alt=''></img>
                <img className='skills-logo-img ' src={reactl} alt=''></img>
            </div>
        </div>
        
    </div>
  )
}
