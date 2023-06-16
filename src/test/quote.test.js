import { render, screen } from '@testing-library/react';
import { Qutes } from '../component/CalculatoreButtons';

describe('Test Quote Component', () => {
  test('Text content testing', () => {
    render(<Qutes />);
    const pElement = screen.getByText(/Pls wait moment it is Loading.../i);
    expect(pElement).toMatchSnapshot();
  });
});
