import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: keysSliceState = {
  keys: [
    { letter: 'Q', path: '/keys/Heater-1.mp3' },
    { letter: 'W', path: '/keys/Heater-2.mp3' },
    { letter: 'E', path: '/keys/Heater-3.mp3' },
    { letter: 'A', path: '/keys/Heater-4_1.mp3' },
    { letter: 'S', path: '/keys/Heater-6.mp3' },
    { letter: 'D', path: '/keys/Dsc_Oh.mp3' },
    { letter: 'Z', path: '/keys/Kick_n_Hat.mp3' },
    { letter: 'X', path: '/keys/RP4_KICK_1.mp3' },
    { letter: 'C', path: '/keys/Cev_H2.mp3' },
  ],
  selected: '',
};

const keysSlice = createSlice({
  name: 'keys',
  initialState,
  reducers: {
    updateSelected: (state, action: PayloadAction<string>) => {
      state.selected = action.payload;
    }
  }
})

// Types

interface keysSliceState {
  keys: { letter: string, path: string }[];
  selected: string;
}

const { updateSelected } = keysSlice.actions;

export {
  keysSlice,
  updateSelected
};
export type { keysSliceState }
