import React from 'react'
import { useState } from 'react';

const Result = ({ bmi }) => {
  let text = "Some string"
  if (bmi < 18.5) {
    text = "You are underweight!";
  } else if (bmi >= 18.5 && bmi < 25) {
    text = "You have a normal wight!";
  } else if (bmi >= 25 && bmi < 30) {
    text = "You are overweight!";
  } else if (bmi >= 20) {
    text = "You are obese!";
  }

  return (
    <h3>{text}</h3>
  )
}

export default Result
