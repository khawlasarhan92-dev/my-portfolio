import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = ({isDarkMode,setIsDarkMode}) => {
  return (
    <div className='w-11/12 max-w-3xl mx-auto text-center
    h-screen flex flex-col justify-center items-center gap-4'>
      <motion.div 
      initial={{scale:0}}
      whileInView={{scale:1}}
      transition={{duration:0.8, type:"spring", stiffness:100}}>
        <Image src={assets.profile_img} alt='Profile Image'
        className='w-28 h-28 rounded-full object-cover' />
      </motion.div>

        <motion.h3
            initial={{y:-20 , opacity:0}}
            whileInView={{y:0 , opacity:1}}
            transition={{duration:0.6, delay:0.3}}
            className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
          Hi! I'M Khawla Sarhan 
          <Image src={assets.hand_icon} alt='Hand Icon'className='w-6' />
        </motion.h3>

        <motion.h1
            initial={{y:-30 , opacity:0}}
            whileInView={{y:0 , opacity:1}}
            transition={{duration:0.8, delay:0.5}}
             className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
              End-to-End Web Solutions Developer (MERN)
        </motion.h1>

        <motion.p 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.6, delay:0.7}}
            className='max-w-2xl mx-auto font-Ovo'>
        Building Scalable MERN Applications and Delivering End-to-End Digital Solutions.
        </motion.p>

        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>

          <motion.a 
            initial={{y:30 , opacity:0}}
            whileInView={{y:0 , opacity:1}}
            transition={{duration:0.6, delay:1}}

            href='#contact' className=' px-10 py-3 bg-black border border-white
           text-white rounded-full flex items-center gap-2 dark:bg-transparent'>
            Contact Me
            <Image src={assets.right_arrow_white} alt=''
              className='w-4' />
          </motion.a>

          <motion.a 
            initial={{y:30 , opacity:0}}
            whileInView={{y:0 , opacity:1}}
            transition={{duration:0.6, delay:1.2}}
            href='/cv'
              className='px-10 py-3 border border-gray-500 rounded-full
              flex items-center gap-2 bg-white dark:text-black'>
              View My Resume
            <Image src={assets.download_icon} alt=''
              className='w-4' />
          </motion.a>
        </div>
    </div>
  )
}

export default Header