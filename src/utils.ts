export const dateStringToDate = (dateString: string): Date => {
  const dateParts = dateString.split("/").map((value: string): number => {
    return parseInt(value);
  });
};
