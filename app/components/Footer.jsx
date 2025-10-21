
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='Logo'
         className='w-36 mx-auto mb-2' />

        <div className='w-max flex items-center mx-auto gap-2'>
        <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} 
        alt='mail icon' className='w-6' />
          <a href='mailto:khawlasarhan92@gmail.com' className='underline'>khawlasarhan92@gmail.com</a>
        </div>
      </div>

      <div className='mt-12 border-t border-gray-400'>
        <div className='max-w-5xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center sm:justify-between gap-4'>
          <div className='text-center sm:text-left'>
            <p className='text-sm leading-relaxed'>© 2025 Khawla Sarhan — Open to opportunities.</p>
            <p className='text-sm leading-relaxed mt-1'>Open to work — Seeking junior / entry-level frontend or full-stack roles</p>
          </div>

          <ul className='flex items-center gap-6 justify-center sm:justify-end'>
            <li>
              <a className='text-sm' href='https://github.com/khawlasarhan92-dev' target='_blank' rel='noopener noreferrer'>Github</a>
            </li>
            <li>
              <a className='text-sm' href='https://www.linkedin.com/in/yourusername' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer