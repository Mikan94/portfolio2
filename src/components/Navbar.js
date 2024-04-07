import React, { useState, useEffect } from 'react';
import { Link as LinkR } from 'react-router-dom';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import data from '../content/navbar.json';

function Navbar(props) {
  let content = data;
  props.language === 'Deutsch'
    ? (content = data.Deutsch)
    : (content = data.English);

  const transition = { duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9] };
  const [click, setClick] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const variantsDesktop = {
    open: {
      y: 0,
      transition: {...transition}
    },
    closed: {
      y: -80,
      transition: {...transition},
    },
  }

  const variantsMobile = {
    mobileOpen: {
      opacity: 0,
      x: "100%",
      transition: { ...transition},
    },
    mobileClosed: {
      opacity: 1,
      x: 0,
      transition: {delay: 0.3, ...transition}
    }
  }

  
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos || currentScrollPos <= 70) {
      setVisible(true);
    } else {
      setVisible(false);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <nav id='/' className='container '>
      <motion.div
        animate={
          visible ? "open" : "closed"
        }
        variants={variantsDesktop}
        className='bg-primary text-lg font-semibold fixed shadow-md flex-row flex-wrap justify-between z-40 w-full py-6 lg:py-2 flex items-center px-8 sm:px-16 lg:px-32 xl:px-48 2xl:px-80'>
        <LinkR to='/'>
          <Link
            to='/'
            className='flex z-50 cursor-pointer color-y'
            smooth={true}
            duration={1000}
            onClick={closeMobileMenu}
          >
            <li class='list-none color-y font-semibold'>Anne Minkenberg</li>
          </Link>
        </LinkR>

        <div className='lg:hidden relative z-50' onClick={handleClick}>
          <i
            className={
              click ? 'fas fa-times text-white' : 'fas fa-bars text-white'
            }
          />
        </div>
        <motion.ul
          // animate={
          //   click ? "mobileClosed" : "mobileOpen"
          // }
          // variants={variantsMobile}
          class={
            click
               ? 'flex flex-col items-center w-full h-screen z-50 lg:top-0 lg:flex lg:flex-row lg:bg-transparent'
               : 'hidden lg:flex lg:flex-row'
          }
        >
          <li className='flex justify-between pt-10 lg:pt-0 my-8 lg:my-4'>
            <Link
              to='projects'
              smooth={true}
              duration={1000}
              spy={true}
              exact={true}
              activeClass='active'
              className='link nav-link'
              onClick={closeMobileMenu}
            >
            {content.nav1}
            </Link>
          </li>
          <li className='flex justify-between mx-8 my-8 md:my-4 md:ml-12 md:mr-12'>
            <Link
              to='about'
              smooth={true}
              duration={1000}
              spy={true}
              activeClass='active'
              className='link nav-link'
              onClick={closeMobileMenu}
            >
              {content.nav2}
            </Link>
          </li>
          <li className='flex justify-between my-8 md:my-4'>
            <Link
              to='contact'
              smooth={true}
              duration={1000}
              spy={true}
              exact={true}
              activeClass='active'
              className='link nav-link '
              onClick={closeMobileMenu}
            >
              {content.nav3}
            </Link>
          </li>
          <li class='flex justify-between my-8 md:my-4 lg:ml-8'>
            <select
              class='bg-transparent focus:outline-none'
              value={props.language}
              onChange={(e) => props.handleSetLanguage(e.target.value)}
            >
              <option value='Deutsch'>🇩🇪</option>
              <option value='English'>🇺🇸</option>
            </select>
          </li>
        </motion.ul>
      </motion.div>
    </nav>
  );
}

export default Navbar;
