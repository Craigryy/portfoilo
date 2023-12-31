import React, { useState } from "react";

function Footer() {
  const year = new Date().getFullYear();
  const [message,setMessage]= useState('');


  return (
    <footer>
      <h3>Get in touch</h3>
      <br/>
      <ul className="social-links">
        <li className="nav-item">
          <a className="nav-link" href="http://instagram.com/craigry_/">
            Instagram
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Linkedln
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://github.com/Craigryy/">
            Github
          </a>
        </li>
      </ul>
      <br />
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
