import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BellAlertIcon, BellIcon, UserCircleIcon } from '@heroicons/react/24/solid'

type HeaderComponentProps = {
 title: string,
}

const HeaderComponent: FC<HeaderComponentProps> = ({title}) => {
  return (
   <header className='flex flex-row w-full h-16 border-b-2 border-black/5 items-center'>
    <span className='w-[20%] inline-flex justify-center items-center'>
    <Link href="/">
      <Image
       src="logo.svg"
       alt='truffles_logo'
       width={150}
       height={50}
      />
    </Link>
    </span>
    <span className='px-10 w-[80%] flex justify-between items-center'>
     <h1 className='font-bold text-2xl opacity-80 select-none'>
      {title === 'Dashboard' && title}
     </h1>
     <div className='flex flex-row text-black/50 min-w-60'>
      {title === 'Dashboard' ? (
        <>
          <span className='flex flex-row items-center'>
            <UserCircleIcon className='w-6 h-6' />
            <h6 className='ml-2 text-sm'>Harshal Kaigaonkar</h6>
          </span>
          <span className='ml-3 flex flex-row justify-center'>
            <BellIcon className='w-6 h-6' />
            <div className='-mt-3 -ml-2 inline-flex items-center'>
              <p className='p-[1px] w-5 truncate bg-red-700 text-white text-[13px] text-center rounded-full'>
                4
              </p>
            </div>
          </span>
        </>
      ): (
        <span>
          <p className='font-normal text-[14px]'>Having Trouble ? <span className="text-[#775DA6] cursor-pointer">Get Help</span></p>
        </span>
      )}
     </div>
    </span>
   </header>
  )
}

export default HeaderComponent