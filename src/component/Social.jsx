import React from 'react'

export default function Social(){
    return(
        <>
            <b>Social Media</b>
            <p className='text-[8px] mb-4'>Lorem Ipsum is simply dummy text of the printingand typesetting industry.</p>
            <div className='flex gap-2 justify-center items-center'>
                <div>
                    <img src="/images/social/img5.png" alt=""   className='w-ful'/>    
                </div> 
                <div>
                    <img src="/images/social/img1.png" alt=""  className='w-full' />
                </div>
                <div>
                    <img src="/images/social/img2.png" alt=""  className='w-full' />
                </div>
                <div>
                    <img src="/images/social/img3.png" alt=""  className='w-full' />
                </div>
                <div>
                    <img src="/images/social/img4.png" alt=""  className='w-full' />
                </div>
                <div>
                     <img src="/images/social/img5.png" alt=""  className='w-full' />
                </div>
            </div>
        </>
    )
}