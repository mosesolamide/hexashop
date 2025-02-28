import React from "react"
import { Link,NavLink } from "react-router-dom"
import { MdOutlineShoppingCart } from "react-icons/md"

export default function Header(){
    return(
        <header>
            <nav className="flex items-center justify-around py-2 sm:py-3 w-screen bg-bgColor">
                <div className="flex items-center">
                    <img src="/images/logo.png" alt="logo" className="w-[20px]" />
                    <div className="flex flex-col ml-1 p-0">
                        <h1 className="font-bold text-[8px] sm:text-[10px] md:text-sm">HEXASHOP</h1>
                        <small className="text-[3px] sm:text-[5px] md:text-[8px]">ONLINE SHOPPING</small>
                    </div>
                </div>
                <ul className="flex gap-3 text-[6px] sm:text-[10pxpx] md:text-sm">
                    <li><NavLink to='.'>Home</NavLink></li>
                    <li><NavLink to='mens'>Men's</NavLink></li>
                    <li><NavLink>Women's</NavLink></li>
                    <li><NavLink>Kid's</NavLink></li>
                    <li><NavLink>About Us</NavLink></li>
                    <li><NavLink>Contact Us</NavLink></li>
                </ul>
                <Link className="flex items-center md:gap-1 text-[6px] sm:text-[8px] md:text-sm w-[50px]"><MdOutlineShoppingCart />Cart</Link>
            </nav>
        </header>
    )
}