const dateToString = date => {
  let month = date.getMonth() + 1;
  let dayOfMonth = date.getDate();
  const year = date.getFullYear();
  if (month < 10) {
    month = "0" + month;
  }
  if (dayOfMonth < 10) {
    dayOfMonth = "0" + dayOfMonth;
  }
  return `${month}/${dayOfMonth}/${year}`;
};

export default dateToString;
