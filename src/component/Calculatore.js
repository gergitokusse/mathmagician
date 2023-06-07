import React from 'react';
import CalButtons, { MyCalButtons, MyButtons } from './CalculatoreButtons';
// import calculate from '../logic/calculate';

export function Calculatore() {
  return (
    <div className="container">
      <input type="text" className="type-area" />
      <CalButtons />
      <MyCalButtons />
    </div>
  );
}

class Mycalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="container">
        <MyButtons />
      </div>
    );
  }
}

export default Mycalculator;
