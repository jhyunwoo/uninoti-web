import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className={"w-screen h-screen flex items-center justify-center p-4"}>
      <div className={"flex flex-col items-center justify-center gap-4"}>
        <h1 className={"text-2xl lg:text-4xl font-extrabold"}>
          유니노티 - 대학교 합격자 발표 알림
        </h1>
        <div className={"flex gap-2 items-center"}>
          <Link
            href={"/snu"}
            className={
              "p-4 rounded-xl shadow-xl flex items-center justify-center hover:shadow-2xl transition"
            }
          >
            <Image
              src={"/snu.svg"}
              alt={"서울대학교 로고"}
              width={100}
              height={100}
            />
            <p className={"text-lg lg:text-2xl font-semibold p-4"}>
              서울대학교
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
