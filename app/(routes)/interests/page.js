import Title from "@/app/(routes)/components/title";
import DataTable from "../components/dataTable";

const HOSTNAME = 'https://pro-api.coinmarketcap.com'
const API_KEY = '8a64fa8e-4a97-4783-bfc0-7e84c7a28ebb'

// We can pass headers on a get request using two ways:
// axios.defaults.headers.get['X-CoinAPI-Key'] = API_KEY;
const options = {
    headers: {
        'X-CMC_PRO_API_KEY': API_KEY
    },
}

async function getTop() {
    const res = await fetch(`${HOSTNAME}/v1/cryptocurrency/listings/latest?limit=10`, options)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export default async function Interests() {
    const data = await getTop()

    return (
        <div>
            <Title title='Projects I&apos;m looking into' />
            <DataTable dataa={data.data} />
        </div>
    )
}