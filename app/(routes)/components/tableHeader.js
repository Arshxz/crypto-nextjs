'use client'

import { useState } from "react"

const InfoSvg = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#9b9b9b" className="bi bi-info-circle-fill" viewBox="0 0 16 16">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
</svg>

export default function TableHeader() {
    const [mcap, setMcap] = useState(false)
    const [volume, setVolume] = useState(false)
    const [supply, setSupply] = useState(false)

    return (
        <thead>
            <tr>
                <th className="text-start">#</th>
                <th className="text-start">Name</th>
                <th>Price</th>
                <th>7d%</th>
                <th>
                    <div className="flex justify-end items-center">
                        Market Cap
                        <span className="relative ml-1"
                            onMouseEnter={() => setMcap(true)}
                            onMouseLeave={() => setMcap(false)}>
                            {InfoSvg}
                        </span>
                    </div>
                    <div className={mcap === true ? 'block tooltip' : 'hidden tooltip'}>
                        The total market value of a cryptocurrency&apos;s circulating supply. It is analogous to the free-float capitalization in the stock market. <br /><br />Market Cap = Current Price x Circulating Supply.
                    </div>
                </th>
                <th className="relative">
                    <div className="flex justify-end items-center">
                        Volume(24h)
                        <span className="ml-1"
                            onMouseEnter={() => setVolume(true)}
                            onMouseLeave={() => setVolume(false)}>
                            {InfoSvg}
                        </span>
                    </div>
                    {volume && (
                        <div className="tooltip">A measure of how much of a cryptocurrency was traded in the last 24 hours.</div>
                    )}
                </th>
                <th className="relative">
                    <div className="flex justify-end items-center">
                        Circulating Supply
                        <span className="ml-1"
                            onMouseEnter={() => setSupply(true)}
                            onMouseLeave={() => setSupply(false)}>
                            {InfoSvg}
                        </span>
                    </div>
                    {supply && (
                        <div className="tooltip">The amount of coins that are circulating in the market and are in public hands. It is analogous to the flowing shares in the stock market.</div>
                    )}
                </th>
            </tr>
        </thead>
    )
}