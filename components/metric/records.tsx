import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import { ArrowDownRightIcon } from '@heroicons/react/24/solid'
import React, { FC } from 'react'

type RecordProps = {
 type: string,
 name: string,
 tfid: string,
 amt: number
}

const RecordsComponent: FC = () => {

 const records: RecordProps[] = [
  {
   type: "inc",
   name: "QUICKSILVER LLC",
   tfid: "83459837",
   amt: 12354365
  },
  {
   type: "dec",
   name: "QUICKSILVER LLC",
   tfid: "83459837",
   amt: 12354365
  },
  {
   type: "inc",
   name: "QUICKSILVER LLC",
   tfid: "83459837",
   amt: 12354365
  },
  {
   type: "dec",
   name: "QUICKSILVER LLC",
   tfid: "83459837",
   amt: 12354365
  }
 ]

  return (
   <div className='ml-3 px-5 py-2 bg-white rounded-b-lg shadow-lg shadow-black/50'>
    {records && records.map((item: RecordProps, index: number) => (
     <div className='p-[3px] mt-3 flex flex-row justify-between items-center w-full' key={index}>
      {item.type === 'inc' ? (
       <span>
        <ArrowUpRightIcon className='w-6 h-6 text-green-500' />
       </span>
      ) : (
       <span>
        <ArrowDownRightIcon className='w-6 h-6 text-red-500' />
       </span>
      )}
      <span className='ml-4 w-30 truncate'>
       <h2 className='text-sm'>{item.name}</h2>
       <h6 className='mt-2 text-[8px]'>TFID:{item.tfid}</h6>
      </span>
      <div className='flex-1' />
      <span>
       <h2 className='font-semibold text-[12px]'>${new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(item.amt)}</h2>
      </span>
     </div>
    ))}
   </div>
  )
}

export default RecordsComponent