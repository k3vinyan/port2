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
                    <div><p>Web application developed for an undisclosed company to help track, organize, onboard, and release incoming and outgoing drivers</p></div>
                    <div><a href='https://github.com/k3vinyan/DSF3-Flex' rel="noopener noreferrer" target="_blank" className={ProjectStyles.link}>Github</a></div>
                    <div><a className={ProjectStyles.link}><strike>App</strike></a><i className={ProjectStyles.italic}>  (site no longer operational)</i></div>
                </div>

                <div className={ProjectStyles.projectContainer} >
                    <div><h1 className={ProjectStyles.positionTitle}>Hack1n-Slash | Stack Developer</h1></div>
                    <div><p>Gamified coding application that allows users to improve their accuracy and speed while writing code based offof code samples fetched from public GitHub repositories</p></div>
                    <div><a href='https://github.com/hdngo/TeamHACKIN' rel="noopener noreferrer" target="_blank" className={ProjectStyles.link}>Github</a></div>
                    <div><a href='https://hack1n-slash.herokuapp.com/' rel="noopener noreferrer" target="_blank" className={ProjectStyles.link}>App</a></div>
                </div>

                <div className={ProjectStyles.projectContainer} >
                    <div><h1 className={ProjectStyles.positionTitle}>Car Wars | Full Stack Developer</h1></div>
                    <div><p>A unique card game that borrows elements of the classic card game War</p></div>
                    <div><a href='https://github.com/k3vinyan/CardsWar' rel="noopener noreferrer" target="_blank" className={ProjectStyles.link}>Github</a></div>
                    <div><a href='https://cardswar.herokuapp.com/' rel="noopener noreferrer" target="_blank" className={ProjectStyles.link}>App</a></div>
                </div>
            </div>
        </div>
    )
}

export default Project;