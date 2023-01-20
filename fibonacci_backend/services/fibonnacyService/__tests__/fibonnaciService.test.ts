import { getFibonnaci } from '../fibonnaciService';

describe('fibonnaciService', () => {
  it('getFibonnaci should return correct fibonnacy number', () => {
    const result = getFibonnaci({
      requestedNumber: 6
    });
    const expectedResult = 8;
    
    expect(result).toBe(expectedResult);
  });
});
