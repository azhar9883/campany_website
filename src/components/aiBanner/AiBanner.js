function AiBanner() {
    return ( 
    <>
          <div className="banner-block">
        <img className="show" src="./assets/images/ai-banner2.jpg" alt="no img" />
        <img className="hide" src="./assets/images/ai-banner3.jpg" alt="no img" />
        <div className="banner-block-content">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>Artificial intelligence</h2>
                <h3>
                  Empowering Minds <span>Transforming the World with AI</span>
                </h3>
                <p>
                  Send mail for more information{" "}
                  <strong>
                    {" "}
                    <i className="fa fa-envelope-o" aria-hidden="true"></i>{" "}
                    info@minivetsystem.com
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </> );
}

export default AiBanner;