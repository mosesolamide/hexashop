import React from 'react'
import MenLatest from './MenLatest'
import { Link } from 'react-router-dom'

export default function HomeMen(){
    return(
        <section className='w-full py-4'>
            <div>
                    <b className='text-sm sm:text-xl'>Men's Latest</b>
                    <div className='grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] justify-center gap-2 mt-2'>
                        <MenLatest 
                            from={0}
                            to={6}
                        />
                    </div>
            </div>
            <div className='mt-5'>
                    <b className='text-sm sm:text-xl'>Featured</b>
                    <div className='grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] justify-center gap-2'>
                        <MenLatest 
                            from={6}
                            to={12}
                        />
                    </div>
            </div>
            <div className='mt-5'>
                    <b className='text-sm sm:text-xl'>Casual</b>
                    <div className='grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] justify-center gap-2'>
                        <MenLatest 
                            from={8}
                            to={14}
                        />
                    </div>
            </div>
           <div className='h-[270px] md:h-[350px] w-full mt-5'>
                <div className='bg-[url("images/menlatest/btBg.png")] bg-cover bg-center relative h-full w-full'>
                    <div className='absolute top-0 left-0 bottom-0 flex flex-wrap sm:gap-15 md:gap-0 justify-center sm:justify-around items-center w-full'>
                        <div className='flex sm:h-[230px] sm:w-[165px]'>
                            <img src="images/menlatest/kc1.png" alt=""  className='w-[80px] sm:w-full sm:h-full'/>
                            <img src="images/menlatest/kc2.png" alt=""  className='w-[80px] sm:w-full sm:h-full'/>
                        </div>
                        <div className='text-white text-center px-2 sm:w-[200px] '>
                            <b>Kid's Collection</b>
                            <p className='text-[6px]'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                                 dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                 It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                            <p className='text-[6px] mb-2'> 
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
                                 Lorem IpsuLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                                  a galley of type and scrambled it to make a type specimen book.
                                 It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                            <Link className='text-[8px] md:text-[10px] font-semibold border-2 py-1 md:py-2 px-1 md:px-2'>Discover More</Link>
                        </div>
                    </div>
                </div>
           </div>
        </section>
    )
}