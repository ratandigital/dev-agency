
export const metadata = {
  title: 'Our Demo Work',
  description: 'Next Development Gegency',
  
}
export default function About({ children }) {
  return (
    <>
     
      <body suppressHydrationWarning={true}>{children}</body>
      
    </>
  )
}
