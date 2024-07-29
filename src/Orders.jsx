import React from "react";
import { Link } from "react-router-dom";
import image1 from "./images/image1.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Header from "./shared_component/Header";


const Orders= () => {
  return (
    <div>
        <Header />
        <div className="min-h-screen flex flex-col items-center justify-center font-extrabold ">
            <div
            className="relative w-full h-[400px] bg-cover bg-center"
            style={{ backgroundImage: `url(${image1})` }}
            >
            <div className="flex flex-col justify-center items-center text-center mt-[120px]">
                <h2 className="font-black text-5xl">YOUR ORDERS</h2>
                <div className="flex flex-row ">
                <h4 className="font-semibold text-2xl text-violet-700">
                    <Link to="/home">home/ </Link>
                </h4>
                <h4 className="font-semibold text-2xl ">
                    <Link to="/order">order</Link>
                </h4>
                </div>
            </div>
            </div>
        </div>
        <div >
            <div>
                <h2 className="font-bold text-center text-3xl"> PLACED ORDER</h2>
            </div>
            <div class=" mx-auto mt-6 mb-5 p-6 bg-gray-200 w-[900px] h-[400px] border border-black shadow-md rounded-md">
        <div className="">
            <div className="flex flex-row space-x-3 mb-4">
            <div class="font-bold">Placed on:</div> <div className="text-violet-400">04-Jul-2024</div> </div>
            <div className="flex flex-row space-x-3 mb-4">
            <div class="font-bold">Name:</div> <div  className="text-violet-400">Roheem</div> </div>
            <div className="flex flex-row space-x-3 mb-4">
            <div class="font-bold">Number:</div> <div  className="text-violet-400">0913423445</div> </div>
            <div className="flex flex-row space-x-3 mb-4">
            <div class="font-bold">Email:</div> <div  className="text-violet-400">suleroheem@gmail.com</div>
            </div>
            <div className="flex flex-row space-x-3 mb-4" >
            <div class="font-bold">Address:</div> <div  className="text-violet-400">Flat 2, Mushin Ilasamaja, Dehli Mumbai - 353553</div> </div>
            <div  className="flex flex-row space-x-3 mb-4">
            <div class="font-bold">Payment Method:</div> <div  className="text-violet-400">CashApp</div> </div>
            <div  className="flex flex-row space-x-3 mb-4">
            <div class="font-bold">Your Orders:</div> <div  className="text-violet-400">The World of Art (1), Happy Lemons (2), Be Well Bee (2)</div> </div>

        <div  className="flex flex-row space-x-3 mb-4">    <div class="font-bold">Total Price:</div> <div  className="text-violet-400">$198</div></div>
        <div  className="flex flex-row space-x-3 v">
            <div class="font-bold">Payment Status:</div> <div  className="text-red-400">Pending</div></div>
        </div>
            </div>
        </div>
        <footer className='bg-gray-200'>
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
};
export default Orders;