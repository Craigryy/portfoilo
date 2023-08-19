import React, { useState } from 'react';
import '../App.css';
import { FaChrome, FaInfoCircle, FaInstagram } from 'react-icons/fa';
import About from './About'; 
import CategoryList from './categories';


function Tabs() {
  const [activeTab, setActiveTab] = useState('about');
  // const [message,setMessage] = useState('')

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabs-container">
      <ul className="tabs">
        <li
          className={`tab ${activeTab === 'about' ? 'active' : ''}`}
          onClick={() => handleTabClick('about')}
        >
          <FaInfoCircle /> About
        </li>
        <li
          className={`tab ${activeTab === 'categories' ? 'active' : ''}`}
          onClick={() => handleTabClick('projects')}
        >
          <FaChrome /> Projects
        </li>
        <li
          className={`tab ${activeTab === 'categories' ? 'active' : ''}`}
          onClick={() => handleTabClick('categories')}
        >
          <FaChrome /> Categories
        </li>
        <li
          className={`tab ${activeTab === 'instagram' ? 'active' : ''}`}
          onClick={() => handleTabClick('instagram')}
        >
          <FaInstagram /> Instagram
        </li>
      </ul>
      
      <div className="tab-content">
        {activeTab === 'about' && <About />} 
        {activeTab === 'categories' && <CategoryList/>}
        {activeTab === 'instagram' && <div>Instagram Content</div>}
        {activeTab === 'projects' && <div>my projects</div>}
      </div>
      <hr/>
      <div>
        <h3> want to hear more from me ?</h3>
        <h3>Send me a mail and am sure to get<span>back to you</span> </h3>
        {/* <input
            type="text"
            className="form-control"
            name="name"
            placeholder="message "
            value={message}
            onChange={e => setMessage(e.target.value)}
          /> */}
      
      </div>
    </div>
  );
}

export default Tabs;

