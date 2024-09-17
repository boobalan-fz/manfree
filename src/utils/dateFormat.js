import { format } from "date-fns";

export const formattedDate = (date) => {
  const changingFormat = format(new Date(date), "yyyy-MM-dd");
  return changingFormat;
};

export const onlyDate = (date) => {
  const changingFormat = format(new Date(date), "dd");
  return changingFormat;
};

export const onlyMonth = (date) => {
  const changingFormat = format(new Date(date), "MMM");
  return changingFormat;
};
