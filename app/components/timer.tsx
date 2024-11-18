"use client";

import { useState, useEffect } from "react";

const Timer = () => {
  const [workTime, setWorkTime] = useState(25); // Minutes
  const [breakTime, setBreakTime] = useState(5); // Minutes
  const [seconds, setSeconds] = useState(0);
  const [isWork, setIsWork] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [breakCount, setBreakCount] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null; // Initialize as null

    if (isActive) {
      timer = setInterval(() => {
        if (seconds === 0) {
          if ((isWork && workTime === 0) || (!isWork && breakTime === 0)) {
            setIsWork(!isWork);
            setBreakCount(breakCount + 1);
            setSeconds(59);
            if (isWork) {
              setWorkTime(24);
            } else {
              setBreakTime(4);
            }
          } else {
            if (isWork) {
              setWorkTime(workTime - 1);
            } else {
              setBreakTime(breakTime - 1);
            }
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }

    return () => {
      if (timer) {
        clearInterval(timer); // Clear the timer only if it exists
      }
    };
  }, [isActive, seconds, workTime, breakTime, isWork, breakCount]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleReset = () => {
    setIsActive(false);
    setWorkTime(25);
    setBreakTime(5);
    setSeconds(0);
    setIsWork(true);
    setBreakCount(0);
  };

  return (
    <div>
      <div className="flex justify-center items-center mt-6">
        <div className="relative w-72 h-72 flex justify-center items-center rounded-full shadow-xl border-4 border-gray-300">
          <div className="absolute w-64 h-64 rounded-full bg-blue-500"></div>
          <div className="absolute text-white text-6xl font-semibold z-10">
            {isWork ? workTime : breakTime}:{seconds < 10 ? `0${seconds}` : seconds}
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-4 mt-8">
        {!isActive ? (
          <button
            onClick={handleStart}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-lg"
          >
            ابدأ
          </button>
        ) : (
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg shadow-lg"
          >
            إعادة تعيين
          </button>
        )}
      </div>
    </div>
  );
};

export default Timer;
