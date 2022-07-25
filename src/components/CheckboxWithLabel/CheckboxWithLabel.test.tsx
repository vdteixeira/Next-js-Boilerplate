/** @jest-environment jsdom */
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import CheckboxWithLabel from './CheckboxWithLabel';

afterEach(cleanup);

describe('Checkbox component', () => {
  it('CheckboxWithLabel changes the text after click', () => {
    render(<CheckboxWithLabel labelOn="On" labelOff="Off" />);

    expect(screen.getByLabelText(/off/i)).toBeInTheDocument();

    fireEvent.click(screen.getByLabelText(/off/i));

    expect(screen.getByLabelText(/on/i)).toBeInTheDocument();
  });
});
