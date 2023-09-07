import React from 'react'

export default function Aboutchoose() {
  return (
    <>
<section
  className="bg-img cover-background pb-0 pt-lg-0 secondary-overlay"
  data-overlay-dark={8}
  data-background="img/bg/bg-02.jpg"
>
  <div className="container position-relative z-index-9">
    <div className="row align-items-center">
      <div className="col-lg-6 mb-2-9 mb-lg-0">
        <div className="story-video">
          <div className="section-title mb-1-9">
            <span className="sm-title">Why Choose Us</span>
            <h2 className="mb-0 h1 text-white">
              Our company is trusted by hundreds of customers.
            </h2>
          </div>
          <a href="contact.html" className="btn-style1 white-hover">
            <span>Get Free Quote</span>
          </a>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="ps-xl-6">
          <ul className="why-us-block">
            <li className="inner-block">
              <div className="content">
                <img src="img/icons/09.png" className="mb-3" alt="..." />
                <h4>Web Designing</h4>
              </div>
            </li>
            <li className="inner-block color2">
              <div className="content">
                <img src="img/icons/10.png" className="mb-3" alt="..." />
                <h4>Web Development</h4>
              </div>
            </li>
            <li className="inner-block color2">
              <div className="content">
                <img src="img/icons/11.png" alt="..." className="mb-3" />
                <h4>Web Application</h4>
              </div>
            </li>
            <li className="inner-block">
              <div className="content">
                <img src="img/icons/12.png" alt="..." className="mb-3" />
                <h4>Web Marketing</h4>
              </div>
            </li>
            <li className="inner-block">
              <div className="content">
                <img src="img/icons/01.png" alt="..." className="mb-3" />
                <h4>Design &amp; Branding</h4>
              </div>
            </li>
            <li className="inner-block color2">
              <div className="content">
                <img src="img/icons/02.png" alt="..." className="mb-3" />
                <h4>Frontend Development</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
