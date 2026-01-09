import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h2>Счетчик: {count}</h2>
      <div className="counter-buttons">
        <button onClick={() => setCount(count - 1)}>-1</button>
        <button onClick={() => setCount(0)}>Сбросить</button>
        <button onClick={() => setCount(count + 1)}>+1</button>
      </div>
      <p>Текущее значение: <strong>{count}</strong></p>
    </div>
  );
}

export default Counter;