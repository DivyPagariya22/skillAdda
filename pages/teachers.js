import React from "react";
import Feed from "../Components/Feed";
import { supabase } from "../utils/supabaseClient";

export async function getServerSideProps(context) {
  const { data, error } = await supabase
    .from("users")
    .select()
    .match({ role: 1 });
  // console.log(data);
  return {
    props: {
      data,
    },
  };
}

export default function teachers({ data }) {
  return (
    <div>
      <Feed list={data}></Feed>
    </div>
  );
}
