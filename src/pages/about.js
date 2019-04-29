import React from 'react';

import Navlist from '../components/navlist';

import aboutStyles from '../styles/about.module.scss';


const About = () => {

    return (
        <div className={aboutStyles.container} id="about">
            <div className={aboutStyles.firstColumn}>
                <h1>SVG About</h1>
                <div><Navlist /></div>
            
            </div>

            <div className={aboutStyles.secondColumn}>
                <img></img>
                <p>Hello! I am a web developering living in San Jose, California</p>
                I am a web developer that is interested in creating beautiful web applications and solving challenging problems. On the journey, I have established a good foundation with full stack development but generally found myself fully immerse and passion with front-end development. On my free time I am always looking to improve myself with new technologies and projects.
            </div>
            
        </div>
    )
};

export default About;