import { Suspense } from "react"
import Title from "../components/title"
import GetData from "./getData"
import Skeleton from "./skeleton"
import DataTable from "../components/dataTable"

import { Animation } from "@/app/context/store"

// We can pass headers on a get request using two ways:
// axios.defaults.headers.get['X-CoinAPI-Key'] = API_KEY;
const HOSTNAME = 'https://pro-api.coinmarketcap.com'
const API_KEY = '8a64fa8e-4a97-4783-bfc0-7e84c7a28ebb'

const options = {
    headers: {
        'X-CMC_PRO_API_KEY': API_KEY
    },
    // next: {
    //     'revalidate': 86400
    // }
}

async function getExplore() {
    const res = await fetch(`${HOSTNAME}/v1/cryptocurrency/listings/latest?limit=10`, options)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export default async function Explore() {
    // const { state, setState } = Animation()
    // console.log(state)

    const explore = await getExplore()

    return (
        <div>
            <Title title='Explore the Market' />
            {/* <Suspense fallback={<Skeleton />}>
                <GetData />
            </Suspense> */}
            <DataTable data={explore.data} />
        </div>
    )
}