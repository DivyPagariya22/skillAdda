import React, { useState } from "react";
import Link from "next/link";
import { supabase } from "../utils/supabaseClient.js";
import Router from "next/router";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) alert(error.message);
    else {
      Router.push({
        pathname: "/details",
        query: { email },
      });
    }
  };

  return (
    <div className='bg-grey-lighter min-h-screen flex flex-col'>
      <div className='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2'>
        <div className='bg-white px-6 py-8 rounded shadow-md text-black w-full'>
          <h1 className='mb-8 text-3xl text-center'>Sign up</h1>
          <input
            placeholder='Email'
            type='email'
            className='block border border-grey-light w-full p-3 rounded mb-4'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder='Password'
            type='password'
            className='block border border-grey-light w-full p-3 rounded mb-4'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type='submit'
            onClick={handleSignup}
            className='w-full text-center py-3 rounded bg-green-400 text-black hover:bg-green-dark focus:outline-none my-1'>
            Create Account
          </button>

          <div className='text-center text-sm text-grey-dark mt-4'>
            By signing up, you agree to the
            <a
              className='no-underline border-b border-grey-dark text-grey-dark'
              href='#'>
              Terms of Service
            </a>{" "}
            and
            <a
              className='no-underline border-b border-grey-dark text-grey-dark'
              href='#'>
              Privacy Policy
            </a>
          </div>
        </div>

        <div className='text-grey-dark mt-6'>
          Already have an account?
          <Link href='/login' className=''>
            <a className='text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out'>
              Login
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
