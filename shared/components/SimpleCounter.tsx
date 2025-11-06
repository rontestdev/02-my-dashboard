'use client';

import { useAppDispatch, useAppSelector } from "@/store";
import { type CounterProps } from "../hooks/useCounter";
import { addOne, initCounterState, substractOne } from '@/store/counter/counterSlice';
import { useEffect } from "react";

type SimpleCounterProps = CounterProps;

export const SimpleCounter = ({ initialCount = 0 }: SimpleCounterProps) => {
  const count = useAppSelector(state => state.counter.count);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initCounterState(initialCount));
  }, [dispatch, initialCount])

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span className="text-9xl"> {count} </span>
      <div className="flex gap-1">
        <button className="bg-neutral-700 hover:bg-gray-600 text-white text-sm py-2.5 px-5 mr-2 mb-2 rounded-xl transition duration-200" onClick={() => dispatch(substractOne())}>
          -1
        </button>
        <button className="bg-neutral-700 hover:bg-gray-600 text-white text-sm py-2.5 px-5 mr-2 mb-2 rounded-xl transition duration-200" onClick={() => dispatch(addOne())}>
          +1
        </button>
      </div>
    </div>
  )
}