import React from 'react'

export default function Team() {
  return (
    <>
<section>
  <div className="container">
    <div className="section-title mb-1-9 mb-md-6 text-center">
      <span className="sm-title">Our Team</span>
      <h2 className="mb-0 h1">Our Motivated Team</h2>
    </div>
    <div className="row mt-n1-9 g-5">
      <div
        className="col-sm-6 col-lg-4 mt-1-9 wow fadeInUp"
        data-wow-delay="200ms"
      >
        <div className="team-style01 rounded">
          <div className="image rounded">
            <a href="team-details.html">
              <img src="img/team/team-05.jpg" alt="..." className="rounded" />
            </a>
          </div>
          <div className="text-start bg-light p-4">
            <h3 className="mb-1">
              <a href="team-details.html">Maya Paschke</a>
            </h3>
            <p className="mb-0 small text-primary">UX/UI Designer</p>
          </div>
        </div>
      </div>
      <div
        className="col-sm-6 col-lg-4 mt-1-9 wow fadeInUp"
        data-wow-delay="400ms"
      >
        <div className="team-style01 rounded">
          <div className="image rounded">
            <a href="team-details.html">
              <img src="img/team/team-03.jpg" alt="..." className="rounded" />
            </a>
          </div>
          <div className="text-start bg-light p-4">
            <h3 className="mb-1">
              <a href="team-details.html">Archie Symes</a>
            </h3>
            <p className="mb-0 small text-primary">Web Designer</p>
          </div>
        </div>
      </div>
      <div
        className="col-sm-6 col-lg-4 mt-1-9 wow fadeInUp"
        data-wow-delay="600ms"
      >
        <div className="team-style01 rounded">
          <div className="image rounded">
            <a href="team-details.html">
              <img src="img/team/team-06.jpg" alt="..." className="rounded" />
            </a>
          </div>
          <div className="text-start bg-light p-4">
            <h3 className="mb-1">
              <a href="team-details.html">Summer Meldrum</a>
            </h3>
            <p className="mb-0 small text-primary">Senior Marketer</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
