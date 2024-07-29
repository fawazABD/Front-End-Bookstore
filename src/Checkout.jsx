import React from "react";
import Header from "./shared_component/Header";
import { Link } from "react-router-dom";
import image1 from "./images/image1.jpg";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Checkout = () => {
  return (
    <>
      <Header />
      <div
        className="relative h-80 bg-cover w-full text-center"
        style={{ backgroundImage: `url(${image1})` }}
      >
        <div className="text-black flex flex-col pt-28">
          <h1 className="text-5xl font-bold">OUR SHOP</h1>
          <p className="mt-2">
            <Link to="/Home" className="text-purple-500 hover:underline">
              home
            </Link>{" "}
            / Checkout
          </p>
        </div>
      </div>

      <div className="w-[80%] mx-auto p-8 bg-gray-100 mt-8 rounded-lg shadow-lg mb-8 border border-black justify-center">
        <h1 className="text-3xl font-bold mb-6 text-center">PLACE YOUR ORDER</h1>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="mb-2 font-semibold">Your Name:</label>
            <input type="text" placeholder="Enter your name" className="p-2 border rounded"/>
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-semibold">Your Number:</label>
            <input type="text" placeholder="Enter your number" className="p-2 border rounded"/>
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-semibold">Your Email:</label>
            <input type="email" placeholder="Enter your email" className="p-2 border rounded"/>
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-semibold">Payment Method:</label>
            <select className="p-2 border rounded">
              <option>Cash on Delivery</option>
              <option>Credit Card</option>
              <option>PayPal</option>
              <option>Paytm</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-semibold">Address Line 1:</label>
            <input type="text" placeholder="e.g., Flat no." className="p-2 border rounded"/>
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-semibold">Address Line 2:</label>
            <input type="text" placeholder="e.g., Street name" className="p-2 border rounded"/>
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-semibold">City:</label>
            <input type="text" placeholder="Enter your city" className="p-2 border rounded"/>
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-semibold">State:</label>
            <input type="text" placeholder="e.g., Maharashtra" className="p-2 border rounded"/>
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-semibold">Country:</label>
            <input type="text" placeholder="Enter your country" className="p-2 border rounded"/>
          </div>
          <div className="flex flex-col">
            <label className="mb-2 font-semibold">Pin Code:</label>
            <input type="text" placeholder="e.g., 123456" className="p-2 border rounded"/>
          </div>
        </form>
        <div className="mt-8">
          <Link to="/Orders"><button className="bg-violet-500 text-white rounded-md hover:bg-violet-600 h-11 w-32">
            Order Now
            
          </button></Link>
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
    </>
  );
};

export default Checkout;