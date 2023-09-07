import React from 'react'

export default function Navigation() {
  return (
    <>
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
                    <a href="/" className="navbar-brand">
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
                      <a href="/">Home</a>
                    </li>
                    <li>
                      
                      <a href="/services">Service</a>
                      
                    </li>
                    <li>
                      
                      <a href="/about">About Us</a>
                      
                    </li>
                    <li>
                      <a href="/portfollio">Portfolio</a>
                      </li>
                    <li>
                      <a href="/blog">Blog</a>
                     
                    </li>
                    <li>
                      <a href="/contact">Contact</a>
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
                          href="/contact"
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
    </>
  )
}
