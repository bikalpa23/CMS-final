import { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import axios from "axios"
const Home = () => {

  //Call API
  const fetchBlogs = async () => {
    const response = await axios.get('http://localhost:2000/blogs')
    console.log(response)
  }
  useEffect(() => {
    fetchBlogs()
  }, [])
  return (
    <>
      <Navbar />
      <div className="card" style={{ width: '18rem' }}>
        <div className='card-body'>
          <h5 className="card-title">Card title</h5>
          <h5 className="card-subtitle">Card Subtitle</h5>
          <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, cumque commodi numquam laudantium fugiat, laboriosam corrupti ex perspiciatis veniam, explicabo dolorum corporis asperiores esse.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </>
  )
}



export default Home
