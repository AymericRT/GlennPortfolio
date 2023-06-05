import Image from "next/image";
import CardUI from "./component/card";
import Introduction from "./component/introduction";
import Resume from "./component/resume";
import MySkills from "./component/mySkills";
import GitProject from "./component/gitProject";
import { BsGearFill } from "react-icons/bs";

export default function Home() {
  return (
    <main className="flex flex-col min-[1000px]:flex-row mt-4">
      <div className="min-[1000px]:min-w-[30%]     min-[600px]:min-w-[600px]     min-w-full  min-[1000px]:ml-5 min-[1000px]:max-w-0 max-w-[600px] mx-auto">
        <CardUI />
      </div>
      <div className="fixed top-16 bg-neutral-900 p-2 rounded-r-lg">
        <BsGearFill className="text-gray-500 animate-spin-slow" size={24} />
      </div>

      <div className="min-[1000px]:w-[70%] w-[90%] min-[1000px]:mx-0 mx-auto">
        <div className="min-[1000px]:w-[90%] w-full min-[1000px]:pr-[10%]">
          <Introduction />
          <Resume />
          <MySkills />
          <GitProject />
        </div>
      </div>
    </main>
  );
}
