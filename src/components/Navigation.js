import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';


class Navigation extends React.Component {
  render() {
    function handleClick(e) {
      e.preventDefault();
      let mainNav = document.getElementById('js-menu');
      mainNav.classList.toggle('active');
    }

    return (
      <header>
        <nav className="navbar">
          <span className="navbar-toggle" id="js-navbar-toggle" onClick={handleClick}>&#9776;</span>

          <div className="left-nav">
            <NavLink to='/' className="name">Praiz<span>Ux</span></NavLink>
          </div>

          <div className="right-nav">
            <ul className="main-nav" id="js-menu">
              <li>
                <NavLink to='/' className="nav-links current">Home</NavLink>
              </li>

              <li>
                <NavLink to='/about' className="nav-links">About</NavLink>
              </li>

              <li>
                <NavLink to='/#work' className="nav-links">Work</NavLink>
              </li>

              <li>
                <a href="https://anchor.fm/praizux" rel="noopener noreferrer" target="_blank" className="nav-links">Podcast</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navigation;