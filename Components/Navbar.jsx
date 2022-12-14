import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo-major.jpg";
import { useRouter } from "next/router";
import { supabase } from "../utils/supabaseClient";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [session, setSession] = useState();
  useEffect(() => {
    async function getInitialSession() {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.log(error);
      } else {
        setSession(data);
      }
    }
    getInitialSession();
  }, [session]);
  const router = useRouter();
  const [navbar, setNavbar] = useState(false);
  const notActive = "text-white  transition duration-50 md:hover:scale-125";
  const active = "text-green-400 transition duration-50 scale-125";
  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      alert("Error signing out");
    }
    router.push("/");
  };
  return (
    <nav className='w-full bg-gradient-to-r from-gray-700 via-gray-900 to-black shadow p-2'>
      <div className='justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-4'>
        <div>
          <div className='flex items-center justify-between py-3 md:py-5 md:block'>
            <a href='#'>
              <h2 className='text-2xl text-white font-bold'>NEXT JS</h2>
            </a>
            <div className='md:hidden'>
              <button
                className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'
                onClick={() => setNavbar(!navbar)}>
                {navbar ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-6 h-6 text-white'
                    viewBox='0 0 20 20'
                    fill='currentColor'>
                    <path
                      fillRule='evenodd'
                      d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-6 h-6 text-white'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={2}>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}>
            <ul className='items-center justify-center text-lg gap-2 space-y-8 md:flex md:space-x-6 md:space-y-0 font-mono'>
              {session && session.session ? (
                <li className={router.pathname == "/feed" ? active : notActive}>
                  <Link href='/feed'>
                    <a>Feed</a>
                  </Link>
                </li>
              ) : (
                <li className={router.pathname == "/" ? active : notActive}>
                  <Link href='/'>
                    <a>Home</a>
                  </Link>
                </li>
              )}

              <li
                className={router.pathname == "/teachers" ? active : notActive}>
                <Link href='/teachers'>
                  <a>Teachers</a>
                </Link>
              </li>
              <li
                className={
                  router.pathname == "/requirements" ? active : notActive
                }>
                <Link href='/requirements'>
                  <a>Requirements</a>
                </Link>
              </li>
              {session && session.session ? (
                <li
                  className={
                    router.pathname == "/profile" ? active : notActive
                  }>
                  <Link href='/profile'>
                    <a>Profile</a>
                  </Link>
                </li>
              ) : (
                <li
                  className={router.pathname == "/login" ? active : notActive}>
                  <Link href='/login'>
                    <a>LogIn</a>
                  </Link>
                </li>
              )}
              {session && session.session && (
                <li className='cursor-pointer text-white  transition duration-50 md:hover:scale-125'>
                  <span onClick={handleSignOut}>SignOut</span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
