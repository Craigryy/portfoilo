import React from 'react';
import '../App.css';


function Navbar() {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h3>Craig.</h3>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">work</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Resume</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Contact</a>
          </li>
        </ul>
      </div>
      
      <div className="container">
      <p className="grey-text">Blog. Code. Repeat</p>
      <h2>Hey there! I'm <span className="red-text">James</span>,</h2>
      <h2>a self-taught software engineer</h2>
    </div>
    </div>
  );
}

export default Navbar;
