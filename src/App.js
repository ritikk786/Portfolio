import logo from './logo.svg';
import './App.css';
import Navbarlist from './Components/Header/Navbarlist';
import Banner from './Components/Banner/Banner';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import ContactForm from './Components/Contact/Contact';

function App() {
  return (
    <div className='App'>
      <Navbarlist/>
      <Banner/>
      {/* <Skills/> */}
      <Projects/>
      <ContactForm/>
    </div>
  );
}

export default App;
