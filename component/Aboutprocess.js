import React from 'react'

export default function Aboutprocess() {
  return (
    <>
<section>
  <div className="container">
    <div className="section-title mb-1-9 mb-md-6 text-center">
      <span className="sm-title">Work Process</span>
      <h2 className="mb-0 h1">Our Working Process</h2>
    </div>
    <div className="main-process text-center">
      <div className="line-shape">
        <img
          src="img/content/process-line.png"
          alt="..."
          className="wow fadeIn"
          data-wow-delay="200ms"
        />
      </div>
      <div className="row mt-n6">
        <div
          className="process-style-01 col-lg-4 col-md-6 mt-6 wow fadeInUp"
          data-wow-delay="200ms"
        >
          <div className="item">
            <div className="thumb">
              <img src="img/content/process-01.jpg" alt="..." />
              <span>01</span>
            </div>
            <h5>Design</h5>
            <p className="w-lg-80 mx-auto mb-0">
              Lorem ipsum dolor sit amet, consectetur notted adipisicing.
            </p>
          </div>
        </div>
        <div
          className="process-style-01 col-lg-4 col-md-6 mt-6 wow fadeInUp"
          data-wow-delay="400ms"
        >
          <div className="item">
            <div className="thumb">
              <img src="img/content/process-02.jpg" alt="..." />
              <span>02</span>
            </div>
            <h5>Strategy</h5>
            <p className="w-lg-80 mx-auto mb-0">
              Lorem ipsum dolor sit amet, consectetur notted adipisicing.
            </p>
          </div>
        </div>
        <div
          className="process-style-01 col-lg-4 col-md-6 mt-6 wow fadeInUp"
          data-wow-delay="600ms"
        >
          <div className="item">
            <div className="thumb">
              <img src="img/content/process-03.jpg" alt="..." />
              <span>03</span>
            </div>
            <h5>Develop</h5>
            <p className="w-lg-80 mx-auto mb-0">
              Lorem ipsum dolor sit amet, consectetur notted adipisicing.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
