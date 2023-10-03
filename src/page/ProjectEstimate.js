
import React, { useState, useEffect } from "react";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Header from "../components/header/Header";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FooterTwo from "../components/footerTwo/FooterTwo";

function ProjectEstimate() {

	const [formData, setFormData] = useState({
		type: "estimation",
		name: "",
		email: "",
		phone: "",
		message: "",
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		const id = toast.loading("Please wait...")
		e.preventDefault();
		axios
			.post("https://www.minivetsystem.com/madmin/api/project-estimation-mail", formData)
			.then((res) => {
				toast.dismiss(id);
				if (res.data.status === true) {
					toast.success(res.data.message, {
						position: toast.POSITION.TOP_RIGHT,
					});
				} else if (res.data.status === false) {

					toast.error(res.data.errors.email[0], {
						position: toast.POSITION.TOP_RIGHT,
						theme: "dark",
					});
				}
			
			})
			.catch((error) => {

				console.error("Error submitting contract:", error);
			});
			setFormData({
				type: "estimation",
				name: "",
				email: "",
				phone: "",
				message: "",

			})
	};


	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Header />

			<section className="main" id="main">
				<div className="cms-block same-gap"><div className="container">
					<div className="row">
						<div className="col-sm-12">
							<div className="contact-us form-sec">
								<h2>Request a Project Estimate </h2>
								<p>Please submit your project information. </p>
								<form className="form-horizontal" onSubmit={handleSubmit}>
									<div className="form-group mar15">
										<div className="col-sm-4">
											<input type="text" className="form-control" placeholder="Full Name" id="name"
												name="name"
												value={formData.name}
												onChange={handleChange} required />
										</div>
										<div className="col-sm-4">
											<input type="tel" className="form-control" placeholder="Phone Number" id="phone"
												name="phone"
												value={formData.phone}
												onChange={handleChange} required />
										</div>
										<div className="col-sm-4">
											<input type="email" className="form-control" placeholder="Email" id="email"
												name="email"
												value={formData.email}
												onChange={handleChange} required />
										</div>
									</div>
									<div className="form-group mar15">
										<div className="col-sm-12">
											<textarea className="form-control" placeholder="Message" id="message"
												name="message"
												value={formData.message}
												onChange={handleChange} required></textarea>
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
					</div>
				</div>
				</div>
			</section>

			<FooterTwo />
			<ToastContainer />
		</>);
}

export default ProjectEstimate;