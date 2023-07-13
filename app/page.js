import Link from "next/link"
import Title from "./(routes)/components/title"

const arrowRight = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
</svg>

export function Container({ url, title, hero }) {
  return (
    <Link href={url} className="group home-action mt-8 lg:mx-4">
      <div className='flex items-center text-xl	font-semibold pb-1'>
        <div>{title}</div>
        <div className="ml-2 pt-1 group-hover:translate-x-1 motion-safe:transition">{arrowRight}</div>
      </div>
      <div className='text-xs	font-medium text-slate-400'>{hero}</div>
    </Link>
  )
}

export default async function Page() {
  return (
    <main className="h-fit lg:h-screen max-md:mb-5">
      <Title />
      <div className="w-3/5 mx-auto md:w-5/12 lg:flex lg:w-4/5 lg:pt-36">
        <Container url='explore' title='Explore' hero='Explore the crypto space' />
        <Container url='portfolio' title='Portfolio' hero='Wanna know what projects I am currently invested in?' />
        <Container url='interests' title='Interests' hero='Have a quick look at the projects I&apos;m interested in' />
        <Container url='bonus' title='100x' hero='Projects I believe could give you a 1000% return' />
      </div>
    </main >
  )
}