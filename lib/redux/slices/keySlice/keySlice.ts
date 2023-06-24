/* Core */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: KeySliceState = {
  key: '',
}

export const keySlice = createSlice({
  name: 'key',
  initialState,
  reducers: {
    keyUpdated: (state, action: PayloadAction<string>) => {
      state.key = action.payload;
    },
  },
})

export const { keyUpdated } = keySlice.actions;

/* Types */
export interface KeySliceState {
  key: string
}
