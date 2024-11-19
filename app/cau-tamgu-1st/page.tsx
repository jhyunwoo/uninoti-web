import Image from "next/image"
import { Metadata } from "next"
import Link from "next/link"
import { ChevronLeftIcon } from "@heroicons/react/24/outline"
import AdmissionState from "@/app/components/status"
import DDay from "@/app/components/d-day"

export const metadata: Metadata = {
  title: "중앙대 탐구형 1단계 합격자 발표 상태",
  description: "중앙대학교 학생부종합전형 탐구형 1단계 합격자 발표 상태",
}

export default function CauTamgu1st() {
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
        <DDay year={2024} month={11} day={21} />

        <div className={"flex items-center gap-4"}>
          <Image
            src={"/cau.svg"}
            alt={"중앙대학교 로고"}
            width={80}
            height={80}
          />
          <div className={"text-lg lg:text-xl font-bold"}>
            중앙대학교
            <br /> 학생부종합전형[탐구형]
            <br />
            1단계 합격자 발표
          </div>
        </div>
        <AdmissionState
          api={"https://api.uninoti.moveto.kr/cau-tamgu-1st"}
          title={"중앙대학교 입학처 바로가기"}
          link={"https://admission.cau.ac.kr/main.do"}
        />
      </div>
    </div>
  )
}
