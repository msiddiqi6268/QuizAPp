import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import './App.css'
import Subject from './components/Subject'
import Quiz from './components/Quiz'
function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route exact path = '/' element = {<Home />} />
        <Route exact path = '/subjects' element = {<Subject />} />
        <Route exact path = '/quiz/:subject' element = {<Quiz/>} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
