'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Title({ title }) {
    const facts = [
        'Bitcoin was invented by Satoshi Nakamoto in the January 2009. His identity remains unknown.',
        'Nakamoto implemented the bitcoin software as open-source code.',
        'A satoshi is the smallest denomination of bitcoin, equivalent to 100 millionth of a bitcoin.',
        'The transaction that first gave Bitcoin monetary value was in October 2009, giving each Bitcoin a value of $0.0009 each.',
    ]
    const [count, setCount] = useState(0)
    let delay = 6000

    useEffect(() => {
        const interval = setInterval(() => {
            if (count < 3) {
                setCount(count + 1)
            }
            else setCount(0)
        }, delay)
        return () => { clearInterval(interval) }
    })

    return (
        <div className='pt-20 md:pt-32 max-sm:ml-3 md:w-11/12 mx-auto'>
            <div className='flex w-full justify-between md:w-5/6 mx-auto'>
                <div className='w-40 max-md:hidden'>Powered by <span className="text-blue-500"><Link href='https://coinmarketcap.com/' target='_blank'>CoinMarketCap</Link></span></div>
                <div className='pt-10 lg:pt-16 w-full'>
                    <div className='text-8xl md:text-6xl font-normal md:font-light tracking-wide w-full md:text-center'>Satoshi</div>
                    <div key={count} className='hero opacity-0 text-sm text-slate-400 w-5/6 md:w-4/6 lg:w-7/12 md:mx-auto h-20 md:text-center'>{facts[count]}</div>
                </div>
                <div className='w-40 text-right max-md:hidden'>A Project by <span className="text-blue-500"><Link href='https://github.com/Arshxz' target='_blank'>Arsh</Link></span></div>
            </div>
            {title && (
                <div className='w-full'>
                    <div className='md:text-center mt-8 md:mt-12 font-semibold md:font-bold text-2xl md:text-4xl uppercase text-slate-700'>{title}</div>
                    <div className="w-4/5 md:w-11/12 text-xs md:text-2xl max-sm:mb-4 md:pt-5 font-semibold md:font-thin">Today&apos;s Cryptocurrency Prices by <span className="text-blue-500"><Link href='https://coinmarketcap.com/' target='_blank'>Market Cap</Link></span></div>
                </div>
            )}
        </div>
    )
}