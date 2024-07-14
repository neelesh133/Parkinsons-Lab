"use client";

import { useRouter } from "next/navigation";

export default function Btn({ data, path } :{data:React.ReactNode | string, path:string}) {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => (path=="")?"":router.push(`/${path}`)}
      className="ml-[4rem] mt-6 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-xl px-8 py-4 text-center me-2 mb-2"
    >
      {data}
    </button>
  );
}
