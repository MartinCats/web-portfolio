import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import PreLoader from './components/Preloader';
import { useEffect,useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() =>{
      setIsLoading(false);
    }, 2500); 
  })
  return (
    <div className="App">
      {isLoading === true?   
        <PreLoader/>:
      <div>
        <NavBar /> 
        <Banner />
        <Skills />
        <Projects />
        <Contact />
        <Footer /> 
      </div>
      }
     
     
      
      
      
    
    </div>
  );
}

export default App;
