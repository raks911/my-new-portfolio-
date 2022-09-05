import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import bars from '../../images/pngwing.com.png';
import cross from '../../images/cross.png'
export default function Navigation() {
  const [click,setclick] = useState(false);
  const handleClick = () => setclick(!click);
  return (
    <div className='Navbar' >
        <span className='nav-logo' style={{position:'relative',top:'1%' ,left:'4%',fontSize:'20px',fontWeight:'700',color:'white',}}>
            PORTFOLIO
        </span>
        <ul className={click ? "nav-items active" :"nav-items"}>
            <li className='nav-items-data'>
              <Link to="/Home" className='nav-items-data-link' >Home</Link></li>
            <li className='nav-items-data'>
            <Link to="/About" className='nav-items-data-link' >About</Link></li> 
            <li  className='nav-items-data'>
            <Link to="/skills" className='nav-items-data-link'>Skills</Link></li>
            <li  className='nav-items-data'>
            <Link to="/Contact" className='nav-items-data-link'>Contact</Link></li>
        </ul>
        <div className=".nav-toggle" onClick={handleClick}>
          {click ? (
            <img className='icon' src={bars} alt='' >
            </img>
          ) : (<img className='icon' src={cross} alt='' >
          </img>)}
        </div>
    </div>
  )
}

