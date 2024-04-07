import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import linked from '../assets/linkedin.svg';
import mail from '../assets/mail.svg';

function Sidebar() {
  return (
    <section className='fixed hidden lg:flex bottom-0 right-12 z-50'>
      <div className='flex flex-col'>
        <ul className='content-center'>
          <li className='flex'>
            <Link
              className='mb-4'
              onClick={() =>
                window.open('mailto:minkenberg-anne@web.de', '_blank')
              }
            >
              <img src={mail} id='i-mail' />
            </Link>
          </li>
          <li className='flex'>
            <Link
              className='mb-4'
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/anne-minkenberg-4a5961161/',
                  '_blank'
                )
              }
            >
              <img src={linked} id='i-linked' />
            </Link>
          </li>
          <li className='line-vert'></li>
        </ul>
      </div>
    </section>
  );
}

export default Sidebar;
