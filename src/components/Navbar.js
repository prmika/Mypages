import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    {/*<Link to="/services" className='navbar-logo'>
                        LOGO
    </Link>*/}
                    LOGO
                    <div className='menu-icon'>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            {/*<Link to ='/projects' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>*/}
                            Projects
                        </li>
                        <li className='nav-item'>
                            {/*<Link to ='/aboutme' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Home
                            </Link>*/}
                            AboutMe
                        </li>
                        <li className='nav-item'>
                            {/*<Link to ='/something' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Home
                            </Link>*/}
                            Something
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    )
}

export default Navbar