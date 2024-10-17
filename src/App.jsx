import RHF from './components/RHF';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loginform from './components/Loginform';
import Home from './components/Home';

function App() {


  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Loginform />} />
        <Route path="/signup" element={<RHF />} />
      </Routes>
    </Router>
      )
}

export default App
