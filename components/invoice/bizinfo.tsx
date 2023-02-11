import React, {FC} from 'react'
import DatePickerComponent from '../form/date'
import DropdownComponent from '../form/dropdown'
import MobileNumberComponent from '../form/mobile'
import TextComponent from '../form/text'

const BizInfoInvoiceForm: FC = () => {
  return (
    <section>
    <span>
     <h2 className='font-semibold text-2xl text-black'>Business Information</h2>
     <p className='text-sm text-[#6B7280]'>Use a permanent address where you can receive mail.</p>
    </span>
    <form className='pt-3'>
     <span>
      <TextComponent label="Account ID" />
      <TextComponent label="Company Name" />
     </span>
     <span className='flex flex-row gap-6'>
      <DropdownComponent label="Country of Incorporation" option='United States' className='w-1/2' />
      <DropdownComponent label="Country of Operation" option='United States' className='w-1/2' />
     </span>
     <span>
      <TextComponent label='Company Adress' />
     </span>
     <span className='flex flex-row items-between gap-6'>
      <TextComponent label='Zip/Postal' className='w-1/3' />
      <TextComponent label='State/Province' className='w-1/3' />
      <TextComponent label='City' className='w-1/3' />
     </span>
     <span>
      <TextComponent label='Registration Number' />
     </span>
     <span>
      <DatePickerComponent label="Incorporation Date" />
     </span>
    </form>
   </section>
  )
}

export default BizInfoInvoiceForm