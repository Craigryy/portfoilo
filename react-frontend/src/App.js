import './App.css';
import Footer from './components/Footer';
import Tabs from './components/Tabs';
import Navbar from './components/navbar';
import { useState,useEffect } from 'react';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Tabs/>
       <br/>
      <Footer/>
   
    </div>
  );
}

export default App;
