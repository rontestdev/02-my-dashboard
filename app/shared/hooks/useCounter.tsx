import { useState } from "react"

export interface CounterProps {
  initialCount?: number;
}

export const useCounter = ({ initialCount = 0 }: CounterProps = {}) => {
  const [count, setCount] = useState(initialCount);
  const increase = () => {
    setCount((val) => val + 1);
  }
  const decrease = () => {
    setCount((val) => {
      return val <= 0 ? 0 : val - 1;
    });
  }
  return {
    count,
    increase,
    decrease,
  }
} 