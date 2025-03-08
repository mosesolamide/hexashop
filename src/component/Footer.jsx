import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(){
    return(
        <footer className='bg-[#1E1E1E] w-screen mt-6 text-white '>
            <div className='grid grid-cols-[repeat(auto-fit,150px)] gap-6 justify-around py-5'>
                <div className='flex flex-col gap-2'>
                    <div className="flex items-center">
                        <img src="/images/logo_white.png" alt="logo" className="w-[20px]" />
                        <div className="flex flex-col ml-1 p-0">
                            <h1 className="font-bold text-[8px] sm:text-[10px] md:text-sm">HEXASHOP</h1>
                            <small className="text-[3px] sm:text-[5px] md:text-[8px]">ONLINE SHOPPING</small>
                        </div>
                    </div>
                    <div className='text-[9px] flex flex-col gap-1'>
                        <p><b>Address: </b>Lahore Road, Sheikhupura</p>
                        <p><b>E-mail: </b>Example@gmail.com</p>
                        <p><b>Phone: </b>08167893167</p>
                    </div>
                </div>
                <div className='text-[9px] flex flex-col gap-1'>
                    <p className='font-bold text-[10px]'>Shopping and Categories</p>
                    <Link to="mens">Men's</Link>
                    <Link to='womens'>Women's Shopping</Link>
                    <Link to="kids" >Kid's Shopping</Link>
                </div>
                <div className='text-[9px] flex flex-col gap-1'>
                    <p className='font-bold text-[10px]'>Useful Links</p>
                    <Link to="/">Home</Link>
                    <Link to="aboutus">About Us</Link>
                    <Link>Help</Link>
                    <Link to="contactus">Contact Us</Link>
                </div>
                <div className='text-[9px] flex flex-col gap-1'>
                    <p className='font-bold text-[10px]'>Help Information</p>
                    <Link>FAQ'S</Link>
                    <Link>Shipping</Link>
                    <Link>Tracking Id</Link>
                </div>
            </div>
            <div className='bg-black text-[5px] py-3 text-center'>
                Copyright @ 2022
            </div>
        </footer>
    )
}