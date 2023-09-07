import React from 'react'

export default function Chooce() {
  return (
    <>
 <section>
      <div className="container">
        <div className="row mt-n1-9">
          <div className="col-lg-6 mt-1-9 position-relative">
            <div className="position-relative pe-lg-1-9 row align-items-center">
              <div className="col-5 image-hover">
                <img
                  src="img/content/why-choose-02.jpg"
                  alt=""
                  className="rounded"
                />
              </div>
              <div className="col-7 image-hover">
                <img
                  src="img/content/why-choose-01.jpg"
                  alt=""
                  className="rounded"
                />
              </div>
              <div className="about2-yearbox d-none d-sm-block rounded">
                <p className="lead mb-0">
                  We’re delivering the best customer experience!
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-1-9">
            <div className="ps-4 ps-xl-2-9">
              <div
                className="section-title wow fadeInUp"
                data-wow-delay="100ms"
              >
                <span className="sm-title">About Us</span>
                <h2 className="h1 mb-1-9">
                  We are award winning web development agency.
                </h2>
              </div>
              <div className="d-sm-flex align-items-center mb-2-9">
                <div>
                  <ul className="list-style2 mb-0">
                    <li className="wow fadeInUp" data-wow-delay="200ms">
                      Remarkable to receive such a personalized touch.
                    </li>
                    <li className="wow fadeInUp" data-wow-delay="300ms">
                      Duis aute irure dolor in reprehenderit in voluptate.
                    </li>
                    <li className="wow fadeInUp" data-wow-delay="400ms">
                      I did not escape without a fight. Velit esse cillum
                      dolore.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="d-sm-flex align-items-center thumb-image">
                <div className="flex-shrink-0 mb-4 mb-sm-0">
                  <img
                    src="img/avatars/avatar-01.jpg"
                    className="w-55px rounded-circle wow fadeInRight"
                    data-wow-delay="100ms"
                    alt="..."
                  />
                  <img
                    src="img/avatars/avatar-02.jpg"
                    className="w-55px rounded-circle img1 wow fadeInRight"
                    data-wow-delay="200ms"
                    alt="..."
                  />
                  <img
                    src="img/avatars/avatar-03.jpg"
                    className="w-55px rounded-circle img2 wow fadeInRight"
                    data-wow-delay="300ms"
                    alt="..."
                  />
                  <span
                    className="bg-primary about-icon text-white wow fadeInRight"
                    data-wow-delay="400ms"
                  >
                    <i className="fa-solid fa-phone" />
                  </span>
                </div>
                <div
                  className="flex-grow-1 ms-sm-4 wow fadeIn"
                  data-wow-delay="600ms"
                >
                  <h4 className="mb-0 h5">
                    Over 48,500 people work for us in more than 75 countries.
                  </h4>
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
