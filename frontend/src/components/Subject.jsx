import React from 'react'
import {useNavigate} from 'react-router-dom'
const Subject = () => {
    const navigate = useNavigate()
    const subj = ["English", "Maths", "Programming", "Science"]
  return (
    <div>
        <h1>Quiz App</h1>
        <div className='subject-buttons-div'>
        {
            subj.map((subject, index)=>(
                <button key = {index}
                onClick = {()=>{
                    navigate(`/quiz/${subject.toLowerCase()}`)
                }}
                
                >{subject}</button>
            ))
        } 
        </div>
    </div>
  )
}

export default Subject