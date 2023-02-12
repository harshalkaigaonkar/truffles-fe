import Image from 'next/image'
import React, { FC } from 'react'
import { IconProps } from './dashboard'

const ProformaIcon: FC<IconProps> = ({className}) => {
  return (
    <>
     <Image
      src="/proforma.svg"
      alt="icons"
      width={10}
      height={10}
      className={className}
      />
    </>
  )
}

export default ProformaIcon