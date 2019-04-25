export function daysBetween(date1, date2) {
  var oneDay = 1000 * 60 * 60 * 24;
  var date1Ms = date1.getTime();
  var date2Ms = date2.getTime();
  var diffMs = Math.abs(date1Ms - date2Ms);

  return Math.round(diffMs / oneDay);
}

export function calcuateDeliverDate(shipDays) {
  shipDays = parseInt(shipDays);
  const today = new Date();
  const nextTuseday = new Date();
  nextTuseday.setDate(
    nextTuseday.getDate() + ((2 + 7 - nextTuseday.getDay()) % 7)
  );

  const daysUntilsShip = daysBetween(today, nextTuseday);
  let finalDate = new Date(
    today.setDate(today.getDate() + (daysUntilsShip + shipDays))
  );

  const isSaturday = new Date(finalDate).getDay() === 6;
  const isSunday = new Date(finalDate).getDay() === 0;

  if (isSaturday) {
    finalDate = new Date(finalDate.setDate(finalDate.getDate() + 2));
  } else if (isSunday) {
    finalDate = new Date(finalDate.setDate(finalDate.getDate() + 1));
  }

  return {
    date: finalDate,
    countDays: daysBetween(today, finalDate)
  };
}

export function formatDate(date) {
  const monthname = [
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
    "December"
  ];
  return (
    monthname[date.getMonth()] +
    " " +
    date.getDate() +
    ", " +
    date.getFullYear()
  );
}
