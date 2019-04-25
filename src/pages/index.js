import React from "react";

import Layout from '../components/layout';
import Home from './home';

import About from '../pages/about';
import Work from '../pages/work';
import Contact from '../pages/contact';

import Test from '../styles/test.scss';

const IndexPage = () => {
    return (
        <Layout >
            <Home />
            <About />
            <Work />
            <Contact />  
        </Layout>    
    )
};

export default IndexPage;
