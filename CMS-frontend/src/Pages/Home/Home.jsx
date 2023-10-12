import Navbar from '../../components/Navbar/Navbar'
import'./Home.css'
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="card" style={{width: '18rem'}}>
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
