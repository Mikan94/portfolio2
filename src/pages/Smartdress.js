import React, { useState, useEffect } from 'react';
import './pages.css';
import smartdress from '../assets/smartdress.png';
import x from '../assets/x.svg';
import presol from '../assets/smartdress/1.png';
import hero from '../assets/smartdress/hero.png';
import market from '../assets/smartdress/6.png';
import storyboard from '../assets/smartdress/7.png';
import type from '../assets/smartdress/type.png';
import persona from '../assets/smartdress/persona.png';
import flow from '../assets/smartdress/flow.png';
import sketches from '../assets/smartdress/sketches.png';
import u1 from '../assets/smartdress/u1.png';
import u2 from '../assets/smartdress/u2.png';
import u3 from '../assets/smartdress/u3.png';
import wire from '../assets/smartdress/wire.png';
import pro from '../assets/smartdress/pro.png';
import f1 from '../assets/smartdress/f1.mov';
import f2 from '../assets/smartdress/f2.mov';
import f3 from '../assets/smartdress/f2.mov';

import { useHistory } from 'react-router-dom';
import { Link } from 'react-scroll';
import data from '../content/smartDress.json';
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
} from 'framer-motion';

function Smartdress(props) {
  let content = data;
  props.language === 'Deutsch'
    ? (content = data.Deutsch)
    : (content = data.English);
  const history = useHistory();

  const transition = { duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9] };
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    if (canScroll === false) {
      document.querySelector('body').classList.add('no-scroll');
    } else {
      document.querySelector('body').classList.remove('no-scroll');
    }
  }, [canScroll]);

  const [isComplete, setIsComplete] = useState(false);
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
        class='hero-bg-sd flex flex-col py-16 px-16 md:px-32 lg:px-64 xl:px-96 justify-center items-center'
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
            Smartdress
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
          src={smartdress}
          class='w-96'
        />
        <section class='container mx-auto fixed bottom-8'>
          <p class={visible ? 'scroll-ani bounce text-center' : 'hidden'}>
            Scroll
          </p>
        </section>
      </motion.div>

      <div class='flex flex-col mx-8 my-16 sm:mx-16 md:mx-24 lg:mx-40 xl:mx-72 2xl:mx-96'>
        <img src={hero} class='order-1 w-80 self-center' />
      </div>

      <div class='flex flex-col mx-8 sm:mx-16 md:mx-24 lg:mx-40 xl:mx-72 2xl:mx-96'>
        <div class='flex flex-col'>
          <div class='flex-col order-2'>
            <h2 class='color-y mb-2'>{content.overview.title}</h2>
            <p class=''>{content.overview.description}</p>
          </div>
        </div>
      </div>

      <div class='flex flex-col mx-8 sm:mx-16 md:mx-24 lg:mx-40 xl:mx-72 2xl:mx-8'>
        <div class='flex flex-col md:flex-row'>
          <div class='flex flex-col mt-16 flex-1'>
            <h5 class='text-white'>{content.overview.title2}</h5>
            <p class=''>Bachelor Thesis</p>
          </div>
          <div class='flex flex-col mt-8 flex-1 md:mt-16'>
            <h5 class='text-white'>{content.overview.title3}</h5>
            <p>{content.overview.d3}</p>
          </div>
        </div>

        <div class='flex flex-col md:flex-row'>
          <div class='flex flex-col mt-8 flex-1'>
            <h5 class='text-white'>{content.overview.title4}</h5>
            <p>UX Researcher</p>
            <p>UX Designer</p>
            <p>UI Designer</p>
          </div>
          <div class='flex flex-col mt-8 flex-1'>
            <h5 class='text-white'>{content.overview.title5}</h5>
            <p>{content.overview.d51}</p>
            <p>{content.overview.d52}</p>
            <p>{content.overview.d53}</p>
            <p>{content.overview.d54}</p>
            <p>{content.overview.d55}</p>
            <p>{content.overview.d56}</p>
          </div>
        </div>
      </div>

      <div class='flex flex-col mx-8 mt-48 sm:mx-16 md:mx-24 lg:mx-40 xl:mx-72 2xl:mx-96'>
        <h2 class='color-y'>{content.overview.question}</h2>
        <div class='flex flex-col'>
          <div class='flex flex-col mt-8'>
            <h4 class='font-semibold'>Problem</h4>
            <p>{content.overview.d6}</p>
          </div>
          <div class='flex flex-col mt-16'>
            <h4 class='font-semibold'>{content.overview.t7}</h4>
            <p>{content.overview.d7}</p>
          </div>
        </div>
      </div>

      <div class='flex flex-col mt-8 mx-8 sm:mx-16 md:mx-24 lg:mx-40 xl:mx-72 2xl:mx-96 items-center'>
        <div class='flex flex-col'>
          <img src={presol} />
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

      <div class='flex flex-row mx-8 mt-24 justify-center'>
        <div class='flex flex-col mx-8 content-center'>
          <div class='flex flex-col text-center'>
            <h2 class=''>10</h2>
            <p>{content.overview.t8}</p>
          </div>
          <div class='flex flex-col text-center mt-8'>
            <h2>11</h2>
            <p>{content.overview.t9}</p>
          </div>
        </div>
        <div class='flex flex-col mx-8 content-center'>
          <div class='flex flex-col text-center'>
            <h2>10</h2>
            <p>{content.overview.t10}</p>
          </div>
          <div class='flex flex-col text-center mt-8'>
            <h2>44</h2>
            <p>Screens</p>
          </div>
        </div>
      </div>

      <div class='flex flex-col mx-8 mt-48 sm:mx-16 md:mx-24 lg:mx-40 xl:mx-72 2xl:mx-96'>
        <h2 class='color-y'>{content.dilemma.title}</h2>
        <div class='flex flex-col mt-8'>
          <p>{content.dilemma.text1}</p>

          <p class='mt-2'>{content.dilemma.text2}</p>

          <p class='mt-2'>{content.dilemma.text3}</p>
        </div>
      </div>

      <div class='flex flex-col mx-8 mt-48 sm:mx-16 md:mx-24 lg:mx-40 xl:mx-72 2xl:mx-96'>
        <h2 class='color-y'>{content.dilemma2.title}</h2>
        <div class='flex flex-col'>
          <div class='flex flex-col mt-8'>
            <p>{content.dilemma2.text1}</p>
          </div>
          <div class='flex flex-col'>
            <p>
              {content.dilemma2.text2}
              <li>{content.dilemma2.li1}</li>
              <li>{content.dilemma2.li2}</li>
              <li>{content.dilemma2.li3}</li>
            </p>
          </div>
        </div>

        <div class='flex flex-col mt-16'>
          <div class='flex flex-col'>
            <h4 class='font-semibold'>{content.dilemma2.title2}</h4>
            <p class=''>{content.dilemma2.text21}</p>
            <p class=''>{content.dilemma2.text22}</p>
          </div>

          <div class='flex flex-col mt-16 content-center'>
            <h4 class='font-semibold'>{content.dilemma2.title3}</h4>
            <p class=''>{content.dilemma2.text31}</p>
            <p>{content.dilemma2.text32}</p>
          </div>
          <div class='flex flex-col mt-16'>
            <h4 class='font-semibold'>{content.dilemma2.title4}</h4>
            <p class=''>{content.dilemma2.text41}</p>
            <li>{content.dilemma2.li41}</li>
            <li>{content.dilemma2.li42}</li>
            <li>{content.dilemma2.li43}</li>
            <li>{content.dilemma2.li44}</li>
          </div>
        </div>

        <div class='mt-64'>
          <div class='flex flex-col'>
            <h3 class='color-y font-semibold'>{content.market.title}</h3>
            <p class=''>{content.market.text}</p>
          </div>
          <div class='flex flex-col mt-16'>
            <h4 class='font-semibold'>{content.market.title2}</h4>
            <p>{content.market.text2}</p>
          </div>
          <div class='flex flex-col mt-16'>
            <h4 class='font-semibold'>{content.market.title3}</h4>
            <p>{content.market.text3}</p>
          </div>
          <div class='flex flex-col mt-16'>
            <h4 class='font-semibold'>{content.market.title4}</h4>
            <p>{content.market.text4}</p>
            <img class='mt-16' src={market} />
          </div>
        </div>

        <div class='mt-32'>
          <div class='flex flex-col'>
            <h3 class='color-y font-semibold'>{content.user.title}</h3>
            <p class='text-sm mt-2 text-gray-300'>{content.user.subtitle}</p>
            <p class='mt-4'>{content.user.text}</p>
          </div>
          <div class='flex flex-col mt-16'>
            <h4 class='font-semibold'>{content.user.title2}</h4>
            <p class='text-sm mt-2 text-gray-300'>{content.user.subtitle2}</p>
            <p class='mt-4'>{content.user.text2}</p>
            <div class='list-none flex flex-col sm:flex-row flex-wrap mt-12'>
              <div class='btn-p flex flex-col min-w-max'>
                <p class='color-g font-semibold'>{content.user.title3}</p>
                <p class='color-g'>2.000 - 2.500 €</p>
              </div>
              <div class='btn-p flex flex-col mt-2 sm:mt-0 sm:ml-2 min-w-max'>
                <p class='color-g font-semibold'>{content.user.title4}:</p>
                <p class='color-g'>100 - 200</p>
              </div>
              <div class='btn-p flex flex-col mt-2 lg:ml-2 lg:mt-0 min-w-max'>
                <p class='color-g font-semibold'>{content.user.title5}</p>
                <p class='color-g'>40 -60 %</p>
              </div>
              <div class='btn-p flex flex-col mt-2 sm:ml-2 md:ml-2 lg:ml-0 sm:min-w-max'>
                <p class='color-g font-semibold'>{content.user.title6}</p>
                <p class='color-g'>ca. 100 €</p>
              </div>
            </div>
          </div>
          <div class='flex flex-col mt-16'>
            <h4 class='font-semibold'>{content.user.title7}</h4>
            <p class='text-sm text-gray-300 mt-2'>{content.user.subtitle7}</p>
            <p class='mt-4'>{content.user.text7}</p>
            <div class='flex flex-col'>
              <p class='mt-16 font-bold'>{content.user.q1}</p>
              <li>{content.user.li11}</li>
              <li>{content.user.li12}</li>
            </div>
            <div class='flex flex-col mt-16'>
              <p class='font-bold'>{content.user.q2}</p>
              <li>{content.user.li21}</li>
              <li>{content.user.li22}</li>
            </div>
            <div class='flex flex-col mt-16'>
              <p class='font-bold'>{content.user.q3}</p>
              <li>{content.user.li31}</li>
              <li>{content.user.li32}</li>
              <li>
                {content.user.li33}
                <li>{content.user.li34}</li>
                <li>{content.user.li35}</li>
              </li>
              <img class='mt-8 w-80' src={type} />
            </div>
          </div>
        </div>
      </div>

      <div class='flex flex-col mx-8 mt-48 sm:mx-16 md:mx-24 lg:mx-40 xl:mx-72 2xl:mx-96'>
        <h2 class='color-y'>{content.usage.title}</h2>
        <p class='mt-4'>{content.usage.text}</p>
        <div class='flex flex-col mt-16'>
          <h3 class='font-semibold'>Persona</h3>
          <p>{content.usage.text2}</p>
          <div class='flex flex-col'>
            <div class='flex flex-col'>
              <img class='my-4' src={persona} />
            </div>
          </div>

          <div class='flex flex-col mt-16'>
            <h3 class='font-semibold'>{content.usage.title3}</h3>
            <p>{content.usage.b1}</p>
            <div class='flex flex-row flex-wrap'>
              <div class='btn-p mt-2 flex'>{content.usage.b2}</div>
              <div class='btn-p mt-2 flex'>{content.usage.b3}</div>
              <div class='btn-p mt-2 flex'>{content.usage.b4}</div>
              <div class='btn-p mt-2 flex'>{content.usage.b4}</div>
              <div class='btn-p mt-2 flex'>{content.usage.b5}</div>
              <div class='btn-p mt-2 flex'>{content.usage.b6}</div>
            </div>
          </div>
          <div class='flex flex-col mt-16'>
            <h3 class='font-semibold'>Storyboards</h3>
            <p>{content.usage.text4}</p>
            <img class='mt-8' src={storyboard} />
          </div>
        </div>
      </div>

      <div class='flex flex-col mx-8 mt-48 sm:mx-16 md:mx-24 lg:mx-40 xl:mx-72 2xl:mx-96'>
        <h2 class='color-y'>{content.creation.title}</h2>
        <p class='mt-4'>{content.creation.text}</p>
        <div class='mt-4'>
          <li>{content.creation.li1}</li>
          <li>{content.creation.li2}</li>
          <li>{content.creation.li3}</li>
          <li>{content.creation.li4}</li>
          <li>{content.creation.li5}</li>
          <li>{content.creation.li6}</li>
        </div>
        <div class='flex flex-col mt-16'>
          <h3 class='font-semibold'>User flow</h3>
          <p class=''>{content.creation.text2}</p>
          <img class='mt-8 sm:w-96' src={flow} />
        </div>
        <div class='flex flex-col mt-16'>
          <h3 class='font-semibold'>Sketches</h3>
          <p class=''>{content.creation.text3}</p>
          <img class='mt-8' src={sketches} />
        </div>
        <div class='flex flex-col mt-16'>
          <h3 class='font-semibold'>Wireframes</h3>
          <p class=''>{content.creation.text4}</p>
          <img class='mt-8' src={wire} />
        </div>
        <div id='solution' class='flex flex-col mt-16'>
          <h3 class='color-y font-semibold'>{content.creation.title5}</h3>
          <p class=''>{content.creation.text5}</p>
          <div class='flex flex-col mt-16'>
            <h4 class='font-semibold'>{content.creation.title6}</h4>
            <p class=''>{content.creation.text6}</p>

            <video
              class='rounded-md mt-8 h-96'
              src={f1}
              width='600'
              height='300'
              controls='controls'
            />
          </div>
          <div class='flex flex-col mt-16'>
            <h4 class='font-semibold'>{content.creation.title7}</h4>
            <p class=''>{content.creation.text7}</p>

            <video
              class='rounded-md mt-8 h-96'
              src={f2}
              width='600'
              height='300'
              controls='controls'
            />
          </div>
          <div class='flex flex-col mt-16'>
            <h4 class='font-semibold'>{content.creation.title8}</h4>
            <p class=''>{content.creation.text8}</p>

            <video
              class='rounded-md mt-8 h-96'
              src={f3}
              width='600'
              height='300'
              controls='controls'
            />
          </div>
          <img class='mt-8' src={pro} />
        </div>
      </div>

      <div class='flex flex-col mx-8 mt-48 sm:mx-16 md:mx-24 lg:mx-40 xl:mx-72 2xl:mx-96'>
        <h2 class='color-y'>{content.test.title}</h2>
        <p class=''>{content.test.text}</p>
        <div class=''>
          <li>{content.test.li1}</li>
          <li>{content.test.li2}</li>
          <li>{content.test.li3}</li>
        </div>
        <p class='mt-4'>{content.test.text2}</p>
        <div class='flex flex-col mt-16'>
          <h3 class='font-semibold'>{content.test.title3}</h3>
          <p>{content.test.text3}</p>
          <div class='flex flex-col md:flex-row flex-wrap'>
            <div class='btn-p flex flex-col mt-4 sm:min-w-max'>
              <p class='color-g font-semibold'>{content.test.b11}</p>
              <p class='color-g'>{content.test.b12}</p>
            </div>
            <div class='btn-p flex flex-col mt-2 md:ml-2 md:mt-4 lg:mt-4'>
              <p class='color-g font-semibold'>Design</p>
              <p class='color-g'>{content.test.b22}</p>
            </div>
            <div class='btn-p flex flex-col mt-2 lg:ml-2 lg:mt-4 xl:mt-2 xl:ml-0 w-screen'>
              <p class='color-g font-semibold'>{content.test.b31}</p>
              <p class='color-g'>{content.test.b32}</p>
            </div>
            <div class='btn-p flex flex-col mt-2 w-screen'>
              <p class='color-g font-semibold'>{content.test.b41}</p>
              <p class='color-g'>{content.test.b42}</p>
            </div>
            <div class='btn-p flex flex-col mt-2 w-screen'>
              <p class='color-g font-semibold'>{content.test.title4}</p>
              <p class='color-g'>{content.test.text4}</p>
            </div>
          </div>
        </div>
        <div class='flex flex-col mt-16'>
          <h3 class='font-semibold'>{content.test.title5}</h3>
          <div class='flex flex-col'>
            <p class='font-semibold mt-4'>{content.test.subtitle5}</p>
            <p>{content.test.text5}</p>
            <div class='flex flex-col'>
              <img class='mt-8' src={u1} />
            </div>
          </div>
          <div class='flex flex-col mt-16'>
            <p class='font-semibold'>{content.test.subtitle6}</p>
            <p>{content.test.text6}</p>
            <img class='mt-8' src={u3} />
          </div>
        </div>
        <h2 class='mt-16 color-y'>Was nun?</h2>
        <div>
          <p>Seit 2023 befindet sich die App in der Umsetzung. So ganz einfach wie gedacht ist dies ehrlich gesagt nicht. 😅 Nachdem ich ein halbes Jahr damit verbracht habe alles über maschinelles Lernen und verschiedene Algorithmen zu lernen, die das Problem lösen könnten, bin ich daran gescheitert ein geeignetes Datenset für das Lernen zu finden. Nun ist die Entscheidung dahin gefallen das Feature, welches dem Nutzer ein Outfit vorschlagen soll mit einem Entscheidungsbaum abzudecken. Ob dies funktionieren wird, muss ich noch prüfen. Dafür habe ich aber schon mal kleine Features wie dem Hochladen von Kleidungsstücken implementiert. Hier konnte ich mein Wissen zu maschinellem Lernen anwenden sodass nun das Kleidungsstück während dem Hochladen analysiert wird und Farben und Art des Kleidungsstück erkennt. Das nächste Feature was dann folgte war das Anzeigen der gespeicherten Kleidungsstücke. Aber nun wird es aber auch Zeit tiefer in die Materie "Entscheidungsbaum" einzusteigen und zu prüfen, ob der Algorithmus die Lösung für das Outfitvorschlagen Problem ist. 🥳</p>
        </div>
      </div>
    </div>
  );
}

export default Smartdress;
