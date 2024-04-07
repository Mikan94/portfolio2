import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import data from '../content/aboutPre.json';

function About(props) {
  let content = data;
  props.language === 'Deutsch'
    ? (content = data.Deutsch)
    : (content = data.English);
  const history = useHistory();

  function handleClick() {
    history.push('/whoiam');
  }

  return (
    <section id='about' className='container mx-auto'>
      <h1 className='text-center mx-8 sm:mx-8 lg:mx-32 xl:mx-48 lg:-mt-24 2xl:mx-80'>
        {content.title}
      </h1>

      <div className='flex flex-col md:flex-row md:justify-around mx-8 sm:mx-16 lg:mx-32 xl:mx-48 2xl:mx-80 mt-0 md:mt-8'>
        <div className='flex flex-col order-2 md:my-auto md:z-10 mt-8 sm:px-16 md:px-4 xl:pr-16'>
          <p className=''>{content.text1}</p>
          <p>{content.text2}</p>
          <p class='mt-4'>{content.text3}</p>

          <Link to='/whoiam' class='self-center lg:self-start'>
            <button
              class='btn-4-y mt-8'
              onClick={() => {
                history.goForward();
              }}
            >
              {content.btn}
            </button>
          </Link>
        </div>
        <div className='flex justify-center items-center order-1 md:order-2 mt-8 md:mt-0'>
          <img
            className='img-change rounded relative sm:w-80 md:mx-32 2xl:w-full z-10 self-center shadow-lg order-1'
            alt='img'
          />
        </div>
      </div>
    </section>
  );
}

export default About;
