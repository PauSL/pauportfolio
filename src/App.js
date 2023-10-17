
import './App.css';
import  { NavBar }  from './components/NavBar';
import { Hero} from './components/Hero';
import {Skills} from './components/Skills';
import {Projects} from './components/Projects';
import About from './components/About';


function App() {
  return (
    <div className="App">
        <NavBar /> 
        <Hero />
        <About />
        <Skills />
        <Projects />
    </div>
  );
}

export default App;
