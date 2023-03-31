
import './App.css';
import Databar from './component/Databar';
import Fetchapi from './component/Fetchapi';
import Fatchapi from './component/Fetchapi';
import { Footer } from './component/Footer';
import { Hexmap } from './component/Hexmap';
import Navbar from './component/Navbar';
import { MainBodyLayout } from './MainBodyLayout';

function App() {

  return (
    <>
        <Navbar />
      <Hexmap />
      <Footer />
    </>
  );
}

export default App;
