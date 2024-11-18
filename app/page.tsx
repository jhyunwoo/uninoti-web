import Link from "next/link"
import Image from "next/image"
import { ReactNode } from "react"
import { ChevronRightIcon } from "@heroicons/react/24/outline"

function AdmissionButton({
  href,
  children,
}: {
  href: string
  children: ReactNode
}) {
  return (
    <Link
      href={href}
      className={
        "p-4 lg:p-8 rounded-xl shadow-xl flex items-center justify-center hover:shadow-2xl transition"
      }
    >
      {children}
    </Link>
  )
}

export default function HomePage() {
  return (
    <div className={"w-screen h-screen flex items-center justify-center p-4"}>
      <div className={"flex flex-col items-center justify-center gap-4"}>
        <div className={"flex flex-col items-center px-4"}>
          <h1 className={"text-2xl lg:text-4xl font-extrabold p-4"}>
            유니노티
          </h1>
          <h2 className={"text-lg"}>
            실시간 합격자 발표 조회를 통해 누구보다 빠르게 합격자 발표 소식을
            알아보세요.
          </h2>
          <p className={"text-sm text-red-700"}>
            주의: 발표 정보가 정확하지 않을 수 있습니다.
          </p>
        </div>
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
          <AdmissionButton href={"/snu-jigyun-1st"}>
            <Image
              src={"/snu.svg"}
              alt={"서울대학교 로고"}
              width={100}
              height={100}
            />
            <p className={"text-lg lg:text-2xl font-semibold p-4"}>
              서울대학교 학생부종합전형 <br />
              (지역균형전형)
            </p>
          </AdmissionButton>
          <AdmissionButton href={"/yonsei-international-1st"}>
            <Image
              src={"/yonsei.svg"}
              alt={"연세대학교 로고"}
              width={100}
              height={100}
            />
            <p className={"text-lg lg:text-2xl font-semibold p-4"}>
              연세대학교 학생부종합전형 <br />
              (국제형)
            </p>
          </AdmissionButton>
          <AdmissionButton href={"/yonsei-talent-international-final"}>
            <Image
              src={"/yonsei.svg"}
              alt={"연세대학교 로고"}
              width={100}
              height={100}
            />
            <p className={"text-lg lg:text-2xl font-semibold p-4"}>
              연세대학교 특기자[국제인재] UD
              <br />
              최종합격자 발표
            </p>
          </AdmissionButton>
          <AdmissionButton href={"/korea-gaejuck-final"}>
            <Image
              src={"/korea.svg"}
              alt={"고려대학교 로고"}
              width={80}
              height={80}
            />
            <p className={"text-lg lg:text-2xl font-semibold p-4"}>
              고려대학교 <br />
              계열적합, 고른기회, 재직자전형{" "}
              <span className={"text-sm text-red-500"}>Beta</span>
            </p>
          </AdmissionButton>
          <Link
            href={"https://www.moveto.kr"}
            target={"_blank"}
            className={
              "md:col-span-2 p-4 rounded-xl bg-neutral-900 text-white flex items-center gap-2 justify-center shadow-lg shadow-neutral-500"
            }
          >
            <p className={"text-lg font-semibold"}>
              스터디카페에서 지메일 없이 공용 컴퓨터로 파일 옮기는 방법
            </p>
            <ChevronRightIcon className={"size-6"} />
          </Link>
        </div>
      </div>
    </div>
  )
}
