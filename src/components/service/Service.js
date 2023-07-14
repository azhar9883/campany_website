import { Carousel } from "react-responsive-carousel";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import PersonalVideoIcon from "@mui/icons-material/PersonalVideo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faUsers,
  faGears,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import { faAndroid } from "@fortawesome/free-brands-svg-icons";
import { FaShoppingBasket, FaLongArrowAltRight } from "react-icons/fa";
import "./Service.css"
function Service() {
  return (
    <>
    
      <div class="block7" id="sec3">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="text-center">
                <h3>What we do</h3>
                <h2>We provide best services</h2>
              </div>
            </div>
          </div>
          <div class="row pad-top">
            <div class="col-sm-6 col-md-4">
              <div class="services-sec">
                <span>
                  <FontAwesomeIcon icon={faDesktop} />
                </span>
                <h4>Web Application Development</h4>
                <p>Web application development is the creation of application programs that reside on remote servers and are delivered to the user's device over the Internet. A web application (web app) does not need to be downloaded</p>
                <p>
                  <a href="#" class="more">
                    More <FaLongArrowAltRight />
                  </a>
                </p>
              </div>
            </div>
            <div class="col-sm-6 col-md-4">
              <div class="services-sec">
                <span>
                  <FontAwesomeIcon icon={faAndroid} />
                </span>
                <h4>Mobile App Development</h4>
                <p>Mobile application development is the process of creating software applications that run on a mobile device, and a typical mobile application utilizes a network connection to work with remote computing resources</p>
                <p>
                  <a href="#" className="more">
                    More <FaLongArrowAltRight />
                  </a>
                </p>
              </div>
            </div>
            <div class="col-sm-6 col-md-4">
              <div class="services-sec">
                <span>
                  <FontAwesomeIcon icon={faUsers} />
                </span>
                <h4>Dedicated Development Team</h4>
                <p>A dedicated development team is a business model in software development that refers to the long-term collaboration between a client (an outsourcing company) and a service provider (a dedicated development team)</p>
                <p>
                  <a href="#" class="more">
                    More <FaLongArrowAltRight />
                  </a>
                </p>
              </div>
            </div>
            <div class="col-sm-6 col-md-4">
              <div class="services-sec">
                <span>
                  <FontAwesomeIcon icon={faGears} />
                </span>
                <h4>Custom Software Development</h4>
                <p>Custom software development is the process of designing, creating, deploying and maintaining software for a specific set of users, functions or organizations. In contrast to commercial off-the-shelf software (COTS)</p>
                <p>
                  <a href="#" class="more">
                    More <FaLongArrowAltRight />
                  </a>
                </p>
              </div>
            </div>
            <div class="col-sm-6 col-md-4">
              <div class="services-sec">
                <span>
                  <FaShoppingBasket />
                </span>

                <h4>Ecommerce Store Development</h4>
                <p>Ecommerce website development is the process of developing the technical aspects of your ecommerce website — how it functions, accepts payments, behaves in response to user action and appears aesthetically.</p>
                <p>
                  <a href="#" class="more">
                    More <FaLongArrowAltRight />
                  </a>
                </p>
              </div>
            </div>
            <div class="col-sm-6 col-md-4">
              <div class="services-sec">
                <span>
                  <FontAwesomeIcon icon={faWrench} />
                </span>
                <h4>CMS Development Services</h4>
                <p>A content management system allows one to create from scratch, update, and publish information on the online platform. A CMS often stores content in a database and displays it in higher layers based on a collection of templates</p>
                <p>
                  <a href="#" class="more">
                    More <FaLongArrowAltRight />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="block2 same-gap">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class=" logo-set row">
                <Carousel  autoPlay infiniteLoop showArrows={false}>
                  <div>
                    <div class="item col-xs-3">
                      <img src="assets/images/logo2.png" alt="no img" />
                    </div>
                    <div class="item col-xs-3">
                      <img src="assets/images/logo2.png" alt="no img" />
                    </div>
                    <div class="item col-xs-3">
                      <img src="assets/images/logo2.png" alt="no img" />
                    </div>
                    <div class="item col-xs-3">
                      <img src="assets/images/logo2.png" alt="no img" />
                    </div>
                  </div>
                  <div>
                    <div class="item col-xs-3">
                      <img src="assets/images/logo2.png" alt="no img" />
                    </div>
                    <div class="item col-xs-3">
                      <img src="assets/images/logo2.png" alt="no img" />
                    </div>
                    <div class="item col-xs-3">
                      <img src="assets/images/logo2.png" alt="no img" />
                    </div>
                    <div class="item col-xs-3">
                      <img src="assets/images/logo2.png" alt="no img" />
                    </div>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div> */}

<div class="block8 same-gap">
			<div class="container">
				<div class="row">
					<div class="col-sm-4">
						<div class="pos3">
							<img src="assets/images/dd.png" alt="no img"/>
						</div>
					</div>
					<div class="col-sm-8">
						<h2>Hire Your <span>Dedicated Developer</span></h2>
						<p>We have a team of proficient developers, designers, coders, search engine optimizers and content writers. </p>
					</div>
				</div>
			</div>
		</div>
    </>
  );
}

export default Service;
