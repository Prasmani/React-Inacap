import { useState } from "react";

interface UseContadorReturn {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  setValue: (value: number) => void;
}

export const useContador = (initialValue: number = 0): UseContadorReturn => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const reset = () => {
    setCount(initialValue);
  };

  const setValue = (value: number) => {
    setCount(value);
  };

  return {
    count,
    increment,
    decrement,
    reset,
    setValue,
  };
};
