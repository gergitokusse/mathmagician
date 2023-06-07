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

export function Qutes() {
  const api = 'https://api.api-ninjas.com/v1/quotes?category=happiness';
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fechData = async () => {
      setLoading(true);
      try {
        const response = await fetch(api, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': 'TMP3+UyJ0pk7Ip/fCXRNbw==CnFZdyifLuqfM7I4',
          },
        });
        const mydata = await response.json();
        setData(mydata);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fechData();
  }, []);

  if (error) {
    return (
      <div className="error">
        Sorry, Something went wrong!
        {error.message}
      </div>
    );
  }
  if (loading) return <div className="loading">Wait moment it is Loading...</div>;

  return (
    <ul>
      {data.map((item) => (
        <li key="{item.catagory}">{item.quote}</li>
      ))}
    </ul>
  );
}

export function API() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos');
      const json = await res.json();
      setData(json);
    };
    fetchData();
  }, [setData]);

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}

export default MyButtons;
