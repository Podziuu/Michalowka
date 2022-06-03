import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="font-roboto">
      <NavBar/>
      <Home/>
      {/* <AboutUs/> */}
    </div>
  );
}

export default App;
