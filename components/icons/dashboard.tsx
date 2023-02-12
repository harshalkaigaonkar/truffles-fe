import Image from 'next/image'
import React, { FC } from 'react'

export type IconProps = {
 className?: string
}

const DashboardIcon: FC<IconProps> = ({className}) => {
  return (
    <>
     <Image
      src="/dashboard.svg"
      alt="icons"
      width={10}
      height={10}
      className={className}
      />
    </>
  )
}

export default DashboardIcon