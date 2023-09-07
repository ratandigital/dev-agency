
export const metadata = {
  title: 'About Us',
  description: 'Next Development Gegency',
  
}
export default function About({ children }) {
  return (
    <>
     
      <body suppressHydrationWarning={true}>{children}</body>
      
    </>
  )
}
