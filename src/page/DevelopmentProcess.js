import React, {useEffect} from 'react'
import Header from '../components/header/Header'
import FooterThree from '../components/footerTwo/FooterThree';

function DevelopmentProcess() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  

    return (
        <div>
            <Header/>
            <section className="main" id="main">
        {/* <div className="bot-sec" id="bot">
			<img src="images/bot.png" alt="no img"><i className="fa fa-times-circle close-icon" aria-hidden="true"></i>
			<a href="project-estimate.html" className="bot-bubble"><span>Request A </span> Project Estimate </a>
		</div> */}
		<div className="dev-process text-center">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<h2>development process</h2>
						<p><img src="assets/images/pre-production.jpg" alt="no img" /></p>
						<p><img src="assets/images/post-production.jpg" alt="no img" /></p>
					</div>
				</div>
			</div>
		</div>		
	</section>
    <FooterThree/>
        </div>
    )
}

export default DevelopmentProcess