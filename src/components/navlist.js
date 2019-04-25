import React from 'react';

import { Link } from 'gatsby';

import NavStyles from '../styles/navlist.module.scss';

const handleClick = (props) => {
    console.log(props.target)
}



const NavList = () => {

    return (
        <div>
            <div className={NavStyles.navContainer}>
                <nav>
                    <ul className={NavStyles.navList}>
                        <li>
                            {/* <Link to="/" className={NavStyles.navLink} activeClassName={NavStyles.activeNavItem}>HOME </Link> */}
                            <a href="#home">HOME</a>
                        </li>
                        <li className={NavStyles.navUpperslashPosition}><span>|</span></li>
                        <li>
                            {/* <Link to="/about" className={NavStyles.navLink} activeClassName={NavStyles.activeNavItem}>ABOUT</Link> */}
                            <a href="#about">ABOUT</a>
                        </li>
                        <li className={NavStyles.navUpperslashPosition}><span>|</span></li>
                        <li>
                            {/* <Link to="/work" className={NavStyles.navLink} activeClassName={NavStyles.activeNavItem}>WORK</Link> */}
                            <a href="#work">WORK</a>
                        </li>
                        <li className={NavStyles.navUpperslashPosition}><span>|</span></li>
                        <li>
                            {/* <Link to="/contact" className={NavStyles.navLink} activeClassName={NavStyles.activeNavItem}>CONTACT</Link> */}
                            <a href="#contact">CONTACT</a>
                        </li>
                        <div className={NavStyles.underbar}></div>
                    </ul>
                </nav>
            </div>
        </div>
        


        

        
        
    )
}

export default NavList;