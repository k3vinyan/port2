import React from 'react';
import DefaultStyles from '../styles/default.module.scss';

const Layout = (props) => {
    return (
        <div className={DefaultStyles.layoutContainer}>
            {props.children}
        </div>
    
        
    )
    
}

export default Layout;