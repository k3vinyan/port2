import React from 'react';

import Navlist from '../components/navlist';

import workStyles from '../styles/work.module.scss';

const Work = () => {
    
    return (
        <div className={workStyles.container} id="work">
            <div className={workStyles.firstColumn}>
                <h1>SVG Work</h1>

                <div><Navlist /></div>
            
            </div>

            <div className={workStyles.secondColumn}>
               <div>
                   Work One
               </div>
               <div>
                   Work Two
               </div>
                <div>
                    Work Three
                </div>
            </div>
        </div>
    )
}

export default Work;