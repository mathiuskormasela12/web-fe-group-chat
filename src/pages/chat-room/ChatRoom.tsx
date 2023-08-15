// ========== Chat Room
// import all packages
import React, { Fragment } from 'react'
import { useChatRoom } from './hooks'

// import all components
import { ReactHelmet } from '../../components'

export const ChatRoom: React.FC = () => {
  const { accessToken, handleToken } = useChatRoom()

  return (
    <Fragment>
      <ReactHelmet title='Chat Room' />
      <div className="container mx-auto">
        <h1 className="text-3xl text-slate-800 mt-8 font-bold">Chat Room</h1>
        <button
          className="bg-sky-600 px-5 py-2 rounded-md text-white hover:opacity-60 transition duration-500"
          type="submit"
          onClick={handleToken}
        >
          Token {accessToken.length > 0 && 'yes'}
        </button>
      </div>
    </Fragment>
  )
}
