import React, { useState, useEffect } from 'react';
import NavBar from "../components/navbar/NavBar";
import TopBar from "../components/topbar/TopBar.js";
import Hero from "../components/hero/Hero";
import Home from "../components/home/Home";
import ContactUs from "../components/contact-us/ContactUs";
import Service from "../components/service/Service";
import Technology from "../components/technology/Technology";
import Footer from "../components/footer/Footer";
// import { Link, Element } from 'react-scroll';
import { useLocation } from 'react-router-dom';


function HomePage() {


  const location = useLocation();

  useEffect(() => {
    const element = document.getElementById(location.pathname.substring(1));

    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  }, [location]);



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
    
    <section  className={`topbar ${isTopBarVisible ? 'non-sticky' : 'sticky'}`}  >
    <TopBar/>
    <NavBar/>
    </section >
    <div className="main" id="main">
    <section id="hero" style={{marginBottom:"100px"}}>
    <Hero/>
    </section>
    <section id="home">
       <Home/>
    </section> 
    {/* <section id="contact">
      <ContactUs/>
    </section> */}
    <section id="service">
      <Service/>
    </section>
    <section id="tech">
      <Technology/>
    </section>
    </div>
    <Footer/>
    </> 
    );
}

export default HomePage;