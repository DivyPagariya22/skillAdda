import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";

export default function Features() {
  const [path, setPath] = useState("/f1.png");
  const [clicked, setClicked] = useState("f1");

  return (
    <div className='bg-gradient-to-l from-gray-700 via-gray-900 to-black h-screen'>
      <div className='text-center p-14'>
        <h1 className='text-4xl font-mono font-extrabold text-slate-200 underline decoration-purple-300 decoration-4 underline-offset-8'>
          Features
        </h1>
        <div className='flex p-8 justify-center mt-24'>
          <div className='w-2/4 relative rounded-tr-8xl overflow-auto'>
            <Image src={path} layout='fill' objectFit='cover' alt='Image' />
          </div>
          <div className='text-white ml-10 w-2/4 pt-4'>
            <ul className='text-right m-4'>
              <li
                onClick={() => {
                  setPath("/f1.png");
                  setClicked("f1");
                }}
                className={
                  clicked === "f1"
                    ? "h-24 m-2 pr-8 pt-2 border-l-8 border-x-blue-300 rounded-xl shadow shadow-cyan-500/50"
                    : "h-24 m-2 pr-8 pt-2 "
                }>
                <div>
                  <h1 className='text-3xl font-bold font-mono '>
                    Search Teachers
                  </h1>
                  <p className='text-xl italic p-2'>
                    Find Best Suited Teachers for Yourself
                  </p>
                </div>
              </li>

              <li
                onClick={() => {
                  setPath("/f2.png");
                  setClicked("f2");
                }}
                className={
                  clicked === "f2"
                    ? "h-24 m-2 pr-8 pt-2 border-l-8 border-x-blue-300 rounded-xl shadow shadow-cyan-500/50"
                    : "h-24 m-2 pr-8 pt-2 "
                }>
                <div>
                  <h1 className='text-3xl font-bold font-mono '>
                    Post Requirement
                  </h1>
                  <p className='text-xl italic p-2'>
                    Make Post on Whatever skill you wanna learn
                  </p>
                </div>
              </li>
              <li
                onClick={() => {
                  setPath("/f1.png");
                  setClicked("f3");
                }}
                className={
                  clicked === "f3"
                    ? "h-24 m-2 pr-8 pt-2 border-l-8 border-x-blue-300 rounded-xl shadow shadow-cyan-500/50"
                    : "h-24 m-2 pr-8 pt-2 "
                }>
                <div>
                  <h1 className='text-3xl font-bold font-mono '>
                    Assignment Help
                  </h1>
                  <p className='text-xl italic p-2'>
                    Find Peer to get help in assignment
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
