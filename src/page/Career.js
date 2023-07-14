import React, { useState, useEffect } from 'react';
import ContactUs from "../components/contact-us/ContactUs";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";
import TopBar from "../components/topbar/TopBar";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import {FaCircleNotch} from "react-icons/fa";
import {FiCheckSquare} from "react-icons/fi";
import {AiFillHome} from "react-icons/ai"
import VerticalTabs from "../components/tab/VerticalTabs";
import Accordion from "../components/accordion/Accordion";

import axios from "axios";

function Career() {
	const [dataFromChild, setDataFromChild] = useState('');

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		position: "",
		message: "",
		document: ""
	})


	const handleChange = (e) =>{
		setFormData(prevFormData => ({
			...prevFormData,
			position: dataFromChild
		  }));
	
		setFormData({...formData, [e.target.name]: e.target.value})
	}



	useEffect(() => {
		setFormData(prevFormData => ({
		  ...prevFormData,
		  position: dataFromChild
		}));
	  }, [dataFromChild]);
	  
	
	  

	const handleSubmit = (e) =>{
		console.log(formData)
		e.preventDefault();

		axios.post("https://www.minivetsystem.com/new_website/public/api/career-mail", formData)
		.then((res) => {
			console.log("Contract submitted successfully!", res.data);

}).catch((err)=>{
	console.log("Error submitting contract", err)
})	}

	const handleDataFromChild = (data) => {
		console.log(data)
		setDataFromChild(data);
	  };

	const [isTopBarVisible, setIsTopBarVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position to determine whether to hide or show the topbar
      const isScrolled = window.scrollY > 0;
      setIsTopBarVisible(!isScrolled);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return ( 
    <>

   <section className={`topbar ${isTopBarVisible ? 'non-sticky' : 'sticky'}`} id="hero">
    <TopBar/>
    <NavBar/>
    </section>

   
      <div className="inner-page-banner" style={{marginBottom:"100px"}}>
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<h2>Career</h2>
					<div className="breadcrumb-sec">
						<ul>
							<li><a href="/home"><AiFillHome/> Home</a></li>
							<li> Career</li>
						</ul>
					</div>
				</div>
			</div>
		</div>	
	  </div>


	
	<section className="main" id="main">
		<div className="cms-block same-gap">
			<div className="container">
				<div className="row">
					<div className="col-md-5">
						<div className="career-text">
							<h3 className="heading"><span> We are </span> Hiring</h3>
							<p>At Minivet System, we encourage professionalism mixed with fun and creativity to enhance and elevate an individual's career growth. We enjoy our work and are passionate about it. We initiate our own ideas and we nurture our own dreams. Everyone at Minivet System shares a common vision - of building great web applications for a global spectator that enable users worldwide to live in the Internet.</p>
							<h3 className="heading"><span>Key to </span> Join Us</h3>
							<ul>
								<li><FaCircleNotch /> Unlimited opportunity of working with different technologies</li>
								<li><FaCircleNotch /> Enjoy a culture of openness with strong values</li>
								<li><FaCircleNotch /> We encourge to learn and keep yourself upgraded</li>
								<li><FaCircleNotch /> Grow in an atmosphere of excellence and team spirit</li>
								<li><FaCircleNotch /> Best practices of HR policies</li>
							</ul>
						</div>
					</div>
					<div className="col-md-7">
						<div className="career-bg">
							<div className="carrer-content">
								<img src="assets/images/career-bg3.jpg" alt="no img"/>
								<marquee direction="right" scrollamount="2" style={{display:"none"}}> <strong> Urgent Opening </strong> <br/> Full Stack .Net Developer <br/> & Laravel with Vue Js Developer</marquee>
								<div className="carrer-bg-inner">
									<p><img src="assets/images/quote-icon.png" alt="no img"/></p>
									<h3>Urgent Opening</h3>
									<p >Full Stack .Net Developer </p> 
									<span className="big-font"> &  </span>
									<p> Laravel with Vue Js Developer</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>	
		</div>


		
		<div className="block7 same-gap">
			<div className="container">
			<VerticalTabs  sendDataToParent={handleDataFromChild}/>
			<Accordion /> 
				
			</div>
		</div>
		
		<div class="block5" id="sec2">
			<div class="container">
				<div class="row">
					<div class="col-sm-12">
						<div class="form-sec">
							<div class="pos3"><img src="./assets/images/img7.png" alt="no img"/></div>
							<h2>Apply For A Job</h2>
							<form class="form-horizontal" onSubmit={handleSubmit}>
							  <div class="form-group mar15">
								<div class="col-sm-4">
								  <input type="text" class="form-control"  placeholder="Full Name"
								  id="name"
								  name='name'
								  value={formData.name}
								  onChange={handleChange}/>
							
								</div>
								<div className="col-sm-4">
								  <input type="email" className="form-control" placeholder="Email"
								  id="email"
								    name='email'
									value={formData.email}
									onChange={handleChange}/>
								</div>
								<div class="col-sm-4">
								  <select  className="form-control" value={formData.position} 
									onChange={handleChange}>
										<option>Select Your Position</option>
										<option>Senior .Net developer</option>
										<option>Full Stack Developer</option>
										<option>Senior PHP Developer</option>
										<option>Junior PHP Developer</option>
										<option>Drupal Developer</option>
										<option>Node JS Developer</option>
										<option>Senior Angular Developer</option>
										<option>Senior Moodle Developer</option>
										<option>Core Java Developer</option>
										<option>Hybrid Mobile App Developers</option>
										<option>IOS Developers</option>
										<option>Android Developers</option>
										<option>Online Bidder</option>
										<option>Business Development Executive</option>
										<option>HR Executive</option>
										<option>SEO Executive</option>
										<option>Python Developer</option>
	    						    </select>
								</div>
							  </div>
							  <div className="form-group mar15">
								<div className="col-sm-12">
								  <textarea className="form-control" placeholder="Message"  
								  id='message' name='message'
									value={formData.message}
									onChange={handleChange}></textarea>
								</div>
							  </div>
							  <div className="form-group mar15">
								<div className="col-sm-12">
									<label>Upload your CV</label>
									<input type="file" className="form-control"  id='document' name='document'
									value={formData.document}
									onChange={handleChange}/>
								</div>
							  </div>
							  <div className="form-group">
								<div className="col-sm-12">
								<button type="submit" className="button2">Submit <span><ArrowRightAltIcon sx={{ mt: "5px", fontSize: 17 }} /></span></button>
								</div>
							  </div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	
	</section>

    <Footer/> 
    </> 
    );
}

export default Career;