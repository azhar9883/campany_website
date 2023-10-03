import {FaGithub, FaFacebookF, FaTwitter, FaLinkedinIn, FaPhoneAlt} from "react-icons/fa"

import {MdOutlineEmail,MdLocationOn} from "react-icons/md";
import {BiTimeFive} from "react-icons/bi";


function TopBar() {
 

  return (
    <>
    	<div className="header-top">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<ul>
							<li><MdLocationOn /> New Town, Rajarhat, Kolkata-700156 </li>
							<li><BiTimeFive/> 10.00 am - 07.30 pm</li>
						</ul>
					</div>
					<div className="col-lg-6">
						<div className="header-top-right">
							<ul>
								<li><a href="tel:033-4073-5131"><FaPhoneAlt style={{fontSize: "10px",
    marginBottom: "2px"}}/> 033-4073-5131</a></li>
								<li><a href="mailto:info@minivetsystem.com"><MdOutlineEmail /> info@minivetsystem.com</a></li>
								<li className="social-icon">									
									<a href="https://www.facebook.com/minivetsystem" style={{color:"#3f589b"}} target="_blank" rel="noopener noreferrer"><FaFacebookF /></a> 
									<a href="https://twitter.com/minivetsystem" style={{color:"#1e9ff3"}} target="_blank" rel="noopener noreferrer"><FaTwitter /></a> 
									<a href="https://github.com/minivetsystem" style={{color:"#de4d3a"}} target="_blank" rel="noopener noreferrer"><FaGithub /></a> 
									<a href="https://www.linkedin.com/company/minivetsystem" style={{color:"#0376b5"}} target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>									
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
    </>
  );
}

export default TopBar;
