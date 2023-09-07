import React from 'react'

export default function PortfollioDetails() {
  return (
    <>
<section>
  <div className="container">
    <div>
      <div className="wow fadeIn image-hover">
        <img
          src="img/portfolio/portfolio-details-01.jpg"
          className="mb-1-9 border-radius-10"
          alt="..."
        />
      </div>
      <div
        className="bg-secondary text-center mb-2-3 p-2-3 border-radius-10 wow fadeIn"
        data-wow-delay="200ms"
      >
        <div className="row mt-n1-9">
          <div className="col-lg-3 mt-1-9">
            <h3 className="h5 text-primary">Client</h3>
            <p className="mb-0 text-white">Theresa Dasilva</p>
          </div>
          <div className="col-lg-3 mt-1-9">
            <h3 className="h5 text-primary">Project Value</h3>
            <p className="mb-0 text-white">$679</p>
          </div>
          <div className="col-lg-3 mt-1-9">
            <h3 className="h5 text-primary">Date</h3>
            <p className="mb-0 text-white">June 14, 2023</p>
          </div>
          <div className="col-lg-3 mt-1-9">
            <h3 className="h5 text-primary">Category</h3>
            <p className="mb-0 text-white">XD Design</p>
          </div>
        </div>
      </div>
      <div className="wow fadeInUp" data-wow-delay="200ms">
        <h2 className="mb-4">Project Details</h2>
        <p className="mb-4">
          <span className="display-26 bg-primary text-white position-relative float-start p-3 me-3 border-radius-8">
            W
          </span>{" "}
          e assist our clients with building their most ideal financial We
          comprehend you're putting something aside for all unique life altering
          situations: A brilliant quietness has take possion of my whole souing
          like these sweet mornng spring whch partake in the with my entire
          heart I am separated from everyone else, and feel the appeal
          ofexistenc in voluptate velit esse cillum fugiat nulla pariatur.
          excepteur sint occaecat cupidatat non proident sunt in culpa qui
          officia deserunt mollit anim id est laborum sed ut perspiciatis unde
          totam rem aperiam, eaque ipsa quae stomach muscle illo inventore
          veritatis et semi beatae vitae dicta sunt explicabo nemo enim ipsam
          voluptatem sed quia consequuntur magni dolores.
        </p>
      </div>
      <div className="wow fadeInUp" data-wow-delay="200ms">
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text.
        </p>
        <div className="row">
          <div className="col-xl-6">
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <ul className="list-style2 mb-0">
              <li>
                Dedicated to Save Lives exclusive essential cancel project
              </li>
              <li>
                Override the digital divide with additional activity to beta
              </li>
              <li>
                Enable accurate supply chains rather than frictionless
                technology
              </li>
              <li>
                Dedicated to Save Lives exclusive essential cancel project
              </li>
              <li>
                Override the digital divide with additional activity to beta
              </li>
              <li>
                Dedicated to Save Lives exclusive essential cancel project
              </li>
              <li>
                Override the digital divide with additional activity to beta
              </li>
            </ul>
          </div>
          <div className="col-xl-6 mt-4 mt-xl-0">
            <div className="image-hover">
              <img
                src="img/portfolio/portfolio-details-02.jpg"
                alt="..."
                className="rounded"
              />
            </div>
          </div>
        </div>
        <p className="mb-0 mt-1-9">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text.
        </p>
      </div>
    </div>
    <div className="page-navigation mt-6 wow fadeInUp" data-wow-delay="200ms">
      <div className="prev-page">
        <div className="page-info">
          <a href="#!">
            <span className="image-prev">
              <img src="img/portfolio/prev-project.jpg" alt="..." />
            </span>
            <div className="prev-link-page-info">
              <h4 className="prev-title">IT Specialist</h4>
              <span className="date-details">
                <span className="create-date">Jun 16, 2023</span>
              </span>
            </div>
          </a>
        </div>
      </div>
      <div className="next-page">
        <div className="page-info">
          <a href="#!">
            <div className="next-link-page-info">
              <h4 className="next-title">Business Analytics</h4>
              <span className="date-details">
                <span className="create-date">Jun 12, 2023</span>
              </span>
            </div>
            <span className="image-next">
              <img src="img/portfolio/next-project.jpg" alt="..." />
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
