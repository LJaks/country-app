import React from 'react'
import { FlagProps } from '../../../types'

export default function Flags({ flag }: FlagProps) {
  return <img src={flag} alt="Country flag" style={{ width: '100px' }} />
}
