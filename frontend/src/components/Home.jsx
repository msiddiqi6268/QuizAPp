import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate()
  const [username, setUserName] = useState('')
  const [errorUsername, setErrorUsername] = useState(false)
  const submit = ()=>{
    if(username){
      setErrorUsername(false)
      navigate('/subjects')
      console.log('Yes we have username')
    }
    else {
     setErrorUsername(true)
    }
  }
  return (
    <div>
      <h1>QUIZ APP</h1>
      <div className='auth-div'>
      <input type = 'text' className='username-input' onChange={(e)=>{setUserName(e.target.value)}}/>
      {errorUsername ? <p className='red'>Please Enter username.</p>:null}
      <button onClick = {submit}>Submit</button>
      </div>
    </div>
  )
}

export default Home