import React from "react";
import Ankit from "@/assets/Ankit-Yadav.jpg"
import Shubham from "@/assets/shubham.png"
import Neelesh from "@/assets/neelish.jpg"
import Image, { StaticImageData } from "next/image";
const Card = ({name, role,imageUrl} : {name:string, role:string, imageUrl:StaticImageData}) => {
  return (
    <div className="max-w-sm mx-auto flex gap-y-5 py-2 flex-col justify-center items-center    bg-black  ">
      <div className="relative w-48 h-48 rounded-full duration-700 shadow-lg hover:shadow-cyan-400 overflow-hidden">
        <Image
          className="w-48 h-48 object-cover"
          src={imageUrl}
          alt="Profile Image"
        />
      </div>
        <div className="text-center flex flex-col  tracking-wide ">
            <div className="text-2xl text-cyan-300"> {name}</div>
            <div className="text-lg text-slate-600"> {role} </div>
        </div>
    </div>
  );
};

const index = () => {
  return (
    <div className="overflow-x-hidden">
      <div className=" w-screen py-16">
        <div className="text-7xl   text-white font-mono text-center">
          Our Team
        </div>

        <div className="flex py-24">
            <Card name="Ankit Yadav" role="Frontend & Backend" imageUrl={Ankit}/>
            <Card name="Shubham Roy" role="ML & AI" imageUrl={Shubham}/>
            <Card name="Neelesh Saxena" role="Frontend & Integrations" imageUrl={Neelesh}/>
        </div>
      </div>
      <div className="h-[0.1rem] bg-slate-400"></div>
    </div>
  );
};

export default index;
