import React from 'react';
import './App.css';
import InfoCard from './components/InfoCard';
import 'bulma/css/bulma.min.css';

const App = () => {
  return (
    <div>
      <div className="Wrapper">

        <nav className="navbar" role="navigation" aria-label="main navigation">

          <div id="navbarBasicExample" class="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item">
                Home
              </a>

              <a className="navbar-item">
                Documentation
              </a>

              <div className="navbar-item has-dropdown is-hoverable">
              
                <div className="navbar-dropdown">
                  <a className="navbar-item">
                    Contact
                  </a>
                  <hr className="navbar-divider" />
                  <a className="navbar-item">
                    Report an issue
                  </a>
                </div>
              </div>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-primary">
                    <strong>Sign up</strong>
                  </a>
                  <a className="button is-light">
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>

   

        <div className='Card'>
          <InfoCard name="Asma" age="21">
          </InfoCard>
          <InfoCard name="Bushma" age="21">
          </InfoCard>
          <InfoCard name="Fahma" age="21">
          </InfoCard>
          <InfoCard name="rahma" age="21">
          </InfoCard>
        </div>

      </div>
    </div>

  )
}

export default App;