"use client";
import React, { useRef } from "react";
import { useUserContext } from "@/context/user-context";
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
const data = {
  name: "Ankit",
  gender: "male",
  diagnosis: "Negative",
  age: 10,
  features: {
    j1: "000.1",
    j2: "1300.1",
    j3: "030.1",
    j4: "020.1",
  },
};

const ReportCard = () => {
    const element = useRef(null);
  const { name, age, gender, diagnosis, features } = useUserContext();
  const downloadPDF = async () => {
    if(!(element.current)) return;
    const canvas = await html2canvas(element.current);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('Parkinsons_Report_Card.pdf');
  };

  return (
    <div className="bg-black">
      <div
      ref={element}
        className="max-w-3xl letter mx-auto mt-20 p-6  border border-gray-300 rounded-lg shadow-lg"
      >
        <h1 className="text-3xl font-bold  text-center mb-3"> Report Card</h1>
        <div className="h-[0.1rem] bg-slate-400 mb-6"></div>

        <div className="mb-4 font-bold flex justify-between text-2xl">
          <div className="flex flex-col gap-y-4">
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Gender: {gender}</p>
          </div>
          <div className="">
            <p className="text-xl text-right font-normal underline">
              Diagnosis
            </p>
            <div className="text-4xl">
              <span
                className={`${
                  diagnosis == "Negative" ? "text-green-500" : "text-red-500"
                } font-bold`}
              >
                {" "}
                {diagnosis}{" "}
              </span>
            </div>
          </div>
        </div>
        <h2 className="text-2xl font-semibold mb-4 mt-10">Voice Features</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2 text-left">Feature</th>
              <th className="border border-gray-300 p-2 text-left">Value</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(features).map(([feature, value]) => {
              return (
                <tr key={feature}>
                  <td className="border border-gray-300 p-2">{feature}</td>
                  <td className="border border-gray-300 p-2">{value}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
        <div className="text-center mt-2">
          <button
            type="button"
            onClick={downloadPDF}
            className="ml-[4rem] mt-6 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-xl px-6 py-3 text-center me-2 mb-2"
          >
            Download Report 
          </button>
        </div>
      <div className="pb-14 bg-black"></div>
      <div className="h-[0.1rem] bg-slate-400"></div>

    </div>
  );
};

export default ReportCard;
