import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import React, { useState } from "react";
import axios from "axios";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    // Add other form fields as needed
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div class="block5 same-gap" id="sec2">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="form-sec">
                <div class="pos3">
                  <img src="assets/images/img7.png" alt="no img" />
                </div>
                <h2>Request a call back</h2>
                <p>
                  Write us to discover how we can help to achieve your business
                  objectives by our cutting edge technologies & dedications!
                </p>
                <form class="form-horizontal">
                  <div class="form-group mar15">
                    <div class="col-sm-4">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Name"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div class="col-sm-4">
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
                    <div class="col-sm-4">
                      <input
                        type="tel"
                        class="form-control"
                        placeholder="Phone No"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-sm-12">
                      <textarea
                        class="form-control"
                        placeholder="Subject"
                      ></textarea>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-sm-12">
                      <button type="submit" class="button2">
                        Submit{" "}
                        <span>
                          <ArrowRightAltIcon sx={{ mt: "5px", fontSize: 17 }} />
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
    </>
  );
}

export default ContactUs;
