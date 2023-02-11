import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import React, { Dispatch, FC, ReactNode, SetStateAction } from 'react'

type InvoiceFormProps = {
 invoiceFormLevel: 0|1|2|3|4|5|number,
 setInvoiceFormLevel: Dispatch<SetStateAction<0 | 1 | 2 | 3 | 4 | 5 | number>>;
 children: ReactNode
}

const InvoiceForm : FC<InvoiceFormProps> = ({invoiceFormLevel, setInvoiceFormLevel, children}) => {
  
  const onNextFormLevel = () => {
    if(invoiceFormLevel === 5)
    // have to show a modal for completed invoice form
    return;
    setInvoiceFormLevel(invoiceFormLevel+1);
  }
  const onPrevFormLevel = () => {
    if(invoiceFormLevel === 0)
    // have to show a modal for completed invoice form
    return;
    setInvoiceFormLevel(invoiceFormLevel-1);
  }
 
  return (
    <section className='p-5 w-full'>
      <div>
        {children}
      </div>
      <div className='w-full flex justify-between'>
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
          Prev
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