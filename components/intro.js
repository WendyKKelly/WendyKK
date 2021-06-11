
import Link from 'next/link'


export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Wendy.
      </h1>
      

   
      
         
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Hello! Curiosity is my super power.{' '}
        <a
          href="https://underbel.li/blog/bpage/contact"
          className="hover:text-bg-yellow duration-200"
        >
          What's yours?
        </a>{' '}
        
      </h4>
    </section>
  )
}
