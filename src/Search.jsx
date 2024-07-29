import React from "react";
import Header from "./shared_component/Header";
import image1 from "./images/image1.jpg";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Search = () => {
  return (
    <>
      <Header />

      <div
        className="relative h-80 bg-cover w-full text-center"
        style={{ backgroundImage: `url(${image1})` }}>
        <div className="text-black flex flex-col pt-28">
          <h1 className="text-5xl font-bold">OUR SHOP</h1>
          <p className="mt-2">
            <Link to="/homepage" className="text-purple-500 hover:underline">
              home
            </Link>{" "}
            / Search
          </p>
        </div>
      </div>

      <div className="flex justify-center py-12 bg-gray-100">
        <div className="w-[70%] bg-white p-8 ">
          <div className="flex items-center space-x-4 mb-6">
            <input
              type="search"
              placeholder="Search product"
              className="flex-grow px-4 py-2 border border-black rounded-md focus:ring-purple-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              Search
            </button>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="px-8 py-2 border border-orange-500 text-orange-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Search something!
            </button>
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
    </>
  );
};

export default Search;
