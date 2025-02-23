import React from 'react'
import { useState } from 'react'

const TimeChooser = ({ setTimer, setIsPaused }) => {

  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  const isEmpty = hours === 0 && minutes === 0 && seconds === 0

  console.log("is the timer empty: ", isEmpty)

  return (
    <>
      <div className="time-chooser flex flex-col md:flex-row gap-4 w-full max-w-md">
        <input
          type="number"
          min={1}
          max={24}
          step={1}
          placeholder="HH"
          onChange={(e) => { setHours(e.target.value) }}
          className="flex-1 bg-gray-700 text-white text-center px-4 py-3 rounded-lg 
               focus:ring-2 focus:ring-blue-500 outline-none placeholder-gray-400
               appearance-none [&::-webkit-inner-spin-button]:hidden [&::-webkit-outer-spin-button]:hidden"
        />

        <input
          type="number"
          inputMode='numeric'
          min={1}
          max={59}
          step={1}
          placeholder="MM"
          onChange={(e) => { setMinutes(e.target.value) }}
          className="flex-1 bg-gray-700 text-white text-center px-4 py-3 rounded-lg 
               focus:ring-2 focus:ring-blue-500 outline-none placeholder-gray-400
               appearance-none [&::-webkit-inner-spin-button]:hidden [&::-webkit-outer-spin-button]:hidden"
        />

        <input
          type="number"
          min={1}
          max={59}
          step={1}
          placeholder="SS"
          onChange={(e) => {
            seconds === '' ? setSeconds(0) : setSeconds(e.target.value)
            console.log(seconds)
          }}
          className="flex-1 bg-gray-700 text-white text-center px-4 py-3 rounded-lg 
               focus:ring-2 focus:ring-blue-500 outline-none placeholder-gray-400
               appearance-none [&::-webkit-inner-spin-button]:hidden [&::-webkit-outer-spin-button]:hidden"
        />
      </div>

      {!isEmpty && <button
        className="btn w-full max-w-md bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 
             rounded-lg text-lg font-medium transition-colors duration-200 shadow-md
             transform active:scale-95 mt-4"
        onClick={() => {
          setHours(hours ?? 0)
          setMinutes(minutes ?? 0)
          setSeconds(seconds ?? 1)
          setTimer({ hours, minutes, seconds })
          setIsPaused(false)
        }}
      >
        ⏲️ Set Timer & Start
      </button>}
    </>
  )
}

export default TimeChooser
