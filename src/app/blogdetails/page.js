import React from 'react'
import Script from 'next/script'
import Navigation from '../../../component/Navigation'

import Footer from '../../../component/Footer'
import Title from '../../../component/Title'
import BlogList from '../../../component/blogDetails/BlogList'


export default function page() {
  return (
    <>
   

    <Navigation/>
   <Title title= 'Blog Details'/>
   <BlogList/>
    <Footer/>
    </>
  )
}
