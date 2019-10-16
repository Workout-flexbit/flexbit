import React from "react";
import TimeParser from "../../helper/TimeParser"

const Calculator = ({ exerciseList }) => {
  // we *could* use "constant-case" here -> EXERCISE_TIME and move this variable out of the function
  const exerciseTime = 5

  const finalNumber = exerciseList.map((total) => {
    return total.sets * total.restTime + total.reps * total.sets * exerciseTime;
  }).reduce((sum, totalTime) => {
    return sum + totalTime;
  },0
  )
  return(
    <h5 className="title is-5">Estimated Duration: {TimeParser(finalNumber)}</h5>
  )
}

export default Calculator;