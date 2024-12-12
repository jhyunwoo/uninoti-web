import { Metadata } from "next"
import Link from "next/link"
import { ChevronLeftIcon } from "@heroicons/react/24/outline"
import AdmissionState from "@/app/components/status"
import DDay from "@/app/components/d-day"
import Yonsei from "@/public/yonsei.svg"

export const metadata: Metadata = {
  title: "연세대 수시 최종 발표 상태",
  description: "연세대학교 수시 최종 합격자 발표 상태",
}

export default function YonseiFinal() {
  return (
    <div
      className={"w-screen min-h-screen flex items-center justify-center p-4"}
    >
      <Link
        href={"/"}
        className={
          "fixed top-4 lg:top-8 lg:left-8 left-4 hover:underline flex items-center gap-2"
        }
      >
        <ChevronLeftIcon className={"size-6"} />
        <p>홈 화면</p>
      </Link>
      <div className={"admission-card"}>
        <DDay year={2024} month={12} day={13} />

        <div className={"flex items-center gap-4"}>
          <Yonsei className={"size-24"} />
          <div className={"text-xl lg:text-2xl font-bold"}>
            연세대학교 <br /> 수시
            <br />
            최종 합격자 발표
          </div>
        </div>
        <AdmissionState
          api={"https://api.uninoti.moveto.kr/yonsei-final"}
          title={"연세대학교 입학처 바로가기"}
          link={
            "https://admission.yonsei.ac.kr/seoul/admission/html/main/main.asp"
          }
        />
      </div>
    </div>
  )
}
