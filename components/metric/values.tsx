import Image from 'next/image'
import React from 'react'

const ValuesComponent = () => {
  return (
    <section className='w-[60%]'>
     <span className='flex flex-row'>
      <div className='flex flex-row justify-between bg-white border-2'>
       <span>
        <h4>Fiat Balance</h4>
        <h2>$ 00,000</h2>
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
      <div className='flex flex-row justify-between bg-white border-2'>
       <span>
        <h4>Fiat Balance</h4>
        <h2>$ 00,000</h2>
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
     </span>
    </section>
  )
}

export default ValuesComponent