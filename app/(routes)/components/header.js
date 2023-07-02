'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation'

export default function Header() {
    const pathname = usePathname()
    const navLinks = ['explore', 'portfolio', 'interests', 'bonus']

    return (
        <div className={`${pathname === '/' && 'hidden'} block w-full absolute bg-white/30 text-white sm:max-md:hidden`}>
            <Link
                href='/'
                className="bg-black/90 hover:bg-black/60 text-sm leading-6 absolute my-4 ml-16 px-4 py-1 rounded-md tracking-widest"
            >
                Satoshi
            </Link>
            <div className="min-w-fit w-5/12 mx-auto flex justify-between my-4 md:max-md:fixed md:max-md:right-0">
                {navLinks.map((link) => {
                    const isActive = pathname.startsWith(`/${link}`)

                    return (
                        <Link
                            className={`capitalize px-5 py-1 rounded-md
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