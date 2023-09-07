import React from 'react'

export default function Banner() {
  return (
    <>
 <section className="py-0 top-position1 banner-style01">
      <div className="slider-fade1 owl-carousel owl-theme w-100">
        <div
          className="item bg-img cover-background full-screen secondary-overlay"
          data-overlay-dark={7}
          data-background="img/banner/slide-01.jpg"
        >
          <div className="container position-relative z-index-9">
            <div className="row align-items-center min-vh-100 text-center justify-content-center">
              <div className="col-lg-8">
                <div className="mt-5 mt-sm-0">
                  <p className="mb-2 text-primary text-uppercase letter-spacing-4 d-block mb-2 font-weight-700">
                    Strategic . Innovate . Excellence
                  </p>
                  <h1 className="mb-2-9 main-title text-white text-uppercase">
                    Creative Design
                  </h1>
                  <a href="contact.html" className="btn-style1 white-hover">
                    <span>Get Started</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="item bg-img cover-background full-screen secondary-overlay"
          data-overlay-dark={7}
          data-background="img/banner/slide-02.jpg"
        >
          <div className="container position-relative z-index-9">
            <div className="row align-items-center min-vh-100 text-center justify-content-center">
              <div className="col-lg-8">
                <div className="mt-5 mt-sm-0">
                  <p className="mb-2 text-primary text-uppercase letter-spacing-4 d-block mb-2 font-weight-700">
                    Strategic . Innovate . Excellence
                  </p>
                  <h1 className="mb-2-9 main-title text-white text-uppercase">
                    Creative Thinker
                  </h1>
                  <a href="contact.html" className="btn-style1 white-hover">
                    <span>Get Started</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="item bg-img cover-background full-screen secondary-overlay"
          data-overlay-dark={7}
          data-background="img/banner/slide-03.jpg"
        >
          <div className="container position-relative z-index-9">
            <div className="row align-items-center min-vh-100 text-center justify-content-center">
              <div className="col-lg-8">
                <div className="mt-5 mt-sm-0">
                  <p className="mb-2 text-primary text-uppercase letter-spacing-4 d-block mb-2 font-weight-700">
                    Strategic . Innovate . Excellence
                  </p>
                  <h1 className="mb-2-9 main-title text-white text-uppercase">
                    Empower Elevate
                  </h1>
                  <a href="contact.html" className="btn-style1 white-hover">
                    <span>Get Started</span>
                  </a>
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
