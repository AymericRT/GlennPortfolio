import Link from "next/link";

export default function GitProject() {
  return (
    <div className="mt-16 mb-20 space-y-5">
      {/* Resume */}
      <div className="border border-[#565656] rounded-full w-28  mt-10 ">
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
              d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
            />
          </svg>

          <h2 className="font-extralight">Projects</h2>
        </div>
      </div>

      {/* Content */}

      <div>
        <h1 className="text-[48px] mt-5">
          GitHub <span className="text-[#28e98c]">Projects</span>
        </h1>
      </div>

      <div className="justify-left flex flex-col">
        <div className="border-[0.5px] p-3 border-gray-400 rounded-2xl  h-full w-full  space-y-3">
          <h1 className="text-xl text-white font-extralight">
            Deepfake Detection
          </h1>

          <h1 className="text-xs text-[#B3B3B3] font-extralight">
            The task is to classify whether an image of a human face is
            deepfake. Our team used pre-trained models of the EfficientNet and
            acheived around 96% accuracy on unseen testing data.
          </h1>

          <div className="flex justify-between">
            <div>
              Language
              <div className="flex flex-row items-center text-sm font-thin">
                <div className="border bg-orange-600 border-orange-600 rounded-full w-1.5 h-1.5 mt-2 mr-2"></div>
                Jupyter Notebook
              </div>
            </div>
            <div className="text-xs text-[#B3B3B3] font-extralight self-end">
              <a
                href="https://glennsalter.github.io/Tic-Tac-Toe-AI/"
                target="_blank"
                className="text-sky-400"
              >
                Visit Project
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="justify-left flex flex-col">
        <div className="border-[0.5px] p-3 border-gray-400 rounded-2xl  h-full w-full  space-y-3">
          <h1 className="text-xl text-white font-extralight">
            Stereo-Disparity
          </h1>

          <h1 className="text-xs text-[#B3B3B3] font-extralight">
            PSMNet (Pyramid Stereo Matching Network) is an advanced architecture
            for depth estimation from stereo images. PSMNet: A GitHub repository
            for precise depth estimation using CNNs. It incorporates spatial
            pyramid pooling and a 3D CNN for improved matching accuracy in
            challenging regions. Explore and unlock new possibilities in
            computer vision applications.
          </h1>

          <div className="flex justify-between">
            <div>
              Language
              <div className="flex flex-row  text-sm font-thin">
                <div className="border bg-orange-600 border-orange-600 rounded-full w-1.5 h-1.5 mt-2 mr-2"></div>
                Jupyter Notebook
              </div>
              <div className="flex flex-row font-thin text-sm">
                <div className="border bg-cyan-600 border-cyan-600 rounded-full w-1.5 h-1.5 mt-2 mr-2"></div>
                Python
              </div>
              <div className="flex flex-row font-thin text-sm">
                <div className="border bg-green-400 border-green-400 rounded-full w-1.5 h-1.5 mt-2 mr-2"></div>
                Shell
              </div>
            </div>
            <div className="text-xs text-[#B3B3B3] font-extralight self-end">
              <a
                href="https://glennsalter.github.io/Tic-Tac-Toe-AI/"
                target="_blank"
                className="text-sky-400"
              >
                Visit Project
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="justify-left flex flex-col">
        <div className="border-[0.5px] p-3 border-gray-400 rounded-2xl  h-full w-full  space-y-3">
          <h1 className="text-xl text-white font-extralight">Tic-Tac-Toe-AI</h1>

          <h1 className="text-xs text-[#B3B3B3] font-extralight">
            In this project, I would be implementing the minimax algorithm and
            alpha-beta pruning to build a tic-tac-toe AI. You can try playing
            this game at:
            <Link
              className="text-sky-400"
              href="https://glennsalter.github.io/Tic-Tac-Toe-AI/"
              target="_blank"
            >
              {" "}
              https://glennsalter.github.io/Tic-Tac-Toe-AI/
            </Link>
          </h1>

          <div className="flex justify-between">
            <div>
              Language
              <div className="flex flex-row  text-sm font-thin">
                <div className="border bg-yellow-200 border-yellow-200 rounded-full w-1.5 h-1.5 mt-2 mr-2"></div>
                JavaScript
              </div>
              <div className="flex flex-row font-thin text-sm">
                <div className="border bg-orange-600 border-orange-600 rounded-full w-1.5 h-1.5 mt-2 mr-2"></div>
                HTML
              </div>
              <div className="flex flex-row font-thin text-sm">
                <div className="border bg-indigo-700 border-indigo-700 rounded-full w-1.5 h-1.5 mt-2 mr-2"></div>
                CSS
              </div>
            </div>
            <div className="text-xs text-[#B3B3B3] font-extralight self-end">
              <a
                href="https://glennsalter.github.io/Tic-Tac-Toe-AI/"
                target="_blank"
                className="text-sky-400"
              >
                Visit Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
