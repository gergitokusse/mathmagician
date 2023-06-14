import calculate from '../logic/calculate';

describe('Test calculate', () => {
  const next = 10;
  const operation = '+';
  const total = 20;
  test('Test btn Name AC', () => {
    const btnName = 'AC';
    const result = {
      next: null,
      operation: null,
      total: null,
    };
    expect(calculate({ total, next, operation }, btnName)).toMatchObject(result);
  });
  test('Test btn Name equal', () => {
    const btnName = '=';
    const result = {
      next: null,
      operation: null,
      total: '30',
    };
    expect(calculate({ total, next, operation }, btnName)).toMatchObject(result);
  });
  test('Test btn Name +/-', () => {
    const btnName = '+/-';
    const result = {
      next: '-10',
      operation: '+',
      total: 20,
    };
    expect(calculate({ total, next, operation }, btnName)).toMatchObject(result);
  });
});
