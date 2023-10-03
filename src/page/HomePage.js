import React, { useState, useEffect } from 'react';
import Hero from "../components/hero/Hero";
import Home from "../components/home/Home";
import Service from "../components/service/Service";
import Technology from "../components/technology/Technology";
import Footer from "../components/footer/Footer";
// import { Link, Element } from 'react-scroll';
import { useLocation } from 'react-router-dom';
import {AiOutlineCloseCircle} from 'react-icons/ai'
import Header from '../components/header/Header';
import { Link } from 'react-router-dom';
import AiBanner from '../components/aiBanner/AiBanner';
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";


function HomePage() {

  const [showPopup, setShowPopup] = useState(false);

  const location = useLocation();


  const closeProjectEstimation = () =>{
    setShowPopup(false)
    localStorage.setItem('user_id', 12345);
  }

  useEffect(() => {
    window.scrollTo(0, 0);

    const storedUserId = localStorage.getItem('user_id');
    const timer = setTimeout(() => {
      if(!storedUserId){
        setShowPopup(true);
      }else{
        setShowPopup(false);
      } 
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const element = document.getElementById(location.pathname.substring(1));

    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  }, [location]);

  


    return ( 
    <>
    
  <Header />
    <div className="main home" id="main">
   {showPopup && ( <div className="bot-sec" id="bot">
			<img src="assets/images/bot.png" alt="no img"/><span className='close-icon' onClick={closeProjectEstimation}><AiOutlineCloseCircle/></span>
			<Link to="/ProjectEstimate" className="bot-bubble"><span> Request A </span> Project Estimate </Link>
		</div>)}
    <section id="hero" className='banner-top'>
    <Hero/>
    </section>
    <section id="home">
       <Home/>
    </section> 
    <section id="aiBanner">
     <AiBanner/>
    </section>
    <section id="service">
      <Service/>
    </section>
    <section id="tech">
      <Technology/>
    </section>
    </div>
  
    <div className="block8 block3 mar-bot0 block10">
			<div className="container-fluid">
				<div className="row">
					<div className="tech-offer-section">
						<div className="col-md-6">
							<div className="row">
								<div className="col-sm-4">
									<div className="pos3">
										<img src="assets/images/sap.png" alt="no img" style={{width:"500px"}}/>
									</div>
								</div>
								<div className="col-sm-8">
									<div className="block8-left">
										<div className="tech-offer">
											<h2>Looking for <span>Enterprise Business Solution</span></h2>
											<p>Enterprise resource planning (ERP) refers to a type of software that organizations use to manage day-to-day business activities such as accounting, procurement, project management, risk management and compliance, and supply chain operations.</p>
                      </div>
											<div className="icon-set">
												<span><img src="assets/images/pic5.png" alt="no img"/></span>
												<span><img src="assets/images/pic6.png" alt="no img"/></span>
												<span><img src="assets/images/pic7.png" alt="no img"/></span>
												<span><img src="assets/images/pic8.png" alt="no img"/></span>
											</div>
										
                    <button type="submit" class="button2">
                    More Details
                          <span>
                            <ArrowRightAltIcon
                              sx={{ mt: "5px", fontSize: 17 }}
                            />
                          </span>
                        </button>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="row">
								<div className="shaperator clearfix">
									<div className="col-sm-8">
										<div className="block8-right">
											<div className="tech-offer">
												<h2>Grow Business <span>use of Java Technologies</span></h2>
												<p>Java is widely used in the development of web applications, including e-commerce sites, social media platforms, and enterprise-level systems. Java frameworks such as Spring, Struts, and Hibernate are popular choices for building web applications.</p>
                        </div>
												<div className="icon-set">
													<span><img src="assets/images/pic1.png" alt="no img"/></span>
													<span><img src="assets/images/pic2.png" alt="no img"/></span>
													<span><img src="assets/images/pic3.png" alt="no img"/></span>
													<span><img src="assets/images/pic4.png" alt="no img"/></span>
												</div>
									
                      <button type="submit" class="button2">
                    More Details
                          <span>
                            <ArrowRightAltIcon
                              sx={{ mt: "5px", fontSize: 17 }}
                            />
                          </span>
                        </button>
										</div>
									</div>
									<div className="col-sm-4">
										<div className="pos2">
											<img src="assets/images/java.png" alt="no img"/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>	

    
    <Footer/>
    </> 
    );
}

export default HomePage;