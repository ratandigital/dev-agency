import React from 'react'
import Navigation from '../../../component/Navigation'

import Services from '../../../component/serviceDetails/Services'
import Footer from '../../../component/Footer'
import Script from 'next/script'
import Title from '../../../component/Title'

export default function page() {
  return (
    <>
    

<Navigation/>
<Title title ='Service Details'/>
<Services/>
<Footer/>
    </>
  )
}
