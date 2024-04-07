import React, { useState, useEffect } from 'react';
import './Hel.css';
import hel from '../assets/hel.png';
import x from '../assets/x.svg';

import { Link, useHistory } from 'react-router-dom';

function Hel() {
  const history = useHistory();

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
      <div>
        <button
          class='btn fixed z-40 top-4 right-4 sm:top-8 sm:right-8 bg-white transform hover:scale-110 transition duration-500 ease-in-out'
          onClick={() => {
            history.push('/');
          }}
        >
          <img src={x} />
        </button>
      </div>

      <div class='hero-bg-h flex flex-row justify-center py-32'>
        <div class='flex flex-col pt-16'>
          <h2>Hygiene Experience Lab</h2>
          <p>Here is a fucking description</p>
        </div>
        <img src={hel} class='pl-32' />
        <section class='fixed bottom-8 mx-auto'>
          <p class={visible ? 'scroll-ani bounce' : 'hidden'}>Scroll 👇</p>
        </section>
      </div>

      <div class='flex flex-col lg:flex-row'>
        <div class='flex flex-row'>
          <div class='flex-col'>
            <h2 class='color-y'>Overview</h2>
            <p>
              The Hygiene Experience Lab is a project that aims to turn the use
              of public toilets into an experience. For this purpose, premises
              are to be technically converted so that an experience is created
              where the users can use contactless control elements.
            </p>
          </div>
          <div class='flex flex-col'>
            <img src={hel} />
          </div>
        </div>
      </div>

      <div class='flex flex-row'>
        <div class='flex flex-col'>
          <h3>Project</h3>
          <p>Client work</p>
        </div>
        <div class='flex flex-col'>
          <h3>Time</h3>
          <p>3 month (2019 - 2020)</p>
        </div>
        <div class='flex flex-col'>
          <h3>Role</h3>
          <p>UI Designer</p>
        </div>
        <div class='flex flex-col'>
          <h3>What I have done</h3>
          <p>Brand Design</p>
          <p>Styleguide</p>
          <p></p>
          <p>Mockups (Mobile & Desktop)</p>
        </div>
      </div>

      <div>
        <h2>Making public toilets great again 🥳</h2>
        <div class='flex flex-row'>
          <div class='flex flex-col'>
            <h3>Problem</h3>
            <p>
              Many people, especially women, shy away from public toilets when
              they need to use them. The sight of public toilets are often
              disgusting and rather invite to turn back. Public toilets should
              be hygienic and clean.
            </p>
          </div>
          <div class='flex flex-col'>
            <h3>Solution</h3>
            <p>
              In the first step of the solution, the Hygiene Experience Lab
              should be a contact point for companies that offer products for
              the hygiene sector. Therefore, a landing page was developed that
              invites clients and interested companies to collaborate.
              Furthermore, a community was to be created via the landing page,
              which would exchange information and benefit from each other in
              the hygiene sector.
            </p>
          </div>
        </div>
      </div>

      <div class='flex flex-col'>
        <div class='flex flex-col'>
          <h3>Sneak Peek solution</h3>
        </div>
        <div class='flex flex-row w-screen'>
          <img src={hel} />
          <img src={hel} />
        </div>
        <button>bring me to solution</button>
      </div>

      <div class='flex flex-col'>
        <h2>Project scope</h2>
        <div class='flex flex-row'>
          <div class='flex flex-col'>
            <h3>Branding</h3>
            <p>
              The logo was to become self-explanatory, while the brand’s
              terminology was rather invisible/not tangible, and the challenge
              was to visualize it.
            </p>
          </div>
          <div class='flex flex-col'>
            <h3>UI Design</h3>
            <p>
              The Langingpage should become a OnePager, so that the user gets
              information at a glance and gets it closer by storytelling.
            </p>
          </div>
          <div class='flex flex-col'>
            <h3>Video</h3>
            <p>
              In order to better present the problem statement, public toilets
              were visited and recorded on video.
            </p>
          </div>
        </div>
      </div>

      <div class='flex flex-col'>
        <h2>Brand Identity - Styleguide</h2>
        <div class='flex flex-col'>
          <h3>logo</h3>
          <img src={hel} />
          <p>
            The logo is a combination of symbols and font. This is to ensure
            that the word mark paired with the symbols leads to faster
            imprinting.
          </p>
          <img src={hel} />
        </div>
        <div class='flex flex-col'>
          <h3>Symbol</h3>
          <div class='flex flex-col'>
            <img src={hel} />
            <p>
              The symbol represents a soap bubble that metaphorically
              characterizes intangible hygiene.
            </p>
          </div>
          <div class='flex flex-col'>
            <img src={hel} />
            <p>
              With the X, not only the word „experience“ is to be clarified, but
              also that each visit creates a new experience.
            </p>
          </div>
          <div class='flex flex-col'>
            <img src={hel} />
            <p>As a rounded rectangle, it symbolizes the laboratory.</p>
          </div>
        </div>
        <div class='flex flex-col'>
          <h3>Typography</h3>
          <div class='flex flex-col'>
            <img src={hel} />
            <p>
              The font of the logo should give a strong but friendly impression.
              It was recommended to use the sans serif font „Biko“, because the
              rounded soft letters and the straight-line geometry of these
              letters convey this at the same time.
            </p>
          </div>
          <div class='flex flex-col'>
            <img src={hel} />
            <p>
              Poppins is a strong and straight-line sans serif typeface designed
              to convey the overall brand image in written form on the website
              or print products.
            </p>
          </div>
        </div>
      </div>

      <div class='flex flex-col'>
        <h2>Landing page</h2>
        <p>
          The Landingpage was created as OnePager for Mobile and Desktop. In
          order to reduce the data volume of the users, the problem statement
          video of the mobile pages was replaced with text. On the desktop page
          this can be seen directly at the beginning.
        </p>
        <img src={hel} />
        <img src={hel} />
      </div>
    </div>
  );
}

export default Hel;
