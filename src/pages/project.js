import React from 'react';

import Navlist from '../components/navlist';

import ProjectStyles from '../styles/project.module.scss';

const Project = () => {
    
    return (
        <div className={ProjectStyles.container} id="project">
            <div className={ProjectStyles.firstColumn}>
                <h1 className={ProjectStyles.title}>Projects</h1>
                <div className={ProjectStyles.navContainer}><Navlist /></div> 
            </div>

            <div className={ProjectStyles.secondColumn}>
                <div className={ProjectStyles.projectContainer} >
                    <div><h1 className={ProjectStyles.positionTitle}>DSF3-Flex | Full Stack Developer</h1></div>
                    <div><p>Web application that help delivery facilities organzie, track, and relase incoming drivers for pickup and delivery of packages</p></div>
                    <div><a href='https://github.com/k3vinyan/DSF3-Flex' className={ProjectStyles.link}>Github</a></div>
                    <div><a href='https://dsf3-flex.herokuapp.com' className={ProjectStyles.link}>App</a></div>
                </div>

                <div className={ProjectStyles.projectContainer} >
                    <div><h1 className={ProjectStyles.positionTitle}>Hack1n-Slash | Stack Developer</h1></div>
                    <div><p>Web Application that allows users to improve their typing speed and accuracy by code provided by any Github accounts</p></div>
                    <div><a href='https://github.com/k3vinyan/DSF3-Flex' className={ProjectStyles.link}>Github</a></div>
                    <div><a href='https://dsf3-flex.herokuapp.com' className={ProjectStyles.link}>App</a></div>
                </div>

                <div className={ProjectStyles.projectContainer} >
                    <div><h1 className={ProjectStyles.positionTitle}>Car Wars | Full Stack Developer</h1></div>
                    <div><p>Web Application of card game that borrows elements of the classic ‘War’ Card game</p></div>
                    <div><a href='https://github.com/k3vinyan/DSF3-Flex' className={ProjectStyles.link}>Github</a></div>
                    <div><a href='https://dsf3-flex.herokuapp.com' className={ProjectStyles.link}>App</a></div>
                </div>
            </div>
        </div>
    )
}

export default Project;