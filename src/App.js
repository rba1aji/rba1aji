import './App.css';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Intro from './pages/Intro';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import { useEffect } from 'react';

function App() {
  const isMobile = window.innerWidth < 768;
  const navigate = (id) => {
    const element = document.querySelector(id);
    element.scrollIntoView({ behavior: 'smooth' });
  }
  useEffect(() => {
    let navLinks = document.querySelectorAll('a');
    navLinks = [...navLinks, 'Intro']
    for (const [index, link] of navLinks.entries()) {
      setTimeout(() => {
        navigate(`#${link.innerHTML}`);
      }, (index * 150));
    }
  }, [])

  useEffect(() => {
    setTimeout(() => {
      navigate('#Intro');
    }, 1000)
  })

  return (
    <>
      <Header />

      <style>
        {`
          h2{
            font-size: ${isMobile ? 'auto' : '3.5vw'};
          }
        `}
      </style>

      {
        [<Intro />, <About />, <Skills />, <Projects />, <Contact />]
          .map((page, index) => {
            return (
              <div
                key={index}
                id={page.type.name}
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
