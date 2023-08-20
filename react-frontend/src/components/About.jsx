import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import myphoto from './images/myphoto.jpg';
import '../App.css';

function About() {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSayHiClick = () => {
    setShowForm(true);
  };

  const handleSendClick = () => {
    // Implement sending logic here
    // You can use the 'name', 'email', and 'message' variables to access the form data
    console.log('Sending message:', name, email, message);

    // Clear the form fields and hide the form
    setName('');
    setEmail('');
    setMessage('');
    setShowForm(false);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div>
      <section id="about-me">
        <div className="my-photo">
          <img src={myphoto} alt="My Photo" id="my-photo" />
          <h4>Harrison James</h4>
          <br />
          <button className="btn btn-danger" onClick={handleSayHiClick}>
            Say Hi
          </button>
        </div>
        <div id="about-me-text">
          {showForm ? (
            <div>
              <div className="form-header">
                <h3>Let's get connected </h3>
                <button className="close-button" onClick={handleCloseForm}>
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    placeholder='name'
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder='E-mail address'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    id="message"
                    rows="4"
                    placeholder='message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSendClick}
                >
                  Send
                </button>
              </form>
            </div>
          ) : (
            <div>
              <p>
                "I am a passionate software engineer with a deep fascination
                for the intricate logic behind various concepts. I firmly
                believe that there is a unique kind of beauty in crafting and
                architecting the backend logic of systems. It's this passion
                for unraveling the complexity and creating efficient solutions
                that drives me in my journey as a software engineer."
              </p>
              <p>
                <span>Technologies</span> I have used lately are as follows;
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
          )}
        </div>
      </section>
    </div>
  );
}

export default About;
