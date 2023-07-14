import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";
import TopBar from "../components/topbar/TopBar";
import React, { useState, useEffect } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import axios from "axios";

function ContactUs() {
  const [isTopBarVisible, setIsTopBarVisible] = useState(true);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
	console.log(formData)
    e.preventDefault();

    // Make an API request using Axios
    axios
      .post("https://www.minivetsystem.com/new_website/public/api/contact-email", formData)
      .then((response) => {
        console.log("Contract submitted successfully!", response.data);
        // Perform any additional actions on successful submission
      })
      .catch((error) => {
        console.error("Error submitting contract:", error);
        // Handle error scenarios
      });
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position to determine whether to hide or show the topbar
      const isScrolled = window.scrollY > 0;
      setIsTopBarVisible(!isScrolled);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <section
        className={`topbar ${isTopBarVisible ? "non-sticky" : "sticky"}`}
        id="hero"
      >
        <TopBar />
        <NavBar />
      </section>
      <div
        class="inner-page-banner contact-bg"
        style={{ marginBottom: "100px" }}
      >
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2>Contact Us</h2>
              <div class="breadcrumb-sec">
                <ul>
                  <li>
                    <a href="index.html">
                      <i class="fa fa-home" aria-hidden="true"></i> Home
                    </a>
                  </li>
                  <li>/ Contact Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="main" id="main">
        <div class="cms-block same-gap">
          <div class="container">
            <div class="row">
              <div class="col-sm-7">
                <div class="contact-us form-sec">
                  <h2>Get in Touch</h2>
                  <p>
                    Write us to discover how we can help to achieve your
                    business objectives by our cutting edge technologies &
                    dedications!
                  </p>
                  <form class="form-horizontal" onSubmit={handleSubmit}>
                    <div class="form-group mar15">
                      <div class="col-sm-6">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="First name"
                          id="first_name"
                          name="first_name"
                          value={formData.first_name}
                          onChange={handleChange}
                        />
                      </div>
                      <div class="col-sm-6">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Last Name"
						  id="last_name"
						  name="last_name"
						  value={formData.last_name}
						  onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div class="form-group mar15">
                      <div class="col-sm-6">
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Email"
						  id="email"
						  name="email"
						  value={formData.email}
						  onChange={handleChange}
                        />
                      </div>
                      <div class="col-sm-6">
                        <input
                          type="tel"
                          class="form-control"
                          placeholder="Phone Number"
						  id="phone"
						  name="phone"
						  value={formData.phone}
						  onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div class="form-group mar15">
                      <div class="col-sm-12">
                        <textarea
                          class="form-control"
                          placeholder="Message"
						  type="text"
						  id="message"
						  name="message"
						  value={formData.message}
						  onChange={handleChange}
                        ></textarea>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="col-sm-12">
                        <button type="submit" class="button2">
                          Submit{" "}
                          <span>
                            <ArrowRightAltIcon
                              sx={{ mt: "5px", fontSize: 17 }}
                            />
                          </span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-sm-5">
                <div class="contact-img">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.8323906545847!2d88.48448066495982!3d22.58537128517631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275a58be620d5%3A0xa66456ba5b883ee6!2sMinivet%20System%20LLP!5e0!3m2!1sen!2sin!4v1689146851271!5m2!1sen!2sin"
                    style={{ border: "0" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ContactUs;
