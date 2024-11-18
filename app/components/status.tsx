"use client"

import { useUpdate } from "@/lib/stores/update"
import useAdmissionState from "@/lib/hooks/useAdmissionState"
import Link from "next/link"

export default function AdmissionState({
  title,
  link,
  api,
}: {
  title: string
  link: string
  api: string
}) {
  const { data, isLoading, error } = useAdmissionState(api)
  const { state } = useUpdate((state) => state)

  return (
    <>
      {isLoading ? (
        <div>업데이트 중...</div>
      ) : (
        <div
          className={`${data?.state ? "font-bold text-xl text-red-600" : "font-semibold text-lg"}`}
        >
          현재 상태: {data?.state ? "발표" : "미발표"}
        </div>
      )}
      {error || data?.state === "Error" ? (
        <div className={"text-red-500"}>에러 발생!</div>
      ) : (
        ""
      )}
      {data?.state && (
        <Link
          href={link}
          target={"_blank"}
          className={
            "bg-blue-900 text-white p-2 px-4 rounded-lg w-full text-center max-w-sm"
          }
        >
          {title}
        </Link>
      )}
      <p>업데이트: {state}</p>
    </>
  )
}
