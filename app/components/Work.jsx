import { motion } from "motion/react"
import { workData } from '@/assets/assets'
import React from 'react'
import Link from 'next/link'

const Work = ({isDarkMode}) => {
  return (
    <motion.div 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:1}}
      className='w-full px-6 sm:px-10 lg:px-[12%] py-10 scroll-mt-20 overflow-x-hidden' id='work'>

      <motion.h4 
        initial={{opacity:0 ,y:-20}}
        whileInView={{opacity:1 , y:0}}
        transition={{duration:0.5 ,delay:0.3}}
        className='text-center mb-1 text-base sm:text-lg font-Ovo'>
       End-to-End Solutions Showcase
      </motion.h4>

      <motion.h2
        initial={{opacity:0 ,y:-20}}
        whileInView={{opacity:1 , y:0}}
        transition={{duration:0.5 ,delay:0.5}}
        className='text-2xl sm:text-5xl leading-tight text-center font-Ovo'>
        My Latest Full-Stack Projects
      </motion.h2>

      <motion.p
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.5, delay:0.7}}
        className='text-center text-sm sm:text-base max-w-[95%] sm:max-w-2xl mx-auto mt-3 mb-8 font-Ovo'>
       Showcasing hands-on expertise in MERN, deployment, and analytical problem-solving.
      </motion.p>
      
      <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.6 ,delay:0.9}}
        className='flex justify-center w-full my-10'
      >
    
        <div className='max-w-4xl w-full'>
          <div
            className='grid grid-cols-1 gap-8 dark:text-black sm:grid-cols-2 lg:gap-10'>
            
            {workData.map((project, index) => (
              <Link
                key={index}
                href={project.link}
                passHref
                className='w-full h-[380px] rounded-lg relative cursor-pointer group flex
                  items-end overflow-hidden shadow-xl pb-6 '
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className='absolute inset-0 bg-no-repeat bg-center transition-transform duration-300'
                  style={{ backgroundImage: `url(${project.bgImage})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  }}
                >
                  <div className='absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all'></div>
                </motion.div>


                <div className='relative bg-white w-full rounded-b-lg py-4 px-6 flex items-center
                  justify-between duration-500 shadow-2xl'>

                  <div className='flex-grow'> 
                    <h2 className='font-semibold text-base text-gray-800 break-words'>
                      {project.title}
                    </h2>
                    <p className='text-xs text-gray-500 mt-1 break-words'>
                      {project.description}
                    </p>
                  </div>
                  
                
                  <span className='flex-shrink-0 text-sm font-bold text-pink-600 whitespace-nowrap ml-4'>
                    View Details →
                  </span>
                  
                </div>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Work