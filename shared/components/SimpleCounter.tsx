'use client';

import { type CounterProps, useCounter } from "../hooks/useCounter";

export const SimpleCounter = ({ initialCount = 0 }: CounterProps) => {
  const counter = useCounter({ initialCount });
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span className="text-9xl"> {counter.count} </span>
      <div className="flex gap-1">
        <button className="bg-neutral-700 hover:bg-gray-600 text-white text-sm py-2.5 px-5 mr-2 mb-2 rounded-xl transition duration-200" onClick={counter.decrease}>
          -1
        </button>
        <button className="bg-neutral-700 hover:bg-gray-600 text-white text-sm py-2.5 px-5 mr-2 mb-2 rounded-xl transition duration-200" onClick={counter.increase}>
          +1
        </button>
      </div>
    </div>
  )
}