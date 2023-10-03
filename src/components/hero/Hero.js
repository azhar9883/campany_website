import React from "react";
// import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "./Hero.css";
// import config from "../chartBot/config";
// import MessageParser from "../chartBot/MessageParser";
// import ActionProvider from "../chartBot/ActionProvider";
// import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
// import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-scroll";

function Hero() {
  // const [chartBot, setChartBot] = useState(false);
  // const [botIcon, setBotIcon] = useState(true);
  // const [visible, setVisible] = useState(false);

  // const handleChartBotOpen = () => {
  //   setChartBot(true);
  //   setBotIcon(false);
  // };
  // const handleChartBotClose = () => {
  //   setChartBot(false);
  //   setBotIcon(true);
  // };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setVisible(true);
  //   }, 1000);

  //   const handleScroll = () => {
  //     const scrolled = document.documentElement.scrollTop;

  //     setVisible(scrolled < 4000);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     clearTimeout(timer);
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <>
      <Carousel className="slider-padding" autoPlay infiniteLoop>
        <div className="item">
          <img src="assets/images/banner1.jpg" alt="" />

          <div className="banner-content">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-lg-6">
                  <div className="banner-text">
                    <h3>Come to join us</h3>
                    <h2>We help you to grow your business rapidly</h2>
                    <p>
                      Our mission is to craft a well-designed and
                      pocket-friendly web solution to enable aspiring business
                      owners gain online visibility, increase sales and enhance
                      productivity.
                    </p>
                    <Link
                      to="home"
                      spy={true}
                      smooth={true}
                      offset={-150}
                      duration={700}
                      className="button2"
                    >
                      Full Story
                      <span>
                        <ArrowRightAltIcon sx={{ mt: "5px", fontSize: 17 }} />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <img src="assets/images/banner1.jpg" alt="" />

          <div className="banner-content">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-lg-6">
                  <div className="banner-text">
                    <h3>Grow your business</h3>
                    <h2>Don't listen to what they say. Come and see</h2>
                    <p>
                      Our vision is to become the prime performer in providing
                      quality web development related solutions in the
                      competitive global market place.
                    </p>
					<Link
                      to="service"
                      spy={true}
                      smooth={true}
                      offset={-150}
                      duration={700}
                      className="button2"
                    >
                      Our Services
                      <span>
                        <ArrowRightAltIcon sx={{ mt: "5px", fontSize: 17 }} />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="item">
          <img src="assets/images/banner3.jpg" alt="no img" />
          <div className="banner-content">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-lg-6">
                  <div className="banner-text">
                    <h3>What is artificial intelligence (AI)?</h3>
                    <h2>"Intelligence" means the ability to learn </h2>
                    <p>
                      Artificial intelligence is the simulation of human
                      intelligence processes by machines, especially computer
                      systems. Specific applications of AI include expert
                      systems, natural language processing, speech recognition
                      and machine vision.
                    </p>
                    <Link
                      to="aiBanner"
                      spy={true}
                      smooth={true}
                      offset={-200}
                      duration={700}
                      className="button2"
                    >
                      World with ai{" "}
                      <span>
                        <ArrowRightAltIcon sx={{ mt: "5px", fontSize: 17 }} />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
      {/* <div>
        {botIcon && visible && (
          <div onClick={handleChartBotOpen}>
            <div className="botIcon ai-agent"></div>
            <div className="botMessBox ">
              <div className="botMess ai-agent">
                <div className="messOne">
                  Hi! I am Your <span>Virtual Assistant Minivetsystem</span>
                </div>
              </div>
            </div>
          </div>
        )}
        

        {chartBot && (
          <div className="chartBot">
            {" "}
            <AiFillCloseCircle
              className="close-btn"
              onClick={handleChartBotClose}
            />
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            />{" "}
          </div>
        )}
      </div> */}
    </>
  );
}

export default Hero;
