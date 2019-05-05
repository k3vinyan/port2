import React from 'react';

import Navlist from '../components/navlist';
import Chibi from '../images/chibi.svg';
import HomeStyle from '../styles/home.module.scss';


const Home = () => {
	
    return (
			<div className={HomeStyle.mainContainer} id="home">
				<div className={HomeStyle.navContainer}>
					<Navlist />
				</div>
				<div className={HomeStyle.paraContainer}>
					<p>"Hello, My name is Kevin Yan and I design and code beautifully simple things, 
						and I love what I do"
					</p>
				</div>

				<div className={HomeStyle.innerContainer}>
					
					<div className={HomeStyle.svgContainer}>
						<img src={Chibi} alt="chibi" />
					</div>

					<div className={HomeStyle.titleContainer}>
						<h1 className={HomeStyle.title}>Web Developer</h1>
					</div>
				</div>
				
				
			</div>
    )
}

export default Home;
