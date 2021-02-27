import React from 'react'

import { FlagProps } from '../../../types'

export default function Flags({ flag }: FlagProps) {
  return (
    <img
      src={flag}
      alt="Country flag"
      style={{ width: '100px', boxShadow: '0px 2px 10px rgba(0,0,0,0.6)' }}
    />
  )
}
