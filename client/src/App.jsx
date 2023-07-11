import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Header/Header.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path={'/home' || ''} element={<Home />} />
          <Route path='/about' element={<About/>} />
          {/* <Route path='/contact' element={<Contact/>} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
