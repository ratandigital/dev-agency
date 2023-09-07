import React from 'react'

export default function Blog() {
  return (
    <>
 <section>
      <div className="container">
        <div
          className="section-title mb-1-9 mb-md-6 text-center wow fadeIn"
          data-wow-delay="200ms"
        >
          <span className="sm-title">Our Blog</span>
          <h2 className="mb-0 h1">Our Recent News</h2>
        </div>
        <div className="row g-xl-5 mt-n2-2">
          <div
            className="col-md-6 col-lg-4 mt-2-2 wow fadeInUp"
            data-wow-delay="200ms"
          >
            <article className="card card-style04 h-100">
              <div className="blog-img position-relative overflow-hidden image-hover">
                <img
                  src="img/blog/blog-01.jpg"
                  alt="..."
                  className="rounded-top"
                />
                <div className="card-list">
                  <a href="#!">Solutions</a>
                </div>
              </div>
              <div className="card-body p-1-6 p-sm-1-9">
                <span className="text-primary d-block mb-2 font-weight-600">
                  June 01, 2023
                </span>
                <h3 className="h4 mb-0">
                  <a href="blog-details.html">
                    The Reasons Why We Love Web Design Agency.
                  </a>
                </h3>
              </div>
              <div className="d-flex fw-bold border-top px-1-6 px-sm-1-9 py-3 border-color-light-black justify-content-between">
                <a href="blog-details.html">Read more</a>
                <a href="blog-details.html">
                  <i className="ti-arrow-right" />
                </a>
              </div>
            </article>
          </div>
          <div
            className="col-md-6 col-lg-4 mt-2-2 wow fadeInUp"
            data-wow-delay="300ms"
          >
            <article className="card card-style04 h-100">
              <div className="blog-img position-relative overflow-hidden image-hover">
                <img
                  src="img/blog/blog-02.jpg"
                  alt="..."
                  className="rounded-top"
                />
                <div className="card-list">
                  <a href="#!">Marketing</a>
                </div>
              </div>
              <div className="card-body p-1-6 p-sm-1-9">
                <span className="text-primary d-block mb-2 font-weight-600">
                  May 29, 2023
                </span>
                <h3 className="h4 mb-0">
                  <a href="blog-details.html">
                    How To Own Web Design Agency For Free.
                  </a>
                </h3>
              </div>
              <div className="d-flex fw-bold border-top px-1-6 px-sm-1-9 py-3 border-color-light-black justify-content-between">
                <a href="blog-details.html">Read more</a>
                <a href="blog-details.html">
                  <i className="ti-arrow-right" />
                </a>
              </div>
            </article>
          </div>
          <div
            className="col-md-6 col-lg-4 mt-2-2 wow fadeInUp"
            data-wow-delay="400ms"
          >
            <article className="card card-style04 h-100">
              <div className="blog-img position-relative overflow-hidden image-hover">
                <img
                  src="img/blog/blog-03.jpg"
                  alt="..."
                  className="rounded-top"
                />
                <div className="card-list">
                  <a href="#!">Development</a>
                </div>
              </div>
              <div className="card-body p-1-6 p-sm-1-9">
                <span className="text-primary d-block mb-2 font-weight-600">
                  May 25, 2023
                </span>
                <h3 className="h4 mb-0">
                  <a href="blog-details.html">
                    Five Latest Developments In Web Agency.
                  </a>
                </h3>
              </div>
              <div className="d-flex fw-bold border-top px-1-6 px-sm-1-9 py-3 border-color-light-black justify-content-between">
                <a href="blog-details.html">Read more</a>
                <a href="blog-details.html">
                  <i className="ti-arrow-right" />
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
