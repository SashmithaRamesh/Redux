import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Form from './Component/Form'
import Contact from './Component/Contact'
import About  from './Component/About'

function App() {
  

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Form/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
