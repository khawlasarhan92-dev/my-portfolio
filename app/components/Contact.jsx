import { motion } from "motion/react"
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React ,{useState}from 'react'

const Contact = ({isDarkMode}) => {
   const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1867ecad-d86c-4d53-905c-ae83bae982ff");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1}}
        id='contact' className='w-full px-[12%] py-10 scroll-mt-20
        bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]
        dark:bg-none' >

      <motion.h4 
        initial={{opacity:0 ,y:-20}}
        whileInView={{opacity:1 , y:0}}
        transition={{duration:0.5 ,delay:0.3}}
        className='text-center mb-2 text-lg font-Ovo'>
         Connect with me
      </motion.h4>

      <motion.h2 
        initial={{opacity:0 ,y:-20}}
        whileInView={{opacity:1 , y:0}}
        transition={{duration:0.5 ,delay:0.5}}
        className='text-5xl text-center font-Ovo'>
        Get in Touch
      </motion.h2>

      <motion.p
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.5 , delay:0.7}} 
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        I'm always open to discussing new projects and opportunities.
        Feel free to reach out!
      </motion.p>

      <motion.form
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.5 , delay:0.9}} 
        className='max-w-2xl mx-auto' onSubmit={onSubmit}>

        <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>

          <motion.input 
            initial={{opacity:0 ,x:-50}}
            whileInView={{opacity:1 ,x:0}}
            transition={{duration:0.6 , delay:1.1}} 
            type='text' placeholder='Your Name' required
            className='flex-1 outline-none p-3 border-[0.5px] border-gray-400
            rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' 
            name='name' />

          <motion.input
            initial={{opacity:0 ,x:50}}
            whileInView={{opacity:1 ,x:0}}
            transition={{duration:0.6 , delay:1.2}} 
            type='email' placeholder='Your Email' required
            className='flex-1 outline-none p-3 border-[0.5px] border-gray-400
            rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90'
            name='email' />

        </div>

        <motion.textarea 
          initial={{opacity:0 ,y:100}}
          whileInView={{opacity:1 ,y:0}}
          transition={{duration:0.6 , delay:1.3}} 
          rows='6' placeholder='Your Message' required
          className='w-full outline-none p-4 border-[0.5px] border-gray-400
          rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90'
           name='message'>
        </motion.textarea>

        <motion.button
        whileHover={{scale:1.05}}
        transition={{duration:0.3}}
        type='submit'
        className='bg-black/80 text-white py-3 px-8 rounded-full mx-auto w-max gap-2
        flex items-center justify-between hover:bg-black duration-500
        dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover'>
          Submit now <Image src={assets.right_arrow_white} alt='Right Arrow'
          className='w-4' />
        </motion.button>
        <p className='mt-4'>{result}</p>
      </motion.form>
    </motion.div>
  )
}

export default Contact