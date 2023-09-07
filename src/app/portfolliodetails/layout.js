
export const metadata = {
  title: 'Demo work details',
  description: 'Next Development Gegency',
  
}
export default function About({ children }) {
  return (
    <>
     
      <body suppressHydrationWarning={true}>{children}</body>
      
    </>
  )
}
