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
                    <h1>Full Stack Developer/DSF3-Flex</h1>
                    <p>Web application that help delivery facilities organize, track,, and release incoming drivers for pickup and delivery of package</p>
                    <p>Implemented a MongoDB API to stream drivers information to application allowing users to share information about drivers as they come and leave the facilities</p>
                    <p>Application is designed to intuitive to allow users to be quickly and easy trained for use</p>		
                    <br />

                    <h1>Front-End Developer/Hack1n-Slash</h1>
                    <p>Web Application that allows users to improve their typing speed and accuracy by code provided by any Github accounts</p>
                    <p>Co-developed a web application from scratch from an one day hackathon and won 2nd place</p>
                    <p>Designed the navigation bar, custom icons, and UI/UX of application using Bootstrap and custom CSS</p>

                    <h1>Full Stack Developer/Car Wars</h1>
                    <p>Web Application of card game that borrows elements of the classic ‘War’ Card game</p>
                    <p>Utilize AngularJS, CSS, and JavaScript to enable responsive animation of card elements</p>
                    <p>Design to be responsive to tablet devices and various desktop resolution</p>

               </div>
            </div>
        </div>
    )
}

export default Work;