import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import CreateBlog from './Pages/CreateBlog/CreateBlog'
import SingleBlog from './Pages/Home/SingleBlog/SingleBlog'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/createBlog' element={<CreateBlog />} />
        <Route path='/singleBlog/:id' element={<SingleBlog/>}/>
      </Routes>
  
    </BrowserRouter>

  )
}

export default App