import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout(){
    return(
        <>
            <Header />
            <main className="flex flex-col justify-center items-center p-5">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}