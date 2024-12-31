export const convertUnixToKST = (unixTimestamp) => {
  const date = new Date(unixTimestamp * 1000);

  const options = {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  };

  const formatter = new Intl.DateTimeFormat("ko-KR", options);
  const formattedDate = formatter.formatToParts(date);

  const result = {};
  formattedDate.forEach((part) => {
    if (part.type !== "literal") {
      result[part.type] = part.value;
    }
  });

  return `${result.year}년 ${result.month}월 ${result.day}일 ${result.hour}시 ${result.minute}분`;
};
