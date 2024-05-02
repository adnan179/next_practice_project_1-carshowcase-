import { footerLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="flex flex-col mt-5 text-black-100 border-t border-gray-100">
      {/* logo */}
      <div className='flex flex-wrap max-md:flex-col justify-between gap-5 sm:px-16 px-6 py-10'>
        <div className='flex flex-col justify-start items-start gap-6'>
          <Image src="/logo.svg" alt="logo" width={118} height={18} className='object-contain'/>
          <p>
            Car Hub 2024 <br/>
            All rights reserved &copy;
          </p>
        </div>
        {/* links */}
        <div className='footer__links'>
          {footerLinks && footerLinks.map((link)=>(
            <div key={link.title} className='footer__link'>
              <h3 className='font-bold'>{link.title}</h3>
              {link.links.map((item)=>(
                <Link href={item.url} key={item.title}>
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-wrap justify-between items-center mt-10 sm:px-16 px-6 py-10'>
        <p>
          @Car Hub 2024 All rights reserved
        </p>
        <div className='footer__copyrights-link'>
          <Link href="/" className='text-gray-500'>
            Privacy policy
          </Link> 
          <Link href="/" className='text-gray-500'>
            Terms of use
          </Link>
        </div>

      </div>
    </footer>
  )
}

export default Footer
