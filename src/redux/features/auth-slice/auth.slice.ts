// ========== Auth Slice
// import all packages
import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type IAuthStates } from './auth.slice.types'

const initialState: IAuthStates = {
  accessToken: '',
  refreshToken: ''
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken (states, action: PayloadAction<IAuthStates>) {
      states.accessToken = action.payload.accessToken
      states.refreshToken = action.payload.refreshToken
    },
    resetToken (states) {
      states.accessToken = ''
      states.refreshToken = ''
    }
  }
})

export const { setToken, resetToken } = authSlice.actions
export default authSlice.reducer
