import React from 'react'
import Image from 'next/image'
import Oval1 from "@/assets/Oval1.png"
import Oval2 from "@/assets/Oval2.png"
import Doctor from "@/assets/doctor.png"
import Play from "@/assets/play.png"
import Btn from "@/components/button"
import Header from "@/components/header"
const index = () => {
  return (
    <div className="bg-black overflow-x-hidden overflow-y-hidden relative text-white min-h-screen w-screen">
       <Header/>
      <Image
            src={Oval1}
            width={1100}
            height={20}
            alt="Background"
            className='absolute right-0 -top-20'
        />
      <Image
            src={Oval2}
            width={600}
            height={20}
            alt="Background"
            className='absolute right-0 top-0'
        />
        <div className="h-[480px] w-[480px] flex justify-center items-center absolute right-64 top-44">
            <Image
                    src={Doctor}
                    width={500}
                    height={20}
                    alt="Background"
                    className='absolute'
                />
            <Image
                    src={Play}
                    width={100}
                    height={20}
                    alt="Background"
                    className='z-50 -ml-5'
                />
        </div>
            <div className=" mt-16 text-7xl leading-tight  px-16 w-1/2">
                Revolutionizing <span className="text-cyan-400"> Parkinson's detection </span> with the power of <span className="text-6xl ml-3 text-cyan-400"> AI! </span>
            </div>
            <div className="w-1/3 mt-10 text-white leading-10 text-3xl pl-16">
                Your health and wellbeing is important for us.
            </div>
            <Btn data={"Take Test"} path={"form"}/>
    </div>
  )
}

export default index
