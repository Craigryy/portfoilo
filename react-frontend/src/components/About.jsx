import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

function About() {
  return (
    <div>
      <section id="about-me">
        <div className="my-photo">
            <img src="./images/myphoto.jpg" alt="myPhoto" id="my-photo"></img>
            <h4>Harrison James</h4>
            <p>10 Articles</p>
        </div>
        <div id="about-me-text">
          <h3>
            <span>About Me</span>
          </h3>
          <p>
            I am <span>Software Engineer</span>. I have always been in awe of web pages that pay attention to aesthetics and also creativity. I have then derived pleasure in creating web products that are responsive and user-friendly.
          </p>
          <p>
            Some of the <span>Technologies</span> I have used to build stuff lately:
          </p>
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
