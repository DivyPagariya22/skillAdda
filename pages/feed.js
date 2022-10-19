import React from "react";
import Feed from "../Components/Feed";
import { supabase } from "../utils/supabaseClient";

export async function getServerSideProps(context) {
  const { data, error } = await supabase.from("users").select();
  // console.log(data);
  return {
    props: {
      data,
    },
  };
}

export default function feed({ data }) {
  return (
    <div>
      <Feed list={data}></Feed>
    </div>
  );
}
