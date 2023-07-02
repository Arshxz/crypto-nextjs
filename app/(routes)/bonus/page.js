import Title from "@/app/(routes)/components/title";
import DataTable from "../components/dataTable";

const HOSTNAME = 'https://pro-api.coinmarketcap.com'
const API_KEY = '8a64fa8e-4a97-4783-bfc0-7e84c7a28ebb'

const options = {
    headers: {
        'X-CMC_PRO_API_KEY': API_KEY
    },
}

async function getBonus() {
    const BONUS = [{
        'GFI': 13967,
        'ENZYME': 1552,
        'PENDLE': 9481,
        'DOPEX': 11188,
        'SPHERE': 18945,
        'PREMIA': 8476,
        'INDEX': 7336,
        'AKASH NETWORK': 7431,
        'REDACTED': 21324,
        'FOREX': 11794
    }]
    let list = []
    BONUS.map((item) => (
        list.push(Object.values(item))
    ))
    const string = list.toString()
    const res = await fetch(`${HOSTNAME}/v2/cryptocurrency/quotes/latest?id=${string}`, options)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export default async function Bonus() {
    const bonus = await getBonus()
    let dataArr = Object.values(bonus.data)

    return (
        <div>
            <Title title='100x Projects' />
            <DataTable data={dataArr} />
        </div>
    )
}