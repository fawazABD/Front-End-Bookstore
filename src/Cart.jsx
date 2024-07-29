import React from "react";
import Header from "./shared_component/Header";
import { Link } from "react-router-dom";
import image1 from "./images/image1.jpg";
import the_happy_lemon from "./images/the_happy_lemon.jpg";
import nightshade  from "./images/nightshade.jpg";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Cart() {
  return (
    <div>
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-center font-extrabold">
        <div
          className="relative h-[400px] bg-cover w-full text-center"
          style={{ backgroundImage: `url(${image1})` }}>
            <div className="flex flex-col justify-center items-center text-center mt-40">
              <h2 className="font-black text-4xl">OUR SHOP</h2>
              <div className="flex flex-row">
                <h4 className="font-semibold text-2xl text-violet-700">
                  <Link to="/home">home/</Link>
                </h4>
                <h4 className="text-2xl font-semibold"><Link to="/cart">cart</Link></h4>
              </div>
      </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-5 justify-center">
        <h1 className="text-5xl font-bold">YOUR CART</h1>
        <p>No items in your cart.</p>
        <Link to="/shop" className="text-purple-500 hover:underline">
          Start Shopping
        </Link>
      </div>

      <div className="flex gap-9 items-center justify-center">
        <div className="flex flex-col  items-center justify-center border border-emerald-800 w-72 h-96 rounded-md gap-2 shadow-xl">
          <div
            className="h-60 w-full bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${the_happy_lemon})` }}
          >
            <span className="ml-48 bg-red-600 w-10 h-6.5 rounded-sm flex items-center justify-center text-white font-semibold">
              X
            </span>
          </div>
          <p className="text-xl font-semibold">Happy Lemon</p>
          <div className="flex gap-1">
            <input type="number" className="border border-black rounded w-20" />
            <button className="bg-red-500 h-11 w-20 rounded-md font-bold flex items-center justify-center hover:bg-red-600 text-white">
              update
            </button>
          </div>
        </div>

        <div className="flex flex-col  items-center justify-center border border-emerald-800 w-72 h-96 rounded-md gap-2 shadow-xl">
          <div
            className="h-60 w-full bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${nightshade})` }}
          >
            <span className="ml-48 bg-red-600 w-10 h-6.5 rounded-sm flex items-center justify-center text-white font-semibold">
              X
            </span>
          </div>
          <p className="text-xl font-semibold">nightshade</p>
          <div className="flex gap-1">
            <input type="number" className="border border-black rounded w-20" />
            <button className="bg-red-500 h-11 w-20 rounded-md font-bold flex items-center justify-center hover:bg-red-600 text-white">
              update
            </button>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="w-full mx-auto p-6 flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-4">PRODUCTS ADDED</h1>
          <div className="flex mb-4 bg-red-300 text-gray-200 h-8 w-28 rounded-md items-center justify-center hover:bg-red-500">
            <button>Delete All</button>
          </div>
          <div className="text-lg font-bold flex flex-col space-x-4 border border-orange-400 h-32 w-[80%] gap-6 items-center justify-center">
            <p>
              Grand total: <span className="text-orange-500">$0/-</span>
            </p>
            <div className="Flex space-x-4">
              <Link to="/shop"><button className="bg-amber-400 text-white rounded hover:bg-amber-500 w-64 h-12">
                Continue Shopping
              </button></Link>
              <Link to="/checkout"><button className="bg-purple-300 text-white rounded hover:bg-purple-400 w-64 h-12">
                Proceed To Checkout
              </button></Link>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-gray-200">
            <div className="flex flex-row justify-between w-[80%] m-auto items-center pt-5 pb-5 gap-2 leading-[3rem]">
                <div>
                <h1 className="font-bold">QUICK LINK</h1>
                <p>home</p>
                <p>about</p>
                <p>shop</p>
                <p>contact</p>
                </div>
                <div>
                <h1 className="font-bold">EXTRA LINKS</h1>
                <p>login</p>
                <p>register</p>
                <p>cart</p>
                <p>orders</p>
                </div>
                <div>
                <div>
                    <h1 className="font-bold">CONTACT INFO</h1>
                    <div className="flex flex-row  items-center gap-1">
                    <h5>
                        <FaPhoneAlt className="text-purple-700" />
                    </h5>
                    <p>+123-456-7890</p>
                    </div>
                    <div className="flex flex-row items-center gap-1">
                    <h3>
                        <FaPhoneAlt className="text-purple-700" />
                    </h3>
                    <p>+111-222-3333</p>
                    </div>
                    <div className="flex flex-row items-center gap-1">
                    <h3>
                        <IoMail className="text-purple-700" />
                    </h3>
                    <p>fawaz21@gmail.com</p>
                    </div>
                    <div className="flex flex-row items-center gap-1">
                    <h3>
                        <FaLocationDot className="text-purple-700" />
                    </h3>
                    <p>mumba mushin,678-909</p>
                    </div>
                </div>
                </div>
                <div>
                <h2 className="font-bold">FOLLOW US</h2>
                <p className="flex items-center gap-1 f">
                    <FaFacebookF className="text-purple-700" /> facebook
                </p>
                <p className="flex items-center gap-1">
                    <FaXTwitter className="text-purple-700" /> twitter
                </p>
                <p className="flex items-center gap-1">
                    <FaInstagram className="text-purple-700" /> instagram
                </p>
                <p className="flex items-center gap-1">
                    <FaLinkedin className="text-purple-700" /> linkedin
                </p>
                          
                </div>
            </div>
            <hr className="h-[2px] bg-black" />
            <div>
                <p className="text-center text-sm">
                {" "}
                All rights reserved{" "}
                <span className="text-purple-700 font-semibold">&copy; 2022</span>
                </p>
            </div>
      </footer>
    </div>
  );
};

export default Cart;
