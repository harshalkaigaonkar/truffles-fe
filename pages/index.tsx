import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import AlertComponent from '../components/alert'
import ChartComponent from '../components/chart'
import HeaderComponent from '../components/header'
import ValuesComponent from '../components/metric/values'
import DashboardNavigation from '../components/navigation/dashboard'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Truffles Dashboard</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <HeaderComponent title="Dashboard" />

      <main className="flex w-full flex-1 flex-row">
        <DashboardNavigation page={"dashboard"} />
        <div className='p-3 w-[80%] flex flex-col'>
          <AlertComponent />
          <section>
            <ValuesComponent />
            <ChartComponent />
          </section>
        </div>
      </main>
    </div>
  )
}

export default Home
