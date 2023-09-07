
export const metadata = {
  title: 'Blog Details',
  description: 'Next Development Gegency',
  
}
export default function About({ children }) {
  return (
    <>
     
      <body suppressHydrationWarning={true}>{children}</body>
      
    </>
  )
}
