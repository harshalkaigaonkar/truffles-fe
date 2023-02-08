import { ExclamationCircleIcon, XCircleIcon } from '@heroicons/react/24/outline'
import { XCircleIcon as SolidXCircleIcon } from '@heroicons/react/24/solid'
import React, { FC, useEffect, useState } from 'react'

const AlertComponent: FC = () => {
 
   const [crossOver, setCrossOver] = useState<boolean>(false);
   const [visibility, setVisibility] = useState<boolean>(false);

  useEffect(() => {
   if(localStorage && (!localStorage.getItem("alert") || localStorage.getItem('alert') === 'opened'))
    {
     localStorage.setItem("alert", "opened");
     setVisibility(true);
    }
  }, [visibility]);


  const mouseEnterHandler = () => {
   setCrossOver(true)
  }

  const mouseLeaveHandler = () => {
   setCrossOver(false)
  }

  const closeAlertHandler = () => {
   localStorage.setItem("alert", "closed");
   setVisibility(false);
  }

  if(visibility)
   return (
     <section className='py-1 px-5 flex flex-row justify-between items-center rounded-xl bg-gradient text-white select-none'>
      <div className='flex flex-row items-center'>
       <ExclamationCircleIcon className='w-10 h-10' />
       <span className='py-1 ml-3 inline-block align-middle'>
        <h4 className='font-semibold text-[15px]'>Please Complete Your KYC.</h4>
        <h6 className='mt-[.1px] font-normal text-[12px]'>Please follow the instructions in the email to complete account verification. Make sure to check your promotions/spam as well.</h6>
       </span>
      </div>
      <span 
       onMouseEnter={mouseEnterHandler}
       onMouseLeave={mouseLeaveHandler}
       onClick={closeAlertHandler}
       className='cursor-pointer'>
       {
        crossOver ? (
         <SolidXCircleIcon className='w-8 h-8 text-white' />
        ) : (
         <XCircleIcon className='w-8 h-8 text-white' />
        )
       }
      </span>
     </section>
   )
 else
  return (<></>);
}

export default AlertComponent