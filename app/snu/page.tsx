import Image from "next/image";
import SNUState from "@/app/snu/status";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "서울대 학종 1차 발표",
  description: "서울대학교 학생부종합전형 1단계 합격자 발표 상태",
};

export default function SNUPage() {
  return (
    <div className={"w-screen h-screen flex items-center justify-center p-4"}>
      <div className={"flex flex-col items-center gap-4 w-full max-w-lg"}>
        <div className={"flex items-center gap-4"}>
          <Image
            src={"/snu.svg"}
            alt={"서울대학교 로고"}
            width={100}
            height={100}
          />
          <div className={"text-xl lg:text-2xl font-bold"}>
            서울대학교 학생부종합전형 <br />
            1단계 합격자 발표
          </div>
        </div>
        <SNUState />
      </div>
    </div>
  );
}
