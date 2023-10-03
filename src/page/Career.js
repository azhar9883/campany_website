import React, { useState, useRef, useEffect, useCallback } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { FaCircleNotch } from "react-icons/fa";
import VerticalTabs from "../components/tab/VerticalTabs";
import Accordion from "../components/accordion/Accordion";
import data from "../data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Header from "../components/header/Header";
import FooterTwo from "../components/footerTwo/FooterTwo";
import './career.css'
function Career() {
  const pageName = "career"
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [option, setOption] = useState("");
  const [message, setMessage] = useState("");
  const [selectOption, setSelectOption] = useState("Select");

  const [loading, setLoading] = useState(false);

  const validateSchema = Yup.object().shape({
    name: Yup.string().required("This field is required"),
    lastName: Yup.string().required("This field is required"),
    email: Yup.string().email("Please enter a valid email").required("This field is required"),
    message: Yup.string().required("This field is required"),
    item: Yup.string().required("This field is required"),
    image: Yup.string().required("This field is required"),
    phone: Yup.string().required("This field is required").min(10, ("must be 10 number"))
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
      item: "",
      image: ""

    },
    validationSchema: validateSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        resetForm();
      }, 1000 * 2);
    },
  });

  const fileInputRef = useRef(null);

  let formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("message", message);
  formData.append("position", selectOption);
  formData.append("type", pageName)

  const onFileUpload = (e) => {
    console.log(e.target.files[0]);
    if (e.target && e.target.files[0]) {
      formData.append("document", e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    const id = toast.loading("Please wait...")
    e.preventDefault();
    axios
      .post(
        "https://www.minivetsystem.com/madmin/api/career-mail",
        formData
      )
      .then((res) => {
        toast.dismiss(id);
        if (res.data.status === true) {
          toast.success(res.data.message, {
            position: toast.POSITION.TOP_RIGHT,
          });
        } else if (res.data.status === false) {
          if (res.data.errors.position) {
            toast.error(res.data.errors.position[0], {
              position: toast.POSITION.TOP_RIGHT,
            });
          } else if (res.data.errors.email) {
            toast.error(res.data.errors.email[0], {
              position: toast.POSITION.TOP_RIGHT,
            });
          }
        }

      })
      .catch((err) => {

        toast.error("Check Your Network", {
          position: toast.POSITION.TOP_RIGHT,
        });
      });

    setName("");
    setEmail("");
    setMessage("");
    setOption("");
    fileInputRef.current.value = null;
  };

  const handleDataFromChild = (data) => {
    setOption(data);
  };

  const handleSelect = useCallback((e) => {
    setSelectOption(e.target.value);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setSelectOption(option)
  }, [option])

  return (
    <>
      <Header />

      <section className="main" id="main">
        <div className="cms-block same-gap">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="career-text">
                  <h3 className="heading">
                    <span> We are </span> Hiring
                  </h3>
                  <p>
                    At Minivet System, we encourage professionalism mixed with
                    fun and creativity to enhance and elevate an individual's
                    career growth. We enjoy our work and are passionate about
                    it. We initiate our own ideas and we nurture our own dreams.
                    Everyone at Minivet System shares a common vision - of
                    building great web applications for a global spectator that
                    enable users worldwide to live in the Internet.
                  </p>
                  <h3 className="heading">
                    <span>Key to </span> Join Us
                  </h3>
                  <ul>
                    <li>
                      <FaCircleNotch /> Unlimited opportunity of working with
                      different technologies
                    </li>
                    <li>
                      <FaCircleNotch /> Enjoy a culture of openness with strong
                      values
                    </li>
                    <li>
                      <FaCircleNotch /> We encourge to learn and keep yourself
                      upgraded
                    </li>
                    <li>
                      <FaCircleNotch /> Grow in an atmosphere of excellence and
                      team spirit
                    </li>
                    <li>
                      <FaCircleNotch /> Best practices of HR policies
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-7">
                <div className="career-bg">
                  <div className="carrer-content">
                    <img src="assets/images/career-bg3.jpg" alt="no img" />
                    <marquee
                      direction="right"
                      scrollamount="2"
                      style={{ display: "none" }}
                    >

                      <strong> Urgent Opening </strong> <br /> Full Stack .Net
                      Developer <br /> & Laravel with Vue Js Developer
                    </marquee>
                    <div className="carrer-bg-inner">
                      <p>
                        <img src="assets/images/quote-icon.png" alt="no img" />
                      </p>
                      <h3>Urgent Opening</h3>
                      <p>Full Stack .Net Developer </p>
                      <span className="big-font"> & </span>
                      <p> Laravel with Vue Js Developer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="block7 same-gap">
          <div className="container">
            <VerticalTabs sendDataToParent={handleDataFromChild} />

            {/* verticalTabs start  */}

            {/* verticalTabs end */}

            <Accordion sendDataToAco={handleDataFromChild} />
          </div>
        </div>

        <div className="block5" id="sec2">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="form-sec">
                  <div className="pos4 pos4-career">
                    <img src="./assets/images/img7.png" alt="no img" />
                  </div>
                  <h2>Apply For A Job</h2>

                  <form className="form-horizontal" onSubmit={formik.handleSubmit}>
                    <div className="form-group mar15">
                      <div className="col-sm-4">
                        <input
                        style={{position:"relative"}}
                          type="text"
                          className="form-control"
                          placeholder="Full Name"
                          id="name"
                          name="name"
                          onChange={formik.handleChange}
                          value={formik.values.name}

                        />
                        <p style={{ color: "red" ,margin:"0px",position:"absolute" }}>{formik.errors.name ? formik.errors.name : ""}</p>
                      </div>
                      <div className="col-sm-4">
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
                        <p style={{ color: "red",margin:"0px",position:"absolute" }}>{formik.errors.email ? formik.errors.email : ""}</p>
                      </div>
                      <div className="col-sm-4">
                        <select
                        style={{position:"relative"}}
                          className="form-control"
                          name="option"
                          value={formik.values.selectOption}
                          onChange={formik.handleChange}

                        >
                          {data.map((item, index) => (
                            <option key={item.id} value={formik.values.item}>
                              {item.label}
                            </option>
                          ))}
                        </select>
                        <p style={{ color: "red",margin:"0px",position:"absolute" }}>{formik.errors.item ? formik.errors.item : ""}</p>
                      </div>
                    </div>
                    <div className="form-group mar15">
                      <div className="col-sm-12">
                        <textarea
                        style={{position:"relative",marginTop:"30px"}}
                          className="form-control"
                          placeholder="Message"
                          id="message"
                          name="message"
                          onChange={formik.handleChange}
                          value={formik.values.message}
                        >
                        </textarea>
                        <p style={{ color: "red",margin:"0px",position:"absolute" }}>{formik.errors.message ? formik.errors.message : ""}</p>
                      </div>
                    </div>
                    <div className="form-group mar15" style={{marginBottom:"0px",marginTop:"50px"}}>
                      <div className="col-sm-12" >
                        <div className="button-wrap" >
                        <label className="new-button" for="upload"> Upload CV </label>
                        <input id="upload" type="file"
                        style={{position:"relative"}}
                        value={formik.values.image}
                        name="document"
                        ref={fileInputRef}
                        onChange={formik.handleChange}
                        />
                        <div>
                        <p style={{ color: "red", marginTop:"-52px" }}>{formik.errors.image ? formik.errors.image : ""}</p>
                        </div>
                      
                        </div>
                     
                      </div>
                    </div>
                    {/* <ReCAPTCHA

                      sitekey="6Le0r6UnAAAAAMI-H1R4vDStNZn1vFY2H-K6soyK"
                    /> */}
                    <div className="form-group">
                      <div className="col-sm-12" style={{marginTop:"23px"}}>
                        <button type="submit" className="button2" >
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
            </div>
          </div>
        </div>
      </section>

      <FooterTwo />

      <ToastContainer />
    </>
  );
}

export default Career;
