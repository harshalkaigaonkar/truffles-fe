import Image from 'next/image'
import React, { FC } from 'react'
import { IconProps } from './dashboard'

const TransferIcon: FC<IconProps> = ({className}) => {
  return (
    <>
     <Image
      src="/transfer.svg"
      alt="icons"
      width={10}
      height={10}
      className={className}
      />
    </>
  )
}

export default TransferIcon