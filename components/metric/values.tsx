import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import React from 'react'

const ValuesComponent = () => {
  return (
    <section className='my-3 flex flex-col w-full'>
     <span className='flex flex-row items-center gap-5'>
      <div className='w-[50%] py-3 px-5 rounded-xl shadow-lg shadow-black/10 flex flex-row justify-between items-center bg-white border-2'>
       <span>
        <h4 className='text-sm text-black/60'>Fiat Balance</h4>
        <h1 className='mt-2 font-black text-2xl'>$00,000</h1>
       </span>
       <div className='w-10 h-10 p-2 rounded-xl bg-gradient'>
        <Image 
         src='/fiat_balance.png'
         alt='fiat_balance'
         width={30}
         height={30}
        />
       </div>
      </div>
      <div className='w-[50%] py-3 px-5 rounded-xl shadow-lg shadow-black/10 flex flex-row justify-between items-center bg-white border-2'>
       <span>
        <h4 className='text-sm text-black/60'>Crypto Balance</h4>
        <h1 className='mt-2 font-black text-2xl'>$00,000</h1>
       </span>
       <div className='w-10 h-10 p-2 rounded-xl bg-gradient'>
        <Image 
         src='/crypto_balance.png'
         alt='crypto_balance'
         width={30}
         height={30}
        />
       </div>
      </div>
     </span>
     <span className='mt-2 flex flex-row items-center gap-5'>
      <div className='w-[50%] py-3 px-5 rounded-xl shadow-lg shadow-black/10 flex flex-row justify-between items-center bg-white border-2'>
       <span>
        <h4 className='text-sm text-black/60'>Receivable</h4>
        <h1 className='mt-2 font-black text-2xl'>$00,000</h1>
       </span>
       <div className='w-10 h-10 p-2 rounded-xl bg-gradient'>
        <ArrowDownIcon className='w-inherit h-inherit text-white' />
       </div>
      </div>
      <div className='w-[50%] py-3 px-5 rounded-xl shadow-lg shadow-black/10 flex flex-row justify-between items-center bg-white border-2'>
       <span>
        <h4 className='text-sm text-black/60'>Payables</h4>
        <h1 className='mt-2 font-black text-2xl'>$00,000</h1>
       </span>
       <div className='w-10 h-10 p-2 rounded-xl bg-gradient'>
        <ArrowUpIcon className='w-inherit h-inherit text-white' />
       </div>
      </div>
     </span>
    </section>
  )
}

export default ValuesComponent