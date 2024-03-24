interface isEasterHolidayProps {
  date: Date;
}

/**
 * Checks if it's an easterHoliday (March/April).
 * @param {Date} date - Given date
 */
export const isEasterHoliday = ({ date }: isEasterHolidayProps) => {
  // Date of Easter for the given year
  const easterDate = new Date(
    date?.getFullYear(),
    2,
    31 - (((date?.getFullYear() * 5) / 4 + 4) % 7),
  );
  const easterMonth = easterDate.getMonth();
  const easterDay = easterDate.getDate();

  // Check if the provided date matches either March or April's Easter date
  return (
    (date?.getMonth() === 2 && date?.getDate() === easterDay) || // March
    (date?.getMonth() === easterMonth && date?.getDate() === easterDay) // April
  );
};
