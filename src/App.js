import logo from './logo.svg';
import './App.css';
import Navbarlist from './Components/Header/Navbarlist';
import Banner from './Components/Banner/Banner';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import ContactForm from './Components/Contact/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='App'>
      <Navbarlist/>
      <Banner/>
      {/* <Skills/> */}
      <Projects/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default App;
