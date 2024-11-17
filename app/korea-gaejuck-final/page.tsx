import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import AdmissionState from "@/app/components/status";
import DDay from "@/app/components/d-day";

export const metadata: Metadata = {
  title: "고려대 계적, 고른기회, 재직자 최종합격자 발표 상태",
  description: "고려대학교 계열적합, 고른기회, 재직자전형 최종합격자 발표 상태",
};

export default function KoreaGaejuckFinal() {
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
        <DDay year={2024} month={11} day={26} />

        <div className={"flex items-center gap-4"}>
          <Image
            src={"/korea.svg"}
            alt={"고려대학교 로고"}
            width={80}
            height={80}
          />
          <div className={"text-lg lg:text-xl font-bold"}>
            고려대학교 계열적합, 고른기회, 재직자전형
            <br />
            최종합격자 발표
          </div>
        </div>
        <AdmissionState
          api={"https://api.uninoti.moveto.kr/korea-gaejuck-final"}
          title={"고려대학교 입학처 바로가기"}
          link={
            "https://oku.korea.ac.kr/oku/cms/FR_CON/index.do?MENU_ID=750&CONTENTS_NO=1"
          }
        />
      </div>
    </div>
  );
}
