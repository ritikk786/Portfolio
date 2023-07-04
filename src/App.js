import logo from './logo.svg';
import './App.css';
import Navbarlist from './Components/Header/Navbarlist';
import Banner from './Components/Banner/Banner';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className='App'>
      <Navbarlist/>
      <Banner/>
      {/* <Skills/> */}
      <Projects/>
    </div>
  );
}

export default App;
