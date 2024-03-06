import React,{useState} from 'react'
import logo from './images/logo.png'
import { Link  , NavLink} from 'react-router-dom'


function Navbar() {
    const [nav,setnav] = useState(false);
    const changeBackground = () =>{
        if(window.scrollY >=50){
            setnav(true)
        }
        else{
            setnav(false)
        }
    }

    window.addEventListener('scroll',changeBackground)
  return (
    <nav className={nav ? "nav active":"nav"}>
        <Link to='#' className='logo'>
            <img src={logo}  alt=''/>
        </Link>
        <input className='menu-btn' type='checkbox' id='menu-btn'/>
        <label className='menu-icon' for='menu-btn'>
            <span className='nav-icon'></span>
        </label>
        {/*
           <ul className='menu'>
            <li><Link to='/main'>Home</Link></li>
            <li><Link to='/features'>Routine</Link></li>
            <li><Link to='/summer'>Summer Plans</Link></li>
            <li><Link to='/about'>About US</Link></li>
            <li><Link to='#'>Your History</Link></li>
            <li><Link to="/login">Login</Link></li>

        </ul> */}
          <ul className="menu">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/features">Routine</NavLink></li>
        <li><NavLink to="/summer">Summer Plans</NavLink></li>
        <li><NavLink to="/about">About US</NavLink></li>
        <li><NavLink to="/history">Your History</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
      </ul>

    </nav>
  )
}

export default Navbar