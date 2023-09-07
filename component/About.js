import React from 'react'

export default function About() {
  return (
    <>
 <section className="about-style-01">
      <div className="container">
        <div className="border-bottom border-color-light-black mb-6 mb-lg-10 pb-6 pb-lg-10">
          <div className="row align-items-center justify-content-center mt-n1-9">
            <div className="col-lg-6 col-xl-5 mt-1-9">
              <div className="position-relative z-index-9">
                <div className="row">
                  <div className="col-6 wow fadeInDown" data-wow-delay="200ms">
                    <div className="image-hover position-relative overflow-hidden">
                      <img
                        src="img/content/about-05.jpg"
                        alt="..."
                        className="rounded"
                      />
                    </div>
                  </div>
                  <div className="col-6 wow fadeInUp" data-wow-delay="400ms">
                    <div className="image-hover position-relative overflow-hidden">
                      <img
                        src="img/content/about-04.jpg"
                        alt="..."
                        className="mt-1-9 mt-sm-10 rounded"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="sm-box-wrapper z-index-9 wow fadeIn"
                  data-wow-delay="600ms"
                >
                  <div className="inner-box">
                    <span className="exp-no">18</span>
                    <span className="exp-year">
                      Years Of <br /> Experience
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-7 mt-1-9">
              <div className="ps-1-9 ps-xl-11">
                <div className="about-content">
                  <div className="section-title mb-1-9">
                    <span className="sm-title">Who We Are</span>
                    <h2 className="mb-0 h1">
                      We offer the best design and development services!
                    </h2>
                  </div>
                  <p>
                    Our objective is to offer a high-quality service and a
                    dependable source of income to our investors while
                    simultaneously minimizing any potential risks and automating
                    and simplifying the relationships.
                  </p>
                  <div className="about-list">
                    <div
                      className="about-author wow fadeIn"
                      data-wow-delay="200ms"
                    >
                      <img src="img/content/signature-2.png" alt="..." />
                      <h4 className="display-28 mt-2">Mita Walker</h4>
                      <span className="display-31">CEO, Flyweb</span>
                      <div className="author-img">
                        <img src="img/avatars/avatar-04.jpg" alt="..." />
                      </div>
                    </div>
                    <div className="about-list">
                      <ul className="list-unstyled mb-0">
                        <li className="wow fadeInUp" data-wow-delay="200ms">
                          <i className="fas fa-check" /> Provide Web Design
                          &amp; Development
                        </li>
                        <li className="wow fadeInUp" data-wow-delay="300ms">
                          <i className="fas fa-check" /> We Provide Logo Design
                          &amp; Copywriting
                        </li>
                        <li className="wow fadeInUp" data-wow-delay="400ms">
                          <i className="fas fa-check" /> Best Website Support
                          &amp; Consultations
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-12">
            <div className="clients02-carousel owl-carousel owl-theme text-center">
              <div>
                <div className="clients position-relative">
                  <div className="client-img">
                    <img src="img/clients/01.png" alt="..." />
                  </div>
                  <div className="client-hover-img text-center">
                    <img src="img/clients/05.png" alt="..." />
                  </div>
                </div>
              </div>
              <div>
                <div className="clients position-relative">
                  <div className="client-img">
                    <img src="img/clients/02.png" alt="..." />
                  </div>
                  <div className="client-hover-img">
                    <img src="img/clients/06.png" alt="..." />
                  </div>
                </div>
              </div>
              <div>
                <div className="clients position-relative">
                  <div className="client-img">
                    <img src="img/clients/03.png" alt="..." />
                  </div>
                  <div className="client-hover-img">
                    <img src="img/clients/07.png" alt="..." />
                  </div>
                </div>
              </div>
              <div>
                <div className="clients position-relative">
                  <div className="client-img">
                    <img src="img/clients/04.png" alt="..." />
                  </div>
                  <div className="client-hover-img">
                    <img src="img/clients/08.png" alt="..." />
                  </div>
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
