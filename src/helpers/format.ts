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

export function FormatDateLabel(date: Date, locale: string = "en-EN"): string {
  const today = new Date();
  const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  if (date.toDateString() === today.toDateString()) {
    return `Today, ${date
      .toLocaleDateString(locale, options)
      .split(",")
      .slice(1)}`;
  } else if (date.toDateString() === yesterday.toDateString()) {
    return `Yesterday, ${date
      .toLocaleDateString(locale, options)
      .split(",")
      .slice(1)}`;
  } else {
    return date.toLocaleDateString(locale, options);
  }
}

export function DaysLeft(date: Date) {
  const today = new Date();
  const diffTime = Math.abs(today.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

export const TruncateText = (text: string, length: number = 75) => {
  if (text.length > length) {
    return text.slice(0, length) + " ...";
  }
  return text;
};
