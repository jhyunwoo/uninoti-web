import { differenceInDays } from "date-fns"

export default function getDDay(year: number, month: number, day: number) {
  const today = new Date()
  const todayStart = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  )
  const targetDate = new Date(year, month - 1, day)
  return differenceInDays(targetDate, todayStart)
}
