import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(prev => (prev > 0 ? prev - 1 : 0));
  const reset = () => setCount(0);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', marginTop: '20px' }}>
      <h2>Counter</h2>
      <div style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' }}>
        {count}
      </div>
      <button onClick={increment} style={{ marginRight: '10px', padding: '10px 20px' }}>
        +1
      </button>
      <button onClick={decrement} style={{ marginRight: '10px', padding: '10px 20px' }}>
        -1
      </button>
      <button onClick={reset} style={{ padding: '10px 20px' }}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
