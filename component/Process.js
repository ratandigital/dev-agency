import React from 'react'

export default function Process() {
  return (
    <>
<section className="bg-secondary">
      <div className="container">
        <div
          className="section-title mb-1-9 mb-md-6 text-center wow fadeIn"
          data-wow-delay="200ms"
        >
          <span className="sm-title">Work Process</span>
          <h2 className="mb-0 h1 text-white">Our Working Process</h2>
        </div>
        <div className="main-process text-center">
          <div className="line-shape wow fadeIn" data-wow-delay="200ms">
            <img src="img/content/process-line.png" alt="..." />
          </div>
          <div className="row mt-n6">
            <div
              className="process-style-01 process-style-02 col-lg-4 col-md-6 mt-6 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="item">
                <div className="thumb">
                  <img src="img/content/process-01.jpg" alt="..." />
                  <span>01</span>
                </div>
                <h5 className="text-white">Design</h5>
                <p className="w-lg-80 mx-auto mb-0 text-white">
                  Lorem ipsum dolor sit amet, consectetur notted adipisicing.
                </p>
              </div>
            </div>
            <div
              className="process-style-01 col-lg-4 col-md-6 mt-6 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="item">
                <div className="thumb">
                  <img src="img/content/process-02.jpg" alt="..." />
                  <span>02</span>
                </div>
                <h5 className="text-white">Strategy</h5>
                <p className="w-lg-80 mx-auto mb-0 text-white">
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
                  <img src="img/content/process-03.jpg" alt="..." />
                  <span>03</span>
                </div>
                <h5 className="text-white">Develop</h5>
                <p className="w-lg-80 mx-auto mb-0 text-white">
                  Lorem ipsum dolor sit amet, consectetur notted adipisicing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="img/content/about3.png"
        className="position-absolute bottom-0 left"
        alt="..."
      />
    </section>
    </>
  )
}
