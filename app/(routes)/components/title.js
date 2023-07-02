'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Title({ title }) {
    const facts = [
        'Bitcoin was invented by Satoshi Nakamoto in the January 2009. His identity remains unknown.',
        'Nakamoto implemented the bitcoin software as open-source code.',
        'A satoshi is the smallest denomination of bitcoin, equivalent to 100 millionth of a bitcoin.',
        'The transaction that first gave Bitcoin monetary value was in October 2009, giving each Bitcoin a value of $0.0009 each.',
        // 'd',
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
        <div className='lg:pt-32 md:pt-20 pt-2 w-4/5 mx-auto'>
            <div className='flex w-full justify-between'>
                <div className='w-40 hidden md:block'>Powered by <span className="text-blue-500"><Link href='https://coinmarketcap.com/' target='_blank'>CoinMarketCap</Link></span></div>
                <div className='text-center pt-16 w-full'>
                    <div className='text-6xl font-light tracking-wide w-full text-center'>Satoshi</div>
                    <div key={count} className='hero opacity-0 text-sm text-slate-400 md:w-4/6 lg:w-7/12 mx-auto h-20 text-center'>{facts[count]}</div>
                </div>
                <div className='w-40 text-right hidden md:block'>A Project by <span className="text-blue-500"><Link href='https://github.com/Arshxz' target='_blank'>Arsh</Link></span></div>
            </div>
            {title && (
                <div className='text-center mt-8 md:mt-12 font-semibold md:font-bold text-2xl md:text-4xl uppercase text-slate-700'>{title}</div>
            )}
        </div>
    )
}