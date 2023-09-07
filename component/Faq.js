import React from 'react'

export default function Faq() {
  return (
    <>
  <section className="faq-style-1 p-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="faq-content wow fadeIn" data-wow-delay="200ms">
              <div id="accordion" className="accordion-style">
                <div className="card mb-3 wow fadeInUp" data-wow-delay="100ms">
                  <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        1. Why we are best company?
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordion"
                  >
                    <div className="card-body">
                      We are committed to providing our customers with
                      exceptional service while offering our employees the best
                      training. There are many variations of passages of lorem
                      ipsum is simply free text.
                    </div>
                  </div>
                </div>
                <div className="card mb-3 wow fadeInUp" data-wow-delay="200ms">
                  <div className="card-header" id="headingTwo">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        2. How the template process works?
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordion"
                  >
                    <div className="card-body">
                      We are committed to providing our customers with
                      exceptional service while offering our employees the best
                      training. There are many variations of passages of lorem
                      ipsum is simply free text.
                    </div>
                  </div>
                </div>
                <div className="card wow fadeInUp" data-wow-delay="300ms">
                  <div className="card-header" id="headingThree">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        3. What should be listed on a business card?
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordion"
                  >
                    <div className="card-body">
                      We are committed to providing our customers with
                      exceptional service while offering our employees the best
                      training. There are many variations of passages of lorem
                      ipsum is simply free text.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="faq-img d-none d-lg-block">
              <div className="image-hover">
                <img src="img/content/extra-sec-img.jpg" alt="..." />
              </div>
              <div className="faq-video story-video">
                <a
                  href="https://www.youtube.com/watch?v=fS4cH2fky5M"
                  className="video-btn video"
                  data-type="iframe"
                  tabIndex={0}
                >
                  <i className="ti-control-play" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
