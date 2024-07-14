"use client";
import { useRouter } from "next/navigation";
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";

export default function Form() {
  const router = useRouter();
  const initialFormData = { name: "", age: "", gender: "" };
  const [formData, setFormData] = useState(initialFormData);
  // const [flgName, setFlgName] = useState(false);
  // const [flgAge, setFlgAge] = useState(false);
  // const [flgGender, setFlgGender] = useState(false);
  // console.log(formData);

  const handleChange = (e:React.FormEvent<HTMLInputElement>) => {
    const { name, value }  = e.currentTarget;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleClick = () => {
    // if(formData.name!=="") setFlgName(true)
    // if(formData.age!=="") setFlgAge(true)
    // if(formData.gender!=="") setFlgGender(true)
    //   console.log(flgName,flgAge,flgGender);
      // if(flgName===true && flgAge===true && flgGender===true){
        router.push("/test")
        // setFlgName(false)
        // setFlgAge(false)
        // setFlgGender(false)
      //  }
  };

  return (
    <form className="max-w-[55%]  pb-[4rem] mx-auto bg-black mt-[4rem]">
      <div className="mb-[2.5rem] text-center">
        <div className="text-[2.6rem] font-extrabold mb-[1rem] text-[#03A9F4]">
          Details
        </div>
        <div className={`text-sm text-[red] mb-[2px] ${!true ? "" : "hidden"}`}>*Name is required</div>
        <div className={`text-sm text-[red] mb-[2px] ${!true ? "" : "hidden"}`}>*Age is required</div>
        <div className={`text-sm text-[red] mb-[2px] ${!true ? "" : "hidden"}`}>*Gender is required</div>
      </div>
      <div className="relative z-0 w-full mb-[4rem] group">
        <input
          type="text"
          name="name"
          id="name"
          className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 appearance-none  border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0  peer"
          placeholder=" "
          required
          onChange={handleChange}
        />
        <label
          htmlFor="name"
          className="peer-focus:font-medium absolute text-lg  text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Name
        </label>
      </div>
      <div className="relative z-0 w-full mb-[4rem] group">
        <input
          type="number"
          name="age"
          id="age"
          className="block py-2.5 px-0 w-full text-xl  bg-transparent border-0 border-b-2  appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0  peer"
          placeholder=" "
          required
          onChange={handleChange}
        />
        <label
          htmlFor="age"
          className="peer-focus:font-medium absolute text-lg  text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Age
        </label>
      </div>
      <fieldset>
        <div className="text-lg text-gray-400 mb-[2rem]">Gender</div>
        <div className="flex items-center mb-[1.5rem]">
          <input
            id="gender-male"
            type="radio"
            name="gender"
            value="male"
            className="w-4 h-4  bg-gray-700 border-gray-600"
            onChange={handleChange}
          />
          <label
            htmlFor="gender-male"
            className="block ms-2 text-md font-medium text-gray-200"
          >
            Male
          </label>
        </div>
        <div className="flex items-center mb-[1.5rem]">
          <input
            id="gender-female"
            type="radio"
            name="gender"
            value="female"
            className="w-4 h-4 bg-gray-700 border-gray-600"
            onChange={handleChange}
          />
          <label
            htmlFor="gender-female"
            className="block ms-2 text-md font-medium text-gray-200"
          >
            Female
          </label>
        </div>
        <div className="flex items-center mb-[1.5rem]">
          <input
            id="gender-others"
            type="radio"
            name="gender"
            value="others"
            className="w-4 h-4  bg-gray-700 border-gray-600"
            onChange={handleChange}
          />
          <label
            htmlFor="gender-others"
            className="block ms-2 text-md font-medium text-gray-200"
          >
            Others
          </label>
        </div>
      </fieldset>
      <button
        type="button"
        onClick={handleClick}
        className="text-white   focus:ring-4 focus:outline-none mt-[2rem] ring-blue-300 font-medium rounded-lg text-md w-[20%] px-5 py-2.5 text-center bg-[#03A9F4] hover:bg-blue-700 focus:ring-blue-800"
      >
        Take Test
      </button>
    </form>
  );
}
