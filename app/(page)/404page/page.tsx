import error from "@/public/Assets/Images/error.png";
import Image from "next/image";
export default function NotFoundPage() {
  return (
    <div className="flex flex-col gap-12 items-center justify-center h-screen bg-white text-center px-4">
      <h1 className="text-5xl font-semibold text-gray-800">Page Not Found</h1>
      {/* <h2 className="text-[160px] font-bold text-orange leading-none">
        404
      </h2> */}
      <Image src={error} width={450} height={450} alt="not found" />
      <div className="flex gap-4 flex-col items-center justify-center">
        <p className="text-black text-4xl font-semibold max-w-2xl">
          Oops! That page can’t be found.
        </p>
        <p className="text-gray-500 text-sm max-w-2xl mt-2">
          Something seems to have gone wrong! The page youre requesting doesn’t
          exist. It may have been obsolete, deleted, or you entered an invalid
          address in the address bar.
        </p>
        <button className="mt-6 w-[15rem] mx-auto bg-gray-900 text-white text-sm font-medium px-6 py-3 shadow-md hover:bg-gray-800 rounded-3xl">
          Go To Home Page
        </button>
      </div>
    </div>
  );
}
