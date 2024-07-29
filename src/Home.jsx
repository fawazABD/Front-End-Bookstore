import React from "react";
import Header from "./shared_component/Header";
import home_image from "./images/home-bg.jpg";
import the_world from "./images/the_world.jpg";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


function Home() {
  return (
    <div>
      <Header />
      <div
        className="relative h-[450px] mt-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${home_image})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 h-full text-white w-5/12 m-auto flex flex-col items-center min-h-screen text-center justify-center">
          <h1 className="text-5xl font-bold">HAND PICKED BOOK TO YOUR DOOR</h1>
          <p>Discover our diverse collection of handcrafted products</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            perspiciatis incidunt impedit, qui tempora velit.
          </p>
          <button className="px-4 py-2 rounded-md hover:bg-white hover:text-black duration-700 bg-violet-700 text-white font-bold text-sm">
            DISCOVER MORE
          </button>
        </div>
      </div>

      <div className="flex justify-center text font-bold text-2xl">
        <h1>LATEST PRODUCTS</h1>
      </div>

      <div className="container mx-auto p-4 w-[60%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
          <div className="flex border p-4 rounded-lg flex-col text-center justify-center gap-[10px] h-[300PX] w-[200px]">
            <div className="flex">
              <img
                height="100%"
                width="100%"
                className="h-[150px] w-[100px] ml-12 mt-[11px]"
                src="https://demo.cmssuperheroes.com/themeforest/bookjunky/wp-content/uploads/the_world.jpg"
                alt=""
              />
              <div className="flex flex-col -ml-[125px]">
                <span className="bg-red-600 py-1 px-[4px] rounded-md flex flex-none text-white font-medium text-[15px] w-[50px]">
                  $50/-
                </span>
              </div>
            </div>
            <div className="">
              <p className="mt-[10px]">the world Art</p>
              <input type="number"className="border-2 border-black w-[150px] mt-[10px]"/>
              <button className="px-4 py-2 mt-[10px] rounded-md hover:bg-black duration-700 bg-violet-700 text-white font-thin text-sm">
                ADD TO CART
              </button>
            </div>
          </div>

          <div className="flex flex-col text-center justify-center gap-[10px] border-2 h-[300PX] w-[200px]">
            <div className="flex">
              <img
                height="100%"
                width="100%"
                className="h-[150px] w-[100px] ml-12 mt-[11px]"
                src="https://demo.cmssuperheroes.com/themeforest/bookjunky/wp-content/uploads/the_happy_lemon.jpg"
                alt=""
              />
              <div className="flex flex-col -ml-[125px]">
                <span className="bg-red-600 py-1 px-[4px] rounded-md flex flex-none text-white font-medium text-[15px] w-[50px]">
                  $20/-
                </span>
              </div>
            </div>
            <div className="">
              <p className="mt-[10px]">the happy lemon</p>
              <input
                type="number"
                className="border-2 border-black w-[150px] mt-[10px]"
              />
              <button className="px-4 py-2 mt-[10px] hover:bg-black duration-700 rounded-md bg-violet-700 text-white font-thin text-sm">
                ADD TO CART
              </button>
            </div>
          </div>

          <div className="flex flex-col text-center justify-center gap-[10px] border-2 h-[300PX] w-[200px]">
            <div className="flex">
              <img
                height="100%"
                width="100%"
                className="h-[150px] w-[100px] ml-12 mt-[11px]"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBJPHU-rpK7d2wzoYBLwjBbd1SoL6i82CaWbLp2es1HzHDbqf9WLztGFiASbtE5NBHioY&usqp=CAU"
                alt=""
              />
              <div className="flex flex-col -ml-[125px]">
                <span className="bg-red-600 py-1 px-[4px] rounded-md flex flex-none text-white font-medium text-[15px] w-[50px]">
                  $16/-
                </span>
              </div>
            </div>
            <div className="">
              <p className="mt-[10px]">darknet</p>
              <input
                type="number"
                className="border-2 border-black w-[150px] mt-[10px]"
              />
              <button className="px-4 py-2 mt-[10px] hover:bg-black duration-700 rounded-md bg-violet-700 text-white font-thin text-sm">
                ADD TO CART
              </button>
            </div>
          </div>

          <div className="flex flex-col text-center justify-center gap-[10px] border-2 h-[300PX] w-[200px]">
            <div className="flex">
              <img
                height="100%"
                width="100%"
                className="h-[150px] w-[100px] ml-12 mt-[11px]"
                src="https://m.media-amazon.com/images/I/71QgrCBUAQL._AC_UF894,1000_QL80_.jpg"
                alt=""
              />
              <div className="flex flex-col -ml-[125px]">
                <span className="bg-red-600 py-1 px-[4px] rounded-md flex flex-none text-white font-medium text-[15px] w-[50px]">
                  $12/-
                </span>
              </div>
            </div>
            <div className="">
              <p className="mt-[10px]">be well bee</p>
              <input
                type="number"
                className="border-2 border-black w-[150px] mt-[10px]"
              />
              <button className="px-4 py-2 mt-[10px] hover:bg-black duration-700 rounded-md bg-violet-700 text-white font-thin text-sm">
                ADD TO CART
              </button>
            </div>
          </div>

          <div className="flex flex-col text-center justify-center gap-[10px] border-2 h-[300PX] w-[200px]">
            <div className="flex">
              <img
                height="100%"
                width="100%"
                className="h-[150px] w-[100px] ml-12 mt-[11px]"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThyUUVKjcNpxh4ZQN4lIwUrJmeyKGdWq-NiA&s"
                alt=""
              />
              <div className="flex flex-col -ml-[125px]">
                <span className="bg-red-600 py-1 px-[4px] rounded-md flex flex-none text-white font-medium text-[15px] w-[50px]">
                  $22/-
                </span>
              </div>
            </div>
            <div className="">
              <p className="mt-[10px]">red queen</p>
              <input
                type="number"
                className="border-2 border-black w-[150px] mt-[10px]"
              />
              <button className="px-4 py-2 mt-[10px] hover:bg-black duration-700 rounded-md bg-violet-700 text-white font-thin text-sm">
                ADD TO CART
              </button>
            </div>
          </div>

          <div className="flex flex-col text-center justify-center gap-[10px] border-2 h-[300PX] w-[200px]">
            <div className="flex">
              <img
                height="100%"
                width="100%"
                className="h-[150px] w-[100px] ml-12 mt-[11px]"
                src="https://m.media-amazon.com/images/I/41ngZbBvVCL._AC_UF1000,1000_QL80_.jpg"
                alt=""
              />
              <div className="flex flex-col -ml-[125px]">
                <span className="bg-red-600 py-1 px-[4px] rounded-md flex flex-none text-white font-medium text-[15px] w-[50px]">
                  $12/-
                </span>
              </div>
            </div>
            <div className="">
              <p className="mt-[10px]">night shade</p>
              <input
                type="number"
                className="border-2 border-black w-[150px] mt-[10px]"
              />
              <button className="px-4 py-2 mt-[10px] hover:bg-black duration-700 rounded-md bg-violet-700 text-white font-thin text-sm">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
          <div className="flex justify-center text-center mt-5">
            <button className="bg-orange-500 px-3 py-1 text-white rounded-md duration-700 hover:bg-black">
              Load More
            </button>
          </div>
      </div>

      <div className="flex justify-center items-center w-[82%] m-auto">
        <div>
          <img height="100%" width="100%" className="h-[300px] w-[800px]"src="https://allisonjpmiller.com/wp-content/uploads/2015/04/bookpath.png?w=1200&h=900&crop=1" alt="" />
        </div>
        <div className="container bg-slate-400 p-4 text-black leading-[2rem]">
          <h1 className="text-2xl font-bold">ABOUT US</h1>
          <p className="w-[80%]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis quaerat dolore, dolorem sunt animi est!</p>
          <button className="bg-violet-700 text-white py-1 px-4 text-sm rounded-md hover:bg-black duration-700">Read More</button>
        </div>
      </div>
      <div className="bg-black h-[170px]">
        <div className="flex flex-col justify-center items-center w-[82%] m-auto text-white mt-[15px] leading-[2rem]">
          <h1 className="font-bold">HAVE ANY QUESTIONS?</h1>
          <p className="w-[59%]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur quo distinctio corporis excepturi cumque adipisci doloremque corrupti quam laborum animi.</p>
          <div className="bg-violet-700 px-3 py-[2px] rounded-md hover:bg-white hover:text-black duration-700       font-semibold">
            <button>Contact Us</button>
          </div>
        </div>
      </div>
      <footer className="bg-gray-200">
        <div className="flex flex-row justify-between w-[80%] m-auto items-center pt-5 pb-5 gap-2 leading-[3rem] j">
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
                <h5><FaPhoneAlt className="text-purple-700" /></h5>
                <p>+123-456-7890</p>
              </div>
              <div className="flex flex-row items-center gap-1">
                <h3><FaPhoneAlt className="text-purple-700" /></h3>
                <p>+111-222-3333</p>
              </div>
              <div className="flex flex-row items-center gap-1">
                <h3><IoMail className="text-purple-700" /></h3>
                <p>fawaz21@gmail.com</p>
              </div>
              <div className="flex flex-row items-center gap-1">
                <h3><FaLocationDot className="text-purple-700" /></h3>
                <p>mumba mushin,678-909</p>
              </div>
            </div>
          </div>
        <div>
                <h2 className="font-bold">FOLLOW US</h2>
                <p className="flex items-center gap-1 f"><FaFacebookF className="text-purple-700"/> facebook</p>
                <p className="flex items-center gap-1"><FaXTwitter className="text-purple-700" /> twitter</p>
                <p className="flex items-center gap-1"><FaInstagram className="text-purple-700"/> instagram</p>
                <p className="flex items-center gap-1"><FaLinkedin className="text-purple-700"/> linkedin</p>    
            </div>
        </div>
        <hr className="h-[2px] bg-black"/>
        <div>
          <p className="text-center text-sm"> All rights reserved <span className="text-purple-700 font-semibold">&copy; 2022</span></p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
