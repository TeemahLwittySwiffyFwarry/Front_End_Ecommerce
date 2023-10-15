import React from 'react'
import NavBar from '../Components/NavBar'
import "./signin.css"
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
  const navigate = useNavigate()
  function handleSignin(e){
    e.preventDefault()
    let form = new FormData(e.currentTarget)

    axios.post("http://localhost:8000/login/", form)
    .then((res)=> {
      toast("Login Successful")
      navigate("/")

    })
    .catch((err) => {
      if(err.response.data === "Invalid Credentials"){
        toast.error("Invalid Credentials")
      }else{
        for(let key in err.response.data){
          toast.error(`${key} ${err.response.data[key]}`)

      }
      
      }
     
    })
  }

  return (
    <div className="signin">
        <NavBar/>
        <div className="container position-absolute top-50 start-50 translate-middle">
        <form onSubmit = {handleSignin}>
          <div className="d-flex flex-column justify-content-center align-items-center">
                   

            <div className="col-md-6 mb-2">
              <label htmlFor="">Email</label>
              <input name="email" type="email" className="form-control" />
            </div>

            <div className="col-md-6" mt-2 mb-2>
              <label htmlFor="">Password</label>
              <input name="password" type="password" className="form-control" />
            </div>


            <button className="btn btn-secondary w-10">Login</button>

          </div>
        </form>
      </div>

    </div>
  )
}

export default Signin