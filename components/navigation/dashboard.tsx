import React, { FC } from 'react'
import NavigationComponent from '.'
import {
  RectangleGroupIcon, 
  ReceiptPercentIcon,
  UserGroupIcon
} from '@heroicons/react/24/solid'
import {
  RectangleGroupIcon as ClickedSquaresIcon,
  ReceiptPercentIcon as ClickedReciptIcon,
  UserGroupIcon as ClickedContactIcon
} from '@heroicons/react/24/outline'

type DashboardNavigationProps = {
  page: string
}

const DashboardNavigation: FC<DashboardNavigationProps> = ({page}) => {
  return (
    <NavigationComponent>
     <section className='flex flex-col justify-start gap-4'>
     <div className={` ${page === 'dashboard' ? "bg-white shadow-sm shadow-white/20" : "hover:bg-white hover:shadow-sm hover:shadow-white/20"}
      flex flex-row items-center w-full p-2 rounded-lg cursor-pointer`}>
      { page === 'dashboard' ? <span className='p-2 rounded-xl bg-gradient shadow-md shadow-black/20'>
        <RectangleGroupIcon className="h-6 w-6 text-white" />
      </span> :
      <span className='p-2 rounded-xl bg-gradient shadow-md shadow-black/20'>
        <ClickedSquaresIcon className="h-6 w-6 text-white" />
      </span>}
      <h5 className='ml-3 font-normal'>
       Dashboard
      </h5>
     </div>
     <div className={` ${page === 'invoice' ? "bg-white shadow-sm shadow-white/20" : "hover:bg-white hover:shadow-sm hover:shadow-white/20"}
      flex flex-row items-center w-full p-2 rounded-lg cursor-pointer`}>
      { page === 'invoice' ? <span className='p-2 rounded-xl bg-gradient shadow-md shadow-black/20'>
        <ReceiptPercentIcon className="h-6 w-6 text-white" />
      </span> :
      <span className='p-2 rounded-xl bg-gradient shadow-md shadow-black/20'>
        <ClickedReciptIcon className="h-6 w-6 text-white" />
      </span>}
      <h5 className='ml-3 font-normal'>
       Invoice
      </h5>
     </div>
     <div className={` ${page === 'contacts' ? "bg-white shadow-sm shadow-white/20" : "hover:bg-white hover:shadow-sm hover:shadow-white/20"}
      flex flex-row items-center w-full p-2 rounded-lg cursor-pointer`}>
      { page === 'contacts' ? <span className='p-2 rounded-xl bg-gradient shadow-md shadow-black/20'>
        <UserGroupIcon className="h-6 w-6 text-white" />
      </span> :
      <span className='p-2 rounded-xl bg-gradient shadow-md shadow-black/20'>
        <ClickedContactIcon className="h-6 w-6 text-white" />
      </span>}
      <h5 className='ml-3 font-normal'>
       Contacts
      </h5>
     </div>
    </section>
    </NavigationComponent>
  )
}

export default DashboardNavigation