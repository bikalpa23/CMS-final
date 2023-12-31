import axios from "axios"
import Navbar from "../../components/Navbar/Navbar"
import { useEffect,useState } from "react"
import { Link } from "react-router-dom"


const Home = () => {
  const [blogs,setBlogs] = useState([])
  // api call here 

  const fetchBlogs = async ()=>{
   const response =  await axios.get('http://localhost:2000/blogs')
   setBlogs(response.data.blogs)
  }
  useEffect(()=>{
    fetchBlogs()
  },[])

  
  return (
    <div>
      <Navbar />
      <div className="card" style={{width: '18rem'}}>
    {blogs.map((blog)=>{ //loop type
      return(
        <div key={blog._id} className="card-body">
        <h5 className="card-title">{blog.title}</h5>
        <h5 className="card-title">{blog.subTitle}</h5>
        <p className="card-text">{blog.description}</p>
        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
        <Link to={`/singleBlog/ ${blog._id}`}>See More</Link>
      </div>
      )
    }) }
 
</div>
    </div>
  )
}

export default Home