import moment from "moment";

export const convertTime = (created_at) => {
  const formatDate = created_at;
  const formattedDate = moment(formatDate).fromNow();

  return formattedDate;
};

export const numberFormat = (data) => {
  let followCount = 0;
  if (data > 999 && data < 1000000) {
    const solveCount = data / 1000;
    followCount = +Math.floor(solveCount * 100) / 100 + "K";
  } else if (data > 999999 && data < 1000000000) {
    const solveCount = data / 1000000;
    followCount = Math.floor(solveCount * 100) / 100 + "M";
  } else if (data > 999999999) {
    const solveCount = data / 1000000000;
    followCount = Math.floor(solveCount * 100) / 100 + "B";
  } else {
    return (followCount = data);
  }
  return followCount;
};

export const company_capacity_converter = (data) => {
  let capacity = "";
  if (data >= 1 && data <= 99) {
    capacity = "1 - 100";
  } else if (data >= 100 && data <= 249) {
    capacity = "100 - 250";
  } else if (data >= 250 && data <= 499) {
    capacity = "250 - 500";
  } else {
    capacity = "500+";
  }
  return capacity;
};

export const wordCount = (word) => {
  const occurence = word
    ?.split("\n")
    .join(" ")
    .split("\t")
    .join(" ")
    .trim()
    .split(" ")
    .filter((word) => word !== "");
  return occurence.length;
};

export const readTime = (data) => {
  let count;
  const initialCount = wordCount(data);
  wordCount(data) > 0 ? (count = initialCount * 0.33) : (count = 0);
  if (count < 3600) {
    const calc = count / 60;
    const calculateMins = Math.ceil(calc);
    const finalCount =
      calculateMins === 1
        ? calculateMins + " minute"
        : calculateMins === 60
        ? 59 + " minutes"
        : calculateMins + " minutes";
    return finalCount;
  } else if (count >= 3600) {
    const calc = count / 3600;
    const remainder = count % 3600;
    const calculateHour = Math.floor(calc);
    const finalHour =
      calculateHour + (calculateHour === 1 ? " hour" : " hours");
    const mins = remainder / 60;
    const calculateMins = Math.round(mins);
    const finalMins =
      calculateMins + (calculateMins === 1 ? " minute" : " minutes");
    const finalCount = finalHour + " " + finalMins;
    return finalCount;
  }
};
