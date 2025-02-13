import React from 'react'
import { Link } from 'react-router-dom'
import MenLatest from './menLatest/menLatest'

export default function Home(){
    return(
        <section className='grid grid-cols-2 gap-2 sm:grid-cols-4 sm:grid-rows-2'>
            <div className='col-span-2 sm:row-span-2 w-full h-64 sm:h-[392px] relative'>
                <img src="/images/home1.png" alt="" className='w-full h-full object-cover' />  
                <div className='bg-black absolute inset-0 opacity-[50%]'></div> 
                <div className='absolute top-22 sm:top-32 md:top-34 left-8 text-white'>
                    <h2 className='text-[22px] md:text-[27px] font-bold'>We Are Hexashop</h2>
                    <p className='text-[8px] font-light my-1 md:mb-2 w-[190px] md:w-[196px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <Link className='text-[8px] md:text-[10px] font-semibold border-2 py-1 md:py-2 px-1 md:px-2'>Purchase Now</Link>
                </div>
            </div>
            <div className=' w-full h-48 relative'>
                <img src="/images/women.png" alt="" className='w-full h-48 object-cover' /> 
                <div className='bg-black absolute inset-0 opacity-[50%]'></div> 
                <div className='absolute top-14 left-9 text-white text-center'>
                    <b className='text-sm'>Women</b>
                    <p className='text-[8px] font-light mb-2'>Lorem Ipsum is simply dummy</p>
                    <Link className='text-[8px] md:text-[10px] font-semibold border-2 py-1 md:py-2 px-1 md:px-2'>Discover More</Link>
                </div>
            </div>
            <div className='w-full h-48 relative'>
                <img src="/images/men.png" alt="" className='w-full h-48 object-cover' />
                <div className='bg-black absolute inset-0 opacity-[50%]'></div> 
                <div className='absolute top-14 left-9 text-white text-center'>
                    <b className='text-sm'>Men</b>
                    <p className='text-[8px] font-light mb-2'>Lorem Ipsum is simply dummy</p>
                    <Link className='text-[8px] md:text-[10px] font-semibold border-2 py-1 md:py-2 px-1 md:px-2'>Discover More</Link>
                </div>
            </div>
            <div className='w-full h-48 relative'>
                <img src="/images/kids.png" alt="" className='w-full h-48 object-cover' />
                <div className='bg-black absolute inset-0 opacity-[50%]'></div> 
                <div className='absolute top-14 left-9 text-white text-center'>
                    <b className='text-sm'>Kids</b>
                    <p className='text-[8px] font-light mb-2'>Lorem Ipsum is simply dummy</p>
                    <Link className='text-[8px] md:text-[10px] font-semibold border-2 py-1 md:py-2 px-1 md:px-2'>Discover More</Link>
                </div>
            </div>
            <div className='w-full h-48 relative'>
                <img src="/images/accessories.png" alt="" className='w-full h-48 object-cover' />
                <div className='bg-black absolute inset-0 opacity-[50%]'></div> 
                <div className='absolute top-14 left-9 text-white text-center'>
                    <b className='text-sm'>Accessories</b>
                    <p className='text-[8px] font-light mb-2'>Lorem Ipsum is simply dummy</p>
                    <Link className='text-[8px] md:text-[10px] font-semibold border-2 py-1 md:py-2 px-1 md:px-2'>Discover More</Link>
                </div>
            </div>
        </section>
    )
}