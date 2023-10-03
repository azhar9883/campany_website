import React from 'react'
import { Link } from 'react-router-dom';

function FooterThree() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'

        });
    };

    return (
        <div>
            <footer class="footer2">
		<div class="footer-top">
			<div class="container">
				<div class="row">
					<div class="col-sm-6">
						<div class="mail-tel-sec"><a href="mailto:info@minivetsystem.com"><i class="fa fa-envelope-o" aria-hidden="true"></i> info@minivetsystem.com</a> <a href="tel:033-4073-5131"><i class="fa fa-phone" aria-hidden="true"></i> 033-4073-5131</a></div>
					</div>
					<div class="col-sm-6">
						<div class="footer-bot-links">
							<a href="privacy-policy.html">Privacy Policy</a>
							<Link to="/termsAndConditions">Terms &amp; Conditions</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="footer-bot">
			<div class="container">
				<div class="row">
					<div class="col-sm-12 text-center">
						<span>© Copyright 2023, All Right Reserved.</span>
					</div>
				</div>
			</div>
		</div>
		<span id="back-to-top" className="show" onClick={scrollToTop}><img src="./assets/images/go-up.png" alt="no img" /></span>
	</footer>
        </div>
    )
}

export default FooterThree
