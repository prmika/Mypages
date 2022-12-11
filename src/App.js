import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import { Router, Routes, Route } from 'react-router-dom';


function App() {
  let Component
  switch (window.location.pathname){
    case "/":
      Component = Home
      break
      case "/projects":
      Component = Projects
      break
      case "/aboutme":
        Component = AboutMe
        break
  }
  return (
    <>
      <Navbar />
      <div className='App'>
     
      <Component />
      </div>
    </>
  );
}

export default App;
