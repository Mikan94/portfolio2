import React, { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Hero from './components/Hero';
import About from './components/About';
import Sidebar from './components/Sidebar';
import Projects from './components/Projects';
import ScrollToTop from './components/ScrollToTop';

import Smartdress from './pages/Smartdress';
import Nazzle from './pages/Nazzle';
import Storyline from './pages/Storyline';
import Who from './pages/Who';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function App() {
  let languageStoredInLocalStorage = localStorage.getItem('language');
  let [language, setLanguage] = useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : 'Deutsch'
  );

  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop />
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route exact path='/'>
              <Navbar
                language={language}
                handleSetLanguage={(language) => {
                  setLanguage(language);
                  storeLanguageInLocalStorage(language);
                }}
              />
              <Hero language={language} />
   
              <Projects language={language} />
            </Route>
          </Switch>
        </AnimatePresence>
 
          <Switch>
            <Route exact path='/project/smartdress'>
              <Smartdress language={language} />
            </Route>
            <Route exact path='/project/nazzle'>
              <Nazzle language={language} />
            </Route>
            <Route exact path='/project/storyline'>
              <Storyline language={language} />
            </Route>

            <Route exact path='/whoiam'>
              <Who language={language} />
            </Route>
          </Switch>
    
        <AnimatePresence>
          <Switch>
            <Route exact path='/project/smartdress' />
            <Route exact path='/project/nazzle' />
            <Route exact path='/project/storyline' />
            <Route exact path='/whoiam' />
            <Route path='/'>
              <div class='spacing' />
              <About language={language} />
              <div class='spacing' />
              <Contact language={language} />
              <Sidebar />
            </Route>
          </Switch>
        </AnimatePresence>
        <Footer language={language} />
      </Router>
    </>
  );
}
function storeLanguageInLocalStorage(language) {
  localStorage.setItem('language', language);
}

export default App;
