import React from "react";
import { useRouter } from "next/router";
import { supabase } from "../utils/supabaseClient";
import Profile from "../Components/Profile";

export async function getServerSideProps({ query }) {
  const email = query.email;
  const { data, error } = await supabase
    .from("users")
    .select()
    .match({ email: email });
  // console.log(data);
  return {
    props: {
      data,
    },
  };
}

export default function ({ data }) {
  const router = useRouter();

  return (
    <div>
      <Profile details={data}></Profile>
    </div>
  );
}
