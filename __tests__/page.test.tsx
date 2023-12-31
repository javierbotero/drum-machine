import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { Drum } from '@/app/components/Drum/Drum';
import { renderWithProviders } from './utils/test-utils';
import '@testing-library/jest-dom';

describe('Counter', () => {
  it('displays a div with id="drum-machine"', () => {
    renderWithProviders(<Drum />);

    const div = screen.getByTestId('drum-machine');
    expect(div).toBeTruthy();

    const display = screen.getByTestId('display');
    expect(div.contains(display)).toBeTruthy();

    const keys = screen.getAllByTestId('drum-pad');
    expect(keys.length).toBe(9);
  });

  it('Clicks on letter and changes the store', () => {
    renderWithProviders(<Drum />);
    HTMLAudioElement.prototype.play = jest.fn();

    const qBtn = screen.getByText('Q');
    const display = screen.getByTestId('display');

    fireEvent.click(qBtn);

    expect(display.innerHTML).toBe('Heater-1');
  });

  it('press Q key and plays the audio', () => {
    renderWithProviders(<Drum />);
    HTMLAudioElement.prototype.play = jest.fn();

    fireEvent.keyDown(document, { key: 'q', code: 'KeyQ' });
    const display = screen.getByTestId('display');

    expect(display.innerHTML).toBe('Heater-1');
  });
});
