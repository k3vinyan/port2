import React from 'react';

import NavStyles from '../styles/navList.module.scss';
import DefaultStyles from '../styles/default.module.scss';

const NavList = () => {

    return (
        <div>
            <div className={[NavStyles.navContainer, DefaultStyles.navContainer].join(' ')}>
                <nav>
                    <ul className={NavStyles.navList}>
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li className={NavStyles.navUpperslashPosition}><span>|</span></li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li className={NavStyles.navUpperslashPosition}><span>|</span></li>
                        <li>
                            <a href="#project">Projects</a>
                        </li>
                        <li className={NavStyles.navUpperslashPosition}><span>|</span></li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                        <div className={NavStyles.underbar}></div>
                    </ul>
                </nav>
            </div>
        </div>
        


        

        
        
    )
}

export default NavList;