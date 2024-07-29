import React from "react";
import Header from "./shared_component/Header";
import { Link } from "react-router-dom";
import image1 from "./images/image1.jpg";
import about_img_bg from "./images/about-img.jpg";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import author_1_bg from "./images/author-1.jpg";
import author_2_bg from "./images/author-2.jpg";
import author_3_bg from "./images/author-3.jpg";
import author_4_bg from "./images/author-4.jpg";
import author_5_bg from "./images/author-5.jpg";
import author_6_bg from "./images/author-6.jpg";
import { IoIosStar } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import "./style.css";

const About = () => {
  const authors_arr = [
    {
      img: author_1_bg,
      name: "John Doe",
    },
    {
      img: author_2_bg,
      name: "John Doe",
    },
    {
      img: author_3_bg,
      name: "John Doe",
    },
    {
      img: author_4_bg,
      name: "John Doe",
    },
    {
      img: author_5_bg,
      name: "John Doe",
    },
    {
      img: author_6_bg,
      name: "John Doe",
    },
  ];

  return (
    <div>
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-center font-extrabold ">
        <div
          className="relative w-full h-[350px] bg-cover bg-center"
          style={{ backgroundImage: `url(${image1})` }}
        >
          <div className="flex flex-col justify-center items-center text-center mt-40">
            <h2 className="font-black text-4xl">ABOUT US</h2>
            <div className="flex flex-row">
              <h4 className="font-semibold text-2xl text-violet-700">
                <Link to="/home">home/</Link>
              </h4>
              <h4 className="text-2xl font-semibold">
                <Link to="/about">about</Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-[82%] m-auto">
        <div>
          <img
            height="100%"
            width="100%"
            className="h-[350px] w-[800px]"
            src="https://allisonjpmiller.com/wp-content/uploads/2015/04/bookpath.png?w=1200&h=900&crop=1"
            alt=""
          />
        </div>
        <div className="container bg-slate-400 p-4 text-black leading-[2rem]">
          <h1 className="text-2xl font-bold">WHY YOU CHOOSE US?</h1>
          <p className="w-[80%]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
            pariatur hic, dicta error magnam libero perspiciatis quos
            exercitationem, eaque a necessitatibus. Voluptate dignissimos
            excepturi, nam animi recusandae illum expedita, molestiae commodi
            praesentium quas fugit perferendis! Cum nam iste veniam veritatis!
          </p>
          <button className="bg-violet-700 text-white py-1 px-4 text-sm rounded-md hover:bg-black duration-700">
            Read More
          </button>
        </div>
      </div>
      <div className="w-[91%]">
        <div className="text-center font-bold text-xl mt-6">
          <h2>CLIENTS REVIEWS</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-6 mb-5 items-center ml-32">
          <div className="container mx-auto my-8">
            <div className="bg-white h-72 w-72 shadow-lg border border-black p-7 rounded-md flex flex-col items-center">
              <div>
                <img
                  width="100%"
                  height="100%"
                  className="rounded-full w-[55px] h-[55px]"
                  src="https://niksessentialoils.com/wp-content/uploads/2021/06/av4-300x225.jpg"
                  alt=""
                />
              </div>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Obcaecati ullam est perferendis iure temporibus natus impedit
                dicta voluptatem! Cum?
              </p>
              <div className="flex justify-center  bg-white w-32 h-auto border border-black space-x-2 ">
                <IoIosStar className="text-yellow-500" />
                <IoIosStar className="text-yellow-500" />
                <IoIosStar className="text-yellow-500" />
                <IoIosStar className="text-yellow-500" />
                <IoIosStar className="text-yellow-500" />
              </div>
              <h3 className="text-lg font-bold mt-4">John Doe</h3>
            </div>
          </div>
          <div className="container mx-auto my-8">
            <div className="bg-white h-72 w-72 shadow-lg border border-black p-7 rounded-md flex flex-col items-center">
              <div>
                <img
                  width="100%"
                  height="100%"
                  className="rounded-full w-[55px] h-[55px]"
                  src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTjt4Deh15rOR9m98Ty8onKUTBeNHxNsOjwsrhO2C8W7IDxM_1y"
                  alt=""
                />
              </div>

              <p className="text-center ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Obcaecati ullam est perferendis iure temporibus natus impedit
                dicta voluptatem! Cum?
              </p>
              <div className="flex justify-center  bg-white w-32 h-auto border border-black space-x-2 ">
                <IoIosStar className="text-yellow-500" />
                <IoIosStar className="text-yellow-500" />
                <IoIosStar className="text-yellow-500" />
                <IoIosStar className="text-yellow-500" />
                <IoIosStar className="text-yellow-500" />
              </div>
              <h3 className="text-lg font-bold mt-4">John Doe</h3>
            </div>
          </div>
          <div className="container mx-auto my-8">
            <div className="bg-white h-72 w-72 shadow-lg border border-black p-7 rounded-md flex flex-col items-center">
              <div>
                <img
                  width="100%"
                  height="100%"
                  className="rounded-full w-[55px] h-[55px]"
                  src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS4CKVjnHlhFhnqZi3xNmcABSmQbm36__dj4l6__Sw5Bh_7NKUl"
                  alt=""
                />
              </div>

              <p className="text-center ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Obcaecati ullam est perferendis iure temporibus natus impedit
                dicta voluptatem! Cum?
              </p>
              <div className="flex justify-center  bg-white w-32 h-auto border border-black space-x-2 ">
                <IoIosStar className="text-yellow-500" />
                <IoIosStar className="text-yellow-500" />
                <IoIosStar className="text-yellow-500" />
                <IoIosStar className="text-yellow-500" />
                <IoIosStar className="text-yellow-500" />
              </div>
              <h3 className="text-lg font-bold mt-4">John Doe</h3>
            </div>
          </div>
          <div className="container mx-auto my-8">
            <div className="bg-white h-72 w-72 shadow-lg border border-black p-7 rounded-md flex flex-col items-center">
              <div>
                <img
                  width="100%"
                  height="100%"
                  className="rounded-full w-[55px] h-[55px]"
                  src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTjmRikUR5KOSzaDmFXD6GWwTAuQWmICwFDtZ2zOg7FE4MTyvfw"
                  alt=""
                />
              </div>

              <p className="text-center ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Obcaecati ullam est perferendis iure temporibus natus impedit
                dicta voluptatem! Cum?
              </p>
              <div className="flex justify-center  bg-white w-32 h-auto border border-black space-x-2 ">
                <IoIosStar className="text-yellow-500" />
                <IoIosStar className="text-yellow-500" />
                <IoIosStar className="text-yellow-500" />
                <IoIosStar className="text-yellow-500" />
                <IoIosStar className="text-yellow-500" />
              </div>
              <h3 className="text-lg font-bold mt-4">John Doe</h3>
            </div>
          </div>
          <div className="container mx-auto my-8">
            <div className="bg-white h-72 w-72 shadow-lg border border-black p-7 rounded-md flex flex-col items-center">
              <div>
                <img
                  width="100%"
                  height="100%"
                  className="rounded-full w-[55px] h-[55px]"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQKsF0ji4VtMxIaH_PHkqv3YfrHDsylIJT0nzIOKE00LmPjaZv"
                  alt=""
                />
              </div>

              <p className="text-center ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Obcaecati ullam est perferendis iure temporibus natus impedit
                dicta voluptatem! Cum?
              </p>
              <div className="flex justify-center  bg-white w-32 h-auto border border-black space-x-2 ">
                <IoIosStar className="text-yellow-500" />
                <IoIosStar className="text-yellow-500" />
                <IoIosStar className="text-yellow-500" />
                <IoIosStar className="text-yellow-500" />
                <IoIosStar className="text-yellow-500" />
              </div>
              <h3 className="text-lg font-bold mt-4">John Doe</h3>
            </div>
          </div>
          <div className="container mx-auto my-8">
            <div className="bg-white h-72 w-72 shadow-lg border border-black p-7 rounded-md flex flex-col items-center">
              <div>
                <img
                  width="100%"
                  height="100%"
                  className="rounded-full w-[55px] h-[55px]"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS43VxCopuMVYcGwA5wZKWGiRN_b-QIysmw93oG3ggXvOkATyT7"
                  alt=""
                />
              </div>

              <p className="text-center ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Obcaecati ullam est perferendis iure temporibus natus impedit
                dicta voluptatem! Cum?
              </p>
              <div className="flex justify-center  bg-white w-32 h-auto border border-black space-x-2 ">
                <IoIosStar className="text-yellow-500" />
                <IoIosStar className="text-yellow-500" />
                <IoIosStar className="text-yellow-500" />
                <IoIosStar className="text-yellow-500" />
                <IoIosStar className="text-yellow-500" />
              </div>
              <h3 className="text-lg font-bold mt-4">John Doe</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[80%] m-auto">
        <div>
          <h3 className="font-bold text-3xl text-center ">GREAT AUTHORS</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4  mt-6 mb-5 items-center">
          {authors_arr.map((author, index) => {
            return (
              <div key={index} className=" relative overflow-hidden author">
                <div
                  className="bg-no-repeat bg-cover h-80 w-72 border border-black"
                  style={{ backgroundImage: `url(${author.img})` }}
                >
                  <div className=" ml-2 text-2xl show-icons absolute left-[-36px]">
                    <div className=" bg-white h-7 w-7 items-center text-center border border-black mb-2 mt-3 ">
                      <FaFacebookF />
                    </div>
                    <div className=" bg-white h-7 w-7 items-center text-center border border-black mb-2">
                      <FaTwitter />
                    </div>
                    <div className="bg-white h-7 w-7 items-center text-center border border-black mb-2">
                      <FaSquareInstagram />
                    </div>
                    <div className="bg-white h-7 w-7 items-center text-center border border-black mb-2">
                      <FaLinkedin />
                    </div>
                  </div>
                </div>

                <div className="bg-white w-72 h-9 shadow-md border border-black text-center text-1xl font-extrabold">
                  <h2>{author.name}</h2>
                </div>
              </div>
            );
          })}
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

export default About;
