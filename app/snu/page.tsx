import Image from "next/image";
import SNUState from "@/app/snu/status";

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
            1차 합격자 발표
          </div>
        </div>
        <SNUState />
        <p className={"text-sm"}>1초마다 업데이트 중...</p>
      </div>
    </div>
  );
}
