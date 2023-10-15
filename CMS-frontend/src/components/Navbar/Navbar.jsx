import React from 'react'
import"./navbar.css"
import { useNavigate } from 'react-router-dom'
import CreateBlog from '../../Pages/CreateBlog/CreateBlog'
const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className='navbar'>
      <a href='#'>Home</a>
      <div className='navbar-right'>
      <a onClick={()=> navigate("./createBlog")}>CreateBlog</a>
      </div>
    </div>
  )
}

export default Navbar
