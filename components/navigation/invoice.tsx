import React, { FC } from 'react'
import NavigationComponent from '.'
import {CheckIcon, Squares2X2Icon} from '@heroicons/react/24/solid'

type InvoiceNavigationProps = {
  invoiceFormLevel: number;
}

const InvoiceNavigation: FC<InvoiceNavigationProps> = ({invoiceFormLevel}) => {
  
  const InvoiceParts: string[] = [
    'user information',
    'business information',
    'business information 2',
    'upload documents',
    'preview',
  ]
  
  return (
    <NavigationComponent>
     <section className='h-66'>
      <div className='absolute z-10 w-10 h-full flex flex-col items-center'>
        <div className='w-6 h-6 rounded-full border-2 border-black/20 bg-white' />
        <div className='w-[3px] h-8 border border-black/10 bg-black/10'  />
        <div className='w-6 h-6 rounded-full border-2 border-black/10 bg-white' />
        <div className='w-[3px] h-8 border border-black/10 bg-black/10'  />
        <div className='w-6 h-6 rounded-full border-2 border-black/10 bg-white' />
        <div className='w-[3px] h-8 border border-black/10 bg-black/10'  />
        <div className='w-6 h-6 rounded-full border-2 border-black/10 bg-white' />
        <div className='w-[3px] h-8 border border-black/10 bg-black/10'  />
        <div className='w-6 h-6 rounded-full border-2 border-black/10 bg-white' />
      </div>
      <div className='absolute z-20 w-10 h-full flex flex-col items-center'>
        {invoiceFormLevel === 0 ? 
          <div className='w-6 h-6 inline-flex justify-center items-center rounded-full border-2 border-[#7445F8] transition animation'>
            <div className='w-2 h-2 bg-[#7445F8] rounded-full' />
          </div> :
          invoiceFormLevel > 0 &&
          <div className='w-6 h-6 inline-flex justify-center items-center rounded-full border-2 border-[#7445F8] bg-[#7445F8]'>
            <span className=''>
              <CheckIcon className={` ${invoiceFormLevel  === 1 && "transition animate-translate"}
              w-4 h-4 text-[#111827]`} />
            </span>
          </div>
        }
        {invoiceFormLevel > 0 && <div className='h-8'>
          <div className={` ${invoiceFormLevel === 1 && "transition animate-height-grow"}
          w-[3px] h-8 border border-[#7445F8] bg-[#7445F8]`}  />
        </div>}
        {invoiceFormLevel === 1 ? 
          <div className={` ${invoiceFormLevel === 1 && "transition animate-opacity"}
          w-6 h-6 inline-flex justify-center items-center rounded-full border-2 border-[#7445F8]`}>
            <div className='w-2 h-2 bg-[#7445F8] rounded-full' />
          </div> :
          invoiceFormLevel > 1 &&
          <div className='w-6 h-6 inline-flex justify-center items-center rounded-full border-2 border-[#7445F8] bg-[#7445F8]'>
            <span className=''>
              <CheckIcon className={` ${invoiceFormLevel  === 2 && "transition animate-translate"}
              w-4 h-4 text-[#111827]`} />
            </span>
          </div>
        }
        {invoiceFormLevel > 1 && <div className='h-8'>
          <div className={` ${invoiceFormLevel === 2 && "transition animate-height-grow"}
          w-[3px] h-8 border border-[#7445F8] bg-[#7445F8]`}   />
        </div>}
        {invoiceFormLevel === 2 ? 
          <div className={` ${invoiceFormLevel === 2 && "transition animate-opacity"}
          w-6 h-6 inline-flex justify-center items-center rounded-full border-2 border-[#7445F8]`}>
            <div className='w-2 h-2 bg-[#7445F8] rounded-full' />
          </div> :
          invoiceFormLevel > 2 &&
          <div className='w-6 h-6 inline-flex justify-center items-center rounded-full border-2 border-[#7445F8] bg-[#7445F8]'>
            <span className=''>
              <CheckIcon className={` ${invoiceFormLevel  === 3 && "transition animate-translate"}
              w-4 h-4 text-[#111827]`} />
            </span>
          </div>
        }
        {invoiceFormLevel > 2 && <div className='h-8'>
          <div className={` ${invoiceFormLevel === 3 && "transition animate-height-grow"}
          w-[3px] h-8 border border-[#7445F8] bg-[#7445F8]`}   />
        </div>}
        {invoiceFormLevel === 3 ? 
          <div className={` ${invoiceFormLevel === 3 && "transition animate-opacity"}
          w-6 h-6 inline-flex justify-center items-center rounded-full border-2 border-[#7445F8]`}>
            <div className='w-2 h-2 bg-[#7445F8] rounded-full' />
          </div> :
          invoiceFormLevel > 3 &&
          <div className='w-6 h-6 inline-flex justify-center items-center rounded-full border-2 border-[#7445F8] bg-[#7445F8]'>
            <span className=''>
              <CheckIcon className={` ${invoiceFormLevel  === 4 && "transition animate-translate"}
              w-4 h-4 text-[#111827]`} />
            </span>
          </div>
        }
        {invoiceFormLevel > 3 && <div className='h-8'>
          <div className={` ${invoiceFormLevel === 4 && "transition animate-height-grow"}
          w-[3px] h-8 border border-[#7445F8] bg-[#7445F8]`}   />
        </div>}
        {invoiceFormLevel === 4 ? 
          <div className={` ${invoiceFormLevel === 4 && "transition animate-opacity"}
          w-6 h-6 inline-flex justify-center items-center rounded-full border-2 border-[#7445F8]`}>
            <div className='w-2 h-2 bg-[#7445F8] rounded-full' />
          </div> :
          invoiceFormLevel > 4 &&
          <div className='w-6 h-6 inline-flex justify-center items-center rounded-full border-2 border-[#7445F8] bg-[#7445F8]'>
            <span className=''>
              <CheckIcon className={` ${invoiceFormLevel  === 5 && "transition animate-translate"}
              w-4 h-4 text-[#111827]`} />
            </span>
          </div>
        }
      </div>
      <div className='flex flex-col justify-around items-around h-full ml-14 w-full'>
        {InvoiceParts.map((item:string, index:number) => (
          <span key={index}>
            <div className={`${invoiceFormLevel === index && "bg-[#7445F8] bg-clip-text text-transparent"}
              inline-block align-middle h-5 w-full`}>
              <p className=' font-semibold text-[11px] w-full'>{item.toUpperCase()}</p>
            </div>
            <div className='h-8' />
          </span>
        ))}
      </div>
    </section>
    </NavigationComponent>
  )
}

export default InvoiceNavigation