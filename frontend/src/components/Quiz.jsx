import React from 'react'
import data from '../assets/quiz.json'
import { useParams } from 'react-router-dom'
const Quiz = () => {
    const { subject } = useParams()
    const questions = data[subject]
    console.log(questions)
    return (
        <div>
            <h1>Quiz App</h1>
            {
                questions.map((que, index) => (
                    <div className='question'>
                        <p>{que.Question}</p>
                        <div className='options'>
                        {que.options.map((opt,index2)=>(
                            <div>
                            <input type = 'radio' name = 'options' />
                            <label>{opt}</label>
                            </div>
                        ))}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Quiz