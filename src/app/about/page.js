import React from 'react'
import Navigation from '../../../component/Navigation'

import Script from 'next/script'
import About from '../../../component/about/About'
import Aboutchoose from '../../../component/Aboutchoose'
import Aboutprocess from '../../../component/Aboutprocess'
import Testimonial from '../../../component/Testimonial'
import Team from '../../../component/Team'
import Footer from '../../../component/Footer'
import Title from '../../../component/Title'


export default function page() {
  return (
    <>
    


<Navigation/>
<Title title = "About Us"/>
<About/>
<Aboutchoose/>
<Aboutprocess/>
<Testimonial/>
<Team/>
<Footer/>

    </>
  )
}
