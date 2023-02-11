import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import { NextRouter, useRouter } from 'next/router';
import React, { Dispatch, FC, ReactNode, SetStateAction, useRef } from 'react'

export type InvoiceFormProps = {
 invoiceFormLevel: number,
 setInvoiceFormLevel: Dispatch<SetStateAction<number>>;
 children: ReactNode
}

const InvoiceForm : FC<InvoiceFormProps> = ({invoiceFormLevel, setInvoiceFormLevel, children}) => {
  
  const router: NextRouter = useRouter();

  const onNextFormLevel = () => {
    setInvoiceFormLevel(invoiceFormLevel+1);
    if(invoiceFormLevel+1 === 5) {
      alert("You've successfully filled all forms.");
      router.push("/");
    }
  }
  const onPrevFormLevel = () => {
    setInvoiceFormLevel(invoiceFormLevel-1);
    if(invoiceFormLevel === 0) {
      alert("No previous forms found!!");
      router.push("/");
    }
  }
 
  return (
    <section className='top-0 py-9 px-16 w-full h-full bg-white'>
      <div>
        {children}
      </div>
      <div className='mt-5 w-full flex justify-between'>
      <span
        onClick={onPrevFormLevel}
        className="cursor-pointer group relative inline-flex items-center overflow-hidden rounded border border-black/50 px-8 py-3 focus:outline-none focus:ring active:bg-[#7445F8]"
      >
        <span
          className="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4"
        >
          <ArrowLeftIcon className="w-5 h-5" />
        </span>

        <span className="text-sm font-medium transition-all group-hover:mr-4">
          Back
        </span>
      </span>
      <span
        onClick={onNextFormLevel}
        className="cursor-pointer group relative inline-flex items-center overflow-hidden rounded bg-[#7445F8] px-8 py-3 text-white focus:outline-none focus:ring active:bg-[#7445F8]"
      >
        <span
          className="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4"
        >
          <ArrowRightIcon className="w-5 h-5" />
        </span>

        <span className="text-sm font-medium transition-all group-hover:mr-4">
          Next
        </span>
      </span>
      </div>
    </section>
  )
}

export default InvoiceForm