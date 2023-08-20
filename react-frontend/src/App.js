import './App.css';
import Footer from './components/Footer';
import Tabs from './components/Tabs';
import Navbar from './components/navbar';
import { useState,useEffect } from 'react';

function App() {

  const [categories,setCategories]= useState([]);
  const [blog,setBlogPost]= useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/categories/', {
      method: 'GET',
      headers: {
        "Content-Type": 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(resp => setCategories(resp))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/blogPost/', {
      method: 'GET',
      headers: {
        "Content-Type": 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(resp => setBlogPost(resp))
      .catch(error => console.log(error));
  }, []);




  return (
    <div className="App">
      <Navbar/>
      <Tabs
       categories={categories}
       blog = {blog}
       />
       <br/>
      <Footer/>
   
    </div>
  );
}

export default App;
