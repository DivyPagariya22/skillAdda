import React from "react";
import Need from "../Components/Need";
import { supabase } from "../utils/supabaseClient";

export async function getServerSideProps(context) {
  const { data, error } = await supabase.from("test").select();
  console.log(data);
  let list = [];
  data.map((item) => {
    let email = item.email;
    //let name, budget, description, skills, language, city, state;
    item.need.map((i) => {
      let { name, budget, description, skills, language, city, state } = i;
      let obj = {
        email,
        email,
        name: name,
        budget: budget,
        description: description,
        skills: skills,
        language: language,
        city: city,
        state: state,
      };
      list.push(obj);
    });
  });
  return {
    props: {
      list,
    },
  };
}

export default function RequirementsPage({ list }) {
  return <Need list={list}></Need>;
}
