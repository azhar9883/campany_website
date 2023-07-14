


import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import "./Hero.css"
function Hero() {
    return ( <>
    
    <Carousel className='slider-padding' autoPlay>
                <div className="item">
                    <img src="assets/images/banner1.jpg" alt=""/>
                  
                    <div className="banner-content">
					<div className="container">
						<div className="row">
							<div className="col-md-8 col-lg-6">
								<div className="banner-text">
									<h3>Come to join us</h3>
									<h2>We help you to grow your business rapidly</h2>
									<p>Our mission is to craft a well-designed and pocket-friendly web solution to enable aspiring business owners gain online visibility, increase sales and enhance productivity.</p>
									<a href="/home" className="button2">Our Design portfolio <span><ArrowRightAltIcon sx={{ mt: "5px", fontSize: 17 }} /> </span></a>
								</div>
							</div>
						</div>
					</div>	
				</div>		
								
                </div>
                <div className="item">
                    <img src="assets/images/banner1.jpg" alt=""/>
                  
					<div className="banner-content">
					<div className="container">
						<div className="row">
							<div className="col-md-8 col-lg-6">
								<div className="banner-text">
									<h3>Grow your business</h3>
									<h2>Don't listen to what they say. Come and see</h2>
									<p>Our vision is to become the prime performer in providing quality web development related solutions in the competitive global market place.</p>
									<a href="/home" className="button2">Our design portfolio <span><ArrowRightAltIcon sx={{ mt: "5px", fontSize: 17 }} /></span></a>
								</div>
							</div>
						</div>
					</div>	
				</div>	
                </div>

				<div class="item">
				<img src="assets/images/banner3.jpg" alt="no img"/>
				<div class="banner-content">
					<div class="container">
						<div class="row">
							<div class="col-md-8 col-lg-6">
								<div class="banner-text">
									<h3>What is artificial intelligence (AI)?</h3>
									<h2>"Intelligence" means the ability to learn </h2>
									<p>Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. Specific applications of AI include expert systems, natural language processing, speech recognition and machine vision.</p>
									<a href="#" class="button2">World with ai <span><ArrowRightAltIcon sx={{ mt: "5px", fontSize: 17 }} /></span></a>
								</div>
							</div>
						</div>
					</div>	
				</div>		
			</div>
              
            </Carousel>

    </> );
}

export default Hero;