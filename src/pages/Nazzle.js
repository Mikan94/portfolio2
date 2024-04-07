import React, { useState, useEffect } from 'react';
import './pages.css';
import nazzle from '../assets/nazzle.png';
import x from '../assets/x.svg';
import color from '../assets/nazzle/color.png';
import f1 from '../assets/nazzle/f1.png';
import f2 from '../assets/nazzle/f2.png';
import f4 from '../assets/nazzle/f4.png';
import f5 from '../assets/nazzle/f5.png';
import f6 from '../assets/nazzle/f6.png';
import flow from '../assets/nazzle/flow.png';
import market from '../assets/nazzle/market.png';
import name from '../assets/nazzle/name.png';
import persona from '../assets/nazzle/persona.png';
import sketches from '../assets/nazzle/sketches.png';
import typo from '../assets/nazzle/typo.png';
import wire from '../assets/nazzle/wire.png';
import preview from '../assets/nazzle/preview.png';
import data from '../content/nazzle.json';
import data2 from '../content/contact.json';

import { useHistory } from 'react-router-dom';
import { Link } from 'react-scroll';
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
} from 'framer-motion';

function Nazzle(props) {
  let content = data;
  let content2 = data2;
  props.language === 'Deutsch'
    ? (content = data.Deutsch)
    : (content = data.English);
  const history = useHistory();

  const transition = { duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9] };

  const [isComplete, setIsComplete] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

  useEffect(() => yRange.onChange((v) => setIsComplete(v >= 1)), [yRange]);

  const [scrollPos, setScrollPos] = useState(false);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos < 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }

    setScrollPos(currentScrollPos);
  };

  useEffect(
    () => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    },
    handleScroll,
    visible,
    setScrollPos
  );

  return (
    <div>
      <div class=''>
        <button
          class='btn fixed top-4 right-4 sm:top-8 sm:right-8 bg-white transform hover:scale-110 transition duration-500 ease-in-out focus:outline-none'
          onClick={() => {
            history.push('/');
          }}
        >
          <img src={x} />
        </button>
        <div class='fixed bottom-4 right-2 sm:bottom-8 sm:right-4 '>
          <motion.p
            animate={{
              transition: { delay: 1.2, ...transition },
            }}
            class={isComplete ? 'flex justify-center mr-3' : 'hidden'}
          >
            Top
          </motion.p>
          <Link
            to='top'
            smooth={true}
            duration={1000}
            spy={true}
            exact={true}
            offset={-50}
          >
            <svg className='circle cursor-pointer' viewBox='0 0 60 60'>
              <motion.path
                fill='none'
                strokeWidth='3'
                stroke='white'
                strokeDasharray='0 1'
                d='M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0'
                style={{
                  pathLength,
                  rotate: 90,
                  translateX: 5,
                  translateY: 5,
                  scaleX: -1, // Reverse direction of line animation
                }}
              />
              <motion.path
                class=''
                fill='none'
                strokeWidth='3'
                stroke='white'
                d='M17,28 L 25,20 L33,28'
                initial={false}
                strokeDasharray='0 1'
                animate={{ pathLength: isComplete ? 1 : 0 }}
              ></motion.path>
            </svg>
          </Link>
        </div>
      </div>

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: { delay: 0.3, ...transition },
        }}
        id='top'
        class='hero-bg-n flex flex-col py-16 px-16 md:px-32 lg:px-64 xl:px-96 justify-center items-center'
      >
        <div class='flex flex-col'>
          <motion.h2
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { delay: 0.5, ...transition },
            }}
            class='text-4xl mb-2'
          >
            Nazzle
          </motion.h2>
          <motion.p
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { delay: 0.5, ...transition },
            }}
            class='text-md'
          >
            {content.hero.text}
          </motion.p>
        </div>
        <motion.img
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { delay: 0.5, ...transition },
          }}
          src={nazzle}
          class='w-96'
        />
        <section class='container mx-auto fixed bottom-8'>
          <p class={visible ? 'scroll-ani bounce text-center' : 'hidden'}>
            Scroll
          </p>
        </section>
      </motion.div>

      <div class='flex flex-col lg:flex-row mx-8 sm:mx-16 md:mx-24 lg:mx-40 xl:mx-72 2xl:mx-96'>
        <div class='flex flex-col'>
          <div class='flex-col'>
            <h2 class='color-y mb-2 mt-16'>{content.overview.title}</h2>
            <p>{content.overview.description}</p>
          </div>
        </div>
      </div>

      <div class='flex flex-col mx-8 sm:mx-16 md:mx-24 lg:mx-40 xl:mx-72 2xl:mx-8 '>
        <div class='flex flex-col md:flex-row'>
          <div class='flex flex-col mt-16 flex-1'>
            <h5 class='text-white'>{content.projectD.title1}</h5>
            <p class='mr-24'>{content.projectD.description1}</p>
          </div>
          <div class='flex flex-col mt-8 flex-1 md:mt-16'>
            <h5 class='text-white'>{content.projectD.title2}</h5>
            <p>{content.projectD.description2}</p>
          </div>
        </div>

        <div class='flex flex-col md:flex-row'>
          <div class='flex flex-col mt-8 flex-1'>
            <h5 class='text-white'>{content.projectD.title3}</h5>
            <p class='mr-32'>{content.projectD.description3}</p>
          </div>
          <div class='flex md:flex-col mt-8 flex-1 md:mt-8'>
            <h5 class='text-white'>{content.projectD.title4}</h5>
            <p>UX Designer</p>
            <p>UI Designer</p>
          </div>
        </div>

        <div class='flex flex-col mt-8'>
          <h5 class='text-white'>{content.projectD.title5}</h5>
          <p>{content.projectD.description51}</p>
          <p>{content.projectD.description52}</p>
          <p>{content.projectD.description53}</p>
          <p>{content.projectD.description54}</p>
          <p>{content.projectD.description55}</p>
          <p>{content.projectD.description56}</p>
        </div>
      </div>

      <div class='flex flex-col mx-8 mt-48 sm:mx-16 md:mx-24 lg:mx-40 xl:mx-72 2xl:mx-96'>
        <h2 class='color-y'>{content.ps.question}</h2>
        <div class='flex flex-col'>
          <div class='flex flex-col mt-8'>
            <h5>Problem</h5>
            <p>{content.ps.text1}</p>
          </div>
          <div class='flex flex-col mt-16'>
            <h5>{content.ps.title2}</h5>
            <p>{content.ps.text2}</p>
          </div>
        </div>
      </div>

      <div class='flex flex-col mt-8 mx-8 sm:mx-16 md:mx-24 lg:mx-40 xl:mx-72 2xl:mx-96 items-center'>
        <div class='flex flex-col'>
          <img src={preview} />
        </div>
        <Link
          class=''
          to='solution'
          smooth={true}
          duration={1000}
          spy={true}
          exact={true}
          offset={-50}
        >
          <div class='btn-j text-center mt-8'>{content.ps.btn}</div>
        </Link>
      </div>

      <div class='flex flex-col mt-48 mx-8 sm:mx-16 md:mx-24 lg:mx-40 xl:mx-72 2xl:mx-96'>
        <h2 class='color-y'>{content.research.title}</h2>
        <div class='flex flex-col mt-8'>
          <h3 class='font-semibold'>{content.research.subtitle1}</h3>
          <p>{content.research.text1}</p>
        </div>
        <div class='flex flex-col mt-16'>
          <h4 class='font-semibold'>Persona</h4>
          <p>{content.research.text2}</p>
          <div class='flex mt-8'>
            <img src={persona} />
          </div>
        </div>
        <div class='flex flex-col mt-16'>
          <h3 class='font-semibold'>{content.research.subtitle3}</h3>
          <p>{content.research.text3}</p>
          <img class='mt-4' src={market} />
        </div>
      </div>

      <div class='flex flex-col mt-48 mx-8 sm:mx-16 md:mx-24 lg:mx-40 xl:mx-72 2xl:mx-96'>
        <h2 class='color-y'>{content.solution.title}</h2>
        <div class='flex flex-col mt-4'>
          <h3 class='font-semibold'>{content.solution.subtitle1}</h3>
          <p class=''>{content.solution.text1}</p>

          <div class='flex flex-col mt-16'>
            <h3 class='font-semibold'>{content.solution.subtitle2}</h3>
            <p>{content.solution.text2}</p>
            <img class='mt-4' src={sketches} />
          </div>
        </div>
        <div class='flex flex-col mt-16'>
          <h3 class='font-semibold'>User Flow</h3>
          <p>{content.solution.text3}</p>
          <img class='mt-8 sm:w-96' src={flow} />
        </div>
        <div class='flex flex-col mt-16'>
          <h3 class='font-semibold'>Wireframes</h3>
          <p>{content.solution.text4}</p>
          <img class='mt-8' src={wire} />
        </div>
        <div class='flex flex-col mt-16'>
          <h3 class='font-semibold'>Styleguide</h3>
          <div class='flex flex-col mt-4'>
            <h4 class='font-semibold'>{content.solution.subsub5}</h4>
            <p>{content.solution.text5}</p>
            <img class='mt-8 w-96' src={name} />
          </div>
          <div class='flex flex-col mt-16'>
            <h4 class='font-semibold'>{content.solution.subsub6}</h4>
            <p>{content.solution.text6}</p>
            <img class='mt-8 sm:w-96' src={color} />
          </div>
          <div class='flex flex-col mt-16'>
            <h4 class='font-semibold'>{content.solution.subsub7}</h4>
            <p>{content.solution.text7}</p>
            <img class='mt-8 sm:w-96' src={typo} />
          </div>
        </div>
        <div class='flex flex-col mt-16'>
          <h2 id='solution' class='color-y'>
            {content.solution.subtitle8}
          </h2>
          <div class='flex flex-col mt-4'>
            <h4 class='font-semibold'>{content.solution.subsub8}</h4>
            <p>{content.solution.text8}</p>
            <div class='flex flex-col lg:flex-row'>
              <img class='mt-4' src={f1} />
            </div>
          </div>
          <div class='flex flex-col mt-16'>
            <h4 class='font-semibold'>Onboarding</h4>
            <p>{content.solution.text9}</p>
            <div class='flex flex-col lg:flex-row'>
              <img class='mt-4' src={f2} />
            </div>
          </div>
          <div class='flex flex-col mt-16'>
            <h4 class='font-semibold'>Navigation</h4>
            <p>{content.solution.text10}</p>
            <div class='flex flex-col'>
              <img class='mt-4' src={f4} />
            </div>
          </div>
          <div class='flex flex-col mt-16'>
            <h4 class='font-semibold'>{content.solution.subsub11}</h4>
            <p>{content.solution.text11}</p>
            <div class='flex flex-col'>
              <img class='mt-4 pr-32 md:w-80' src={f5} />
            </div>
          </div>
          <div class='flex flex-col mt-16'>
            <h4 class='font-semibold'>In-Game</h4>
            <p>{content.solution.text12}</p>
            <div class='flex flex-col lg:flex-row'>
              <img class='mt-4' src={f6} />
            </div>
          </div>
        </div>
      </div>
      </div>

  );
}

export default Nazzle;
