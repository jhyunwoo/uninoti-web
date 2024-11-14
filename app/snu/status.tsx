"use client";

import useSNU from "@/lib/hooks/useSNU";
import Link from "next/link";

export default function SNUState() {
  const { snuData, snuIsLoading } = useSNU();
  return (
    <>
      {snuIsLoading ? (
        <div>업데이트 중...</div>
      ) : (
        <div className={"font-semibold text-lg"}>
          현재 상태: {snuData?.result ? "발표" : "미발표"}
        </div>
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
    </>
  );
}
