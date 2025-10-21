import { motion } from "motion/react"
import React from 'react'
import Image from 'next/image'
import { assets, infoList, toolsData } from '@/assets/assets'

const About = ({isDarkMode}) => {
  return (
    <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1}}
        className='w-full px-4 sm:px-10 lg:px-[12%] py-10 scroll-mt-20 overflow-x-hidden' id='about'>

     
      <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.8}}
       
        className='flex w-full flex-col lg:flex-row items-start gap-8 my-0 mt-8 '>
        

    
        <motion.div 
            initial={{opacity:0 ,scale:0.9}}
            whileInView={{opacity:1 , scale:1}}
            transition={{duration:0.6}}
            className='w-full max-w-xs sm:max-w-sm rounded-3xl max-w-none mx-auto lg:mx-0'>
          <Image src={assets.user_image} alt='User Image'
            className='w-full rounded-3xl' />
        </motion.div>

       
        <motion.div
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.6 , delay:0.8}} 
            className='flex-1'>

            <motion.h4
              initial={{opacity:0 ,y:-20}}
              whileInView={{opacity:1 , y:0}}
              transition={{duration:0.5 ,delay:0.3}}
           
              className='mb-2 text-lg font-Ovo'>Introduction</motion.h4>

            <motion.h2
                initial={{opacity:0 ,y:-20}}
              whileInView={{opacity:1 , y:0}}
              transition={{duration:0.5 ,delay:0.5}}
             
              className='text-5xl font-Ovo mb-10'>About Me</motion.h2>

            <p className='font-Ovo max-w-full lg:max-w-2xl text-sm sm:text-base'>
               I am a **Full-Stack MERN Developer** specializing in building robust and scalable web applications. My journey into development is fueled by a **strong foundation in Informatics Engineering**, which has refined my **analytical thinking and approach to logical problem-solving**.

                Through dedicated self-driven learning, I have mastered end-to-end MERN technologies, focusing on clean code, secure **JWT authentication**, and efficient deployment strategies using platforms like **Render and Cloudflare Pages**.

                My hands-on experience comes directly from deploying complex, real-world projects—including a comprehensive e-commerce platform. I thrive on technical challenges and am committed to translating complex requirements into reliable, user-centric digital experiences.
            </p>

         

            <motion.ul
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:0.8 ,delay:1}} 
                className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-full lg:max-w-2xl mt-10'> 

             
              {infoList.map(({ icon, iconDark,title, description }, index) => (
                <motion.li 
                  whileHover={{scale:1.05}}
                  key={index} className='border-[0.5px] border-gray-400 rounded-xl
                    p-4 cursor-pointer hover:bg-lightHover hover:-translate-y-1
                    duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white
                    dark:hover:bg-darkHover/50'>
                  <Image src={isDarkMode ? iconDark : icon} alt={title}
                    className='w-7 mt-3' />
                  <h3 className='my-4 font-semibold text-gray-700 break-words
                  dark:text-white'>{title}</h3>
                  <p className='text-gray-600 text-xs sm:text-sm dark:text-white/80 break-words'>{description}</p>
                </motion.li>
              ))}
            </motion.ul>

            <motion.h4
                initial={{y:20 , opacity:0}}
                whileInView={{y:0 , opacity:1}}
                transition={{duration:0.5, delay:1.2}}
                  className='my-6 text-gray-700 font-Ovo dark:text-white/80'>
                  Tools I Use
              </motion.h4>

              <motion.ul
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{duration:0.6 ,delay:1.5}} 
                className='flex items-center gap-2 sm:gap-5'>

                {toolsData.map((tool , index) =>(
                  <motion.li 
                    whileHover={{scale:1.1}}
                    key={index} className='flex items-center justify-center
                    w-10 sm:w-14 aspect-square border border-gray-400 rounded-lg
                    hover:-translate-y-1 duration-500 cursor-pointer'>
                    <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
                  </motion.li>
                ))}
            </motion.ul>

        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About