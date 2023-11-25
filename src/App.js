import { Routes, Route } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Homepage from './pages/Homepage';
import About from './pages/About';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/about" element={<About/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;