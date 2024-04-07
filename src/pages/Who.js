import React, {useRef} from 'react';
import { useIntersection } from 'react-use';
import gsap from 'gsap'; 
import x from '../assets/x.svg';
import data from '../content/aboutDetail.json';
import img from '../assets/about2.png';

import { useHistory } from 'react-router-dom';

function Who(props) {
  let content = data;
  props.language === 'Deutsch'
    ? (content = data.Deutsch)
    : (content = data.English);

  const history = useHistory();

  const sectionRef = useRef(null);
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
  })

  const fadeIn = element => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -60,
      ease: "power4.out",
      stagger: {
        amount: 0.3
      }
    });
  };

const fadeOut = element => {
  gsap.to(element, 1, {
    opacity: 0,
    y: -20,
    ease: "power4.out"
  });
};


  intersection && intersection.intersectionRatio < 0.5 ?
  fadeOut(".fadeIn") : fadeIn(".fadeIn");

  return (
    <section class='container mx-auto'>
      <div>
        <button
          class='btn fixed z-40 top-4 right-4 sm:top-8 sm:right-8 bg-white transform hover:scale-110 transition duration-500 ease-in-out focus:outline-none'
          onClick={() => {
            history.push('/');
          }}
        >
          <img src={x} />
        </button>
      </div>
      <div className='flex flex-col lg:flex-row mx-8 sm:mx-16 md:mx-28 xl:mx-48 2xl:mx-80 mt-16 md:mt-24 lg:mt-8'>
        <div className='flex flex-col items-center sm:items-start order-2 z-10 mt-8 sm:mx-4 lg:ml-24 lg:mr-8 xl:ml-40 md:mt-16 lg:mt-20 xl:mt-8'>
          <p className=''>{content.intro.text1}</p>
          <p className='mb-8'>{content.intro.text2}</p>
          <p className=''>{content.intro.text3}</p>
        </div>
        <div className='flex mt-8 justify-center items-center'>
          <img
            src={img}
            className=' rounded relative w-80 sm:w-80 lg:w-96 2xl:ml-64 z-10 self-center shadow-lg order-1 lg:ml-40 lg:mr-16 xl:ml-64 xl:mr-16'
            alt='img'
          />
        </div>
      </div>
      <div className='flex flex-col items-center order-2 text-base z-10 mt-32 sm:mx-12 md:mx-24 lg:mx-32 xl:mx-64 2xl:mx-96'>
        <ul class='list-none list-outside text-white'>
          <h2 class='mx-8 color-y'>{content.thinking.title}</h2>
          <li class='mt-8 ml-8 mr-8'>{content.thinking.text1}</li>
          <li class='mt-8 ml-8 mr-8'>{content.thinking.text2}</li>
          <li class='mt-8 ml-8 mr-8'>{content.thinking.text3}</li>
          <li class='mt-8 ml-8 mr-8'>{content.thinking.text4}</li>
        </ul>
      </div>

      <div className='flex flex-col order-2 z-10 sm:mx-12 mt-32 md:mx-24 lg:mx-32 xl:mx-64 2xl:mx-96'>
        <h2 class='mx-8 color-y'>{content.experience.title}</h2>
        <ul class='list-none list-outside text-white'>
          <li class='flex flex-col lg:flex-row mt-8 mx-8'>
            <li>{content.experience.year1}</li>
            <text>
              <span
                class='lg:pl-2 link-ex'
                onClick={() => window.open('https://convidera.com/', '_blank')}
              >
                // Convidera GmbH
              </span>
            </text>
            <text class='lg:pl-2 '>{content.experience.job1}</text>
          </li>
          <li class='flex flex-col lg:flex-row mt-8 mx-8'>
            <li>{content.experience.year2}</li>
            <text>
              <span
                class='lg:pl-2 link-ex'
                onClick={() =>
                  window.open('https://www.schacht.one/', '_blank')
                }
              >
                // Schacht One GmbH
              </span>
            </text>
            <text class='lg:pl-2'>{content.experience.job1}</text>
          </li>
          <li class='flex flex-col lg:flex-row mt-8 mx-8'>
            <li>{content.experience.year3}</li>
            <text>
              <span
                class='lg:pl-2 link-ex'
                onClick={() =>
                  window.open('https://www.otto-gourmet.de/', '_blank')
                }
              >
                // Otto Gourmet GmbH
              </span>
            </text>
            <text class='lg:pl-2'>{content.experience.job2}</text>
          </li>
        </ul>
      </div>

      <div ref={sectionRef} className='flex flex-col order-2 z-10 sm:mx-12 mt-32 md:mx-24 lg:mx-32 xl:mx-64 2xl:mx-96'>
        <h2 class='mx-8 color-y'>{content.knowledge.title}</h2>
        <ul class='list-none list-outside text-white'>
          <li class='flex flex-col lg:flex-row mt-8 mx-8 sm:mx-8'>
            <li>Hochschule Ruhr West (2016 - 2021)</li>
            <text class='lg:pl-2'>// Bachelor of Science</text>
            <text class='lg:pl-2'>{content.knowledge.subject}</text>
          </li>
          <li class='flex flex-col lg:flex-row mt-8 mx-8 sm:mx-8'>
            <li>Gesamtschule (2011 - 2012)</li>
            <text class='lg:pl-2'>{content.knowledge.degree}</text>
          </li>
          <li class='flex flex-col lg:flex-row mt-8 mx-8 sm:mx-8'>
            <li>Hauptschule (2006 - 2011)</li>
            <text class='lg:pl-2'>// Fachoberschulreife</text>
          </li>
        </ul>
      </div>
      <div className='flex flex-col order-2 z-10 sm:mx-12 mt-32 md:mx-24 lg:mx-32 xl:mx-64 2xl:mx-96'>
        <ul class='list-none list-outside text-white'>
          <h2 class='mx-8 color-y'>{content.outside.title}</h2>

          <li class='mt-8 ml-8 mr-8'>
            {content.outside.text1}
            <span
              class='mx-1 link-ex'
              onClick={() =>
                window.open(
                  'https://www.strava.com/athletes/annemink',
                  '_blank'
                )
              }
            >
              {content.outside.text1link}
            </span>
            {content.outside.text11}
          </li>

          <li class='mt-4 ml-8 mr-8'>
            <li>
              {content.outside.text2}
              <span
                class='ml-1 link-ex'
                onClick={() =>
                  window.open(
                    'https://www.last.fm/user/minkmountainjr',
                    '_blank'
                  )
                }
              >
                {content.outside.text2link}
              </span>
              {content.outside.text22}
            </li>
          </li>
          <li class='list-none mt-4 ml-8 mr-8'>{content.outside.text3}</li>
          <li class='list-none mt-4 ml-8 mr-8'>{content.outside.text4}</li>

          <li class='font-bold text-md mt-12 ml-8 mr-8'>
            {content.outside.subtitle}
          </li>
          <li class='mt-4 ml-8 mr-8'>{content.outside.text5}</li>
          <li class='mt-4 ml-8 mr-8'>{content.outside.text6}</li>
        </ul>
      </div>
    </section>
  );
}

export default Who;
