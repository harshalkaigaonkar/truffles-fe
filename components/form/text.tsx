import React, { FC } from 'react'

type TextComponentProps = {
 label: string,
 placeholder?: string,
 className?: string
}

const TextComponent : FC<TextComponentProps> = ({label, placeholder = "", className = ""}) => {
  return (
   <div className={className}>
    <label htmlFor={label} className="pt-6 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label>
    <input required type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} />
   </div>
  )
}

export default TextComponent