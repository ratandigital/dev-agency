import React from 'react'

export default function Title(props) {
  return (
    <>
<section
  className="page-title-section top-position1 bg-img cover-background left-overlay-secondary"
  data-overlay-dark={7}
  data-background="img/banner/page-title.jpg"
>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="text-start">
          <div className="position-relative">
            <h1>{props.title}</h1>
          </div>
          <ul>
            <li>
              <a href="index-2.html">Home</a>
            </li>
            <li>
              <a href="#!">{props.title}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

