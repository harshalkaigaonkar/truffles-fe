import React, { Dispatch, FC, SetStateAction } from 'react'
import DatePickerComponent from '../form/date'
import DropdownComponent from '../form/dropdown'
import MobileNumberComponent from '../form/mobile'
import TextComponent from '../form/text'

const InfoInvoiceForm: FC = () => {
  return (
     <section>
      <span>
       <h2 className='font-semibold text-2xl text-black'>User Information</h2>
       <p className='text-sm text-[#6B7280]'>Please enter your details</p>
      </span>
      <form className='pt-3'>
       <span className='flex flex-row items-between gap-6'>
        <DropdownComponent label='Title' option='Mr.' className='w-1/3' />
        <TextComponent label='First name' className='w-1/3' />
        <TextComponent label='Last name' className='w-1/3' />
       </span>
       <span>
        <MobileNumberComponent label="Mobile Number" />
       </span>
       <span>
        <DropdownComponent label="Gender" option="Male" />
        <DropdownComponent label="Nationality" option="United States" />
       </span>
       <span className='flex flex-row gap-6'>
        <TextComponent label="Residential Address" className='w-1/2' />
        <TextComponent label="Postal Code" className='w-1/2' />
       </span>
       <span>
        <TextComponent label='Occupation' />
       </span>
       <span>
        <DatePickerComponent label="Date of Birth" />
       </span>
      </form>
     </section>
  )
}

export default InfoInvoiceForm