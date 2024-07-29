import { Link } from "react-router-dom";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";


function Header() {
  return (
      <div className=" fixed z-20 flex flex-col top-0 w-full">
          <div className="flex flex-row bg-slate-400 w-full items-center justify-between px-10 py-2 text-black font-bold text-sm">
            <div className="flex flex-row gap-1 justify-center items-center">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram/>
              <FaLinkedin/>
            </div>
            <div className="flex flex-row gap-1 justify-center items-center">
              <h4>
                new
              </h4>
              <h4 className="text-violet-700">
               <Link to="/Login">login|</Link> 
              </h4>
              <h4 className="text-violet-700">
                <Link to="/Register">register</Link>
              </h4>
            </div>
          </div>

          <div className="flex flex-row justify-between px-10 bg-white p-2 space-x-5">
            <h2 className="text-violet-700 font-bold"><Link to="/home">Bookly.</Link></h2>
            <nav className="flex flex-row gap-6 text-sm justify-center">
              <div>
                <Link to="/home">Home</Link>
              </div>
              <div>
                <h5>
                  <Link to="/about">About</Link>
                </h5>
              </div>
              <div>
                <h4>
                  <Link to="/shop">Shop</Link>
                </h4>
              </div>
              <div>
                <h4>
                  <Link to="/contact">Contact</Link>
                </h4>
              </div>
              <div>
                <h4>
                  <Link to="/orders">Orders</Link>
                </h4>
              </div>
            </nav>
            <div className="flex flex-row gap-1 justify-center items-center">
              <h2>
                <FaSearch />
              </h2>
              <h2>
                <IoPerson />
              </h2>
              <div>
                <h2>
                  <Link to="/cart" className="flex flex-row justify-center items-center">
                    <FaShoppingCart />
                <h2>
                  (0)
                </h2>
                  </Link>
                </h2>
              </div>
            </div>
          </div>
      </div>
  )
}

export default Header;