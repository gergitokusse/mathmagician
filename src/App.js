import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mycalculator from './component/Calculatore';
import Navigation from './component/Navigation';
import { Qutes } from './component/CalculatoreButtons';
import Home from './component/home';

function App() {
  return (
    <div className="App-header">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Calculatore" element={<Mycalculator />} />
          <Route path="/Quete" element={<Qutes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
