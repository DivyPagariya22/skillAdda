import Image from "next/image";
import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Requirement from "./Requirement";

export default function Profile(props) {
  const active = "flex m-16";
  const notActive = "flex m-16 opacity-25";
  const [container, setContainer] = useState(active);
  const [close, setClose] = useState(false);
  const handleRequirement = () => {
    setContainer(notActive);
    setClose(true);
  };
  const handleClose = () => {
    setContainer(active);
    setClose(false);
  };
  return (
    <div className='relative'>
      <Navbar isLogin={true}></Navbar>
      {close === true && (
        <button
          className='absolute right-1/3 top-32 text-lg border-2 border-stone-700 pt-2 pb-2 pr-2 pl-2 z-30'
          onClick={handleClose}>
          Close
        </button>
      )}
      {container === notActive && (
        <div className='z-20 absolute top-32 left-16 right-16'>
          <Requirement item={props.details[0]}></Requirement>
        </div>
      )}
      <div className={container}>
        <div className='w-2/6'>
          <Image src='/avatarMale.jpg' height='300' width='300'></Image>
          <div>
            <div className='flex mt-3 mb-6'>
              <span className='w-1/5 text-sm font-light text-neutral-600'>
                Charges
              </span>
              <span className='w-4/5 border-b-2 -ml-9'></span>
            </div>
            <h1 className='font-semibold tracking-wide'>
              {"Charge: " + props.details[0]?.charge}
            </h1>
            <h1 className='font-semibold tracking-wide'>
              Rajasthan, Chittorgarh
            </h1>
          </div>
          <div className='flex mt-4 mb-6'>
            <span className='w-1/5 text-sm font-light text-neutral-600'>
              Languages
            </span>
            <span className='w-4/5 border-b-2 -ml-6'></span>
          </div>
          <div className='mt-6'>
            {props.details[0]?.languages.map((i, idx) => {
              return (
                <span className='bg-spancolor rounded-2xl text-white p-2 ml-3'>
                  {i}
                </span>
              );
            })}
          </div>
        </div>
        <div className='w-4/6'>
          <div>
            <div className='flex justify-between'>
              <h1 className='text-4xl font-bold tracking-wide mb-3'>
                {props.details[0]?.name}
              </h1>
              {props.details[0]?.role === 1 ? (
                <span className='text-white bg-gradient-to-b from-sky-400 to-sky-200 p-3 rounded-xl'>
                  Teacher
                </span>
              ) : (
                <span className='text-white bg-gradient-to-b from-sky-400 to-sky-200 p-3 rounded-xl'>
                  Student
                </span>
              )}
            </div>

            <h1 className='text-lg mb-5'>Rating</h1>
            {props.details[0]?.role === 1 && (
              <h1 className='text-lg '>Total Students Taught : 32 </h1>
            )}
            {props.requirement && (
              <button onClick={handleRequirement} className='mt-2 text-red-500'>
                Post a Requirement
              </button>
            )}
          </div>
          <div className='flex mt-8 mb-6'>
            <span className='w-1/5 text-sm font-light text-neutral-600'>
              About Me
            </span>
            <span className='w-4/5 border-b-2 -ml-32'></span>
          </div>
          <div className='mt-6'>
            <h1 className='tracking-wide text-lg mb-4'>
              Contact No : {props.details[0]?.mobile}
            </h1>
            <h1 className='tracking-wide text-lg'>Bio :</h1>
            <h1 className='italic tracking-wide'>{props.details[0]?.bio}</h1>
          </div>
          <div className='mt-8'>
            {props.details[0]?.skills.map((i, idx) => {
              return (
                <span className='bg-skillColor rounded-2xl text-white p-2 m-2'>
                  {i}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
