import { render, screen } from '@testing-library/react';
import Home from '../component/home';

describe('Test Home Component', () => {
  test('Text content testing', () => {
    render(<Home />);
    const pElement = screen.getByText(/Welcome to Our Page/i);
    expect(pElement).toMatchSnapshot();
  });
});
