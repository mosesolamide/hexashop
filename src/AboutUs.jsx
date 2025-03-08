import React from 'react'

export default function AboutUs(){
    return(
        <section className='bg-[url("images/about.png")] bg-cover bg-center w-full h-[940px] sm:h-[670px] object-cover relative flex justify-center py-2'>
            <div className='bg-black h-full w-full absolute opacity-[50%] inset-0'></div>
            <div className='absolute p-3'>
                <b className='text-white flex justify-center'>About Us</b>
                <div className='grid gap-2 mt-3 sm:grid-cols-3 sm:grid-row-3 sm:px-8'>
                    <div className='bg-[#FFA92E] py-4 px-4 sm:px-9 sm:col-span-2 flex flex-col justify-center'>
                        <b className='my-3'>Mission Statement</b>
                        <p className='text-[6px] sm:text-[10px]'>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                             when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.....
                        </p>
                    </div>
                    <div className='bg-white py-4 px-4 sm:px-9 flex flex-col justify-center'>
                        <b className='my-3'>Vision Statement</b>
                        <p className='text-[6px] sm:text-[9px]'>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.....
                        </p>
                    </div>
                    <div className='bg-white pt-4 sm:row-span-2'>
                        <b className='p-4'>Target Market Summary</b>
                        <img src="images/target.png" className='w-full h-[280px] mt-2' alt="" />
                    </div>
                    <div className='bg-bgColor py-4 px-4 sm:px-9 sm:col-span-2 flex flex-col justify-center'>
                            <b className='my-3'>Core Values</b>
                            <p className='text-[6px] sm:text-[10px]'>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.....
                            </p>
                    </div>
                    <div className='bg-[#FFA92E] py-4 px-4 sm:px-9 sm:col-span-2 flex flex-col justify-center'>
                        <b className='my-3'>Vision Statement</b>
                        <p className='text-[6px] sm:text-[10px]'>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.....
                        </p>
                    </div>

                </div>
            </div>
            
        </section>
    )
}