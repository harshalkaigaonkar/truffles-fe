import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import AlertComponent from '../components/alert'
import CalendarComponent from '../components/calendar'
import ChartComponent from '../components/chart'
import HeaderComponent from '../components/header'
import InvoiceForm from '../components/invoice'
import RecordsComponent from '../components/metric/records'
import ValuesComponent from '../components/metric/values'
import InvoiceNavigation from '../components/navigation/invoice'

const Invoice: NextPage = () => {

  const [invoiceFormLevel, setInvoiceFormLevel] = useState<0|1|2|3|4|5|number>(0);

  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Truffles Dashboard</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <HeaderComponent title="Invoice" />

      <main className="flex w-full flex-1 flex-row">
        <InvoiceNavigation invoiceFormLevel={invoiceFormLevel} />
        <div className='p-3 w-[80%] flex flex-col'>
          <InvoiceForm invoiceFormLevel={invoiceFormLevel} setInvoiceFormLevel={setInvoiceFormLevel}>
            <p>Hello</p>
          </InvoiceForm>
        </div>
      </main>
    </div>
  )
}

export default Invoice
