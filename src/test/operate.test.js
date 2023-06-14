import operate from '../logic/operate';

describe('Calculator Opration Testing', () => {
  const n1 = 4;
  const n2 = 2;
  it('Addition opration tasting', () => {
    const op = '+';
    expect(operate(n1, n2, op)).toBe('6');
  });
  it('Subtraction opration tasting', () => {
    const op = '-';
    expect(operate(n1, n2, op)).toBe('2');
  });
  it('Multipilcation opration tasting', () => {
    const op = 'x';
    expect(operate(n1, n2, op)).toBe('8');
  });
  it('Division opration tasting', () => {
    const op = '÷';
    expect(operate(n1, n2, op)).toBe('2');
  });
  it('Mudulation opration tasting', () => {
    const op = '%';
    expect(operate(n1, n2, op)).toBe('0');
  });
});
