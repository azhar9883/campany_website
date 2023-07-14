// import { FaBeer } from 'react-icons/fa';

import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";



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
									<a href="#" style={{color:"#3f589b"}}><FaFacebookF /></a> 
									<a href="#" style={{color:"#1e9ff3"}}><FaTwitter /></a> 
									<a href="#" style={{color:"#de4d3a"}}><FaGithub /></a> 
									<a href="#" style={{color:"#0376b5"}}><FaLinkedinIn /></a>									
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
    </>
    // <div className="header-top">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-lg-6">
    //         <ul>
    //           <li>
    //             <LocationOnIcon sx={{ mr: "10px", fontSize: 17 }} /> New Town,
    //             Rajarhat, Kolkata-700156{" "}
    //           </li>
    //           <li>
    //             <AccessTimeIcon sx={{ mr: "10px", fontSize: 17 }} />
    //             10.00 am - 07.30 pm
    //           </li>
    //         </ul>
    //       </div>

    //       <div class="col-lg-6">
    //         <div class="header-top-right">
    //           <ul>
    //             <li>
    //               <a href="tel:033-4073-5131">
    //                 <PhoneIcon sx={{ mr: "10px", fontSize: 17 }} />{" "}
    //                 033-4073-5131
    //               </a>
    //             </li>
    //             <li>
    //               <a href="mailto:info@minivetsystem.com">
    //                 <MailOutlineIcon sx={{ mr: "10px", fontSize: 17 }} />{" "}
    //                 info@minivetsystem.com
    //               </a>
    //             </li>
    //             <li className="social-icon">
    //               <a
    //                 href="https://www.facebook.com/"
    //                 style={{ color: "#3f589b" }}
    //               >
    //                 {" "}
    //                 <FontAwesomeIcon icon={faFacebook} />{" "}
    //               </a>
    //               <a href="https://twitter.com/" style={{ color: "#1e9ff3" }}>
    //                 <FontAwesomeIcon icon={faTwitter} />{" "}
    //               </a>
    //               <a
    //                 href="https://support.google.com/"
    //                 style={{ color: "#de4d3a" }}
    //               >
    //                 <FontAwesomeIcon icon={faGooglePlusG} />{" "}
    //               </a>
    //               <a
    //                 href="https://in.linkedin.com/"
    //                 style={{ color: "#0376b5" }}
    //               >
    //                 {" "}
    //                 <FontAwesomeIcon icon={faLinkedin} />
    //               </a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default TopBar;
