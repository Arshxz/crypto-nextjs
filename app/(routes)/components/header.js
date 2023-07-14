'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation'
import { useState } from "react";

export default function Header() {
    const pathname = usePathname()
    const navLinks = ['explore', 'portfolio', 'interests', 'bonus']
    const [modal, setModal] = useState(false)
    // error

    return (
        <div className={`${pathname === '/' && 'hidden'} ${modal === true ? 'fixed modalOn' : 'absolute'} w-full bg-white/30 text-white z-99`}>
            <Link
                href='/'
                className='bg-black/90 hover:bg-black/60 text-sm leading-6 absolute my-4 ml-4 md:ml-16 px-4 py-1 rounded-md tracking-widest z-10'
            >
                Satoshi
            </Link>
            <div className="bg-black/90 text-sm leading-6 absolute right-4 my-4 md:hidden px-4 py-1 rounded-md tracking-widest z-10"
                onClick={() => setModal(!modal)}
            >
                Menu
            </div>
            {modal && (
                <div className="w-full bg-white text-blue-900 h-full z-9 flex flex-col justify-center items-center"
                    onClick={() => setModal(false)}
                >
                    {navLinks.map((link) => {
                        const isActive = pathname.startsWith(`/${link}`)

                        return (
                            <Link
                                className={`capitalize my-4 px-7 py-2 rounded-md 
                                        ${isActive ? 'bg-blue-500/60 cursor-default' : 'bg-black/80 text-white'}`}
                                href={link}
                                key={link}
                                onClick={() => setModal(false)}
                            >
                                {link}
                            </Link>
                        )
                    })}
                </div>
            )}
            <div className="flex my-4 md:justify-end lg:justify-center max-md:hidden">
                {navLinks.map((link) => {
                    const isActive = pathname.startsWith(`/${link}`)

                    return (
                        <Link
                            className={`capitalize mx-4 px-5 py-1 rounded-md
                            ${isActive ? 'bg-blue-500/40 cursor-default' : 'bg-white/40 text-black hover:bg-white/60'}`}
                            href={link}
                            key={link}
                        >
                            {link}
                        </Link>
                    )
                })}
            </div>
        </div >
    )
}