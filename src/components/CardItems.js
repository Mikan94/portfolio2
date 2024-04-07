import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

function CardItems(props) {
  return (
    <div className='container z-30'>
      <div className='card-grow hover:shadow-xl my-12 mx-8 sm:mx-16 lg:mx-32 xl:mx-48 2xl:mx-80'>
        <div
          className={`shadow-md rounded overflow-hidden flex flex-col lg:flex-row ${props.bg}`}
        >
          <img
            className='z-0 max-h-64 px-4 sm:max-h-80 order-1 lg:order-2 mx-auto my-12 sm:my-16 lg:mr-8 lg:max-h-96 xl:mr-16'
            src={props.src}
          ></img>
          <div className='flex flex-col justify-between order-2 lg:order-1 mb-12 sm:my-16 mx-6 sm:mx-16'>
            <div className=''>
              <h2 className='z-30 absolute'>{props.title}</h2>
              <h4 className='mt-10 xl:mt-12 font-semibold'>{props.subtitle}</h4>
              <p className='mt-4 mb-8'>{props.description}</p>
            </div>

            <div className=''>
              <div className='justify-center flex mt-2 lg:justify-start'>
                <Link to={props.link} className=''>
                  <button class='btn-4'>{props.btn}</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CardItems;
