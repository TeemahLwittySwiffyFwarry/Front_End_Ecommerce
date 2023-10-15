import React, {useState, useRef, useLayoutEffect} from 'react'
import "./signup.css"
import NavBar from '../Components/NavBar'
import axios from "axios"
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


const Signup = () => {
  const navigate = useNavigate()

  const handleSignup = (e) => {
    e.preventDefault()

    let form = new FormData(e.currentTarget)
    axios.post("http://localhost:8000/signup/", form)
    .then((res) => {
      toast.success("sign up successfully")
      navigate("/")
    })
    .catch((err) => {
      if(err.response.data === "Input field cannot be empty"){
        toast.error("Input field cannot be empty")
      }else if(err.response.data === "Email already exists"){
        toast.error("Email already exists")
      }else{
        for(let i in err.response.data){
          toast.error(`${i}: ${err.response.data[i]}`)
         }

      }
        
      
   
    })

  }

  

  
  return (
    <div className="signup ">
      
      <NavBar/>
      
      <div className="container position-absolute top-50 start-50 translate-middle">
        <form onSubmit={handleSignup}>
          <div className="row">
          <div className="col-md-6">
              <label htmlFor="">UserName</label>
              <input name="username"  type="text" className="form-control" />
            </div>

            <div className="col-md-6">
              <label htmlFor="">First Name</label>
              <input name="first_name"  type="text" className="form-control" />
            </div>

            <div className="col-md-6">
              <label htmlFor="">Last Name</label>
              <input name="last_name" type="text" className="form-control" />
            </div>

             <div className="col-md-6">
              <label htmlFor="">Email</label>
              <input name="email" type="email" className="form-control" />
            </div>

            <div className="col-md-6">
              <label htmlFor="">Password</label>
              <input name="password" type="password" className="form-control" />
            </div>

            <div className="col-md-6">
              <label htmlFor="">Photo</label>
              <input type="file" className="form-control" />
            </div>

           <button className="btn btn-secondary w-100">Signup</button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Signup