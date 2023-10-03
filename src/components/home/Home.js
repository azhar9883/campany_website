import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Home() {
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      const offset = elementRef.current.getBoundingClientRect().top;

    }
  }, []);

  return (
    <>
      <div className="block1 same-gap" ref={elementRef}>
        <div className="container" id="sec1">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-block same-gap">
                <h2 className="heading">
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
          <div className="row">
            <div className="col-sm-4">
              <div className="block1-inner">
                <div className="img-holder">
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
                  {/* <a href="#" className="more">
                    More{" "}
                    <span>
                      <ArrowRightAltIcon sx={{ mt: "10px", fontSize: 17 }} />
                    </span>
                  </a> */}
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="block1-inner">
                <div className="img-holder">
                  <img src="assets/images/img2.jpg" alt="no img" />
                </div>
                <h3>We know the business</h3>
                <p>
                  We aim to complement strategies and solution with our
                  outstanding, devoted and round the clock support service. With
                  an aspiration to integrate our ingenious expertise to device
                  unique attributes, we desire to offer clients an identity in
                  the target market. Our approach is focused to attain sustained visibility and success for our clients.
                </p>
                <p>
                  {/* <a href="#" className="more">
                    More{" "}
                    <span>
                      <ArrowRightAltIcon sx={{ mt: "10px", fontSize: 17 }} />
                    </span>
                  </a> */}
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="block1-inner">
                <div className="img-holder">
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

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="block-design">
        <div className="container">
          <div className="row">
            <div className="block-design-inner clearfix">
              <div className="col-sm-4">
                <LazyLoadImage
                key={1}
                src={`assets/images/video.gif`}
                alt={`Image Alt-{assets/images/video.gif}`}
                className="img-lazy"
                width={700} height={500}
              />
              </div>
              <div className="col-sm-8">
                <div className="border-left">
                  <h2>A Showcase of Innovative Designs</h2>
                  <p>Our design portfolio showcases a diverse collection of creative projects that highlight our expertise and passion for design. From graphic design and branding to web, app and product design, each piece in our portfolio reflects a unique blend of innovation and attention to detail. Through our work, we aim to communicate compelling stories, evoke emotions, and deliver exceptional user experiences.</p>
                  <div className="design-icon">
                    <div className="row">
                      <div className="col-sm-6 col-md-3 col-xs-6">
                        <div className="bg-white">
                          <img src="assets/images/d1.png" alt="no img" />
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3 col-xs-6">
                        <div className="bg-white">
                          <img src="assets/images/d2.png" alt="no img" />
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3 col-xs-6">
                        <div className="bg-white">
                          <img src="assets/images/d3.png" alt="no img" />
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3 col-xs-6">
                        <div className="bg-white">
                          <img src="assets/images/d4.png" alt="no img" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <a className="button2">our design portfolio <span><ArrowRightAltIcon sx={{ mt: "10px", fontSize: 17 }} /></span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="block2 same-gap">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <img src="assets/images/step-banner.png" alt="no img" />
              <div className="text-center">
                {/* <a href="development-process.html" className="button2">development process<span><i className="fa fa-long-arrow-right" aria-hidden="true"></i></span></a> */}
                {/* <button type="submit" className="button2">
                  development process
                  <span>
                    <ArrowRightAltIcon
                      sx={{ mt: "5px", fontSize: 17 }}
                    />
                  </span>
                </button> */}
                <Link to="/developmentProcess" className="button2">development process <span><ArrowRightAltIcon sx={{ mt: "10px", fontSize: 17 }} /></span></Link>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="block3">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="video-sec">
                <img src="assets/images/img5.jpg" alt="no img" />
              </div>
            </div>
            <div className="col-sm-6">
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
              <a href="#" className="button2">
                Full Story
                <span>
                  <ArrowRightAltIcon sx={{ mt: "10px", fontSize: 17 }} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="block4 same-gap">
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
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
            <div className="col-sm-4">
              <div className="pos1">
                <img src="assets/images/img4.png" alt="no img" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="block3">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
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
            <div className="col-sm-6">
              <div className="pos2">
                <img src="assets/images/img6.jpg" alt="no img" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Home;
