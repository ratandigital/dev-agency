import React from 'react'
import Navigation from '../../../component/Navigation'
import Title from '../../../component/Title'
import Script from 'next/script'
import Services from '../../../component/services/Services'
import Process from '../../../component/Process'
import Testimonial from '../../../component/Testimonial'
import Seo from '../../../component/Seo'
import Priceing from '../../../component/Priceing'
import Footer from '../../../component/Footer'



export default function page() {
  return (
    <>
       

    <Navigation/>
    <Title title ='Services'/>
   <Services/>
   <Process/>
   <Testimonial/>
   <Seo/>
   <Priceing/>
   <Footer/>
    </>
  )
}
