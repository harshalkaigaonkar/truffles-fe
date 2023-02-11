import React, { FC, useState } from 'react'

type DatePickerComponentProps = {
 label: string,
 className?: string
}

const DatePickerComponent: FC<DatePickerComponentProps> = ({label, className}) => {
 
  const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]);
 
  return (
   <div className={className}>
   <label htmlFor={label} className="pt-6 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label>
   <input 
    type="date"
    value={date}
    onChange={(e) => setDate(e.target.value)}
    pattern="[0-9]{4}/[0-9]{2}/[0-9]{2}"
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
   />
  </div>
  )
}

export default DatePickerComponent