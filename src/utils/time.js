import moment from "moment";

export function convertTimeFormat(time) {
  return moment(time).utc().format("YYYY-MM-DD hh:mm:ss");
}
