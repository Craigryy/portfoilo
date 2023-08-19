import './App.css';
import Footer from './components/Footer';
import Tabs from './components/Tabs';
import Intro from './components/intro';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Tabs/>
      <Footer/>
   
    </div>
  );
}

export default App;
