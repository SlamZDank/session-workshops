import React from 'react'
import Display from './Display';
import { useState, useEffect } from 'react';
import TimeChooser from './TimeChooser';
import Alarm from '../src/assets/alarm.webm'

const Timer = () => {
  const [isPaused, setIsPaused] = useState(false);

  const playAlarm = () => {
    new Audio(Alarm).play()
  }

  const [timer, setTimer] = useState(
    {
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  )

  const isFinished = timer.hours === 0 && timer.minutes === 0 && timer.seconds === 0;

  const toZero = () => {
    setTimer({
      hours: 0,
      minutes: 0,
      seconds: 0
    })
  }

  const countdown = () => {
    setTimer((prev) => {
      if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
      if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
      if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
      return prev; // Timer finished
    });
  }

  useEffect(() => {
    if (isPaused) return;
    if (isFinished) playAlarm();
    const timeoutId = setTimeout(() => {
      countdown(timer)
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [timer, isPaused]);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-black font-sans gap-8 p-4">

        {!isFinished && <div className="MainDisplay bg-gray-600 p-12 rounded-3xl shadow-2xl">
          <Display
            className="flex gap-6 items-center justify-center font-mono"
            hoursStyle="text-blue-400"
            minutesStyle="text-green-400"
            secondsStyle="text-red-400"
            separatorStyle="text-gray-400 text-7xl"
            hours={timer.hours}
            minutes={timer.minutes}
            seconds={timer.seconds}
          />
        </div>}

        {isFinished &&
          <div className="TimeChooser bg-gray-600 p-6 rounded-xl shadow-lg w-full max-w-md">
            <TimeChooser
              setTimer={setTimer}
              setIsPaused={setIsPaused}
              className="flex flex-col gap-4"
              inputClassName="bg-gray-700 text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              buttonClassName="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors duration-200"
            />
          </div>
        }

        <div className="Buttons flex gap-4">
          {!isFinished && (
            <>
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-medium transition-colors duration-200 shadow-md"
                onClick={() => {
                  setIsPaused(true) // weird workaround to stop the alarm from triggering when the reset button is clicked
                  toZero()
                }}
              >
                ■ Reset
              </button>
              <button
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-medium transition-colors duration-200 shadow-md"
                onClick={() => setIsPaused(!isPaused)}
              >
                {isPaused ? "▶ Resume" : "⏸ Pause"}
              </button>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Timer
