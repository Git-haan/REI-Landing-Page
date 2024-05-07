"use client"; // This is a client component 👈🏽
import React, { useState } from 'react'

import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="flex padding-container justify-between relative z-30 py-5 bg-stone-800">
            <Link href="/">
                <Image 
                src="/rei.svg"
                alt="logo" 
                width={50}
                height={50}/>
            </Link>
            <ul className={`${isMenuOpen ? 'hidden' : 'block'} hidden lg:flex h-full gap-12 py-1 font-semibold text-sm`}>
                {NAV_LINKS.map((link) => (
                    <Link 
                    href={link.href} 
                    key={link.key}
                    className="flex text-stone-300 hover:text-stone-500">
                        {link.label}
                    </Link>
                ))}
            </ul>

            <form className={`${isMenuOpen ? 'hidden' : 'block'} hidden lg:flex bg-stone-300 w-80 h-6 rounded items-center`}>
                <input 
                type="search"
                id="search bar"
                placeholder="Search for your next adventure"
                className="leading-6 w-full bg-stone-300 placeholder:px-4 placeholder:text-sm placeholder:text-stone-500 rounded-md"  
                />
                <Image src="/search-icon.png" alt="serach" width={44} height={40}/>
            </form>

            <div className={`${isMenuOpen ? 'block' : 'hidden'} max-lg:block`}>
                <button onClick={toggleMenu}>
                    <Image
                        src="menu.svg"
                        alt="menu"
                        width={25}
                        height={25}
                        className="lg:hidden inline-block"
                        onClick={toggleMenu}>
                    </Image>
                </button>
            </div>

            <div className={`absolute w-full top-16 right-0 bg-stone-300 shadow-lg p-5 lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <ul className="flex flex-row justify-between">
                        {NAV_LINKS.map((link) => (
                            <li key={link.key}>
                                <a
                                    href={link.href}
                                    className="text-sm font-semibold hover:text-stone-500"
                                    onClick={toggleMenu}
                                >
                                    {link.key}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

        </div>
    )
}

export default Navbar