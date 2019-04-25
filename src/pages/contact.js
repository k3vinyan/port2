import React from 'react';

import Navlist from '../components/navlist';

import contactStyles from '../styles/contact.module.scss';

const Contact = () => {

    return (
        <div className={contactStyles.container} id="contact">
            <div className={contactStyles.firstColumn}>
                <h1>SVG Work</h1>

                <div><Navlist /></div>
            
            </div>

            <div className={contactStyles.secondColumn}>
               **Work goes here**
            </div>
        </div>
    )
};

export default Contact;