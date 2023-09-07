import React from 'react'

export default function Main() {
  return (
    <>
<>
  {/* PAGE LOADING
    ================================================== */}
 
  {/* MAIN WRAPPER
    ================================================== */}
  <div className="main-wrapper">
    {/* HEADER
  ================================================== */}
    <header className="header-style1 menu_area-light">
      <div className="navbar-default border-bottom border-color-light-white">
        {/* start top search */}
        <div className="top-search bg-primary">
          <div className="container-fluid px-lg-1-6 px-xl-2-5 px-xxl-2-9">
            <form
              className="search-form"
              action="https://flywebhtml.websitelayout.net/search.html"
              method="GET"
              acceptCharset="utf-8"
            >
              <div className="input-group">
                <span className="input-group-addon cursor-pointer">
                  <button
                    className="search-form_submit fas fa-search text-white"
                    type="submit"
                  />
                </span>
                <input
                  type="text"
                  className="search-form_input form-control"
                  name="s"
                  autoComplete="off"
                  placeholder="Type & hit enter..."
                />
                <span className="input-group-addon close-search mt-1">
                  <i className="fas fa-times" />
                </span>
              </div>
            </form>
          </div>
        </div>
        {/* end top search */}
        <div className="container-fluid px-lg-1-6 px-xl-2-5 px-xxl-2-9">
          <div className="row align-items-center">
            <div className="col-12 col-lg-12">
              <div className="menu_area alt-font">
                <nav className="navbar navbar-expand-lg navbar-light p-0">
                  <div className="navbar-header navbar-header-custom">
                    {/* start logo */}
                    <a href="index-2.html" className="navbar-brand">
                      <img
                        id="logo"
                        src="img/logos/logo-inner.png"
                        alt="logo"
                      />
                    </a>
                    {/* end logo */}
                  </div>
                  <div className="navbar-toggler bg-primary" />
                  {/* start menu area */}
                  <ul
                    className="navbar-nav ms-auto"
                    id="nav"
                    style={{ display: "none" }}
                  >
                    <li>
                      <a href="index-2.html">Home</a>
                    </li>
                    <li>
                      <a href="#!">Pages</a>
                      <ul>
                        <li>
                          <a href="about.html">About Us</a>
                        </li>
                        <li>
                          <a href="how-we-work.html">How We Work</a>
                        </li>
                        <li>
                          <a href="faq.html">FAQ's</a>
                        </li>
                        <li>
                          <a href="#!">Our Team</a>
                          <ul>
                            <li>
                              <a href="team.html">Our Team</a>
                            </li>
                            <li>
                              <a href="team-details.html">Team Details</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="pricing.html">Pricing Plans</a>
                        </li>
                        <li>
                          <a href="privacy-policy.html">Privacy Policy</a>
                        </li>
                        <li>
                          <a href="404-page.html">404 Page</a>
                        </li>
                        <li>
                          <a href="coming-soon.html">Coming Soon</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#!">Service</a>
                      <ul>
                        <li>
                          <a href="services.html">Our Services</a>
                        </li>
                        <li>
                          <a href="service-details.html">Service Details</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#!">Portfolio</a>
                      <ul>
                        <li>
                          <a href="#!">Portfolio Grid</a>
                          <ul>
                            <li>
                              <a href="portfolio-two-columns.html">2 Columns</a>
                            </li>
                            <li>
                              <a href="portfolio.html">3 Columns - Standard</a>
                            </li>
                            <li>
                              <a href="portfolio-four-columns.html">
                                4 Columns
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="portfolio-details.html">Portfolio Details</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#!">Blog</a>
                      <ul>
                        <li>
                          <a href="#!">Blog Grid</a>
                          <ul>
                            <li>
                              <a href="blog-grid-two-columns.html">2 Columns</a>
                            </li>
                            <li>
                              <a href="blog-grid-two-columns-left-sidebar.html">
                                2 Col – Left Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="blog-grid-two-columns-right-sidebar.html">
                                2 Col – Right Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="blog-grid.html">3 Columns - Standard</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="blog-list.html">Blog List</a>
                        </li>
                        <li>
                          <a href="blog-details.html">Blog Details</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                  {/* end menu area */}
                  {/* start attribute navigation */}
                  <div className="attr-nav align-items-xl-center ms-xl-auto main-font">
                    <ul>
                      <li className="search">
                        <a href="#!">
                          <i className="fas fa-search" />
                        </a>
                      </li>
                      <li className="d-none d-xl-inline-block">
                        <a
                          href="contact.html"
                          className="btn-style1 white-hover small"
                        >
                          <span>Free Quote</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* end attribute navigation */}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    {/* BANNER
  ================================================== */}
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
    {/* SERVICES
  ================================================== */}
    <section className="bg-light">
      <div className="container position-relative z-index-9">
        <div className="section-title mb-1-9 mb-md-6 text-center">
          <span className="sm-title">What We Do</span>
          <h2 className="mb-0 h1">Services That Help You Grow.</h2>
        </div>
        <div className="row g-xl-5 mt-n1-6">
          <div className="col-md-6 col-xl-4 mt-1-6">
            <div
              className="card-style03 bg-img cover-background overflow-visible bg-light"
              data-background="img/service/service-01.jpg"
            >
              <span className="icon">
                <img src="img/icons/13.png" alt="..." />
              </span>
              <div className="overflow-hidden position-relative z-index-9">
                <h3 className="h2 mb-3">
                  <a href="service-details.html">
                    Web
                    <br /> Designing
                  </a>
                </h3>
                <div className="card-content">
                  <p>
                    We offers plan and assemble managing for you from startups
                    to the last creation or closing creation.
                  </p>
                  <a
                    className="text-secondary text-primary-hover text-uppercase small letter-spacing-4 ms-1 font-weight-700"
                    href="service-details.html"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4 mt-1-6">
            <div
              className="card-style03 bg-img cover-background overflow-visible bg-light"
              data-background="img/service/service-02.jpg"
            >
              <span className="icon">
                <img src="img/icons/14.png" alt="..." />
              </span>
              <div className="overflow-hidden position-relative z-index-9">
                <h3 className="h2 mb-3">
                  <a href="service-details.html">
                    Web
                    <br /> Development
                  </a>
                </h3>
                <div className="card-content">
                  <p>
                    We offers plan and assemble managing for you from startups
                    to the last creation or closing creation.
                  </p>
                  <a
                    className="text-secondary text-primary-hover text-uppercase small letter-spacing-4 ms-1 font-weight-700"
                    href="service-details.html"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4 mt-1-6">
            <div
              className="card-style03 bg-img cover-background overflow-visible bg-light"
              data-background="img/service/service-03.jpg"
            >
              <span className="icon">
                <img src="img/icons/15.png" alt="..." />
              </span>
              <div className="overflow-hidden position-relative z-index-9">
                <h3 className="h2 mb-3">
                  <a href="service-details.html">
                    Web
                    <br /> Application
                  </a>
                </h3>
                <div className="card-content">
                  <p>
                    We offers plan and assemble managing for you from startups
                    to the last creation or closing creation.
                  </p>
                  <a
                    className="text-secondary text-primary-hover text-uppercase small letter-spacing-4 ms-1 font-weight-700"
                    href="service-details.html"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ABOUT
  ================================================== */}
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
    {/* EXTRA
  ================================================== */}
    <section
      className="exrta-section item bg-img cover-background secondary-overlay"
      data-overlay-dark={8}
      data-background="img/bg/bg-01.jpg"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9 col-lg-8">
            <div
              className="section-title text-center mb-1-9 wow fadeIn"
              data-wow-delay="200ms"
            >
              <span className="sm-title">Who We Are</span>
              <h2 className="text-white h1">
                Web solutions allows your business to increase productivity
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* FAQ'S
  ================================================== */}
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
    {/* WHY CHOOCE US
  ================================================== */}
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
    {/* PROCESS
  ================================================== */}
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
    {/* TESTIMONIAL
  ================================================== */}
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
    {/* EXTRA
  ================================================== */}
    <section className="bg-secondary py-4">
      <div className="position-relative z-index-2">
        <div className="scrolling-text scrolling-left-text">
          <div className="scrolling-marquee">
            <h4 className="ms-2 display-1 font-weight-800">
              {" "}
              Design &amp; Branding — Web Development — Product Design —{" "}
            </h4>
            <h4 className="ms-2 display-1 font-weight-800 ms-2">
              {" "}
              Mobile Application — Web Application — SEO Optimization -{" "}
            </h4>
          </div>
        </div>
      </div>
    </section>
    {/* BLOG
  ================================================== */}
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
    {/* FOOTER
  ================================================== */}
    <footer className="bg-secondary pt-6 pt-lg-8">
      <div className="container">
        <div className="row mt-n2-9 pb-6 pb-lg-8">
          <div
            className="col-md-6 col-lg-5 mt-2-9 wow fadeIn"
            data-wow-delay="200ms"
          >
            <div className="footer-logo mb-1-9">
              <a href="index-2.html">
                <img src="img/logos/footer-light-logo.png" alt="..." />
              </a>
            </div>
            <h4 className="text-white mb-1-9 fw-light w-lg-75 display-27 lh-base opacity8">
              We have been most trusted web design agency since 25+ years.
            </h4>
            <ul className="social-icon-style1">
              <li>
                <a href="#!">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="fab fa-youtube" />
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="fab fa-linkedin-in" />
                </a>
              </li>
            </ul>
          </div>
          <div
            className="col-md-6 col-lg-3 mt-2-9 wow fadeIn"
            data-wow-delay="400ms"
          >
            <div className="ps-0">
              <h3 className="text-white h4 mb-1-9">Newsletter</h3>
              <p className="text-white opacity8 mb-4">
                Subscribe to our newsletter to receive updates on the latest
                news!
              </p>
              <form
                className="quform newsletter-form"
                action="https://flywebhtml.websitelayout.net/quform/newsletter-two.php"
                method="post"
                encType="multipart/form-data"
                onclick=""
              >
                <div className="quform-elements">
                  <div className="row">
                    {/* Begin Text input element */}
                    <div className="col-md-12">
                      <div className="quform-element mb-0">
                        <div className="quform-input">
                          <input
                            className="form-control"
                            id="email_address"
                            type="text"
                            name="email_address"
                            placeholder="Subscribe with us"
                          />
                        </div>
                      </div>
                    </div>
                    {/* End Text input element */}
                    {/* Begin Submit button */}
                    <div className="col-md-12">
                      <div className="quform-submit-inner">
                        <button
                          className="btn btn-white text-white m-0"
                          type="submit"
                        >
                          <i className="fas fa-paper-plane" />
                        </button>
                      </div>
                      <div className="quform-loading-wrap">
                        <span className="quform-loading" />
                      </div>
                    </div>
                    {/* End Submit button */}
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-3 mt-2-9 offset-lg-1 wow fadeIn"
            data-wow-delay="600ms"
          >
            <div className="ps-xl-4">
              <h3 className="text-white h4 mb-1-9">Contacts</h3>
              <div className="d-flex mb-1-9">
                <div className="flex-shrink-0">
                  <img src="img/icons/icon-phone.png" alt="..." />
                </div>
                <div className="flex-grow-1 ms-3">
                  <h4 className="mb-1 h5 text-white">Contact Us</h4>
                  <p className="mb-0 text-white">(+44) 123-456-789</p>
                </div>
              </div>
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <img src="img/icons/icon-mail.png" alt="..." />
                </div>
                <div className="flex-grow-1 ms-3">
                  <h4 className="mb-1 h5 text-white">Mail Us</h4>
                  <p className="mb-0 text-white">info@yourdomain.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 border-top border-color-light-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 text-center">
              <p className="d-inline-block text-white mb-0">
                © <span className="current-year" /> Flyweb Powered by{" "}
                <a href="#!" className="text-primary text-white-hover">
                  Website Design Templates
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</>

    </>
  )
}
