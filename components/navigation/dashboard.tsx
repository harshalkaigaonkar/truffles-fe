import React, { FC } from 'react'
import NavigationComponent from '.'
import { NextRouter, useRouter } from 'next/router'
import DashboardIcon from '../icons/dashboard'
import InvoiceIcon from '../icons/invoice'
import ProformaIcon from '../icons/proforma'
import SwapIcon from '../icons/swap'
import TransferIcon from '../icons/transfer'
import ContactIcon from '../icons/contact'

type DashboardNavigationProps = {
  page: string
}

const DashboardNavigation: FC<DashboardNavigationProps> = ({page}) => {
  
  const router : NextRouter = useRouter();
  
  return (
    <NavigationComponent>
     <section className='flex flex-col justify-start gap-4'>
     <div
        onClick={() => router.push("/")}
        className={` ${page === 'dashboard' ? "bg-white shadow-sm shadow-white/20" : "hover:bg-white hover:shadow-sm hover:shadow-white/20"}
        flex flex-row items-center w-full p-2 rounded-lg cursor-pointer`}
      >
        <span className={` ${page === 'dashboard' ? "bg-gradient" : "bg-white"}
          p-2 rounded-xl shadow-md shadow-black/20`}>
          <DashboardIcon
            className={` ${page === 'dashboard' ? "text-white" : "text-[#384764]" }
            h-5 w-5`} />
        </span> 
        <h5 className='ml-3 font-normal'>
         Dashboard
        </h5>
     </div>
     <div
        onClick={() => router.push("/invoice")}
        className={` ${page === 'invoice' ? "bg-white shadow-sm shadow-white/20" : "hover:bg-white hover:shadow-sm hover:shadow-white/20"}
        flex flex-row items-center w-full p-2 rounded-lg cursor-pointer`}
      >
        <span className={` ${page === 'invoice' ? "bg-gradient" : "bg-white"}
          p-2 rounded-xl shadow-md shadow-black/20`}>
          <InvoiceIcon
            className={` ${page === 'invoice' ? "text-white" : "text-[#384764]" }
            h-5 w-5`} />
        </span> 
        <h5 className='ml-3 font-normal'>
         Invoice
        </h5>
     </div>
     <div
        onClick={() => router.push("/proforma")}
        className={` ${page === 'proforma' ? "bg-white shadow-sm shadow-white/20" : "hover:bg-white hover:shadow-sm hover:shadow-white/20"}
        flex flex-row items-center w-full p-2 rounded-lg cursor-pointer`}
      >
        <span className={` ${page === 'proforma' ? "bg-gradient" : "bg-white"}
          p-2 rounded-xl shadow-md shadow-black/20`}>
          <ProformaIcon
            className={` ${page === 'proforma' ? "text-white" : "text-[#384764]" }
            h-5 w-5`} />
        </span> 
        <h5 className='ml-3 font-normal line-through'>
         Proforma
        </h5>
     </div>
     <div
        onClick={() => router.push("/swap")}
        className={` ${page === 'swap' ? "bg-white shadow-sm shadow-white/20" : "hover:bg-white hover:shadow-sm hover:shadow-white/20"}
        flex flex-row items-center w-full p-2 rounded-lg cursor-pointer`}
      >
        <span className={` ${page === 'swap' ? "bg-gradient" : "bg-white"}
          p-2 rounded-xl shadow-md shadow-black/20`}>
          <SwapIcon
            className={` ${page === 'swap' ? "text-white" : "text-[#384764]" }
            h-5 w-5`} />
        </span> 
        <h5 className='ml-3 font-normal line-through'>
         Swap
        </h5>
     </div>
     <div
        onClick={() => router.push("/transfer")}
        className={` ${page === 'transfer' ? "bg-white shadow-sm shadow-white/20" : "hover:bg-white hover:shadow-sm hover:shadow-white/20"}
        flex flex-row items-center w-full p-2 rounded-lg cursor-pointer`}
      >
        <span className={` ${page === 'transfer' ? "bg-gradient" : "bg-white"}
          p-2 rounded-xl shadow-md shadow-black/20`}>
          <TransferIcon
            className={` ${page === 'transfer' ? "text-white" : "text-[#384764]" }
            h-5 w-5`} />
        </span> 
        <h5 className='ml-3 font-normal line-through'>
        Transfer
        </h5>
     </div>
     <div
        onClick={() => router.push("/contact")}
        className={` ${page === 'contact' ? "bg-white shadow-sm shadow-white/20" : "hover:bg-white hover:shadow-sm hover:shadow-white/20"}
        flex flex-row items-center w-full p-2 rounded-lg cursor-pointer`}
      >
        <span className={` ${page === 'contact' ? "bg-gradient" : "bg-white"}
          p-2 rounded-xl shadow-md shadow-black/20`}>
          <ContactIcon
            className={` ${page === 'contact' ? "text-white" : "text-[#384764]" }
            h-5 w-5`} />
        </span> 
        <h5 className='ml-3 font-normal'>
          Contacts
        </h5>
     </div>
    </section>
    </NavigationComponent>
  )
}

export default DashboardNavigation