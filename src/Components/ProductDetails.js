import React from 'react'
import "./productDetails.css"
import { BsFillStarFill } from "react-icons/bs"
import { AiOutlineHeart } from "react-icons/ai"
import { AiOutlineShoppingCart } from "react-icons/ai"
const ProductDetails = ({items}) => {
    return (
        <div className="productdetails">
            <div className="row">
                <div className="col-md-6">
                    <img className='main' src={`http://localhost:8000/${items?.photo}`} alt="Food" />

                    <div className="d-flex justify-content-center gap-2">
                        <img src="./../../ProductDetails.png" alt="Food1" />
                        <img src="./../../ProductDetails.png" alt="Food1" />
                        <img src="./../../ProductDetails.png" alt="Food1" />
                    </div>
                </div>

                <div className="col-md-6 d-flex flex-column align-items-start ">
                    <div class="mb-auto p-2">
                        <h6 className="h2 title">{items?.title}</h6>
                        <p className="h2">{items?.amount}</p>
                        <div className="d-flex gap-2 p-1 ">
                            <BsFillStarFill size="28" />
                            <BsFillStarFill size="28" />
                            <BsFillStarFill size="28" />
                            <BsFillStarFill size="28" />
                            <BsFillStarFill size="28" />
                        </div>
                    </div>
                    <div className="mt-4 mb-4 p-2">
                        <h6 class="h2 mb-5">Select Quantity</h6>
                        <div className="d-flex mb-5">
                            <button>+</button>
                            <input type="text" disable />
                            <button>-</button>
                        </div>
                        <div className="row text-center  ms-1">
                            <div class="border border-black text-danger p-3 col-md-6"><AiOutlineHeart size="30" /></div>
                            <div class="border border-black text-warning p-3 col-md-6"><AiOutlineShoppingCart size="30" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails