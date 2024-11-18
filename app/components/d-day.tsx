"use client"

import getDDay from "@/lib/get-d-day"

export default function DDay({
  year,
  month,
  day,
}: {
  year: number
  month: number
  day: number
}) {
  return (
    <div className={"text-lg font-semibold"}>
      D-{getDDay(year, month, day) ? getDDay(year, month, day) : "Day"}
    </div>
  )
}
