import React from "react";
import image1 from "./images/image1.jpg";
import Header from "./shared_component/Header";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <div>
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-center font-extrabold ">
        <div
          className="relative w-full h-[400px] bg-cover bg-center"
          style={{ backgroundImage: `url(${image1})` }}
        >
          <div className="flex flex-col justify-center items-center text-center mt-36">
            <h2 className="font-black text-4xl">CONTACT US</h2>
            <div className="flex flex-row">
              <h4 className="font-semibold text-2xl text-violet-700">
                <Link to="/home">home/</Link>
              </h4>
              <h4 className="text-2xl font-semibold">
                <Link to="/contact">contact</Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="container border-[1px] border-black w-[400px] m-auto rounded-sm mb-[20px]">
        <div className="flex flex-col justify-center items-center m-auto gap-[10px]">
          <div className="font-bold ">
            <h4>SAY SOMETHING!</h4>
          </div>
          <div>
            <input
              type="name"
              name=""
              id=""
              placeholder="enter your name"
              className="rounded-sm  border-black border-[1px] w-[300px]"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="enter your email"
              className="rounded-sm border-[1px] border-black w-[300px]"
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="enter your number"
              className="rounded-sm border-[1px] border-black w-[300px]"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="enter your message"
              className="rounded-sm border-[1px] border-black w-[300px] h-[150px]"
            />
          </div>
          <div className="bg-violet-600 py-2 px-4 rounded-md mb-2">
            <button>Send Message</button>
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
}

export default Contact;
