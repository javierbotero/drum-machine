import type { ReduxState } from '@/lib/redux'

const selectKeys = (state: ReduxState) => state.keys.keys;

export { selectKeys }
