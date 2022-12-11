import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBeer } from 'react-icons/fa';
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <a href="/" className='logo'>LOGO</a>

                    <div className='menu-icon'>
                        <FaBeer className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <a href='/projects'>Projects</a>
                        </li>
                        <li className='nav-item'>
                            <a href='/aboutme'>AboutMe</a>
                        </li>

                    </ul>
                </div>
            </nav>

        </>
    )
}

export default Navbar