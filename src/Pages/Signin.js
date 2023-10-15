import React from 'react'
import NavBar from '../Components/NavBar'
import "./signin.css"

const Signin = () => {
  return (
    <div className="signin">
        <NavBar/>
        <div className="container position-absolute top-50 start-50 translate-middle">
        <form>
          <div className="d-flex flex-column justify-content-center align-items-center">
                   

            <div className="col-md-6 mb-2">
              <label htmlFor="">Email</label>
              <input type="email" className="form-control" />
            </div>

            <div className="col-md-6" mt-2>
              <label htmlFor="">Password</label>
              <input type="password" className="form-control" />
            </div>


            <button className="col-md-2 btn btn-secondary mt-4">Submit</button>

          </div>
        </form>
      </div>

    </div>
  )
}

export default Signin