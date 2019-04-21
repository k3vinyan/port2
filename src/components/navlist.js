import React from 'react';

import { Link } from 'gatsby';

import NavStyles from '../styles/navlist.module.scss';

const NavList = () => {

    return (
        <div className={NavStyles.navPosition}>
            <nav>
                <ul className={NavStyles.navList}>
                    <li>
                        <Link to="/" className={NavStyles.navLink} activeClassName={NavStyles.activeNavItem}>HOME </Link>
                    </li>
                    <li>
                        <Link to="/about" className={NavStyles.navLink} activeClassName={NavStyles.activeNavItem}>ABOUT</Link>
                    </li>
                    <li>
                        <Link to="/work" className={NavStyles.navLink} activeClassName={NavStyles.activeNavItem}>WORK</Link>
                    </li>
                    <li>
                        <Link to="/contact" className={NavStyles.navLink} activeClassName={NavStyles.activeNavItem}>CONTACT</Link>
                    </li>
                    <div className={NavStyles.underbar} ></div>
                </ul>
            </nav>
        </div>
    )
}

export default NavList;