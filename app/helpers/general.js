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
