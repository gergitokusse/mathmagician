import React, { useState, useEffect } from 'react';
import calculate from '../logic/calculate';

const MyButtons = () => {
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

export default MyButtons;
