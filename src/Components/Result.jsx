import React from 'react'

const Result = ({score,totalQuestions}) => {
  return (
    <div className='result'>
        <h2>Quiz completed</h2>
    <h5>You scored {score} out of {totalQuestions}</h5>
    </div>
  )
}

export default Result