import React from 'react';
import '../js/helper';
import Navlist from '../components/navlist';
import Chibi from '../images/chibi.svg';
import HomeStyle from '../styles/home.module.scss';


const Home = () => {
	
    return (
			<div className={HomeStyle.mainContainer} id="home">
				<div className={HomeStyle.navContainer} >
					<Navlist id={HomeStyle.homeNav}/>
				</div>
				<div className={HomeStyle.paraContainer} id="home-para">
					<p className={HomeStyle.quote}  >"Hello, My name is Kevin Yan and I design and code beautifully simple things, 
						and I love what I do"
					</p>
				</div>

				<div className={HomeStyle.innerContainer}>
					
					<div className={HomeStyle.svgContainer}>
						<img src={Chibi} alt="chibi" className={HomeStyle.chibi}/>
					</div>

					<div className={HomeStyle.titleContainer}>
						<h1 className={HomeStyle.title}>Web Developer</h1>
					</div>
				</div>
				
				
			</div>
    )
}

export default Home;
