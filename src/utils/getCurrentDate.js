export default function getCurrentDate(unix, array) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const currentDate = new Date(unix * 1000);
  const day = days[currentDate.getDay()];
  const date = currentDate.getDate();
  const month = months[currentDate.getMonth()];
  const dateSuffix =
    date === 1 || date === 21 || date === 31
      ? "st"
      : date === 2 || date === 22
      ? "nd"
      : date === 3 || date === 23
      ? "rd"
      : "th";

  if (array) {
    return [`${day}`, `${date}${dateSuffix} ${month}`];
  }
  return `${day} ${date}${dateSuffix} ${month}`;
}
