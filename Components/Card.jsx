import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

export default function (props) {
  const router = useRouter();
  const handleClick = (email) => {
    router.push({
      pathname: "/otheracc",
      query: { email: props.info.email },
    });
  };
  return (
    <div>
      {console.log(props.info)}
      <div className='bg-cardcolor ml-24 mr-24 border-2 mt-8 mb-8 rounded-3xl hover:shadow-xl shadow-cyan-500/50 relative'>
        {props.info.role === 1 ? (
          <span className='absolute top-3 right-16 text-white bg-gradient-to-b from-sky-400 to-sky-200 p-3 rounded-xl'>
            Teacher
          </span>
        ) : (
          <span className='absolute top-3 right-16 text-white bg-gradient-to-b from-sky-400 to-sky-200 p-3 rounded-xl'>
            Student
          </span>
        )}

        <span
          onClick={handleClick}
          className='cursor-pointer absolute bottom-5 right-16 text-white bg-gradient-to-b from-sky-400 to-sky-200 p-3 rounded-xl'>
          View Profile
        </span>
        <div className='flex pt-6 pb-6 m-4 pl-6 pr-6 '>
          <div className='w-1/5 border-r-2 border-gray-400'>
            <div className='flex p-4 mr-4'>
              <Image src='/avatarMale.jpg' height='100' width='100'></Image>
              <h1 className='font-mono font-extrabold pl-4'>
                {props.info.name}
              </h1>
            </div>
            <h1 className='font-poppins font-bold pl-4 pt-4'>
              {"Contact: " + props.info.mobile}
            </h1>
            <h1 className='font-mono pl-4 pt-4'>
              {"Charge: " + props.info.charge}
            </h1>
          </div>
          <div className='pl-24 py-4 w-4/5 ml-4'>
            <div className='flex'>
              <h1 className='pr-2 subpixel-antialiased font-sans font-bold text-lg tracking-wide  pt-3'>
                Bio:{" "}
              </h1>
              <p className='text-neutral-800 italic  pt-3'>{props.info.bio}</p>
            </div>

            <h1 className='subpixel-antialiased font-sans font-bold pt-4 text-lg pb-4 tracking-wide'>
              Skills:
            </h1>
            {props.info.skills.map((i, idx) => {
              return (
                <span className='bg-skillColor rounded-2xl text-white p-2 m-2'>
                  {i}
                </span>
              );
            })}
            <h1 className='subpixel-antialiased font-sans font-bold pt-4 text-lg pb-4 tracking-wide'>
              Language:
            </h1>
            {props.info.languages.map((i, idx) => {
              return (
                <span className='bg-spancolor rounded-2xl text-white p-2 m-2'>
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
