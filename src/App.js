import './App.css';
import Navbar from './components/Navbar';
import { Router, Routes, Route } from 'react-router-dom';
import AboutMe from './components/AboutMe';


function App() {
  return (
    <>
      <Navbar />
      {/*<Router>
        <Routes>
          <Route path='/' exact />

        </Routes>
      </Router>*/}
      <AboutMe />
    </>
  );
}

export default App;
