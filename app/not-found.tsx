import Link from "next/link"

export default function NotFound() {
  return (
    <div className={"w-screen h-screen flex items-center justify-center p-4"}>
      <div
        className={
          "w-full max-w-2xl rounded-xl p-8 bg-white shadow-2xl flex flex-col gap-2"
        }
      >
        <h1 className={"text-2xl font-bold"}>404 Not Found</h1>
        <div className={"text-lg font-semibold"}>
          페이지를 찾을 수 없습니다.
        </div>
        <Link
          href={"/"}
          className={
            "p-2 rounded-xl w-full text-center bg-neutral-950 text-white"
          }
        >
          홈 페이지로 돌아가기
        </Link>
      </div>
    </div>
  )
}
