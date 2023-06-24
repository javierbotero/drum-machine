import React, { type PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import type { PreloadedState, ConfigureStoreOptions } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { makeReduxStore } from '@/lib/redux';
import { reducer } from '@/lib/redux/rootReducer';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: ConfigureStoreOptions,
  store?: ReturnType<typeof makeReduxStore>
}

const renderWithProviders = (
  component: React.ReactElement,
  {
    preloadedState = { reducer },
    store = makeReduxStore(preloadedState)
  }: ExtendedRenderOptions = {}
) => {
  const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => {
    return <Provider store={store}>{children}</Provider>
  }
  return { store, ...render(component, { wrapper: Wrapper }) }
}

export {
  renderWithProviders
}
