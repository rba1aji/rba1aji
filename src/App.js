import './App.css';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Intro from './pages/Intro';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

function App() {
  return (
    <>
      <Header />
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
