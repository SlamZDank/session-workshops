import React from 'react'

const Controller = ({ value, setValue }) => {
  const modifyValue = (step, sign) => {
    if (sign === '-') {
      if (value - step < 0) {
        setValue(0)
        return;
        }
      setValue(value - step);
    } else if (sign === '+') {
      setValue(value + step);
    } else {
      console.log("invalid operator")
    }
  }

  // make the design of the sliders as well as the div they are going to take
  return (
    <>
      <div className='Controller'>
        <button onClick={() => modifyValue(10, '-')}>&lt;&lt;&lt;</button>
        <button onClick={() => modifyValue(1, '-')}>&lt;&lt;</button>
        <button onClick={() => modifyValue(0.1, '-')}>&lt;</button>
        <p>{Math.round(value * 10) / 10}</p>
        <button onClick={() => modifyValue(0.1, '+')}>&gt;</button>
        <button onClick={() => modifyValue(1, '+')}>&gt;&gt;</button>
        <button onClick={() => modifyValue(10, '+')}>&gt;&gt;&gt;</button>
      </div>
    </>
  )
}

export default Controller
