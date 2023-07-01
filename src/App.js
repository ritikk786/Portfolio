import logo from './logo.svg';
import './App.css';
import Navbarlist from './Components/Header/Navbarlist';
import Banner from './Components/Banner/Banner';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <div className='App'>
      <Navbarlist/>
      <Banner/>
      {/* <Skills/> */}
    </div>
  );
}

export default App;
