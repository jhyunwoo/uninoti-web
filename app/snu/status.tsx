"use client";

import useSNU from "@/lib/hooks/useSNU";
import Link from "next/link";
import { useUpdate } from "@/lib/stores/update";

export default function SNUState() {
  const { snuData, snuIsLoading, snuError } = useSNU();
  const { state } = useUpdate((state) => state);

  return (
    <>
      {snuIsLoading ? (
        <div>업데이트 중...</div>
      ) : (
        <div
          className={`${snuData?.result ? "font-bold text-xl text-red-600" : "font-semibold text-lg"}`}
        >
          현재 상태: {snuData?.result ? "발표" : "미발표"}
        </div>
      )}
      {snuError || snuData?.result === "Error" ? (
        <div className={"text-red-500"}>에러 발생!</div>
      ) : (
        ""
      )}
      {snuData?.result && (
        <Link
          href={"https://admission.snu.ac.kr/undergraduate/notice"}
          target={"_blank"}
          className={
            "bg-blue-900 text-white p-2 px-4 rounded-lg w-full text-center max-w-sm"
          }
        >
          서울대학교 입학처 바로가기
        </Link>
      )}
      <p>업데이트: {state}</p>
    </>
  );
}
