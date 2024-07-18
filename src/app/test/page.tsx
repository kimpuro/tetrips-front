'use client'
import React, { useState } from 'react';

export default function ParentComponent() {
  const [count, setCount] = useState(0);

  const count1 = () => {
    setCount(1);
  };
  const count2 = () => {
    setCount(2);
  };
  const count3 = () => {
    setCount(3);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent onIncrement={count1} />
      <ChildComponent onIncrement={count2} />
      <ChildComponent onIncrement={count3} />
    </div>
  );
}

function ChildComponent({ onIncrement } : any) {
  return (
    <>
    <button onClick={onIncrement}>
      Increment
    </button>
    </>
  );
}