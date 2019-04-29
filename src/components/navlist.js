import React from 'react';

import NavStyles from '../styles/navList.module.scss';

const NavList = () => {

    return (
        <div>
            <div className={NavStyles.navContainer}>
                <nav>
                    <ul className={NavStyles.navList}>
                        <li>

                            <a href="#home">HOME</a>
                        </li>
                        <li className={NavStyles.navUpperslashPosition}><span>|</span></li>
                        <li>
                            <a href="#about">ABOUT</a>
                        </li>
                        <li className={NavStyles.navUpperslashPosition}><span>|</span></li>
                        <li>
                            <a href="#work">WORK</a>
                        </li>
                        <li className={NavStyles.navUpperslashPosition}><span>|</span></li>
                        <li>
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