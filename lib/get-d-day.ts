export default function getDDay(year: number, month: number, day: number) {
  const today = new Date();
  const targetDate = new Date(year, month - 1, day);

  return targetDate.getDate() - today.getDate();
}
