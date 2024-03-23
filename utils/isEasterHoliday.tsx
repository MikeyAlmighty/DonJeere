const EASTER_TIMESTAMP = 1711922401;

interface isEasterHolidayProps {
   currentTimeStamp: number;
}

export const isEasterHoliday = ({ currentTimeStamp }: isEasterHolidayProps) => {
   return new Date(currentTimeStamp) > new Date(EASTER_TIMESTAMP)
};