import React from "react";

export default function About() {
  return (
    <div className='h-screen bg-gradient-to-r from-gray-700 via-gray-900 to-black'>
      <div className='text-center p-14'>
        <h1 className='text-4xl font-mono font-extrabold text-slate-200 underline decoration-purple-300 decoration-4 underline-offset-8'>
          About us
        </h1>
        <div className='flex justify-center items-center p-8'>
          <div className='w-1/2 mr-4 mt-16 text-center px-4 grid grid-cols-2 border-r-2 border-zinc-400 '>
            <div className='mb-16'>
              <h1 className='font-bold font-sans text-3xl text-white animate-bounce'>
                100+
              </h1>
              <div
                className='font-semibold font-serif text-2xl
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-blue-100 via-blue-500 to-blue-700
            animate-text
            '>
                Subjects
              </div>
            </div>
            <div className='mb-16'>
              <h1 className='font-bold font-sans text-3xl text-white animate-bounce'>
                100+
              </h1>
              <div
                className='font-semibold font-serif text-2xl
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-blue-100 via-blue-500 to-blue-700
            animate-text
            '>
                Teachers
              </div>
            </div>
            <div className='mt-16'>
              <h1 className='font-bold font-sans text-3xl text-white animate-bounce'>
                10+
              </h1>
              <div
                className='font-semibold font-serif text-2xl
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-blue-100 via-blue-500 to-blue-700
            animate-text
            '>
                Languages
              </div>
            </div>
            <div className='mt-16'>
              <h1 className='font-bold font-sans text-3xl text-white animate-bounce'>
                1000+
              </h1>
              <div
                className='font-semibold font-serif text-2xl
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-blue-100 via-blue-500 to-blue-700
            animate-text
            '>
                Skills
              </div>
            </div>
          </div>
          <div className=' w-1/2 ml-4 mt-8 text-white px-10 text-xl'>
            <p className='mt-16 mb-16 font-mono font-semibold text-left'>
              SkillAdda is a free website, trusted by thousands of students and
              teachers, all over the world.SkillAdda is a website that helps
              teachers connect with students who are interested in learning from
              them. The website allows teachers to create profiles and students
              to search for teachers by subject, location, and other criteria.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
