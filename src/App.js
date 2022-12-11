import './App.css';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Intro from './pages/Intro';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import { useEffect } from 'react';

function App() {
  const pageID = ['Intro', 'About', 'Skills', 'Projects', 'Contact'];

  const isMobile = window.innerWidth < 768;
  const navigate = (id) => {
    const element = document.querySelector(id);
    element.scrollIntoView({ behavior: 'smooth' });
  }
  // useEffect(() => {
  //   const navLinks = ['About', 'Skills', 'Projects', 'Contact'];
  //   let i = 0;
  //   for (const [index, link] of navLinks.entries()) {
  //     setTimeout(() => {
  //       navigate(`#${link}`);
  //     }, (i++ * 500));
  //   }
  // }, [])

  // useEffect(() => {
  //   setTimeout(() => {
  //     navigate('#Intro');
  //   }, 3000)
  // }, [])

  return (
    <>
      <Header />

      <style>
        {`
          h2{
            font-size: ${isMobile ? '170%' : '3.5vw'};
          }
        `}
      </style>

      {
        [<Intro />, <About />, <Skills />, <Projects />, <Contact />]
          .map((page, index) => {
            return (
              <div
                key={index}
                id={pageID[index]}
                className="page"
              >
                {page}
              </div>
            );
          })
      }
    </>
  );
}

export default App;
