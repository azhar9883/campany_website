
import React, { useState, useEffect } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import FooterTwo from "../components/footerTwo/FooterTwo";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Header from "../components/header/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from 'react-router-dom';
// import Loader from "../components/loader/Loader";

function ContactUs() {
  const [loading, setLoading] = useState(false);

  const validateSchema = Yup.object().shape({
    firstName: Yup.string().required("This field is required"),
    lastName: Yup.string().required("This field is required"),
    email: Yup.string().email("Please enter a valid email").required("This field is required"),
    message: Yup.string().required("This field is required"),
    phone: Yup.string().required("This field is required").min(10,("must be 10 number"))
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      phone: ""
    },
    validationSchema: validateSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      setFormData({ ...formData,values})
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        resetForm();
      }, 1000 * 2);
    },
  });

  // const[loading, setLoading]= useState(false)



  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();
  const data = location.state;
  // console.log(data);

  const [formData, setFormData] = useState({
    type: data,
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData,});
  };

  const handleSubmit = (e) => {
    // setLoading(true);
    e.preventDefault();
    const id = toast.loading("Please wait...")
    // Make an API request using Axios
    axios
      .post("https://www.minivetsystem.com/madmin/api/contact-email", formData)
      .then((res) => {
        toast.dismiss(id);


        // setLoading(false);
        if (res.data.status === true) {
          toast.success(res.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        } else if (res.data.status === false) {

          toast.error(res.data.errors.email[0], {
            position: toast.POSITION.TOP_RIGHT,
          });
        }

      })
      .catch((error) => {
        console.error("Error submitting contract:", error);
        // setLoading(false);
        // Handle error scenarios
      });


    setFormData({
      type: "contact",
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      message: "",
    })
  };


  return (
    <>
      <Header />
      <section className="main" id="main">
        <div className="cms-block same-gap">
          <div className="container">
            <div className="row">
              <div className="col-sm-7">
                <div className="contact-us form-sec">
                  <h2>Get in Touch </h2>
                  <p>
                    Write us to discover how we can help to achieve your
                    business objectives by our cutting edge technologies &
                    dedications!
                  </p>

                  <form className="form-horizontal" onSubmit={formik.handleSubmit}>
                    <div className="form-group mar15">
                      <div className="col-sm-6">
                        <input
                          style={{position:"relative"}}
                          type="text"
                          className="form-control"
                          placeholder="First name"
                          id="firstName"
                          name="firstName"
                          onChange={formik.handleChange}
                          value={formik.values.firstName}
                         
                        />
                        <p style={{color:"red",margin:"0px",position:"absolute"}}>{formik.errors.firstName ? formik.errors.firstName : ""}</p>
                      </div>
                      <div className="col-sm-6">
                        <input
                        style={{position:"relative"}}
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                          id="lastName"
                          name="lastName"
                          onChange={formik.handleChange}
                          value={formik.values.lastName}
                        />
                        <p style={{color:"red",margin:"0px",position:"absolute"}}>{formik.errors.lastName ? formik.errors.lastName : ""}</p>
                      </div>
                    </div>
                    <div className="form-group mar15">
                      <div className="col-sm-6">
                        <input
                        style={{position:"relative"}}
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          id="email"
                          name="email"
                          onChange={formik.handleChange}
                          value={formik.values.email}
                        />
                        <p style={{color:"red",margin:"0px",position:"absolute"}}>{formik.errors.email ? formik.errors.email : ""}</p>
                      </div>
                      <div className="col-sm-6">
                        <input
                        style={{position:"relative"}}
                          type="tel"
                          className="form-control"
                          placeholder="Phone Number"
                          id="phone"
                          name="phone"
                          onChange={formik.handleChange}
                          value={formik.values.phone}
                        />
                        <p style={{color:"red",margin:"0px",position:"absolute"}}>{formik.errors.phone ? formik.errors.phone : ""}</p>
                      </div>
                    </div>
                    <div className="form-group mar15">
                      <div className="col-sm-12">
                        <textarea
                        style={{position:"relative"}}
                          className="form-control"
                          placeholder="Message"
                          type="text"
                          id="message"
                          name="message"
                          onChange={formik.handleChange}
                          value={formik.values.message}
                        >                  
                        </textarea>
                        <p style={{color:"red",margin:"0px",position:"absolute"}}>{formik.errors.email ? formik.errors.email : ""}</p>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-sm-12">
                        <button type="submit" className="button2">
                          Submit
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
              <div className="col-sm-5">
                <div className="contact-img">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.8323906545847!2d88.48448066495982!3d22.58537128517631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275a58be620d5%3A0xa66456ba5b883ee6!2sMinivet%20System%20LLP!5e0!3m2!1sen!2sin!4v1689146851271!5m2!1sen!2sin"
                    style={{ border: "0" }}
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* {loading ? (<div><Loader/></div>) : (<section className="main" id="main">
        <div className="cms-block same-gap">
          <div className="container">
            <div className="row">
              <div className="col-sm-7">
                <div className="contact-us form-sec">
                  <h2>Get in Touch </h2>
                  <p>
                    Write us to discover how we can help to achieve your
                    business objectives by our cutting edge technologies &
                    dedications!
                  </p>

                  <form className="form-horizontal" onSubmit={handleSubmit}>
                    <div className="form-group mar15">
                      <div className="col-sm-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First name"
                          id="first_name"
                          name="first_name"
                          value={formData.first_name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-sm-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
						  id="last_name"
						  name="last_name"
						  value={formData.last_name}
						  onChange={handleChange}
              required
                        />
                      </div>
                    </div>
                    <div className="form-group mar15">
                      <div className="col-sm-6">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
						  id="email"
						  name="email"
						  value={formData.email}
						  onChange={handleChange}
              required
                        />
                      </div>
                      <div className="col-sm-6">
                        <input
                          type="tel"
                          className="form-control"
                          placeholder="Phone Number"
						  id="phone"
						  name="phone"
						  value={formData.phone}
						  onChange={handleChange}
              required
                        />
                      </div>
                    </div>
                    <div className="form-group mar15">
                      <div className="col-sm-12">
                        <textarea
                          className="form-control"
                          placeholder="Message"
						  type="text"
						  id="message"
						  name="message"
						  value={formData.message}
						  onChange={handleChange}
              required
                        ></textarea>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-sm-12">
                        <button type="submit" className="button2">
                          Submit
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
              <div className="col-sm-5">
                <div className="contact-img">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.8323906545847!2d88.48448066495982!3d22.58537128517631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275a58be620d5%3A0xa66456ba5b883ee6!2sMinivet%20System%20LLP!5e0!3m2!1sen!2sin!4v1689146851271!5m2!1sen!2sin"
                    style={{ border: "0" }}
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>)} */}

      <FooterTwo />
      <ToastContainer />
    </>
  );
}

export default ContactUs;
