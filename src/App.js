import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bulma/css/bulma.min.css';
import './App.css';

//importing components*****
import InfoCard from './components/InfoCard';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NoPage from './components/NoPage';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

const App = () => {
  return (
        <div className='My-app'>
          <Router>
            <Routes>
              
              <Route path="/" element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="login" element={<Login />} />
              <Route path="*" element={<NoPage />} />
              </Route>
            </Routes>


              {/* <div className="App">
                <div className="content">
                  <switch>
                    <Route path="/">
                      <Home />
                    </Route>
                    
                    <Route path="/infoCard">
                      <InfoCard />
                    </Route>
                  </switch> 
                </div>  
              </div> */}
          </Router>
        </div>

  )
}

export default App;