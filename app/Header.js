"use client"
import Link from "next/link"
import React from "react"
import useCart from "./(store)/strore"

export default function Header()
{
    const cartItems= useCart(state=>state.cart)
    return (
        <header className="sticky top-0 p-6 bg-white border-b border-solid border-blue-900 shadow-md z-50 text-2xl sm:text-3xl md:text-4xl sm:p-8 flex item-center justify-between">
            <Link href={'/'}>
                <h1 className="uppercase cursor-pointer hover:scale-110">Suvidha</h1>
            </Link>
            <div className="relative cursor-pointer group grid place-items-center">
                {cartItems.length &&(
                    <div className="absolute aspect-square pointer-events-none h-5 sm:h-6 grid place-items-center top-0 bg-blue-400 text-white rounded-full right-0 -translate-y-1/2 teanslate-x-1/2">
                        <p className=" text-xs sm:text-sm">{cartItems.length}</p>
                    </div>

                )} 
                <i className="fa-solid cursor-pointer group-hover:text-slate-500 fa-cart-shopping"></i>
            </div>




        </header>
    )
}