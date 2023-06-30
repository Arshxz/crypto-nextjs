import DataTable from "../components/dataTable"
import GlobalData from "../components/globalData"
import Title from "../components/title"

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

async function getTopTen() {
    const res = await fetch(`${HOSTNAME}/v1/cryptocurrency/listings/latest?limit=10`, options)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export default async function Explore() {
    const data = await getTopTen()

    return (
        <div>
            <Title title='Explore the Market' />
            <DataTable dataa={data.data} />
        </div>
    )
}