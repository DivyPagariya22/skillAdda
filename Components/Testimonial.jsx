import React from "react";
import Image from "next/image";
export default function Testimonial() {
  return (
    <div className='bg-gradient-to-r from-gray-700 via-gray-900 to-black'>
      <div className='text-center p-14'>
        <h1 className='text-4xl font-mono font-extrabold text-slate-200 underline decoration-purple-300 decoration-4 underline-offset-8 '>
          Testimonials
        </h1>
        <div className='text-center grid grid-cols-2 gap-10 mt-16 ml-16 mr-16'>
          <div className='border-2 rounded-tl-2xl shadow-lg shadow-cyan-500/50 mt-8'>
            <div className='flex p-6'>
              <div style={{ borderRadius: "40px", overflow: "hidden" }}>
                <Image
                  src='/avatarMale.jpg '
                  height='60px'
                  width='60px'
                  alt='Image'
                />
              </div>
              <h1 className=' pl-6 pt-8 font-mono font-bold text-xl text-zinc-50'>
                Divy Pagariya
              </h1>
            </div>
            <p className='text-left p-4 text-gray-300'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi rem
              quam alias, maiores nisi cum eveniet velit laudantium aliquid
              dolor, fugit nulla amet expedita nam doloribus hic? Eaque, neque
              corporis.
            </p>
          </div>
          <div className='border-2 rounded-tl-2xl shadow-lg shadow-cyan-500/50 mt-8'>
            <div className='flex p-6'>
              <div style={{ borderRadius: "40px", overflow: "hidden" }}>
                <Image
                  src='/avatarFemale.jpg '
                  height='60px'
                  width='60px'
                  alt='Image'
                />
              </div>
              <h1 className='pl-6 pt-8 font-mono font-bold text-xl text-zinc-50'>
                Yogita Sharma
              </h1>
            </div>
            <p className='text-left p-4 text-gray-300'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi rem
              quam alias, maiores nisi cum eveniet velit laudantium aliquid
              dolor, fugit nulla amet expedita nam doloribus hic? Eaque, neque
              corporis.
            </p>
          </div>
          <div className='border-2 rounded-tl-2xl shadow-lg shadow-cyan-500/50 mt-8'>
            <div className='flex p-6'>
              <div style={{ borderRadius: "40px", overflow: "hidden" }}>
                <Image
                  src='/avatarFemale.jpg '
                  height='60px'
                  width='60px'
                  alt='Image'
                />
              </div>
              <h1 className='pl-6 pt-8 font-mono font-bold text-xl text-zinc-50'>
                Vidisha Vyas
              </h1>
            </div>
            <p className='text-left p-4 text-gray-300'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi rem
              quam alias, maiores nisi cum eveniet velit laudantium aliquid
              dolor, fugit nulla amet expedita nam doloribus hic? Eaque, neque
              corporis.
            </p>
          </div>
          <div className='border-2 rounded-tl-2xl shadow-lg shadow-cyan-500/50 mt-8'>
            <div className='flex p-6'>
              <div style={{ borderRadius: "40px", overflow: "hidden" }}>
                <Image
                  src='/avatarMale.jpg '
                  height='60px'
                  width='60px'
                  alt='Image'
                />
              </div>
              <h1 className='pl-6 pt-8 font-mono font-bold text-xl text-zinc-50'>
                Priyanka Tiwari
              </h1>
            </div>
            <p className='text-left p-4 text-gray-300'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi rem
              quam alias, maiores nisi cum eveniet velit laudantium aliquid
              dolor, fugit nulla amet expedita nam doloribus hic? Eaque, neque
              corporis.
            </p>
          </div>
          <div className='border-2 rounded-tl-2xl shadow-lg shadow-cyan-500/50 mt-8'>
            <div className='flex p-6'>
              <div style={{ borderRadius: "40px", overflow: "hidden" }}>
                <Image
                  src='/avatarMale.jpg '
                  height='60px'
                  width='60px'
                  alt='Image'
                />
              </div>
              <h1 className='pl-6 pt-8 font-mono font-bold text-xl text-zinc-50'>
                Yashovardhan Jain
              </h1>
            </div>
            <p className='text-left p-4 text-gray-300'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi rem
              quam alias, maiores nisi cum eveniet velit laudantium aliquid
              dolor, fugit nulla amet expedita nam doloribus hic? Eaque, neque
              corporis.
            </p>
          </div>
          <div className='border-2 rounded-tl-2xl shadow-lg shadow-cyan-500/50 mt-8'>
            <div className='flex p-6'>
              <div style={{ borderRadius: "40px", overflow: "hidden" }}>
                <Image
                  src='/avatarMale.jpg '
                  height='60px'
                  width='60px'
                  alt='Image'
                />
              </div>
              <h1 className='pl-6 pt-8 font-mono font-bold text-xl text-zinc-50'>
                Dhruv Bhatia
              </h1>
            </div>
            <p className='text-left p-4 text-gray-300'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi rem
              quam alias, maiores nisi cum eveniet velit laudantium aliquid
              dolor, fugit nulla amet expedita nam doloribus hic? Eaque, neque
              corporis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
