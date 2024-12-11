const now = new Date();

const formatter = new Intl.DateTimeFormat("ko-KR", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
});

const formattedDateTime = formatter.format(now);

const parts = formattedDateTime.replace(/\s/g, "").split(/[\.,:]/);
const [year, month, day, hour, minute] = parts;

export const currentTime = `${year}년 ${month}월 ${day}일 ${hour}시 ${minute}분`;
