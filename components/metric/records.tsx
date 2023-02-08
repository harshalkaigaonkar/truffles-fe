import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import { ArrowDownRightIcon } from '@heroicons/react/24/solid'
import React, { FC } from 'react'

type RecordProps = {
 type: string,
 name: string,
 rfid: string,
 amt: number
}

const RecordsComponent: FC = () => {

 const records: RecordProps[] = [
  {
   type: "inc",
   name: "QUICKSILVER LLC",
   rfid: "83459837",
   amt: 12354365
  },
  {
   type: "inc",
   name: "QUICKSILVER LLC",
   rfid: "83459837",
   amt: 12354365
  },
  {
   type: "inc",
   name: "QUICKSILVER LLC",
   rfid: "83459837",
   amt: 12354365
  },
  {
   type: "inc",
   name: "QUICKSILVER LLC",
   rfid: "83459837",
   amt: 12354365
  },
  {
   type: "inc",
   name: "QUICKSILVER LLC",
   rfid: "83459837",
   amt: 12354365
  },
 ]

  return (
   <div className='mx-10 bg-white flex flex-col justify-end'>
    {records && records.map((item: RecordProps, index: number) => (
     <div className='mt-2 flex flex-row justify-between items-center w-fit' key={index}>
      {item.type === 'inc' ? (
       <span>
        <ArrowUpRightIcon className='w-6 h-6 text-green-500' />
       </span>
      ) : (
       <span>
        <ArrowDownRightIcon className='w-6 h-6 text-red-500' />
       </span>
      )}
      <span>
       <h2>{item.name}</h2>
       <h6>RFID:{item.rfid}</h6>
      </span>
      <span>
       <h2>${new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(item.amt)}</h2>
      </span>
     </div>
    ))}
   </div>
  )
}

export default RecordsComponent