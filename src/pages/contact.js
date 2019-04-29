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
<<<<<<< HEAD
               **Work goes here**
=======
                <div class="contact-info">
                    <p>Makeven Yan</p>
                    <p>k3vinyan@gmail.com</p>
                    <p>(408) 960-4418</p>
    
                    <p><a href="https://www.linkedin.com/in/k3vinyan/">linkedln</a></p>
                </div>
>>>>>>> 7c1a0760610584bd75f4ede6c8f52eb81abde7f2
            </div>
        </div>
    )
};

export default Contact;