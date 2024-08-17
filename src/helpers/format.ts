export const FormatDate = (originalDate: string) => {
  const dateParts = originalDate.split("-");
  const year = dateParts[0];
  const month = dateParts[1];
  const day = dateParts[2].split(" ")[0];

  const formattedDate = day + "/" + month + "/" + year;
  return formattedDate;
};

export const FormatTime = (originalDate: string) => {
  const time = originalDate.split(" ")[1];
  const result = time.split(":")[0] + ":" + time.split(":")[1];
  return result;
};

export const TruncateText = (text: string, length: number = 75) => {
  if (text.length > length) {
    return text.slice(0, length) + " ...";
  }
  return text;
};
