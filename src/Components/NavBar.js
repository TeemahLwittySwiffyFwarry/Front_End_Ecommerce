import React from 'react'
import {Link} from "react-router-dom"
import {FaShoppingCart} from "react-icons/fa"
import {FaSearch}from "react-icons/fa"
import "./navbar.css"

const NavBar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-md">
              <div className="container">
                <Link className="navbar-brand" to="/"><img src="./../../logo.png" alt="logo" />
                <strong>Foo</strong></Link>
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav m-auto mt-2 mt-lg-0">
                        
                        <li className="nav-item">
                            <Link className="nav-link fw-bold" to="#">Menu</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link fw-bold" to="#">Order</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link fw-bold" to="#">Shop</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link fw-bold" to="/signup">Sign Up</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link fw-bold" to="/signin">Sign In</Link>
                        </li>
                        
                    </ul>
                    <form className="d-flex my-2 my-lg-0 position-relative">
                        <div className="ps-4 position-absolute start-0 top-50 translate-middle"><FaSearch/> </div>
                        <input className="ps-3" type="text" placeholder="Search"/>
                        <button className="btn badge my-2 my-sm-0" type="submit">
                        <FaShoppingCart size="25" color="#333"/>
                        <sup className="bg-danger px-1 text-white rounded-circle">2</sup>
                        </button>
                        
                    </form>
                </div>
          </div>
        </nav>
        

    </div>
  )
}

export default NavBar