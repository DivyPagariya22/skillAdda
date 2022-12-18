import Select from "react-select";
import React, { useState } from "react";
import { data_skill, lang, state } from "../utils/detailsData";
import Navbar from "./Navbar";
import NeedCard from "./NeedCard";

export default function Need(props) {
  const [data, setData] = useState(props.list);
  const [showData, setShowData] = useState(props.list);

  const handleSkills = (options) => {
    // console.log(options);
    let skill = [];
    options.map((s, idx) => {
      skill.push(s.value);
    });

    let list = [];

    showData.map((item) => {
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
    if (list.length >= 1) setShowData(list);
    else setShowData(data);
  };

  const handleLanguages = (options) => {
    // console.log(options);
    let lang = [];
    options.map((s, idx) => {
      lang.push(s.value);
    });

    let list = [];

    showData.map((item) => {
      let temp_lang = item.language;
      let flag = 0;
      //console.log(temp_lang);
      lang.map((i) => {
        if (temp_lang.includes(i)) {
          flag = 1;
        } else {
          flag = 0;
        }
      });

      if (flag) list.push(item);
    });

    if (list.length >= 1) setShowData(list);
    else setShowData(data);
  };

  const handleState = (options) => {
    let state = [];
    options.map((s, idx) => {
      state.push(s.value);
    });

    let list = [];

    showData.map((item) => {
      let temp_state = item.state;
      let flag = 0;
      console.log(temp_state);
      if (state.includes(temp_state)) {
        flag = 1;
      }

      if (flag) list.push(item);
    });

    if (list.length >= 1) setShowData(list);
    else setShowData(data);
  };

  return (
    <div className='bg-gradient-to-r from-gray-100 to-gray-300'>
      <Navbar></Navbar>

      <div className='flex gap-10 ml-24 mt-4'>
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
            style={{ color: "#e5e7eb", width: "max-content" }}
            isMulti
            name='colors'
            options={lang}
            className='basic-multi-select'
            classNamePrefix='select'
            onChange={handleLanguages}
          />
        </div>

        <div className='flex py-2 rounded-md p-1 mt-1 dark:hover:bg-gray-200'>
          <h1 className='text-center text-lg mr-4'>State :</h1>
          <Select
            style={{ color: "#e5e7eb", width: "auto" }}
            isMulti
            name='colors'
            options={state}
            className='basic-multi-select'
            classNamePrefix='select'
            onChange={handleState}
          />
        </div>
      </div>

      {showData.map((item, index) => {
        return <NeedCard info={item}></NeedCard>;
      })}
    </div>
  );
}
