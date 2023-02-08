import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import AlertComponent from '../components/alert'
import CalendarComponent from '../components/calendar'
import ChartComponent from '../components/chart'
import HeaderComponent from '../components/header'
import RecordsComponent from '../components/metric/records'
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
          <span className='flex flex-row '>
            <div className='flex flex-col w-[70%]'>
              <ValuesComponent />
              <ChartComponent />
            </div>
            <div className='flex flex-col w-[30%]'>
              <CalendarComponent />
              <RecordsComponent />
            </div>
          </span>
        </div>
      </main>
    </div>
  )
}

export default Home
