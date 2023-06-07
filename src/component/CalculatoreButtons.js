import React, { useState, useEffect } from 'react';
import calculate from '../logic/calculate';

function CalButtons() {
  return (
    <div className="calbutton">
      <span id="AC">AC</span>
      <span id="+/-">+/-</span>
      <span id="%">%</span>
      <span className="opration" id="+">+</span>
      <span id="7">7</span>
      <span id="8">8</span>
      <span id="9">9</span>
      <span className="opration" id="*">*</span>
      <span id="4">4</span>
      <span id="5">5</span>
      <span id="6">6</span>
      <span id="-" className="opration">-</span>
      <span id="1">1</span>
      <span id="2">2</span>
      <span id="3">3</span>
      <span id="+" className="opration">+</span>
      <span id="0" className="zero">0</span>
      <span id=".">.</span>
      <span id="=" className="opration">=</span>
    </div>
  );
}

export class MyCalButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="calbutton">
        <button className="btn" type="button">AC</button>
        <button className="btn" type="button">+/-</button>
        <button className="btn" type="button">%</button>
        <button className="btn opration" type="button">+</button>
        <button className="btn" type="button">7</button>
        <button className="btn" type="button">8</button>
        <button className="btn" type="button">9</button>
        <button className="btn opration" type="button">*</button>
        <button className="btn" type="button">4</button>
        <button className="btn" type="button">5</button>
        <button className="btn" type="button">6</button>
        <button className="btn opration" type="button">-</button>
        <button className="btn" type="button">1</button>
        <button className="btn" type="button">2</button>
        <button className="btn" type="button">3</button>
        <button className="btn opration" type="button">+</button>
        <button className="btn zero" type="button">0</button>
        <button className="btn" type="button">.</button>
        <button className="btn opration" type="button">=</button>
      </div>
    );
  }
}

export const MyButtons = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  useEffect(() => {
    const MyButtons = document.querySelectorAll('.btn');
    const btnEventHandler = (e) => {
      const response = calculate({ total, next, operation }, e.target.innerText);
      setTotal(response.total);
      setNext(response.next);
      setOperation(response.operation);
    };

    MyButtons.forEach((button) => {
      button.addEventListener('click', btnEventHandler);
    });

    return () => {
      MyButtons.forEach((button) => {
        button.removeEventListener('click', btnEventHandler);
      });
    };
  }, [total, next, operation]);
  return (
    <div className="calbutton">
      <div className="type-area">
        {total || 0}
        { operation }
        { next }
      </div>
      <button className="btn" type="button">AC</button>
      <button className="btn" type="button">+/-</button>
      <button className="btn" type="button">%</button>
      <button className="btn opration" type="button">÷</button>
      <button className="btn" type="button">7</button>
      <button className="btn" type="button">8</button>
      <button className="btn" type="button">9</button>
      <button className="btn opration" type="button">x</button>
      <button className="btn" type="button">4</button>
      <button className="btn" type="button">5</button>
      <button className="btn" type="button">6</button>
      <button className="btn opration" type="button">-</button>
      <button className="btn" type="button">1</button>
      <button className="btn" type="button">2</button>
      <button className="btn" type="button">3</button>
      <button className="btn opration" type="button">+</button>
      <button className="btn zero" type="button">0</button>
      <button className="btn" type="button">.</button>
      <button className="btn opration" type="button">=</button>
    </div>
  );
};

export default CalButtons;
