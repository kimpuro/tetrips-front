'use client';
import React, { useState } from 'react';

export default function ParentComponent() {
  const [count, setCount] = useState(0);

  const changeCount = (value:number) => {
    setCount(prevCount => value); // Update count correctly
  };

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent onIncrement={() => changeCount(1)} />
      <ChildComponent onIncrement={() => changeCount(2)} />
      <ChildComponent onIncrement={() => changeCount(3)} />
    </div>
  );
}

function ChildComponent({ onIncrement } : any) {
  return (
    <button onClick={onIncrement}>
      Increment
    </button>
  );
}
