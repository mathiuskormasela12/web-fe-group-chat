// ========== React Helmet
// import all packages
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { type IReactHelmet } from './ReactHelmet.types'

export const ReactHelmet: React.FC<IReactHelmet> = ({ title, children }) => {
  return (
    <Helmet>
      <title>{title}</title>
      {(children !== null) && children}
    </Helmet>
  )
}
