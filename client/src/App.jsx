import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateUser from './CreateUser'
import UpdateUSer from './UpdateUSer'
import User from './User'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<User />}/>
        <Route path="/create" element={<CreateUser/>}/>
        <Route path="/update/:id" element={<UpdateUSer/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
