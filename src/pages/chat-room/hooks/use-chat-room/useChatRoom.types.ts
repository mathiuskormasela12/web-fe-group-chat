// ========== Use Chat Room Hooks Types
// import all packages
import { type MouseEvent } from 'react'

export type HandleToken = (event: MouseEvent<HTMLButtonElement>) => void

export type UseChatRoom = () => ({
  accessToken: string
  handleToken: HandleToken
})
