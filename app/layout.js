import { Suspense } from 'react'
import './styles.scss'
import Loading from './loading'
import Header from './(routes)/components/header'
import { AnimationProvider } from './context/store'
const name = 'Arshdeep Singh'

export const metadata = {
  title: 'Satoshi by Arsh',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='select-none overflow-x-none global'>
        <Suspense fallback={<Loading />}>
          <Header />
          <AnimationProvider>
            {children}
          </AnimationProvider>
        </Suspense>
      </body>
    </html>
  )
}

// 18447221011