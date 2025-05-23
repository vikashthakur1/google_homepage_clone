import React from "react"
import Image from 'next/image';
import logo from '@/app/assest/logo.jpg'
export default function Header(){
    return(
        <header>
          <nav className="flex text-center p-5 ">
            <a href="/About" className="pl-12">About</a>
            <a href="/Store" className="pl-4">Store</a>
            <span className="flex ml-auto">
              <a href="/Home" className="pr-4">Home</a>
              <Image  src={logo} className="rounded-full -mt-0.7" alt="Logo" width={25} height={55}/>
            </span>
            
          </nav>
        </header>
    )
}