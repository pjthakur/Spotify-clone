import React from 'react'
import logo  from '../assets/Logo.png'
import profile from '../assets/profile.jpg'
import './styles/sidenav.css'
import { Link, NavLink } from 'react-router-dom'
const SideNav = () => {
    const links = ['For You', 'Top Tracks', 'Favourites', 'Recently Played'];
  return (
    <div className='side-nav'>
        <div className='navigate'>
            <img src={logo} alt='logo'/>
            <ul>
                <li><NavLink to='/'>For You</NavLink></li>;
                <li><NavLink to='/top'> Top Tracks </NavLink></li>;
                <li><NavLink to='/favourite'> Favourites</NavLink></li>;
                <li><NavLink to='/recent'>Recently Played</NavLink></li>;
            </ul>
        </div>
        <div className='profile-pic-out'>
            <div className='profile-pic'>
                <img src={profile} alt='profile-pic'/>
            </div>
        </div>
    </div>
  )
}

export default SideNav