
export const metadata = {
  title: 'Blog page',
  description: 'Next Development Gegency Blog Page',
  
}
export default function About({ children }) {
  return (
    <>
     
      <body suppressHydrationWarning={true}>{children}</body>
      
    </>
  )
}
