import { assets, serviceData } from '../../assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Services = () => {
  return (
    <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1}}
        className='w-full px-[12%] py-10 scroll-mt-20' id='services'>

      <motion.h4 
        initial={{opacity:0 ,y:-20}}
        whileInView={{opacity:1 , y:0}}
        transition={{duration:0.5 ,delay:0.3}}
        className='text-center mb-2 text-lg font-Ovo'>
        What I Offer
      </motion.h4>

      <motion.h2
          initial={{opacity:0 ,y:-20}}
          whileInView={{opacity:1 , y:0}}
          transition={{duration:0.5 ,delay:0.5}}
          className='text-5xl text-center font-Ovo'>
        My Services
      </motion.h2>

      <motion.p
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.5 ,delay:0.7}}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-sm sm:text-base'>
        I architect high-performance Full-Stack solutions, specializing in real-time architectures, enterprise-grade backend systems, and scalable web applications that solve complex business logic.
      </motion.p>

      <motion.div
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{duration:0.6 ,delay:0.9}}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10'>
          {serviceData.map(({ link, title, description, icon }, index) => (

          <motion.div
            whileHover={{scale:1.03}}
            key={index} 
            className='flex flex-col justify-between border border-gray-400 rounded-lg px-6 py-10 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white/30 dark:hover:shadow-white dark:hover:bg-darkHover/50'>

            <div>
              <Image src={icon} alt={title} className='w-10' />
              <h3 className='text-lg my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
              <p className='text-sm text-gray-600 leading-6 dark:text-white/80'>{description}</p>
            </div>

            <a href={link || '#'} className='flex items-center gap-2 text-sm mt-6 font-medium text-gray-800 dark:text-white hover:underline'>
              Read More <Image src={assets.right_arrow} alt='' className='w-4 dark:invert' />
            </a>
          </motion.div>
        ))}
      </motion.div>

    </motion.div>
  )
}

export default Services