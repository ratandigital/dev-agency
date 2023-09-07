import React from 'react'

export default function Map() {
  return (
    <>
<section className="p-0">
  <div className="container-fuild">
    <iframe
      className="contact-map"
      id="gmap_canvas"
      src="https://maps.google.com/maps?q=london&t=&z=13&ie=UTF8&iwloc=&output=embed"
    />
  </div>
</section>

    </>
  )
}
