import React from 'react'
import { Helmet, HelmetProps } from 'react-helmet'

const SEO = ({ title }: HelmetProps) => {
  return (
    <>
      <Helmet defaultTitle="MFTS" title={title} titleTemplate="%s ➔ MFTS" />
    </>
  )
}

export default SEO
