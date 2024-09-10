import Title from "@/app/(routes)/components/title";
import DataTable from "../components/dataTable";

const HOSTNAME = 'https://pro-api.coinmarketcap.com'
const API_KEY = '8a64fa8e-4a97-4783-bfc0-7e84c7a28ebb'

const options = {
    headers: {
        'X-CMC_PRO_API_KEY': API_KEY
    },
    next: {
        'revalidate': 86400
    }
}

async function getInterests() {
    const INTERESTS = [{
        'WINR': 23681,
        'COW': 19269,
        'DINERO': 32492,
        'PENDLE': 9481,
        'PERC': 17837,
        'OP': 11840,
        'MKR': 1518,
        'DEGEN': 30096,
        'PICA': 13678,
        'FRAX': 6952,
        'RLB': 15271,
        'RBN': 12387,
        'RUNE': 4157,
        'LPT': 3640,
        'LAI': 23846,
        'CRYO': 30965,
        'GEOD': 20969,
        'SHRAP': 28363,
        'PREMIA': 8476,
        'PRISMA': 28335,
        'WIFI': 24133
    }]
    let list = []
    INTERESTS.map((item) => (
        list.push(Object.values(item))
    ))
    const string = list.toString()
    const res = await fetch(`${HOSTNAME}/v2/cryptocurrency/quotes/latest?id=${string}`, options)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export default async function Interests() {
    const interests = await getInterests()
    let dataArr = Object.values(interests.data)

    return (
        <div>
            <Title title='Projects I&apos;m looking into' />
            <DataTable data={dataArr} />
        </div>
    )
}