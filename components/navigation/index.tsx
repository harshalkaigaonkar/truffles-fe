import React, { FC, ReactNode } from 'react'

type NavigationComponentProps = {
 children: ReactNode
}

const NavigationComponent: FC<NavigationComponentProps> = ({children}) => {
  return (
    <nav className='w-[20%] flex-1 bg-inherit p-8'>
     {children}
    </nav>
  )
}

export default NavigationComponent