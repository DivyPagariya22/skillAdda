import Image from "next/image";
import React from "react";
import Navbar from "../Components/Navbar";
import Profile from "../Components/Profile";
import { useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";

export default function ProfilePage() {
  const [curr_email, setCurr_Email] = useState("");
  const [details, setDetails] = useState({});
  useEffect(() => {
    async function getInitialSession() {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.log(error);
      } else {
        setCurr_Email(data.session?.user.email);
        console.log(data);
      }
    }
    getInitialSession();
    async function fetchData() {
      console.log(curr_email);
      const { data, error } = await supabase
        .from("users")
        .select()
        .match({ email: curr_email });
      if (error) {
        console.log(error);
      }
      console.log(data);
      setDetails(data);
    }
    if (curr_email !== "") fetchData();
  }, [curr_email]);

  return (
    <div className='relative'>
      <Profile details={details} requirement={true}></Profile>
    </div>
  );
}
