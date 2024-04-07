import React from 'react';
import { Link } from 'react-router-dom';
import data from '../content/footer.json';

function Footer(props) {
  let content = data;
  props.language === 'Deutsch'
    ? (content = data.Deutsch)
    : (content = data.English);

  return (
    <div className='container mx-auto mt-64 py-4'>
      <div className='flex flex-col mx-8 md:flex-row md:justify-around md:mx-16'>
        <section className='flex justify-center text-center order-2 md:order-1'>
          <p class='text-sm'>{content.text}</p>
        </section>
        <section className='flex justify-center order-1 md:order-2 my-2 md:my-0 lg:my-0'>
          <p class='text-sm'>See ya in the future 👋</p>
        </section>
      </div>
    </div>
  );
}

export default Footer;
