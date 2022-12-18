//import { Select } from "@mui/material";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "../utils/supabaseClient";
import Card from "./Card";
import Navbar from "./Navbar";
import { data_skill, lang } from "../utils/detailsData";
import Select from "react-select";

export default function Feed(props) {
  const [data, setData] = useState(props.list);
  const [showList, setShowList] = useState(props.list);
  const [selected_mem, setSelectedMem] = useState("all");
  //const [req_skill, setReqSkill] = useState([]);

  const options = [
    { value: "all", label: "All" },
    { value: "1", label: "Students" },
    { value: "0", label: "Teachers" },
  ];

  useEffect(() => {}, [selected_mem]);

  const handleQueryForMember = (option) => {
    setSelectedMem(option.value);
    if (option.value == "all") {
      setShowList(data);
    } else {
      let list = [];
      showList.map((item) => {
        if (item.role == option.value) {
          list.push(item);
        }
      });

      setShowList(list);
    }
  };

  const handleSkills = (options) => {
    // console.log(options);
    let skill = [];
    options.map((s, idx) => {
      skill.push(s.value);
    });

    let list = [];

    showList.map((item) => {
      let temp_skill = item.skills;
      let flag = 0;
      console.log(temp_skill);
      skill.map((i) => {
        if (temp_skill.includes(i)) {
          flag = 1;
        } else {
          flag = 0;
        }
      });

      if (flag) list.push(item);
    });
    if (list.length >= 1) setShowList(list);
    else setShowList(data);
  };

  const handleLanguages = (options) => {
    // console.log(options);
    let lang = [];
    options.map((s, idx) => {
      lang.push(s.value);
    });

    let list = [];

    showList.map((item) => {
      let temp_lang = item.languages;
      let flag = 0;
      console.log(temp_lang);
      lang.map((i) => {
        if (temp_lang.includes(i)) {
          flag = 1;
        } else {
          flag = 0;
        }
      });

      if (flag) list.push(item);
    });

    if (list.length >= 1) setShowList(list);
    else setShowList(data);
  };

  return (
    <div className='bg-gradient-to-r from-gray-100 to-gray-300'>
      <Navbar></Navbar>
      <div className='flex gap-10 ml-24 mt-4'>
        <div className='flex py-2 rounded-md p-1 mt-1 dark:hover:bg-gray-200'>
          <h1 className='text-center text-lg mr-4'>Members :</h1>
          <select
            value={selected_mem}
            onChange={(event) => handleQueryForMember(event.target)}>
            <option value='all'>All</option>
            <option value='0'>Students</option>
            <option value='1'>Teachers</option>
          </select>
        </div>

        <div className='flex py-2 rounded-md p-1 mt-1 dark:hover:bg-gray-200'>
          <h1 className='text-center text-lg mr-4'>Skills :</h1>
          <Select
            style={{ color: "#e5e7eb" }}
            isMulti
            name='colors'
            options={data_skill}
            className='basic-multi-select'
            classNamePrefix='select'
            onChange={handleSkills}
          />
        </div>

        <div className='flex py-2 rounded-md p-1 mt-1 dark:hover:bg-gray-200'>
          <h1 className='text-center text-lg mr-4'>Languages :</h1>
          <Select
            style={{ color: "#e5e7eb" }}
            isMulti
            name='colors'
            options={lang}
            className='basic-multi-select'
            classNamePrefix='select'
            onChange={handleLanguages}
          />
        </div>
      </div>

      {showList.map((item, index) => {
        return <Card info={item}></Card>;
      })}
    </div>
  );
}
