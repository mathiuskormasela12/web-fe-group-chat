// ========== Create Account
// import all packages
import React, { Fragment } from 'react'

// import all components
import { ReactHelmet } from '../../components'

export const CreateAccount: React.FC = () => {
  return (
    <Fragment>
      <ReactHelmet title="Create Account" />
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl text-slate-600 font-bold">Create Account</h1>
      </div>
    </Fragment>
  )
}
