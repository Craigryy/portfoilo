import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import myphoto from './images/myphoto.jpg';
import '../App.css'; 


function About() {
  return (
    <div>
      <section id="about-me">
        <div className="my-photo">
            <img src={myphoto} alt="My Photo" id="my-photo" />
            <h4>Harrison James</h4>
            <br/>
            <button className='btn btn-danger'>say Hi </button>
        </div>
        <div id="about-me-text">
          {/* <h3>
            <span>About Me</span>
          </h3> */}
          <p>
            "I am a passionate software engineer with a deep fascination for the intricate logic behind various concepts.
             I firmly believe that there is a unique kind of beauty in crafting and architecting the backend logic of systems. 
             It's this passion for unraveling the complexity and creating efficient solutions that drives me in my journey as a software engineer."
          </p>
          <p><span>Technologies</span> i have used lately are as follows ; </p>
  
          <ul id="my-tech">
            <li>
              <FontAwesomeIcon icon={faCaretRight} />
              <p>JavaScript</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCaretRight} />
              <p>Python</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCaretRight} />
              <p>SQLAlchemy</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCaretRight} />
              <p>React.js</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCaretRight} />
              <p>HTML</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faCaretRight} />
              <p>CSS</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default About;
