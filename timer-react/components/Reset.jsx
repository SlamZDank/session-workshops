import React from 'react'

const Reset = ({toZero}) => {
  return (
    <button className='btn' onClick={() => {
      toZero()
    }}>Reset</button>
  )
}

export default Reset
