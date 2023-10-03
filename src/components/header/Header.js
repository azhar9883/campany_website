import React, { useState, useEffect } from "react";
import NavBar from "../navbar/NavBar";
import TopBar from "../topbar/TopBar";

function Header() {

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
        <TopBar />
        <NavBar />
      </section>
    </>);
}

export default Header;