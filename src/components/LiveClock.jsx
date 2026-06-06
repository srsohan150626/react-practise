import { useState, useEffect } from 'react';

function LiveClock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div style={{ fontSize: '18px', fontWeight: 'bold' }}>{time}</div>;
}

export default LiveClock;
