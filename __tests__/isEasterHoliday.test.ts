import { isEasterHoliday  } from '../utils/isEasterHoliday';

describe('isEasterHoliday  ', () => {
  it('should return true for Easter Sunday in March', () => {
    const easterSundayMarch = new Date('2024-03-31'); // Easter Sunday in March
    expect(isEasterHoliday({ date: easterSundayMarch })).toBe(true);
  });

  it('should return false for a non-Easter date', () => {
    const nonEasterDate = new Date('2024-05-15'); // A non-Easter date
    expect(isEasterHoliday({ date: nonEasterDate })).toBe(false);
  });
});