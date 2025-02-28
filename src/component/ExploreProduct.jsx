import React from 'react'

export default function ExploreProduct(){
    return(
        <div className='grid grid-cols-2 gap-2 sm:grid-cols-4 sm:grid-rows-2 sm:w-[90vw]'>
            <div className='col-span-2 sm:col-span-2 sm:row-span-2 place-content-center mb-2 sm:mb-0'>
                <b className='sm:text-xl'>Explore Our Products</b>
                <div className='text-[7.5px] sm:text-[9px] flex flex-col gap-3 mt-2 sm:w-[282px] md:w-[350px]'>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                         of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                         but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                    <p>
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                        passages, and more recently with desktop publishing software like Aldus PageMaker including
                        versions of Lorem IpsuLorem Ipsum is simply dummy text of the printing and typesetting 
                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                    </p>
                    <p>           
                        It was popularised in the 1960s with the release of Letraset sheets 
                        containing Lorem Ipsum passages, and more recently with desktop publishing 
                        software like Aldus PageMaker including versions of Lorem IpsuLorem Ipsum is 
                        simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                        been the industry's standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic 
                        typesetting, remaining essentially unchanged. It was popularised in the 1960s 
                        with the release of Letraset sheets containing Lorem
                        Ipsum passages, and more recently with desktop publishing software like Aldus 
                        PageMaker including versions of Lorem Ipsu
                    </p>
                </div>
            </div>
            <div className='h-[200px] sm:h-[260px] md:h-[290px] w-full'>
                <img src="images/bage.png" alt="bag"  className='h-full w-full object-cover'/>
            </div>
            <div className='h-[200px] sm:h-[260px] md:h-[290px] w-full'>
                <img src="images/juwelries.png" alt="juwelries" className='h-full w-full object-cover' />
            </div>
            <div className='h-[200px] sm:h-[260px] md:h-[290px] w-full'>
                <img src="images/stande.png" alt="standing woman" className='h-full w-full object-cover' />
            </div>
            <div className='h-[200px] sm:h-[260px] md:h-[290px] w-full'>
                <img src="images/diff.png" alt="bag" className='h-full w-full object-cover' />
            </div>
        </div>
    )
}