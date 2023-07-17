import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState } from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

// import {Link} from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [activePage, setActivePage] = useState("hero");
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  const handleMouseEnter = () => {

    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const scrollToSection = (sectionId, offset) => {
    const section = document.getElementById(sectionId);
    setActivePage(sectionId);
    if (section) {
      const topOffset = section.offsetTop - offset;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  const handleLinkClick = (sectionId) => {
    navigate("/");
    setActivePage(sectionId);
  };

  const handleCareerLink = (sectionId) => {
    navigate(`/${sectionId}`);
    setActivePage(sectionId);
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
              to="hero"
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
                <li className={activePage === "hero" ? "active" : ""}>
                  {" "}
                  <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={700}
                    onClick={() => handleLinkClick("hero")}
                  >
                    About
                  </Link>
                </li>

                <li className={activePage === "service" ? "active" : ""}>
                  {" "}
                  <Link
                    activeClass="active"
                    to="service"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={700}
                    onClick={() => handleLinkClick("service")}
                  >
                    Service
                  </Link>
                </li>

                <li className={activePage === "tech" ? "active" : ""}>
                  {" "}
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
                className={activePage === "tech" ? "active" : ""}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                 <Link> Products <span class="caret"></span></Link>
                 { isHovered &&  (<ul className="dropdown-menu">
                    <li>
                      <a href="#">School Management System</a>
                    </li>
                    <li>
                      <a href="#">Event Management Systems</a>
                    </li>
                    <li>
                      <a href="#">Hospital Management System</a>
                    </li>
                  </ul>)}
                </li> 
                 

             
                <li>
                  <NavLink
                    to="/contact"
                    className={activePage === "career" ? "active" : ""}
                    onClick={() => handleCareerLink("contact")}
                  >
                    Contact Us
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/career"
                    className={activePage === "career" ? "active" : ""}
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
