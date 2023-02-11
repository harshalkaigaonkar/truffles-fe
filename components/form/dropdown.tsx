import React, { FC } from 'react'

type DropdownComponentProps = {
 label: string,
 option?: string,
 className?: string,
}

const DropdownComponent: FC<DropdownComponentProps> = ({label, option = "Select a Category", className = ""}) => {
  return (
   <div className={className}>
     <label htmlFor={label} className="pt-6 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      {label}
     </label>

     <select id={label} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
      <option>{option}</option>
     </select>
   </div>
  )
}

export default DropdownComponent