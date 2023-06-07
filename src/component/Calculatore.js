import React from 'react';
import MyButtons from './CalculatoreButtons';
// import calculate from '../logic/calculate';

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
