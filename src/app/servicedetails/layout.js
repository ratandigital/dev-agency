
export const metadata = {
  title: 'Our Servvice Details',
  description: 'Next Development Gegency',
  
}
export default function About({ children }) {
  return (
    <>
     
      <body suppressHydrationWarning={true}>{children}</body>
      
    </>
  )
}
