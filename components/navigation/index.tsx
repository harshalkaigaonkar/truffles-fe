import React, { FC, ReactNode } from 'react'

type NavigationComponentProps = {
 children: ReactNode
}

const NavigationComponent: FC<NavigationComponentProps> = ({children}) => {
  return (
    <nav className='fixed left-0 top-16 w-[20%] flex-1 bg-inherit p-8 overflow-hidden'>
     {children}
    </nav>
  )
}

export default NavigationComponent