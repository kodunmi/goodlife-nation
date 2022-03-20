import { IPreferences } from './../../lib/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IAuthUser, IUser } from '../../lib'
import type { RootState } from '../../redux'

type AuthState = {
  user: IUser | null
  token: string | null
}

const slice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null } as AuthState,
  reducers: {
    setCredentials: (
      state,
      { payload: { user, token } }: PayloadAction<{ user: IUser; token: string }>
    ) => {
      state.user = user
      state.token = token
    },
    setProfile: (
      state,
      {payload}: PayloadAction<IAuthUser>
    ) => {
      state.user = payload.user
      state.token = payload.token
    },
  },
})

export const { setCredentials, setProfile } = slice.actions

export default slice.reducer

export const selectCurrentUser = (state: RootState) => state.auth
