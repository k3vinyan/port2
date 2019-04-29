import React from 'react';

import Navlist from '../components/navlist';

import contactStyles from '../styles/contact.module.scss';

const Contact = () => {

    return (
        <div className={contactStyles.container} id="contact">
            <div className={contactStyles.firstColumn}>
                <h1>SVG Contact</h1>

                <div><Navlist /></div>
            
            </div>

            <div className={contactStyles.secondColumn}>
                <div class="contact-info">
                    <p>Makeven Yan</p>
                    <p>k3vinyan@gmail.com</p>
                    <p>(408) 960-4418</p>
    
                    <p><a href="https://www.linkedin.com/in/k3vinyan/">linkedln</a></p>
                </div>
            </div>
        </div>
    )
};

export default Contact;