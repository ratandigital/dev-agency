import React from 'react'

export default function Form() {
  return (
    <>
<section>
  <div className="container">
    <div className="contact-us">
      <div className="row mt-n2-9">
        <div className="col-lg-7 mt-2-9">
          <h2 className="text-secondary mb-4 h1">Write Us Something</h2>
          <form
            className="contact quform"
            action="https://flywebhtml.websitelayout.net/quform/contact.php"
            method="post"
            encType="multipart/form-data"
          
          >
            <div className="quform-elements">
              <div className="row">
                {/* Begin Text input element */}
                <div className="col-md-6">
                  <div className="quform-element form-group">
                    <label htmlFor="name">
                      Your Name <span className="quform-required">*</span>
                    </label>
                    <div className="quform-input">
                      <input
                        className="form-control"
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Your name here"
                      />
                    </div>
                  </div>
                </div>
                {/* End Text input element */}
                {/* Begin Text input element */}
                <div className="col-md-6">
                  <div className="quform-element form-group">
                    <label htmlFor="email">
                      Your Email <span className="quform-required">*</span>
                    </label>
                    <div className="quform-input">
                      <input
                        className="form-control"
                        id="email"
                        type="text"
                        name="email"
                        placeholder="Your email here"
                      />
                    </div>
                  </div>
                </div>
                {/* End Text input element */}
                {/* Begin Text input element */}
                <div className="col-md-6">
                  <div className="quform-element form-group">
                    <label htmlFor="subject">
                      Your Subject <span className="quform-required">*</span>
                    </label>
                    <div className="quform-input">
                      <input
                        className="form-control"
                        id="subject"
                        type="text"
                        name="subject"
                        placeholder="Your subject here"
                      />
                    </div>
                  </div>
                </div>
                {/* End Text input element */}
                {/* Begin Text input element */}
                <div className="col-md-6">
                  <div className="quform-element form-group">
                    <label htmlFor="phone">Contact Number</label>
                    <div className="quform-input">
                      <input
                        className="form-control"
                        id="phone"
                        type="text"
                        name="phone"
                        placeholder="Your phone here"
                      />
                    </div>
                  </div>
                </div>
                {/* End Text input element */}
                {/* Begin Textarea element */}
                <div className="col-md-12">
                  <div className="quform-element form-group">
                    <label htmlFor="message">
                      Message <span className="quform-required">*</span>
                    </label>
                    <div className="quform-input">
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows={3}
                        placeholder="Tell us a few words"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                {/* End Textarea element */}
                {/* Begin Captcha element */}
                <div className="col-md-12">
                  <div className="quform-element">
                    <div className="form-group">
                      <div className="quform-input">
                        <input
                          className="form-control"
                          id="type_the_word"
                          type="text"
                          name="type_the_word"
                          placeholder="Type the below word"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="quform-captcha">
                        <div className="quform-captcha-inner">
                          <img
                            src="quform/images/captcha/courier-new-light.png"
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Captcha element */}
                {/* Begin Submit button */}
                <div className="col-md-12">
                  <div className="quform-submit-inner">
                    <button className="btn-style1 border-0" type="submit">
                      <span>Send Message</span>
                    </button>
                  </div>
                  <div className="quform-loading-wrap text-start">
                    <span className="quform-loading" />
                  </div>
                </div>
                {/* End Submit button */}
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-5 mt-2-9">
          <div className="contact-details">
            <div className="row">
              <div className="section-title mb-1-9">
                <span className="sm-title">Contact</span>
                <h2 className="h4 text-white">Our Contact Detail</h2>
              </div>
              <div className="col-lg-12">
                <div className="contact-info">
                  <div className="contacts-icon">
                    <img src="img/icons/04.png" alt="..." />
                  </div>
                  <div className="contacts-title">
                    <h5 className="text-white font-weight-600 display-28">
                      Send E-Mail
                    </h5>
                    <h6 className="text-white font-weight-400">
                      info@example.com
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="contact-info">
                  <div className="contacts-icon upper">
                    <img src="img/icons/05.png" alt="..." />
                  </div>
                  <div className="contacts-title">
                    <h5 className="text-white font-weight-600 display-28">
                      Call Anytime
                    </h5>
                    <h6 className="text-white font-weight-400">
                      +44 205-658-1823
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="contact-info upper2">
                  <div className="contacts-icon">
                    <img src="img/icons/03.png" alt="..." />
                  </div>
                  <div className="contacts-title">
                    <h5 className="text-white font-weight-600 display-28">
                      {" "}
                      Locations
                    </h5>
                    <h6 className="text-white font-weight-400">
                      66 Guild Street 512B, Great North Town.
                    </h6>
                  </div>
                </div>
              </div>
              <div className="follow-company-icon2">
                <a href="#">
                  {" "}
                  <i className="fab fa-facebook-f" />{" "}
                </a>
                <a href="#">
                  {" "}
                  <i className="fab fa-twitter"> </i>{" "}
                </a>
                <a href="#">
                  {" "}
                  <i className="fab fa-linkedin-in" />{" "}
                </a>
                <a href="#">
                  {" "}
                  <i className="fab fa-pinterest-p" />{" "}
                </a>
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
