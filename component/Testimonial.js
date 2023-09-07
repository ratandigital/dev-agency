import React from 'react'

export default function Testimonial() {
  return (
    <>
<section
      className="bg-light bg-img cover-background"
      data-background="img/bg/bg-05.png"
    >
      <div className="container">
        <div
          className="section-title mb-1-9 mb-md-6 text-center wow fadeIn"
          data-wow-delay="200ms"
        >
          <span className="sm-title">Our Testimonials</span>
          <h2 className="mb-0 h1">What They’re Saying?</h2>
        </div>
        <div className="row gx-xxl-5 mt-n2-9">
          <div
            className="col-md-6 col-lg-4 mt-2-9 wow fadeIn"
            data-wow-delay="200ms"
          >
            <div className="testimonial-style1">
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <img
                    src="img/avatars/avatar-05.jpg"
                    className="border-radius-10"
                    alt="..."
                  />
                </div>
                <div className="flex-grow-1 ms-4 pt-4">
                  <h4 className="h5 mb-1">Zachary Holden</h4>
                  <small>CEO &amp; Founder</small>
                </div>
              </div>
              <div className="testi-text">
                <i className="fa-solid fa-quote-right icon" />
                <div className="item-desc">
                  We've used web design agency for the last five years. We can't
                  understand how we've been living without web design agency.
                  Thank You!
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-4 mt-2-9 wow fadeIn"
            data-wow-delay="350ms"
          >
            <div className="testimonial-style1">
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <img
                    src="img/avatars/avatar-06.jpg"
                    className="border-radius-10"
                    alt="..."
                  />
                </div>
                <div className="flex-grow-1 ms-4 pt-4">
                  <h4 className="h5 mb-1">Daniel Johann</h4>
                  <small>Satisfied customers</small>
                </div>
              </div>
              <div className="testi-text">
                <i className="fa-solid fa-quote-right icon" />
                <div className="item-desc">
                  I am so pleased with this product. Absolutely wonderful! You
                  won't regret it. It's really wonderful. Definitely worth the
                  investment.
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-4 mt-2-9 wow fadeIn"
            data-wow-delay="500ms"
          >
            <div className="testimonial-style1">
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <img
                    src="img/avatars/avatar-07.jpg"
                    className="border-radius-10"
                    alt="..."
                  />
                </div>
                <div className="flex-grow-1 ms-4 pt-4">
                  <h4 className="h5 mb-1">Alannah Jeffcott</h4>
                  <small>Business Consultant</small>
                </div>
              </div>
              <div className="testi-text">
                <i className="fa-solid fa-quote-right icon" />
                <div className="item-desc">
                  I'd be lost without web design agency. Web design agency is
                  the most valuable business resource we have EVER purchased.
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
