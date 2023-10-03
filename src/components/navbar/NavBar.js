import React from "react"; import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { NavLink} from "react-router-dom";
import { useLocation } from 'react-router-dom';
import {FaUniversity, FaRegCalendarCheck, FaRegHospital} from 'react-icons/fa'
// import {Link} from "react-router-dom";

function NavBar() {
  let location = useLocation();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [activePage, setActivePage] = useState("");
  const [active, setActive] = useState("")
  const [isHovered, setIsHovered] = useState(false);


useEffect(() => {
const path = location.pathname.substring(1);

console.log(path);
setActive(path)
},[active]);



  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  const handleMouseEnter = () => {

    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const checkHoverStatus = () =>{
    if(!isHovered){
      setIsHovered(true);
    }else{
      setIsHovered(false);
    }
    
  }

  // const scrollToSection = (sectionId, offset) => {
  //   const section = document.getElementById(sectionId);
  //   setActivePage(sectionId);
  //   if (section) {
  //     const topOffset = section.offsetTop - offset;
  //     window.scrollTo({ top: topOffset, behavior: "smooth" });
  //   }
  // };

  const handleLinkClick = (sectionId) => {
  
    
    setActivePage(sectionId);
    navigate("/");
  };
  
  const handleCareerLink = (sectionId) => {
    // console.log(activePage)
  

    // navigate(`/${sectionId}`);

    window.scrollTo({
      top: 0,
      behavior: "auto",
      /* you can also use 'auto' behaviour
		   in place of 'smooth' */
    });

  };
  



  return (
    <>
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button
              aria-controls="navbar"
              aria-expanded="false"
              data-target="#navbar"
              data-toggle="collapse"
              onClick={handleClick}
              className="navbar-toggle collapsed"
              type="button"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link
              to="main"
              spy={true}
              // smooth={true}
              offset={-150}
              duration={700}
              className="navbar-brand logo"
              onClick={() => handleLinkClick("hero")}
            >
              <img
                src="assets/images/logo.png"
                alt="Minivet System"
                title="Minivet System"
              />
            </Link>
          </div>
          <div
            className="navbar-collapse collapse"
            style={{ display: isVisible ? "block" : "none" }}
            id="navbar"
          >
            <nav>
              <ul className="nav navbar-nav">
                <li className={activePage === "home" ? "active" : ""}>
                  {" "}
                  <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={700}
                    onClick={() => handleLinkClick("home")}
                  >
                    Who we are
                  </Link>
                </li>

                <li className={activePage === "service" ? "active" : ""}>
           
                  <Link
                    activeClass="active"
                    to="service"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={700}
                    onClick={() => handleLinkClick("service")}
                  >
                    Services
                  </Link>
                </li>

                <li className={activePage === "tech" ? "active" : ""}>
             
                  <Link
                    activeClass="active"
                    to="tech"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={700}
                    onClick={() => handleLinkClick("tech")}
                  >
                    Technology We Use
                  </Link>
                </li>
               <li
       
                className={isHovered  ? " dropdown open" : " dropdown"}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                onClick={checkHoverStatus}
                >
                 <a > Products <span className="caret"></span></a>
                 { isHovered &&  (<ul className="dropdown-menu ">
                    <li>
                      <a target="_blank" rel="noreferrer" href="https://schoolnewgen.com/"><FaUniversity/> School Management System</a>
                    </li>
                    <li>
                      
                      <a ><FaRegCalendarCheck/> Event Management Systems</a>
                    </li>
                    <li>
                     
                      <a ><FaRegHospital/> Hospital Management System</a>
                    </li>
                    <li><NavLink to="/contact" state={"getAdemo"} className="button1">Get A Demo</NavLink></li>
                  </ul>)}
                </li> 
                 

             
                <li>
                  <NavLink
                  to="/contact"
                  state={"contact"}
                    className={active === "contact" ? "active" : ""}
                    onClick={() => handleCareerLink("contact")}
                  >
                    Contact Us
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/career"
                  
                    className={active === "career" ? "active" : ""}
                    onClick={() => handleCareerLink("career")}
                  >
                    Career
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
