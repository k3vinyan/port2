import React from 'react';



const worklist = () => {

    return (
        <div>
            <div className={NavStyles.navContainer}>
                <nav>
                    <ul className={NavStyles.navList}>
                        <li>
                            <Link to="/" className={NavStyles.navLink} activeClassName={NavStyles.activeNavItem}>HOME </Link>
                        </li>
                        <li className={NavStyles.navUpperslashPosition}><span>|</span></li>
                        <li>
                            <Link to="/about" className={NavStyles.navLink} activeClassName={NavStyles.activeNavItem}>ABOUT</Link>
                        </li>
                        <li className={NavStyles.navUpperslashPosition}><span>|</span></li>
                        <li>
                            <Link to="/work" className={NavStyles.navLink} activeClassName={NavStyles.activeNavItem}>WORK</Link>
                        </li>
                        <li className={NavStyles.navUpperslashPosition}><span>|</span></li>
                        <li>
                            <Link to="/contact" className={NavStyles.navLink} activeClassName={NavStyles.activeNavItem}>CONTACT</Link>
                        </li>
                        <div className={NavStyles.underbar}></div>
                    </ul>
                </nav>
            </div>
    )
}