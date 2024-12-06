import Image from "next/image"
import { Metadata } from "next"
import Link from "next/link"
import { ChevronLeftIcon } from "@heroicons/react/24/outline"
import AdmissionState from "@/app/components/status"
import DDay from "@/app/components/d-day"

export const metadata: Metadata = {
  title: "서강대 학종 최종합격자 발표 상태",
  description: "서강대학교 학생부종합전형 최초합격자 발표 상태",
}

export default function SogangFinal() {
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
          <Image
            src={"/sogang.svg"}
            alt={"서강대학교 로고"}
            width={80}
            height={80}
          />
          <div className={"text-lg lg:text-xl font-bold"}>
            서강대학교
            <br /> 학생부종합전형
            <br /> 최종합격자 발표
          </div>
        </div>
        <AdmissionState
          api={"https://api.uninoti.moveto.kr/sogang-final"}
          title={"서강대학교 입학처 바로가기"}
          link={"https://admission.sogang.ac.kr/enter/html/counsel/notice.asp"}
        />
      </div>
    </div>
  )
}
