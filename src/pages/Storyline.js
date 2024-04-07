import React, { useState, useEffect } from 'react';
import './pages.css';
import storyline from '../assets/storyline.png';
import x from '../assets/x.svg';
import cb from '../assets/storyline/c-b.png';
import cg from '../assets/storyline/c-g.png';
import cy from '../assets/storyline/c-y.png';
import f1 from '../assets/storyline/f1.png';
import f2 from '../assets/storyline/f2.png';
import f3 from '../assets/storyline/f3.png';
import f4 from '../assets/storyline/f4.png';
import f5 from '../assets/storyline/f5.png';
import flow from '../assets/storyline/flow.png';
import logo from '../assets/storyline/logo.png';
import preview from '../assets/storyline/preview.png';
import story from '../assets/storyline/Story.mp4';
import typo1 from '../assets/storyline/typo1.png';
import typo2 from '../assets/storyline/typo2.png';
import wire from '../assets/storyline/wire.png';
import data from '../content/storyline.json';

import { useHistory } from 'react-router-dom';
import { Link } from 'react-scroll';
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
} from 'framer-motion';

function Storyline(props) {
  let content = data;
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
        id='top'
        class='hero-bg-sl flex flex-col py-16 px-16 md:px-32 lg:px-64 xl:px-96 justify-center items-center'
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
            Storyline
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
            {content.hero}
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
          src={storyline}
          class='w-96'
        />
        <section class='container mx-auto fixed bottom-8'>
          <p class={visible ? 'scroll-ani bounce text-center' : 'hidden'}>
            Scroll
          </p>
        </section>
      </motion.div>

      <div class='flex flex-col mt-16 lg:flex-row mx-8 sm:mx-16 md:mx-24 lg:mx-40 xl:mx-72 2xl:mx-96'>
        <div class='flex flex-col'>
          <div class='flex-col'>
            <h2 class='color-y'>{content.overview.title}</h2>
            <p>{content.overview.text}</p>
          </div>
        </div>
      </div>

      <div class='flex flex-col mx-8 sm:mx-16 md:mx-24 lg:mx-40 xl:mx-72 2xl:mx-8'>
        <div class='flex flex-col md:flex-row'>
          <div class='flex flex-col mt-16 flex-1'>
            <h5 class='text-white'>{content.overview.title2}</h5>
            <p class='mr-16'>{content.overview.text2}</p>
          </div>
          <div class='flex flex-col mt-8 md:mt-16 flex-1'>
            <h5 class='text-white'>{content.overview.title3}</h5>
            <p>{content.overview.text3}</p>
          </div>
        </div>

        <div class='flex flex-col md:flex-row'>
          <div class='flex flex-col mt-8 flex-1'>
            <h5 class='text-white'>Team</h5>
            <p class='mr-32'>{content.overview.text4}</p>
          </div>

          <div class='flex flex-col mt-8 flex-1'>
            <h5 class='text-white'>{content.overview.title4}</h5>
            <p>UI Designer</p>
          </div>
        </div>
        <div class='flex flex-col mt-8 flex-1'>
          <h5 class='text-white'>{content.overview.title5}</h5>
          <p>{content.overview.text5}</p>
          <p>Game design</p>
          <p>{content.overview.text51}</p>
        </div>
      </div>

      <div class='flex flex-col mx-8 mt-48 sm:mx-16 md:mx-24 lg:mx-40 xl:mx-72 2xl:mx-96'>
        <h2 class='color-y'>{content.overview.q}</h2>
        <div class='flex flex-col'>
          <div class='flex flex-col mt-8'>
            <h4 class='font-semibold'>Problem</h4>
            <p>
              {content.overview.qt1}
              <text>
                {content.overview.t1}
                <text class='px-2'>
                  <span
                    class=' link-ex'
                    onClick={() =>
                      window.open('https://www.upf.edu/web/courage', '_blank')
                    }
                  >
                    COURAGE
                  </span>
                </text>
                {content.overview.t2}
              </text>
            </p>
          </div>
          <div class='flex flex-col mt-16'>
            <h4 class='font-semibold'>{content.overview.t3}</h4>
            <p>{content.overview.t4}</p>
          </div>
        </div>
      </div>

      <div class='flex flex-col mt-8 items-center'>
        <div class='flex flex-col mx-8 sm:mx-16 md:mx-24 lg:mx-40 xl:mx-72 2xl:mx-96'>
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
          <div class='btn-j text-center mt-8'>{content.overview.btn}</div>
        </Link>
      </div>

      <div class='flex flex-col mx-8 mt-48 sm:mx-16 md:mx-24 lg:mx-40 xl:mx-72 2xl:mx-96'>
        <h2 class='color-y'>{content.overview.t5}</h2>
        <p>{content.overview.t6}</p>
        <p>{content.overview.t7}</p>
      </div>

      <div class='flex flex-col mx-8 mt-48 sm:mx-16 md:mx-24 lg:mx-40 xl:mx-72 2xl:mx-96'>
        <h2 class='color-y'>{content.ui.title}</h2>
        <p>{content.ui.t1}</p>
        <div class='flex flex-col mt-16'>
          <h3 class='font-semibold'>{content.ui.title2}</h3>
          <p>{content.ui.text2}</p>
          <img class='mt-8' src={flow} />
        </div>
        <div class='flex flex-col mt-16'>
          <h3 class='font-semibold'>Wireframes</h3>
          <p>{content.ui.text3}</p>
          <img class='mt-8' src={wire} />
        </div>

        <div class='flex flex-col mt-16'>
          <h3 class='font-semibold'>Styleguide</h3>
          <p>{content.ui.text4}</p>
          <div class='flex flex-col mt-16'>
            <h4 class='font-semibold'>{content.ui.title5}</h4>
            <p>{content.ui.text5}</p>
            <img class='mt-8 w-48' src={logo} />
          </div>
          <div class='flex flex-col mt-16'>
            <h4 class='font-semibold'>{content.ui.title6}</h4>
            <p>{content.ui.text6}</p>

            <div class='flex flex-col'>
              <img class='mt-8 w-36' src={cy} />
              <p>{content.ui.subt61}</p>
            </div>
            <div class='flex flex-col'>
              <img class='mt-8 w-36 ' src={cb} />
              <p>{content.ui.subt62}</p>
            </div>
            <div class='flex flex-col'>
              <img class='mt-8 w-36' src={cg} />
              <p>{content.ui.subt63}</p>
            </div>
          </div>

          <div class='flex flex-col mt-16'>
            <h4 class='font-semibold'>{content.ui.title7}</h4>
            <p>{content.ui.text71}</p>
            <img class='mt-4 lg:pr-96' src={typo1} />
            <p class='mt-16'>{content.ui.text72}</p>
            <img class='mt-4 lg:pr-96' src={typo2} />
          </div>
        </div>

        <div id='solution' class='flex flex-col mt-48'>
          <h2 class='color-y'>{content.product.head}</h2>
          <div class='flex flex-col mt-4'>
            <h4 class='font-semibold'>Login</h4>
            <p>{content.product.text}</p>
            <img class='mt-4' src={f1} />
          </div>
          <div class='flex flex-col mt-16'>
            <h4 class='font-semibold'>{content.product.title2}</h4>
            <p>{content.product.text2}</p>
            <img class='mt-4' src={f2} />
          </div>
          <div class='flex flex-col mt-16'>
            <h4 class='font-semibold'>Onboarding</h4>
            <p>{content.product.text3}</p>
            <img class='mt-4' src={f3} />
          </div>
          <div class='flex flex-col mt-16'>
            <h4 class='font-semibold'>{content.product.title4}</h4>
            <p>{content.product.text4}</p>
            <img class='mt-4' src={f4} />
          </div>
          <div class='flex flex-col mt-16'>
            <h4 class='font-semibold'>{content.product.title5}</h4>
            <p>{content.product.text5}</p>
            <img class='mt-4' src={f5} />
            <video
              class='rounded-md mt-8 w-screen'
              src={story}
              width='600'
              height='300'
              controls='controls'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Storyline;
