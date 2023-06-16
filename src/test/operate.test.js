import operate from '../logic/operate';

describe('Calculator Opration Testing', () => {
  const n1 = 8;
  const n2 = 2;
  it('Addition opration tasting', () => {
    const op = '+';
    expect(operate(n1, n2, op)).toBe('10');
  });
  it('Subtraction opration tasting', () => {
    const op = '-';
    expect(operate(n1, n2, op)).toBe('6');
  });
  it('Multipilcation opration tasting', () => {
    const op = 'x';
    expect(operate(n1, n2, op)).toBe('16');
  });
  it('Division opration tasting', () => {
    const op = '÷';
    expect(operate(n1, n2, op)).toBe('4');
  });
  it('Mudulation opration tasting', () => {
    const op = '%';
    expect(operate(n1, n2, op)).toBe('0');
  });
});
