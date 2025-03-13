import React from 'react'
import { FaPhoneVolume } from "react-icons/fa6"
import { RiCustomerService2Line } from "react-icons/ri"
import { Link } from 'react-router-dom'

export default function ContactUs(){
    return(
        <section className='h-[100vh]'>
            <div className='relative w-[700px] h-[100vh] sm:h-[70vh]'>
                <img src="/images/home1.png" alt="" className='w-full h-full object-cover'/>
                <div className='absolute bg-black inset-0 opacity-50'></div>
                <b className='text-white sm:text-4xl absolute top-2 sm:top-20 bottom-0 flex justify-center right-0 left-0'>Get in Touch</b>
            </div>
            <div className='flex flex-col sm:flex-row justify-center items-center gap-4 absolute top-28 sm:top-70 bottom-0 left-0 right-0'>
                <div className='bg-white w-[280px] flex flex-col items-center justify-center gap-2 px-5 py-4 h-[190px] shadow-xl rounded-[2px]'>
                    <FaPhoneVolume size={30}/>
                    <b className='text-sm'>Talk To Sales</b>
                    <p className='text-[7px]'>
                        orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        Ipsum has been the industry's standard dummy text ever since the 1500s, whe
                        n an unknown printer took a galley of type and scrambled it to make a
                        type specimen book.orem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been the industry's st
                        andard dummy text ever since the 1500s..... 
                    </p>
                    <Link className='text-[9px]'>View all global Members</Link>
                </div>
                <div className='bg-white w-[280px] flex flex-col items-center justify-center gap-2 px-5 py-4 h-[190px] shadow-xl rounded-[2px]'>
                    <RiCustomerService2Line size={30} />
                    <b className='text-sm'>Contact Customer support</b>
                    <p className='text-[7px]'>
                        orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                        Ipsum has been the industry's standard dummy text ever since the 1500s, whe
                        n an unknown printer took a galley of type and scrambled it to make a
                        type specimen book.orem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been the industry's st
                        andard dummy text ever since the 1500s..... 
                    </p>
                    <button className='border-2 text-[7px] px-3 py-2 cursor-pointer'>Customer Support</button>
                </div>
            </div>
        </section>
    )
}