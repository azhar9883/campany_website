


  import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
  import React from 'react';

  import {FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub} from 'react-icons/fa'
  import {FaMapMarkerAlt} from 'react-icons/fa';
  import {AiOutlineMail} from 'react-icons/ai';
  import {IoIosCall} from 'react-icons/io';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';

function Footer() {


	
	const scrollToTop = () =>{
	  window.scrollTo({
		top: 0, 
		behavior: 'smooth'
	
	  });
	};
	
	



    return ( 
        
   

	<footer className="footer">
	<div className="footer-top">
		<div className="container">
			<div className="row">
				<div className="col-md-4 col-sm-4">
					<div className="footer-top-inner">
						<h2><a href="index.html">Minivet System</a></h2>
						<p><img src="./assets/images/iso-certified.png" alt="no img" style={{float:"left", margin:"0 15px 10px 0", width:"100px"}}/> Minivet System, a leading web design and web development company offers you a broad sphere of cost-efficient services. We also offer graphic design, logo & corporate stationary design, mobile website & application development and search engine optimization services.</p>
					<div className="fb-page fb_iframe_widget" data-href="https://www.facebook.com/minivetsystem" data-width="290" data-height="250" data-small-header="true" data-adapt-container-width="true" data-show-cover="true" data-show-facepile="true" fb-xfbml-state="rendered" fb-iframe-plugin-query="adapt_container_width=true&amp;app_id=&amp;container_width=263&amp;height=250&amp;href=https%3A%2F%2Fwww.facebook.com%2Fminivetsystem&amp;locale=en_US&amp;sdk=joey&amp;show_facepile=true&amp;small_header=true&amp;width=290"><span style={{verticalAlign: "bottom", width: "263px", height: "70px"}}><iframe name="f39959af3b935aa" data-testid="fb:page Facebook Social Plugin" title="fb:page Facebook Social Plugin" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" style={{border: "medium none", visibility: "visible", width: "263px", height: "70px"}} src="https://web.facebook.com/v2.5/plugins/page.php?adapt_container_width=true&amp;app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df12dcb5721da0f4%26domain%3Dminivetsystem.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fminivetsystem.com%252Ff1d72fd881c3a92%26relation%3Dparent.parent&amp;container_width=263&amp;height=250&amp;href=https%3A%2F%2Fwww.facebook.com%2Fminivetsystem&amp;locale=en_US&amp;sdk=joey&amp;show_facepile=true&amp;small_header=true&amp;width=290" className="" width="290px" height="250px" frameborder="0"></iframe></span>
						</div>
					</div>
				</div>
				<div className="col-md-3 col-sm-4">
					<div className="footer-top-inner">
						<h4>Quick Links</h4>
						<ul className="footer-menu">
							<li><Link  to="main"
              spy={true}
              // smooth={true}
              offset={-150}
              duration={700}><KeyboardDoubleArrowRightIcon sx={{ mr: "10px", fontSize: 17 }} /> Home</Link></li>
							<li><Link to="home"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={700}><KeyboardDoubleArrowRightIcon sx={{ mr: "10px", fontSize: 17 }} />Who We Are</Link></li>
							<li><NavLink to="/contact"><KeyboardDoubleArrowRightIcon sx={{ mr: "10px", fontSize: 17 }} />Contact Us</NavLink></li>
							<li><Link to="service"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={700}><KeyboardDoubleArrowRightIcon sx={{ mr: "10px", fontSize: 17 }} />Services</Link></li>
							<li><Link to="tech"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={700}><KeyboardDoubleArrowRightIcon sx={{ mr: "10px", fontSize: 17 }} />Technology We Use</Link></li>
							<li><NavLink to="/career"><KeyboardDoubleArrowRightIcon sx={{ mr: "10px", fontSize: 17 }} />Career</NavLink></li>
							<li><NavLink to="/projectEstimate"><KeyboardDoubleArrowRightIcon sx={{ mr: "10px", fontSize: 17 }} />Get A Quote</NavLink></li>
						</ul>
						<h3>Get in touch!</h3>
						<div className="social-icon">			
							<a href="https://www.facebook.com/minivetsystem" style={{background:"#3f589b"}} target="_blank" rel="noopener noreferrer"><FaFacebookF/></a> 
							<a href="https://twitter.com/minivetsystem" style={{background:"#1e9ff3"}} target="_blank" rel="noopener noreferrer"><FaTwitter/></a> 
							<a href="https://github.com/minivetsystem" style={{background:"#de4d3a"}} target="_blank" rel="noopener noreferrer"><FaGithub/></a> 
							<a href="https://www.linkedin.com/company/minivetsystem" style={{background:"#0376b5"}} target="_blank" rel="noopener noreferrer"><FaLinkedinIn/></a>										
						</div>
					</div>
				</div>
				<div className="col-md-5 col-sm-4">
					<div className="footer-top-inner">
						<h4>Contact Information</h4>
						<div className="contact-info">
							<p className="mar5"><FaMapMarkerAlt/> <strong>Address: </strong></p>
							<p>Mani Casadona IT Building <br/> UNIT No: 12ES4, 12th Floor, East Tower <br/> Plot #2 F/4, Action Area #2 F, New Town, Rajarhat <br/> Kolkata-700156, WEST BENGAL, INDIA.</p>
							<p className="mar5"><strong><AiOutlineMail/> Email Address: </strong></p>
							<p><a href="mailto:info@minivetsystem.com">info@minivetsystem.com</a></p>
							<p className="mar5"><strong><IoIosCall/> Phone Number: </strong></p>
							<p className="font26"><a href="tel:033-4073-5131">033-4073-5131</a></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="footer-bot">
		<div className="container">
			<div className="row">
				<div className="col-sm-6">
					<span>© Copyright 2023, All Right Reserved.</span>
				</div>
				<div className="col-sm-6">
					<div className="footer-bot-links">
						<a href="#">Privacy Policy</a>
						<NavLink to="/termsAndConditions">Terms &amp; Conditions</NavLink>
					</div>
				</div>
			</div>
		</div>
	</div>
	<span id="back-to-top"  className="show"  onClick={scrollToTop}><img src="./assets/images/go-up.png" alt="no img"/></span>
	{/* {showButton && (<span id="back-to-top"  className="show"  onClick={scrollToTop}><img src="./assets/images/go-up.png" alt="no img"/></span>)} */}
</footer>
    
     );
}

export default Footer;