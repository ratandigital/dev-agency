import React from 'react'

export default function About() {
  return (
    <>
<section className="about-style-02">
  <div className="container">
    <div className="row align-items-center mt-n2-9">
      <div className="col-lg-6 mt-2-9">
        <div className="about-style3 position-relative text-center text-sm-start me-lg-6 me-xl-8">
          <img
            src="img/content/about-06.jpg"
            className="mb-sm-15 border-radius-10"
            alt="..."
          />
          <img
            src="img/content/about-07.jpg"
            className="position-absolute bottom-0 end-0 bg-white p-2 border-radius-10 d-none d-sm-block"
            alt="..."
          />
          <img
            src="img/content/about-08.jpg"
            className="position-absolute top-5 right-5 border-radius-10 d-none d-sm-block"
            alt="..."
          />
          <div className="bg-white border-primary-color border border-width-3 p-4 border-radius-10 about-quote ani-left-right d-none d-sm-block">
            <p className="mb-0 text-secondary">
              "If you want real marketing that works and effective effect -
              Flyweb got you covered."{" "}
              <span className="fw-bold">- Julian Tout</span>
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-6 mt-2-9">
        <div>
          <div className="section-title mb-1-9">
            <span className="sm-title">About Us</span>
            <h2 className="mb-3 h1">
              We offer the best design services in town.
            </h2>
            <p className="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              consectetur adipiscing elit, Quis ipsum suspendisse ultrices
            </p>
          </div>
          <div className="row align-items-center justify-content-center mb-1-9">
            <div className="col-xl-8">
              <div className="d-flex justify-content-center">
                <div className="flex-shrink-0 me-3">
                  <img src="img/icons/06.png" alt="..." />
                </div>
                <div className="flex-grow-1">
                  <h4>Web solutions</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do incididunt
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <div className="flex-shrink-0 me-3">
                  <img src="img/icons/19.png" alt="..." />
                </div>
                <div className="flex-grow-1">
                  <h4>Best interface</h4>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do incididunt
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="about-icon-box d-none d-xl-block text-center">
                <div className="about-icon">
                  <img src="img/icons/08.png" alt="..." />
                </div>
                <p className="mb-0">
                  Trusted By <br /> Our Clients
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <a href="contact.html" className="btn-style1">
              <span>Get Started</span>
            </a>
            <div className="ms-4">
              <h4>Zac Sowerby</h4>
              <p className="mb-0">Co Founder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
