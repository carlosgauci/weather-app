export default function getCurrentDate(unix) {
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
    date === 1 ? "st" : date === 2 ? "nd" : date === 3 ? "rd" : "th";

  return `${day} ${date}${dateSuffix} ${month}`;
}
