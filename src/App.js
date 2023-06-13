import './App.css';
// eslint-disable-next-line
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Mycalculator from './component/Calculatore';
import Navigation from './component/Navigation';
import { Qutes } from './component/CalculatoreButtons';
import Home from './component/home';

function App() {
  return (
    <div className="App-header">
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Calculatore">
            <Mycalculator />
          </Route>
          <Route path="/Quete">
            <Qutes />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
