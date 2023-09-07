
import '../../public/css/styles.css'
import '../../public/css/plugins.css'
import '../../public/quform/css/base.css'
import '../../public/search/search'
import './globals.css'
import '../../public/vc.css'

import { Inter } from 'next/font/google'
import Script from 'next/script'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next Devlopment Agency',
  description: 'Generated by NPA',
  
 
}

export default function RootLayout({ children, props }) {
  return (
    <html lang="en">
    <Script src="../../../js/jquery.min.js"></Script>
    <Script src="../../../js/popper.min.js"></Script>
    <Script src="../../../js/bootstrap.min.js"></Script> 
    <Script src="../../../js/core.min.js"></Script>
    <Script src="../../../js/main.js"></Script>
    <Script src="../../../quform/js/plugins.js"></Script>   
    <Script src="../../../quform/js/scripts.js"></Script>
    
      <body suppressHydrationWarning={true} className={inter.className}>{children}
    

      </body>
    </html>
  )
}
