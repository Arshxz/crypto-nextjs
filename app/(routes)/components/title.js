'use client'

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
        <div className='text-center pt-36'>
            <div className='text-6xl font-light tracking-wide'>Satoshi</div>
            <div key={count} className='hero opacity-0 text-sm text-slate-400 w-4/6 mx-auto h-20'>{facts[count]}</div>
            {title && (
                <div className={`flex justify-center mt-8 font-thin text-5xl uppercase`}>{title}</div>
            )}
        </div>
    )
}