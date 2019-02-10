import dateToString from "./dateToString";

const lastSevenDays = date => {
  let time = date.getTime();

  const battle1 = dateToString(new Date(time - 86400000));
  const battle2 = dateToString(new Date(time - 2 * 86400000));
  const battle3 = dateToString(new Date(time - 3 * 86400000));
  const battle4 = dateToString(new Date(time - 4 * 86400000));
  const battle5 = dateToString(new Date(time - 5 * 86400000));
  const battle6 = dateToString(new Date(time - 6 * 86400000));
  const battle7 = dateToString(new Date(time - 7 * 86400000));

  return [battle1, battle2, battle3, battle4, battle5, battle6, battle7];
};

export default lastSevenDays;
