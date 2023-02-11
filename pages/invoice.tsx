import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import AlertComponent from '../components/alert'
import CalendarComponent from '../components/calendar'
import ChartComponent from '../components/chart'
import HeaderComponent from '../components/header'
import InvoiceForm from '../components/invoice'
import BizInfoInvoiceForm from '../components/invoice/bizinfo'
import InfoInvoiceForm from '../components/invoice/info'
import RecordsComponent from '../components/metric/records'
import ValuesComponent from '../components/metric/values'
import InvoiceNavigation from '../components/navigation/invoice'

const Invoice: NextPage = () => {

  const [invoiceFormLevel, setInvoiceFormLevel] = useState<number>(0);

  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Truffles Dashboard</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <HeaderComponent title="Invoice" />

      <main className="flex w-full flex-1 flex-row justify-end">
        <InvoiceNavigation invoiceFormLevel={invoiceFormLevel} />
        <div className='w-[80%] flex flex-col'>
          <InvoiceForm invoiceFormLevel={invoiceFormLevel} setInvoiceFormLevel={setInvoiceFormLevel}>
            {
              invoiceFormLevel === 0 ? (
                <InfoInvoiceForm />
                ) :
              invoiceFormLevel === 1 ? (
                <BizInfoInvoiceForm />
                ) :
                (
                  <span>
                    <p>No Content Available for this Form</p>
                  </span>
                )
            }
          </InvoiceForm>
        </div>
      </main>
    </div>
  )
}

export default Invoice
