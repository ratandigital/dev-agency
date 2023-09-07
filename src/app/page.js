
import Main from '../../component/main/page'
import Navigation from '../../component/Navigation'
import Banner from '../../component/Banner'
import Image from 'next/image'

import Script from 'next/script'
import Services from '../../component/Services'
import About from '../../component/About'
import Extra from '../../component/Extra'
import Faq from '../../component/Faq'
import Chooce from '../../component/Chooce'
import Process from '../../component/Process'
import Testimonial from '../../component/Testimonial'
import Seo from '../../component/Seo'
import Blog from '../../component/Blog'
import Footer from '../../component/Footer'
export default function Home() {

  return (
    <>
    
   
    <Script src="../../js/jquery.min.js"></Script>


    <Script src="../../js/popper.min.js"></Script>
   
    <Script src="../../js/bootstrap.min.js"></Script>

  
    <Script src="../../js/core.min.js"></Script>



  
    <Script src="../../js/main.js"></Script>

  
    <Script src="../../quform/js/plugins.js"></Script>

   
    <Script src="../../quform/js/scripts.js"></Script>

  
   

<Navigation/>
<Banner/>
<Services/>
<About/>
<Extra/>
<Faq/>
<Chooce/>
<Process/>
<Testimonial/>
<Seo/>
<Blog/>
<Footer/>

   </>
  )
}
