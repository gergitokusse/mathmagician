import { render, screen } from '@testing-library/react';
import Mycalculator from '../component/Calculatore';
import Home from '../component/home';
import { Qutes } from '../component/CalculatoreButtons';

describe('Test Calculatore Component', () => {
  test('Test text on Calculator Component', () => {
    render(<Mycalculator />);
    const pElement = screen.getByText(/Letus do same think new/i);
    expect(pElement).toMatchSnapshot();
  });
  test('Test AC btn on calculatore', () => {
    render(<Mycalculator />);
    const pElement = screen.getByText(/AC/i);
    expect(pElement).toMatchSnapshot();
  });

  test('Test % btn on calculatore', () => {
    render(<Mycalculator />);
    const pElement = screen.getByText(/%/i);
    expect(pElement).toMatchSnapshot();
  });

  test('Test ÷ btn on calculatore', () => {
    render(<Mycalculator />);
    const pElement = screen.getByText(/÷/i);
    expect(pElement).toMatchSnapshot();
  });

  test('Test 7 btn on calculatore', () => {
    render(<Mycalculator />);
    const pElement = screen.getByText(/7/i);
    expect(pElement).toMatchSnapshot();
  });

  test('Test 8 btn on calculatore', () => {
    render(<Mycalculator />);
    const pElement = screen.getByText(/8/i);
    expect(pElement).toMatchSnapshot();
  });

  test('Test 9 btn on calculatore', () => {
    render(<Mycalculator />);
    const pElement = screen.getByText(/9/i);
    expect(pElement).toMatchSnapshot();
  });

  test('Test x btn on calculatore', () => {
    render(<Mycalculator />);
    const pElement = screen.getByText(/x/i);
    expect(pElement).toMatchSnapshot();
  });

  test('Test 4 btn on calculatore', () => {
    render(<Mycalculator />);
    const pElement = screen.getByText(/4/i);
    expect(pElement).toMatchSnapshot();
  });

  test('Test 5 btn on calculatore', () => {
    render(<Mycalculator />);
    const pElement = screen.getByText(/5/i);
    expect(pElement).toMatchSnapshot();
  });

  test('Test 6 btn on calculatore', () => {
    render(<Mycalculator />);
    const pElement = screen.getByText(/6/i);
    expect(pElement).toMatchSnapshot();
  });

  test('Test 1 btn on calculatore', () => {
    render(<Mycalculator />);
    const pElement = screen.getByText(/1/i);
    expect(pElement).toMatchSnapshot();
  });

  test('Test 2 btn on calculatore', () => {
    render(<Mycalculator />);
    const pElement = screen.getByText(/2/i);
    expect(pElement).toMatchSnapshot();
  });

  test('Test 3 btn on calculatore', () => {
    render(<Mycalculator />);
    const pElement = screen.getByText(/3/i);
    expect(pElement).toMatchSnapshot();
  });

  test('Test = btn on calculatore', () => {
    render(<Mycalculator />);
    const pElement = screen.getByText(/=/i);
    expect(pElement).toMatchSnapshot();
  });
});

describe('Test Home Component', () => {
  test('Text content testing', () => {
    render(<Home />);
    const pElement = screen.getByText(/Welcome to Our Page/i);
    expect(pElement).toMatchSnapshot();
  });
});

describe('Test Navigation Component', () => {
  test('Text content testing', () => {
    render(<Qutes />);
    const pElement = screen.getByText(/Pls wait moment it is Loading.../i);
    expect(pElement).toMatchSnapshot();
  });
});
