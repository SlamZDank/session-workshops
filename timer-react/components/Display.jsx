import React from 'react'

const Display = ({ hours, minutes, seconds }) => {
  const formatTime = (unit) => String(unit).padStart(2, '0');
  const displayTime = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
  return (
    <div className='time-display text-7xl font-bold text-white'>{displayTime}</div>
  )
}

export default Display
