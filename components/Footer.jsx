"use client"
import { usePathname } from 'next/navigation';
import { FacebookIcon, InstagramIcon,YoutubeIcon } from 'lucide-react';
export default function Footer() {
    const path  = usePathname()
    console.log(path)

  return (
    <footer className='padded bg-primary spacing text-white'>
        <div className='flex flex-col gap-20'>
            <div className='flex flex-col lg:flex-row lg:items-center justify-between gap-y-10'>
                <div className='flex flex-col gap-4'>
                    <div className='flex items-center gap-4'>
                        
                        <h2 className='font-poppins text-xl font-semibold'>AdEss Global Construction &amp; <br />Consultant Services, LLC</h2>
                    </div>
                    
                    <ul className='flex p-0 gap-4 flex-col lg:flex-row '>
                        <li>
                            <a href="">About Us</a>
                        </li>
                        <li>
                            <a href="">Our Services</a>
                        </li>
                        <li>
                            <a href="">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col  gap-4'>
                    <div>
                        <h3 className='font-poppins text-lg font-medium'>Subscribe to our Newsletter</h3>
                        <label htmlFor="newsletter" className='flex flex-col md:flex-row gap-5 my-3 w-full'>

                            <input type="text" placeholder='Enter your email' className='bg-white text-black w-full h-12 lg:h-auto pl-3 rounded-md pr-20'/>

                            <button className='border rounded-md py-2 px-5 '>Subscribe</button>

                        </label>
                        <p className='text-sm '>Building Trust, Engineering Excellence</p>
                    </div>
                </div>
            </div>
            <div className='border-t border-t-white flex lg:justify-between lg:items-center flex-col lg:flex-row pt-8 gap-y-8'>
                <div className='flex gap-3'>
                    <InstagramIcon size={30} className='text-white hover:cursor-pointer'/>
                    <FacebookIcon size={30} className='text-white hover:cursor-pointer'/>
                    <YoutubeIcon size={30} className='text-white hover:cursor-pointer'/>
                </div>
                <div>
                    <p className='italic'>@2025 AdEss Global Construction. All Rights Reserved</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

