"use client"
import Image from 'next/image';
import { FacebookIcon, InstagramIcon,YoutubeIcon } from 'lucide-react';
import Link from 'next/link';
export default function Footer() {

  return (
    <footer className='padded bg-primary spacing text-white'>
        <div className='flex flex-col gap-20'>
            <div className='flex flex-col md:flex-row md:items-center justify-between gap-y-10 md:gap-y-0'>
                <div className='flex flex-col flex-1 gap-4'>
                    <div className='flex flex-col  gap-4'>
                        <Link href={'/'} >
                            <Image src="/adess-logo.png" width={100} height={100} alt="AdEss logo" />
                        </Link>
                        <h2 className='font-poppins text-xl font-semibold'>AdEss Global Construction &amp; <br />Consultant Services, LLC</h2>
                    </div>
                    
                </div>

                <ul className='flex justify-center flex-2 p-0 gap-4 flex-col md:flex-row '>
                    <li>
                        <Link href={'/about'}>About Us</Link>
                    </li>
                    <li>
                        <Link href={'/services'}>Our Services</Link>
                    </li>
                    <li>
                        <Link href={'/contact'}>Contact Us</Link>
                    </li>
                </ul>

                <div className='flex-1'>
                    <div className='flex items-center justify-start md:justify-end gap-4'>
                        <Link href={'https://www.facebook.com/share/1G4YBBHw6J/?mibextid=wwXIfr'} target='_blank'>
                            <Image src="/Facebook-icon.svg" width={30} height={30} alt="facebook icon" />
                        </Link>

                        <Link href={'https://www.instagram.com/adessconstruction?igsh=bWtiaGxrczJvdmtj'} target='_blank'>
                            <Image src="/instagram-icon.svg" width={25} height={25} alt="instagram icon" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className='border-t border-t-white flex lg:justify-center justify-start  pt-8 gap-y-8'>
                <div>
                    <p className='italic'>@2025 AdEss Global Construction. All Rights Reserved</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

