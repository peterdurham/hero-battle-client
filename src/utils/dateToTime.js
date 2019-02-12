const dateToTime = date => {
  let day;
  switch (date.getDay()) {
    case 0:
      day = "Sun";
      break;
    case 1:
      day = "Mon";
      break;
    case 2:
      day = "Tues";
      break;
    case 3:
      day = "Wed";
      break;
    case 4:
      day = "Thurs";
      break;
    case 5:
      day = "Fri";
      break;
    case 6:
      day = "Sat";
      break;
    default:
      break;
  }
  const ampm = date.getHours < 12 ? "AM" : "PM";
  let hour = ("0" + date.getHours()).slice(-2);
  let minutes = ("0" + date.getMinutes()).slice(-2);
  const time = `${day}, ${hour}:${minutes} ${ampm}`;

  return time;
};

export default dateToTime;
