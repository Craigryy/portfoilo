// import React, { useState } from 'react';
// import '../App.css';
// import { FaChrome, FaInfoCircle, FaInstagram } from 'react-icons/fa';

// function Tabs() {
//   const [activeTab, setActiveTab] = useState('categories');

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className="tabs-container">
//       <ul className="tabs">
//         <li
//           className={`tab ${activeTab === 'categories' ? 'active' : ''}`}
//           onClick={() => handleTabClick('categories')}
//         >
//           <FaChrome /> Categories
//         </li>
//         <li
//           className={`tab ${activeTab === 'about' ? 'active' : ''}`}
//           onClick={() => handleTabClick('about')}
//         >
//           <FaInfoCircle /> About
//         </li>
//         <li
//           className={`tab ${activeTab === 'instagram' ? 'active' : ''}`}
//           onClick={() => handleTabClick('instagram')}
//         >
//           <FaInstagram /> Instagram
//         </li>
//       </ul>
      
//       <div className="tab-content">
//         {activeTab === 'categories' && <div>Categories Content</div>}
//         {activeTab === 'about' && <div>About Content</div>}
//         {activeTab === 'instagram' && <div>Instagram Content</div>}
//       </div>
//     </div>
//   );
// }

// export default Tabs;


import React, { useState } from 'react';
import '../App.css';
import { FaChrome, FaInfoCircle, FaInstagram } from 'react-icons/fa';
import About from './About'; // Import the About component


function Tabs() {
  const [activeTab, setActiveTab] = useState('categories');

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
          onClick={() => handleTabClick('categories')}
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
        {activeTab === 'categories' && <div>Categories Content</div>}
        {activeTab === 'instagram' && <div>Instagram Content</div>}
      </div>
    </div>
  );
}

export default Tabs;

