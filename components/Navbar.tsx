import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CustomButton } from '@/components';


const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
      <nav className='flex justify-between items-center mx-auto max-w-[1440px] sm:px-16 px-6 py-4'>
        <Link href="/" className='flex justify-center items-center'>
          <Image alt="car hub logo" src="/logo.svg" className="object-contain" width={118} height={18}/>
        </Link>
        <CustomButton 
          title="sign in"
          containerStyles='text-primary-blue bg-white rounded-full min-w-[130px]'
          btnType="button"/>
      </nav>
    </header>
  )
}

export default Navbar
