/* Instruments */
import { keySlice, keysSlice } from './slices'

export const reducer = {
  key: keySlice.reducer,
  keys: keysSlice.reducer
}
