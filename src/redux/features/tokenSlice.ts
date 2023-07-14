// ========= Token Slice
// import all packages
import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type ITokenSliceStates } from '../../types'

const initialState: ITokenSliceStates = {
  accessToken: '',
  refreshToken: ''
}

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken (state, action: PayloadAction<ITokenSliceStates>) {
      state.accessToken = action.payload.accessToken
      state.refreshToken = action.payload.refreshToken
    },
    setAccessToken (state, action: PayloadAction<Partial<ITokenSliceStates>>) {
      state.accessToken = action.payload?.accessToken ?? ''
    },
    setRefreshToken (state, action: PayloadAction<Partial<ITokenSliceStates>>) {
      state.refreshToken = action.payload?.refreshToken ?? ''
    }
  }
})

export const { setToken, setAccessToken, setRefreshToken } = tokenSlice.actions
export default tokenSlice.reducer
