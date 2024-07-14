import Image from "next/image";
import circle from "../../assets/Deco/Deco.png";
import about from "../../assets/Deco/Title.png";

export default function AboutUs() {
  return (
    <>
    <hr className="h-px my-8 border-0 bg-gray-700"></hr>
    <div className="text-black my-20 z-[-6] h-[30rem] flex flex-row bg-black">
      <Image
        className="relative h-[29rem] w-[29rem] right-[5.5rem] top-2 bottom-2"
        src={circle}
        alt="img"
      />
      <Image
        className="h-[19rem] w-[19rem] z-10 mt-[6rem] ml-[-27rem]"
        src={about}
        alt="img"
      />
      <div className="flex flex-col ml-[8rem] gap-[4rem] py-10">
        <div className="text-[1.8rem] font-extrabold text-gray-400">
          Welcome to Parkinsons Lab,
        </div>
        <div className="flex flex-row gap-[7rem]">
          <div className="flex flex-col gap-1 items-center justify-center ml-5">
            <div className="text-[2rem] font-extrabold text-white">Tested</div>
            <div className="text-[1.2rem] mt-2 flex items-center justify-center text-gray-400 font-bold">
              2.5 M+
            </div>
          </div>
          <div className="inline-block h-[7rem] w-0.5 self-stretch bg-neutral-100 bg-white/10"></div>
          <div>
            <div className="text-[2rem] font-extrabold text-white">
              Successfull Tests
            </div>
            <div className="text-[1.2rem] mt-2 flex items-center justify-center text-gray-400 font-bold">
              2 M+
            </div>
          </div>
          <div className="inline-block h-[7rem] w-0.5 self-stretch bg-neutral-100 bg-white/10"></div>
          <div>
            <div className="text-[2rem] font-extrabold text-white">
              Accuracy
            </div>
            <div className="text-[1.2rem] mt-2 flex items-center justify-center text-gray-400 font-bold">
              ≈ 80%
            </div>
          </div>
        </div>
        <div className="w-[80%] font-light text-gray-400">
          where we utilize innovative voice analysis technology for the early
          detection of Parkinson's Disease. Our mission is to provide a simple,
          non-invasive tool for early diagnosis, facilitating improved
          management and quality of life. Our team of experts is dedicated to
          advancing research and empowering individuals with valuable health
          insights. Thank you for choosing Parkinsons Lab – where your voice
          matters in the fight against Parkinson's.
        </div>
      </div>
    </div>
    <hr className="h-px my-8  border-0 bg-gray-700"></hr>
    </>
  );
}
