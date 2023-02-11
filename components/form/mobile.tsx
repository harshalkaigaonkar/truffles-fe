import React, { FC } from 'react'
import DropdownComponent from './dropdown'
import TextComponent from './text'

type MobileNumberComponentProps = {
 label?: string,
 placeholder?: string,
 option?: string,
 className?: string
}


const MobileNumberComponent: FC<MobileNumberComponentProps> = ({label, option= "US ", placeholder="+1 (555) 987-6543", className}) => {
  return (
   <div className={className}>
    <label htmlFor={label} className="pt-6 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      {label}
     </label>
    <div className="flex rounded-md">
     <span className="w-1/12 inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-4 text-sm text-gray-500">
      <select className=" bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
       <option>{option}</option>
      </select>
     </span>
     <input required type="text" className="w-11/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-tr-lg rounded-br-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} />
   </div>
   </div>
  )
}

export default MobileNumberComponent