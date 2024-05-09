"use client";
import { Action } from "@/types";
import { ChangeEvent, useReducer, useState } from "react";

const isInclude = (min: number, value: number, max: number): boolean =>
  min <= value && max >= value;

const reducer = (state: number, action: Action): number => {
  switch (action.type) {
    case "++":
      if (isInclude(3, state + 1, 5)) return state + 1;
      break;

    case "--":
      if (isInclude(3, state - 1, 5)) return state - 1;
      break;

    default:
      break;
  }
  return state;
};

export default function Home() {
  const [inputNum, setInputNum] = useState<number>(0);
  const [letterLen, dispatch] = useReducer(reducer, 3);
  const handleChange = (val: string): undefined => {
    if (val.length > letterLen) return;
    setInputNum(parseInt(val));
    return;
  };
  return (
    <div>
      <div className='text-xl'>
        <div className='flex items-center py-5'>
          <button onClick={() => dispatch({ type: "++" })} className='p-5'>
            +
          </button>
          <div>桁数{letterLen}</div>
          <button onClick={() => dispatch({ type: "--" })} className='p-5'>
            -
          </button>
        </div>
        <div className='flex'>
          <label>最初の値：</label>
          <input
            type='number'
            onChange={(e) => handleChange(e.target.value)}
            value={inputNum}
          />
        </div>
      </div>
    </div>
  );
}
