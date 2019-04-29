import React from 'react';

import layoutStyles from '../styles/layout.module.scss';

const Layout = (props) => {
    return (
        <div className={layoutStyles.container}>
            {props.children}
        </div>
    
        
    )
    
}

export default Layout;