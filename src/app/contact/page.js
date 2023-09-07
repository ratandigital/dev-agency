import React from 'react'
import Script from 'next/script'
import Navigation from '../../../component/Navigation'

import Footer from '../../../component/Footer'
import Title from '../../../component/Title'
import Map from '../../../component/contact/Map'
import Form from '../../../component/contact/Form'


export default function page() {
  return (
    <>
   <Navigation/>
   <Title title = "Contact Us"/>
   <Form/>
   <Map/>
    <Footer/>
    </>
  )
}
