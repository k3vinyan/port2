import React from 'react';

import Navlist from '../components/navlist';

import contactStyles from '../styles/contact.module.scss';

const Contact = () => {

    return (
        <div className={contactStyles.container} id="contact">
            <div className={contactStyles.firstColumn}>
                <h1 className={contactStyles.title}>Contact</h1>

                <div className={contactStyles.navContainer}><Navlist /></div>
            
            </div>

            <div className={contactStyles.secondColumn}>
                <div className={contactStyles.contactInfo}>
                    <p>Makeven Yan</p>
                    <p>(408) 960-4418</p>
                    <p><a href="mailto:k3vinyan@gmail.com">k3vinyan@gmail.com</a></p>
                    <p><a href="https://www.linkedin.com/in/k3vinyan/">linkedln</a></p>
                </div>
            </div>
        </div>
    )
};

export default Contact;