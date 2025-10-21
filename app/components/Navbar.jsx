
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef,useState } from 'react'

const Navbar = ({isDarkMode,setIsDarkMode}) => {

  const [isScroll, setIsScroll] = useState(false);

  const sideMenuRef = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() =>{
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > 50) setIsScroll(true);
        else setIsScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

  },[]);

  // prevent body scroll when menu open
  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = '' };
  }, [isMenuOpen]);

  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
      <Image src={assets.header_bg_color} alt=''
      className='w-full' />
    </div>
     <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex 
     items-center justify-between z-50 ${
      isScroll ?
       "bg-white bg-opacity-50 shadow-sm backdrop-blur-lg dark:bg-darkTheme dark:shadow-white/20"
              : "" } `}>
      {/* Logo (hidden on small screens) */}
      <a href="#top" className="mr-14 hidden md:block">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt="Khawla Logo"
          className="w-32 h-auto cursor-pointer"
        />
      </a>
      <ul className={`hidden md:flex items-center gap-6 lg:gap-8
      rounded-full px-12 py-3 ${isScroll ? "" 
      : "bg-white bg-opacity-50 shadow-sm dark:border dark:border-white/50 dark:bg-transparent"
      } `}>
        <li>
          <a href="#top" className='font-Ovo'>Home</a>
        </li>
        <li>
          <a href="#about" className='font-Ovo'>About me</a>
        </li>
        <li>
          <a href="#services" className='font-Ovo'>Services</a>
        </li>
        <li>
          <a href="#work" className='font-Ovo'>My Work</a>
        </li>
        <li>
          <a href="#contact" className='font-Ovo'>Contact me</a>
        </li>
      </ul>
      <div className='flex items-center gap-4'>
        <button onClick={() => setIsDarkMode(prev => !prev)}>
          <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} 
          alt='theme icon' className='w-6' />
        </button>
        <a href="#contact" className='hidden lg:flex items-center gap-3
        px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo
        dark:border-white/50'>
          Contact 
          <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt='arrow icon' className=' w-3' />
        </a>
        <button aria-label="Open menu" aria-controls="mobile-menu" aria-expanded={isMenuOpen} className='block md:hidden absolute right-4 top-4 z-50' onClick={() => setIsMenuOpen(prev => !prev)}>
          <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='menu icon' className='w-6' />
        </button>
      </div>
      {/* Mobile menu - hidden by default */}
  {isMenuOpen && (
    <div aria-hidden className="fixed inset-0 bg-black/30 z-40 md:hidden" onClick={closeMenu}></div>
  )}

  <ul id="mobile-menu" className={`flex md:hidden flex-col gap-4 fixed top-0 right-0
       px-8 py-20 w-56 z-50 h-screen transition-transform duration-300 transform
       ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} bg-rose-50 dark:bg-darkHover dark:text-white overflow-auto`} ref={sideMenuRef}>

        {/* Visible close button (large, high-contrast) */}
        <div className='absolute top-4 right-4'>
          <button aria-label='Close menu' onClick={closeMenu} className='w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md'>
            <span className='text-black text-xl leading-none'>&times;</span>
          </button>
        </div>

        <li><a href="#top" className='font-Ovo' onClick={closeMenu}>Home</a></li>
        <li><a href="#about" className='font-Ovo' onClick={closeMenu}>About me</a></li>
        <li><a href="#services" className='font-Ovo' onClick={closeMenu}>Services</a></li>
        <li><a href="#work" className='font-Ovo' onClick={closeMenu}>My Work</a></li>
        <li><a href="#contact" className='font-Ovo' onClick={closeMenu}>Contact me</a></li>
      </ul>
    </nav> 
    </>
  )
}

export default Navbar