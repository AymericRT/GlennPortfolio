import Image from "next/image";

export default function MySkills() {
  return (
    <>
      <div className="border border-[#565656] rounded-full w-28  mt-16 ">
        <div className="flex items-center justify-center text-center text-[11px] space-x-2  text-white my-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
            />
          </svg>

          <h2 className="font-extralight">SKILLS</h2>
        </div>
      </div>

      <h1 className="text-5xl mt-5">
        My <span className="text-[#28e98c]">Tech Stack</span>
      </h1>
      <div className="justify-left flex flex-row justify-evenly my-7">
        <div className="border border-gray-400 rounded-3xl p-5">
          <div className="rounded-xl overflow-hidden">
            <Image alt="" src="/python.png" width={70} height={70} />
          </div>
        </div>
        <div className="border border-gray-400 rounded-3xl p-5">
          <div className="rounded-xl overflow-hidden">
            <Image alt="" src="/kuber1.png" width={70} height={70} />
          </div>
        </div>
        <div className="border border-gray-400 rounded-3xl p-5">
          <div className="rounded-xl overflow-hidden">
            <Image alt="" src="/java1.png" width={70} height={70} />
          </div>
        </div>
      </div>
    </>
  );
}
