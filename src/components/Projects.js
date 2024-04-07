import React, { useState } from 'react';
import CardItems from './CardItems';
import nazzle from '../assets/nazzle.png';
import smartdress from '../assets/smartdress.png';
import storyline from '../assets/storyline.png';
import data from '../content/projectPre.json';

function Projects(props) {
  let content = data;
  props.language === 'Deutsch'
    ? (content = data.Deutsch)
    : (content = data.English);

  return (
    <div id='projects' className='container mx-auto'>
      <h1 className='text-center mx-4 sm:mx-16 lg:mx-32 xl:mx-48 2xl:mx-80 mt-80 md:mt-0'>
        {content.head}
      </h1>
      <div class='-mt-8 md:mt-8'>
        <CardItems
          bg='bg-smartdress'
          title={content.SmartDress.title}
          subtitle={content.SmartDress.subtitle}
          description={content.SmartDress.description}
          src={smartdress}
          link='/project/smartdress'
          btn={content.btn}
        />
        <div class='card-spacing' />
        <CardItems
          bg='bg-storyline'
          title={content.Storyline.title}
          subtitle={content.Storyline.subtitle}
          description={content.Storyline.description}
          src={storyline}
          link='/project/storyline'
          btn={content.btn}
        />
        <div class='card-spacing' />
        <CardItems
          bg='bg-nazzle'
          title={content.Nazzle.title}
          subtitle={content.Nazzle.subtitle}
          description={content.Nazzle.description}
          src={nazzle}
          link='/project/nazzle'
          btn={content.btn}
        />
      </div>
    </div>
  );
}

export default Projects;
