import React from 'react'
import Script from 'next/script'
import Navigation from '../../../component/Navigation'
import Title from '../../../component/Title'
import Portfollio from '../../../component/portfollio/Portfollio'
import Footer from '../../../component/Footer'

export default function page() {
  return (
    <>
   

    <Navigation/>
    <Title title= 'My Portfollio'/>
    <Portfollio/>
    <Footer/>

    </>
  )
}
