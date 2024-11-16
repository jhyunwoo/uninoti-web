import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import AdmissionState from "@/app/components/status";

export const metadata: Metadata = {
  title: "서울대 학종 지균 1단계 발표 상태",
  description: "서울대학교 학생부종합전형 지역균형전형 1단계 합격자 발표 상태",
};

export default function SnuJigyun1st() {
  return (
    <div className={"w-screen h-screen flex items-center justify-center p-4"}>
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
        <div className={"flex items-center gap-4"}>
          <Image
            src={"/snu.svg"}
            alt={"서울대학교 로고"}
            width={100}
            height={100}
          />
          <div className={"text-xl lg:text-2xl font-bold"}>
            서울대학교 학생부종합전형 <br />
            (지역균형전형)
            <br />
            1단계 합격자 발표
          </div>
        </div>
        <AdmissionState
          api="https://api.uninoti.moveto.kr/snu-jigyun-1st"
          title={"서울대학교 입학처 바로가기"}
          link={"https://admission.snu.ac.kr/undergraduate/notice"}
        />
      </div>
    </div>
  );
}
