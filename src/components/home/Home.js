import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import React, { useRef, useEffect } from "react";
// import { motion } from "framer-motion"

function Home() {
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      const offset = elementRef.current.getBoundingClientRect().top;
      // elementRef.current.offsetTop = -100;
      console.log(offset);
    }
  }, []);

  return (
    <>
      <div class="block1 same-gap" ref={elementRef}>
        <div class="container" id="sec1">
          <div class="row">
            <div class="col-md-12">
              <div class="heading-block same-gap">
                <h2 class="heading">
                  <span>Welcome to </span> minivet system
                </h2>
                <p>
                  Minivet System, a leading web design and web development
                  company offers you a broad sphere of cost-efficient services.
                  We also offer graphic design, logo & corporate stationary
                  design, mobile website & application development and search
                  engine optimization services.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4">
              <div class="block1-inner">
                <div class="img-holder">
                  <img src="assets/images/img1.jpg" alt="no img" />
                </div>
                <h3>We are professional</h3>
                <p>
                  We ensure our customers online success by providing web
                  solution that includes the most powerful tools in the realm of
                  web development and Internet marketing. We not only fulfil the
                  needs of our clients, but also try to exceed their
                  expectations. To attain our objective we formulate proficient
                  as well as result oriented web branding and digital media
                  solutions.
                </p>
                <p>
                  <a href="#" class="more">
                    More{" "}
                    <span>
                      <ArrowRightAltIcon sx={{ mt: "10px", fontSize: 17 }} />
                    </span>
                  </a>
                </p>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="block1-inner">
                <div class="img-holder">
                  <img src="assets/images/img2.jpg" alt="no img" />
                </div>
                <h3>We know the business</h3>
                <p>
                  We aim to complement strategies and solution with our
                  outstanding, devoted and round the clock support service. With
                  an aspiration to integrate our ingenious expertise to device
                  unique attributes, we desire to offer clients an identity in
                  the target market.
                </p>
                <p>
                  <a href="#" class="more">
                    More{" "}
                    <span>
                      <ArrowRightAltIcon sx={{ mt: "10px", fontSize: 17 }} />
                    </span>
                  </a>
                </p>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="block1-inner">
                <div class="img-holder">
                  <img src="assets/images/img3.jpg" alt="no img" />
                </div>
                <h3>Quality comes first</h3>
                <p>
                  Our approach is focused to attain sustained visibility and
                  success for our clients. Our web development and web design
                  company UK has a mission to improve the business growth of our
                  customers. We strive to deliver market defining high quality
                  solution that creates value and constant competitive advantage
                  for our global clientele.
                </p>
                <p>
                  <a href="#" class="more">
                    More{" "}
                    <span>
                      <ArrowRightAltIcon sx={{ mt: "10px", fontSize: 17 }} />
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="block2 same-gap">
        <div class="container">
          <div class="row">
            <div class="col-sm-8">
              <h2>Everyday is the best day in life</h2>
              <span>
                Minivet System was established with the idea to offer you
                conceptual and functional development for the global business
                community.
              </span>
            </div>
            <div class="col-sm-4">
              <div class="text-right">
                <a href="#" class="button3">
                  Full Story{" "}
                  <span>
                    <ArrowRightAltIcon sx={{ mt: "10px", fontSize: 17 }} />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="block3">
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <div class="video-sec">
                <img src="assets/images/img5.jpg" alt="no img" />
              </div>
            </div>
            <div class="col-sm-6">
              <h3>We make you best</h3>
              <h2>
                We put most imporatnce for your growth and success to your
                business
              </h2>
              <p>
                Minivet System focuses to become a leading web design company.
                With this goal in mind, we move ahead to offer supreme service
                to you, our clients. To know more about our web design services,
                you can communicate with us through e-mail. Our efficient team
                members will get back to you as soon as possible.
              </p>
              <a href="#" class="button2">
                Full Story{" "}
                <span>
                  <ArrowRightAltIcon sx={{ mt: "10px", fontSize: 17 }} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="block4 same-gap">
        <div class="container">
          <div class="row">
            <div class="col-sm-8">
              <h2>Minivet system is the best solution</h2>
              <p>
                <img
                  src="assets/images/iso-certified.png"
                  alt="no img"
                  style={{ float: "left", margin: "0 15px 10px 0" }}
                />{" "}
                Minivet System is a web design company with the aim to offer you
                functional and extraordinary service. Our efforts can give your
                brand an edge over your competitors and increase your viewers’
                engagement.
              </p>
              <p>
                A greatly designed website is certainly the most important
                requisite for the business owners. We completely understand your
                business category and create web design according to your
                requirements.
              </p>
              <p>
                At Minivet System, we craft amazing designs to fulfil your dream
                of having a unique brand recognition and identity. We try to
                gauge your digital goals and develop a customized business
                website. You can approach our web development company London to
                achieve online visibility. We utilize our expertise in custom
                website development for both desktop and mobile based devices.
              </p>
            </div>
            <div class="col-sm-4">
              <div class="pos1">
                <img src="assets/images/img4.png" alt="no img" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="block3">
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <h3>Stay tune with us</h3>
              <h2>We developed the effective way to success</h2>
              <p>
                We have a team of proficient developers, designers, coders,
                search engine optimizers and content writers. Together, we
                strive to assess your requirements and deliver you the most
                effective results. We aim to turn your objectives into reality
                by adopting the best practices in the field. We target to become
                a recognizable entity in the world of engaging web design, web
                development and related services. Thanks to the efforts of our
                employees, our clients earn the maximum with minimum investment.
                With our expertise, we want to share the same platform alongside
                the leading names in the world of web design and development.
              </p>
            </div>
            <div class="col-sm-6">
              <div class="pos2">
                <img src="assets/images/img6.jpg" alt="no img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="banner-block">
        <img class="show" src="./assets/images/ai-banner2.jpg" alt="no img" />
        <img class="hide" src="./assets/images/ai-banner3.jpg" alt="no img" />
        <div class="banner-block-content">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h2>Artificial intelligence</h2>
                <h3>
                  Empowering Minds <span>Transforming the World with AI</span>
                </h3>
                <p>
                  Send mail for more information{" "}
                  <strong>
                    {" "}
                    <i class="fa fa-envelope-o" aria-hidden="true"></i>{" "}
                    info@minivetsystem.com
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
