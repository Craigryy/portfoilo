import React from 'react';

function Navbar() {
  return (
    <div>
      {/* Navigation */}
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
    </div>
  );
}

export default Navbar;
