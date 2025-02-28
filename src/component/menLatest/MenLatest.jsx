import React,{useState} from "react"
import { Latest } from "./Latest"
import { Link } from "react-router-dom"
import { MdOutlineShoppingCart } from "react-icons/md"
import { IoMdHeart } from "react-icons/io"
import { FaRegHeart } from "react-icons/fa"

export default function MenLatest({from,to}){
    const menLatest = Latest.map( dress => {
        const [liked,setLiked] = useState(dress.isLike)
        return(
            <div className="bg-[#D9D9D9]">
                <img src={`images/${dress.img}`} alt="img of dress" className="" />
                <div className="flex items-center mx-1 mt-2">
                    <p className="text-[3px] sm:text-[7px] md:text-[10px] md:font-medium mr-auto">{dress.categories}</p>
                    <div className="flex">
                        <img src="images/star.png" alt="star" className="w-[3px] sm:w-[6px]" />
                        <img src="images/star.png" alt="star" className="w-[3px] sm:w-[6px]" />
                        <img src="images/star.png" alt="star" className="w-[3px] sm:w-[6px]" />
                        <img src="images/star.png" alt="star" className="w-[3px] sm:w-[6px]" />
                        <img src="images/star.png" alt="star" className="w-[3px] sm:w-[6px]" />
                    </div>
                </div>
                <div className="flex mx-1 mb-1 md:my-2 items-center">
                    <p className="text-[5px] sm:text-[7px] md:text-[10px] mr-auto">{`$${dress.price}`}</p>
                    <div className="flex gap-[2px]">
                        <Link onClick={() => setLiked( prev => !prev)}>
                            {
                                !liked? 
                                <FaRegHeart className='text-red-600 w-[6px] sm:w-[9px] md:w-[12px]'/>: 
                                <IoMdHeart className='text-red-600 w-[6px] sm:w-[9px] md:w-[12px]' />
                            }
                        </Link>
                        <Link><MdOutlineShoppingCart className=" w-[6px] sm:w-[9px] md:w-[12px]"/></Link>
                    </div>
                </div>
            </div>
        )
    })
    return(
        <>
            {menLatest.slice(from,to)}
        </>
    )
}