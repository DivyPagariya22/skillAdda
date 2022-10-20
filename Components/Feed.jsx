import Link from "next/link";
import Router, { useRouter } from "next/router";
import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";
import Card from "./Card";
import Navbar from "./Navbar";

export default function Feed(props) {
  const [data, setData] = useState(props.list);

  return (
    <div className='bg-gradient-to-r from-gray-100 to-gray-300'>
      <Navbar></Navbar>
      {data.map((item, index) => {
        return <Card info={item}></Card>;
      })}
    </div>
  );
}
