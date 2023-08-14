import React from 'react'
type CountryFlagsProps = {
  flag: {
    png: string
    svg: string
    alt: string
  }
}

export default function CountryFlags({ flag }: CountryFlagsProps) {
  return (
    <img
      src={flag.png}
      alt={flag.alt}
      style={{ width: '100px', boxShadow: '0px 2px 10px rgba(0,0,0,0.6)' }}
    />
  )
}
