import React from "react";
import { Outlet, Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <div>
//       <Link to="/">Home </Link>
//       <Link to="/about">About Us </Link>
//       <Link to="/shop">Shop Now </Link>
//     </div>
//   );
// };

const Navbar = () => {
  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="">
            <img src="" width="112" height="28" />
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item">
              <Link to="/">Home</Link>
            </a>

            <a class="navbar-item">
            <Link to="/about">About Us</Link>
            </a>

            <a class="navbar-item">
            <Link to="/contact">Contact Us</Link>
            </a>

            {/* Dropdown for nav */}
            {/* <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">More</a>

              <div class="navbar-dropdown">
                <a class="navbar-item">About</a>
                <a class="navbar-item">Jobs</a>
                <a class="navbar-item">Contact</a>
                <hr class="navbar-divider" />
                <a class="navbar-item">Report an issue</a>
              </div>
            </div> */}
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a class="button is-light">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav> */}

      <Outlet />
    </>
  );
};

export default Navbar;
