// ========= Home
// import all modules
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { type RootState, type AppDispatch } from '../redux/store'
import { setAccessToken } from '../redux/features/tokenSlice'
import { increment } from '../redux/features/counterSlice'

export const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { accessToken } = useSelector((states: RootState) => states.tokenSlice)
  const { value } = useSelector((states: RootState) => states.counterSlice)

  const handleAccessToken = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    dispatch(setAccessToken({ accessToken: new Date().toTimeString() }))
  }

  const handleLogout = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    dispatch(setAccessToken({ accessToken: '' }))
  }

  return (
    <div>
      <h1>Home</h1>
      <button type='button' onClick={() => dispatch(increment())}>Like {value}</button>
      <form onSubmit={accessToken === '' ? handleAccessToken : handleLogout}>
        <button type="submit">{accessToken === '' ? 'Login' : 'Logout'}</button>
        {accessToken.length > 0 && <p>There is access token</p>}
      </form>
    </div>
  )
}
