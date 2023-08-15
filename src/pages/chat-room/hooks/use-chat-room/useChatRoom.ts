// ========== Use Chat Room Hooks
// import all packages
import { useDispatch, useSelector } from 'react-redux'
import { type AppDispatch, type RootState } from '../../../../redux/store'
import { resetToken, setToken } from '../../../../redux/features/auth-slice/auth.slice'
import { type HandleToken, type UseChatRoom } from './useChatRoom.types'

export const useChatRoom: UseChatRoom = () => {
  const dispatch = useDispatch<AppDispatch>()
  const accessToken: string = useSelector((states: RootState) => states.authReducer.accessToken)

  const handleToken: HandleToken = (event) => {
    event.preventDefault()

    if (accessToken.length === 0) {
      dispatch(setToken({
        accessToken: 'yes',
        refreshToken: 'yes'
      }))
    } else {
      dispatch(resetToken())
    }
  }

  return {
    accessToken,
    handleToken
  }
}
