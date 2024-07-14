"use client";

import React, { useEffect, useState, useRef, FormEvent } from "react";
import Btn from "@/components/button"
import { useUserContext } from "@/context/user-context";
import { useRouter } from "next/navigation";
const mimeType = "audio/mpeg";
const Loader = ()=>{
  return <div role="status">
  <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
  </svg>
  <span class="sr-only">Loading...</span>
</div>
}
export default function TakingTest() {
  const {setFeatures,setDiagnosis} = useUserContext();
  const [show, setShow] = useState(0);
  const [permission, setPermission] = useState(false);
  const mediaRecorder = useRef(null);
  const [recordingStatus, setRecordingStatus] = useState("inactive");
  const [stream, setStream] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);
  const [audio, setAudio] = useState(null);
  const [file, setFile] = useState(null);
  const [reccordeddBob, setRecordedBlob] = useState(null);
  const router = useRouter();
  const [isLoading, setLoading] = useState(false); 
  const handleSubmit = async (event) => {
    event.preventDefault();
    if(!reccordeddBob) return;
    setLoading(true);
    let formData = new FormData();
    formData.append("files", reccordeddBob);
    let outcome = await fetch("http://localhost:5000/predict", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: formData,
    });
    let data = await outcome.json();

    const r1 = data.Jitter_DDP;
    const r2 = data.MDVP_PPQ;
    const r3 = data.MDVP_RAP;
    const r4 = data.MDVP_Jitter;
    const r5 = data.MDVP_Jitter12;
    const r6 = data.MDVP_Flo;
    const r7 = data.Fhi;
    const r8 = data.MDVP_Fo;
    const r9 = data.result;
    const features = {
      Jitter_DDP: r1,
      "MDVP_Fhi(Hz)": `${r2}`,
      "MDVP_Flo(Hz)": `${r3}`,
      "MDVP_Fo(Hz)": `${r4}`,
      "MDVP_Jitter(%)": `${r5}`,
      "MDVP_Jitter(Abs)": `${r6}`,
      "MDVP_PPQ":`00001201.2`,
      "MDVP_RAP":`000003931.2`,
    }
    setDiagnosis(Number(r9)?"Positive":"Negative");
    setFeatures(features);
    setLoading(false);
    router.push("/result");
  };

  const startRecording = async () => {
    setAudio(null);
    setShow(1);
    if ("MediaRecorder" in window) {
      try {
        const streamData = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false,
        });
        setPermission(true);
        setStream(streamData);

        const media = new MediaRecorder(streamData, { type: mimeType });
        mediaRecorder.current = media;
        mediaRecorder.current.start();
        let localAudioChunks = [];
        mediaRecorder.current.ondataavailable = (event) => {
          if (typeof event.data === "undefined") return;
          if (event.data.size === 0) return;
          localAudioChunks.push(event.data);
        };
        setAudioChunks(localAudioChunks);
        setRecordingStatus("recording");
      } catch (err) {
        alert("Give permission to microphone from settings", err.message);
      }
    } else {
      alert("The MediaRecorder API is not supported in your browser.");
    }
  };

  const stopRecording = () => {
    setRecordingStatus("inactive");
    mediaRecorder.current.stop();
    mediaRecorder.current.onstop = () => {
      setShow(0);
      const audioBlob = new Blob(audioChunks, { type: mimeType });
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudio(audioUrl);
      setAudioChunks([]);
      setRecordedBlob(audioBlob);
      setFile(audioUrl);
    };
  };

  return (
    <>
      <div className={`${isLoading?"overflow-hidden":""} flex justify-around bg-black items-center min-h-[89vh] flex-row`}>
        <div className="w-full md:w-[40%] relative mb-14">
          <h2 className="text-center border-2 border-[#03A9F4] text-[#03A9F4] text-2xl py-[1rem] mt-[1.5rem] mb-[3rem] font-medium rounded-full mx-auto w-[80%]">
            <i className="fa-solid fa-circle-exclamation text-[#F5CC39]"></i>{" "}
            Instructions
          </h2>
          <div className=" text-[#6a6e70] flex flex-col gap-[3rem]">
            <p className="px-[5rem] text-xl">
              <span>1. </span> While recording the audio keep the mic at about 8
              cm away from your mouth.
            </p>
            <p className="px-[5rem] text-xl">
              <span>2. </span> Pronounce the vowel 'O' or 'aa' using a
              single breath for 6 to 10 seconds duration while keeping
              the intensity as stable as possible.
            </p>
            <p className="px-[5rem] text-xl">
              <span>3. </span> To get best accurate results take the test best
              of three.
            </p>
          </div>
        </div>
        <div>
        <div className="w-full md:w-[500px] h-[400px] border-2 border-[#03A9F4] rounded-[40px] relative flex flex-col items-center">
          <div className="w-3/4 h-[46%] flex pl-[100px]">
            {show ? <img src="https://i.gifer.com/BLkE.gif" alt="" className="h-full w-full -ml-[3rem]" /> : null}
          </div>
          <div className="flex justify-center items-center w-[75%] min-w-[200px] mt-8">
            {audio ? (
              <div key={audio} className="audio-style">
                <div className="container-audio">
                  <audio className="" controls loop autoPlay>
                    <source src={audio} type="audio/webm" />
                    Your browser does not support the audio tag.
                  </audio>
                </div>
              </div>
            ) : (
              <div key={null} className="audio-style">
                <div className="container-audio">
                  <audio controls loop autoPlay>
                    <source src={audio} type="audio/webm" />
                    Your browser does not support the audio tag.
                  </audio>
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-between items-center w-[75%] min-w-[200px] mt-8">
            <div
              className="cursor-pointer bg-[#033ff4d5] text-white font-poppins text-lg px-4 py-2 rounded-md"
              onClick={startRecording}
            >
              <i className="fa-solid fa-play text-red-500 mr-2"></i> Start
              Recording
            </div>
            <div
              className="cursor-pointer bg-[#033ff4d5] text-white font-poppins text-lg px-4 py-2 rounded-md"
              onClick={stopRecording}
            >
              <i className="fa-solid fa-pause text-green-500 mr-2"></i> Pause
              Recording
            </div>
          </div>
        </div>
       <div className="ml-[6rem]" onClick={handleSubmit} > <Btn data={isLoading? <Loader/> :"Get Result"} path={""}/></div>
      </div>

        {/* <Link
        to="/Result"
        className="fixed opacity-0"
        id="takeToResult"
        >
        Result
        </Link> */}
      </div>
      <div className="h-[0.1rem] bg-slate-400"></div>

    </>
  );
}
