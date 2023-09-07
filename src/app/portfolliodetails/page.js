import React from 'react'

import Navigation from '../../../component/Navigation'
import Title from '../../../component/Title'
import PortfollioDetails from '../../../component/portfollioDetails/PortfollioDetails'
import Footer from '../../../component/Footer'

export default function page() {
  return (
    <>
    
    <Navigation/>
    <Title title= 'Portfollio Details'/>
    <PortfollioDetails/>
    <Footer/>
    </>
  )
}
