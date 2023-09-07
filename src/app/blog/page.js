import React from 'react'
import Script from 'next/script'
import Navigation from '../../../component/Navigation'

import Footer from '../../../component/Footer'
import Title from '../../../component/Title'
import Blog from '../../../component/blog/Blog'

export default function page() {
  return (
    <>
  

    <Navigation/>
    <Title title = "Blog"/>
    <Blog/>
    <Footer/>
    </>
  )
}
