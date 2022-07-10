import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar/navbar';
import Home from './Components/hometop';
import About from './Components/about';
import Projects from './Components/projects';
import Skills from './Components/skills';
import Contact from './Components/contact';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Footer from './Components/footer';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
      {
        // <Routes>
        // <Route exact path='/' element={<Home />} />
        // <Route exact path='/about' element={<About />} />
        // <Route exact path='/projects' element={<Projects />} />
        // <Route exact path='/skills' element={<Skills />} />
        // <Route exact path='/contact' element={<Contact />} />
        // </Routes>
      }
      </Router>
      </div>
  );
}

export default App;
