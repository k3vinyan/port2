import React from "react";

import Layout from '../components/layout';
import Home from './home';
import About from '../pages/about';
import Project from '../pages/project';
import Contact from '../pages/contact';

const IndexPage = () => {
    return (
        <Layout >
            <Home />
            <About />
            <Project />
            <Contact />  
        </Layout>    
    )
};

export default IndexPage;
