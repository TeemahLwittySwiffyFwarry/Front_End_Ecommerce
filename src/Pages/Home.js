import React, { useEffect, useState } from 'react'
import NavBar from '../Components/NavBar'
import "./home.css"
import { AiFillPlayCircle } from 'react-icons/ai'
import {BsFillCartPlusFill} from 'react-icons/bs'
import ProductDetails from '../Components/ProductDetails'
import axios from 'axios'


const Home = () => {

  const [foods, setFoods] = useState([])
  const [trending, setTrending] = useState(null)

  useEffect(() => {
    let randomFood = Math.floor(Math.random() * foods.length)
  
    
    setTrending(foods[randomFood])
  }, [foods])
  
 


  useEffect(()=> {
    axios.get("http://localhost:8000/allfood/")
    .then((response) => setFoods(response.data)) 
    .catch((err) => console.log(err))

  }, [])


  return (
    <div class="home">
      <NavBar/>

      <section className='banner p-5'>

        <div className="container">


          <div className="row align-items-center">

            {/**Left Column*/}
            <div className="col-md-6 left">
              <div className="d-flex align-items-center gap-3">
                <h4>Fast</h4>
                <h6>Food <br /> Delivery</h6>
              </div>
              <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, quos.</p>

              <div className="d-flex align-items-center gap-3">
                <button className='btn btn-dark rounded-5 fw-bold p-3'>Order Now</button>
                <p className="fw-bold"> <span className='bg-white p-2 rounded-circle'><AiFillPlayCircle size="24" /></span>Watch Now</p>

              </div>
            </div>

            {/**right Column*/}
            <div className="col-md-6 right">
              <img className="img-fluid" src="./../../Banner.png" alt="Banner" />
            </div>
          </div>
        </div>




      </section>

      <section className="trending">
        <div className="container">
          <h6 className="h2">Today's Trending Food</h6>
          <small className='d-block mb-3 p'>People loves it most the past week...</small>
          <ProductDetails items={trending} />
        </div>
      </section>

      <section className="popular container">
        <h4>Popular Items</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa, id?</p>

        <div className="row mt-4">
          
          {
            foods.map((food) => (
              <div key={food?.id} className="col-md-3">
            <div className="card">
              <img src={`http://localhost:8000/${food?.photo}`} alt="" className="card-img-top" />
              <div className="card-body">
              <h5>{food?.title}</h5>
              <p>{food?.description}</p>
              <h6>{food?.amount}</h6>
              <button className="btn btn-outline-success p-4"><BsFillCartPlusFill/>ADD</button>
            </div>
            </div>
            
          </div>
            ))
          }
          
        </div>
  </section>

  

  <section className="contact mt-5">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h6 className="h1">Contact us</h6>
          <small>Need an experienced and skilled hand with custom IT projects? 
Fill out the form to get a free consultation.</small>

          <form action="
          ">
            <input class="underlined-input my-2 col-10 home"type="text" placeholder='Your Company Name' />

            <input class="underlined-input my-2 col-10 home"type="text" placeholder='Nature of Buisness'/>

            <input class="underlined-input my-2 col-6 home me-3"type="text" placeholder='Address'/>
            
            <input class="underlined-input my-2 col-3 ms-4 home"type="number" placeholder='Postcode'/>

            <input class="underlined-input my-2 col-10 home"type="text" placeholder='Contact Name'/>

            <input class="underlined-input my-2 col-10 home"type="number" placeholder='Contact Phone'/>

            <input class="underlined-input my-2 col-10 home"type="email" placeholder='Email' />

            <div class="btn-group" role="group" data-bs-toggle="buttons">
              <label class="my-3 c-btn">
                <input type="checkbox" class="me-2" name="" id=""/>I want to protect my data by signing an NDA 
              </label>                          </div>
              <button className="submit btn btn-success col-12 p-2 my-2">SUBMIT</button>
          </form>
        </div>
        <div className="col-md-6">
        </div>
      </div>
    </div>
  </section>
    </div>


  )
}

export default Home