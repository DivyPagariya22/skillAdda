import Link from "next/link";
import React from "react";
import { data, lang } from "../utils/detailsData";
import { supabase } from "../utils/supabaseClient";
import Select from "react-select";
import { useState } from "react";

export default function Requirement(props) {
  const [skills, setSkills] = useState([]);
  const [language, setLanguage] = useState([]);
  const [price, setPrice] = useState(0);
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [bio, setBio] = useState("");

  const handleSkills = (options) => {
    // console.log(options);
    let skill = [];
    options.map((s, idx) => {
      skill.push(s.value);
    });
    setSkills(skill);
  };
  const handleLang = (options) => {
    //console.log(options);
    let language = [];
    options.map((s, idx) => {
      language.push(s.value);
    });
    setLanguage(language);
  };

  const handleDetails = async (e) => {
    e.preventDefault();
    let list = [];
    const obj = {
      name: props.item.name,
      budget: price,
      description: bio,
      skills: skills,
      language: language,
      city: city,
      state: state,
    };

    const { data } = await supabase
      .from("test")
      .select("need")
      .match({ email: props.item.email });

    data.map((i) => {
      i.need.map((item) => {
        list.push(item);
      });
    });
    list.push(obj);
    // console.log(list);

    console.log(data);

    const { error } = await supabase
      .from("test")
      .upsert({ need: list, email: props.item.email })
      .eq("email", props.item.email);
    if (error) {
      console.log(error);
      alert("Cannot Save data");
    } else {
      alert("Successfully saved data!!");
    }
  };

  return (
    <div>
      <div className='bg-grey-lighter min-h-screen flex flex-col'>
        <div className='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2'>
          <div className='bg-white px-6 py-8 rounded shadow-md text-black w-full'>
            <h1 className='mb-8 text-3xl text-center'>
              Enter Your Requirements
            </h1>
            <div className='py-2'>
              <label className='py-2 pl-4'>Skills : </label>
              <div className='py-2 rounded-md p-1 '>
                <Select
                  style={{ color: "#e5e7eb" }}
                  isMulti
                  name='colors'
                  options={data}
                  className='basic-multi-select'
                  classNamePrefix='select'
                  onChange={handleSkills}
                />
              </div>
              <div className='py-2'>
                <label className='py-2 pl-4'>Languages : </label>
                <div className='py-2 rounded-md p-1'>
                  <Select
                    style={{ color: "#e5e7eb" }}
                    isMulti
                    name='colors'
                    options={lang}
                    className='basic-multi-select'
                    classNamePrefix='select'
                    onChange={handleLang}
                  />
                </div>
              </div>
              <div className='flex justify-between mb-4 mt-4'>
                <label className='py-2  pl-4'>Budget: </label>
                <input
                  className='text-sm py-2 border-b border-gray-700 focus:outline-none focus:border-indigo-500 rounded-md bg-gray-100 px-3'
                  type='number'
                  placeholder='Rs. X'
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}></input>
              </div>
              <div className='flex justify-between mb-4 mt-4'>
                <label className='py-2 pl-4'>State: </label>
                <input
                  className='text-sm  py-2 border-b border-gray-700 focus:outline-none focus:border-indigo-500 rounded-md bg-gray-100 px-3'
                  type='name'
                  placeholder='Rajasthan'
                  value={city}
                  onChange={(e) => setCity(e.target.value)}></input>
              </div>
              <div className='flex justify-between mb-4 mt-4'>
                <label className='py-2 pl-4'>City: </label>
                <input
                  className='text-sm  py-2 border-b border-gray-700 focus:outline-none focus:border-indigo-500 rounded-md bg-gray-100 px-3'
                  type='name'
                  placeholder='Chittorgarh'
                  value={state}
                  onChange={(e) => setState(e.target.value)}></input>
              </div>
              <div className='flex  mb-4 mt-4'>
                <label className='py-2  pl-4'>Description: </label>
                <textarea
                  className='p-3 mt-2 border-2 ml-8 rounded-md bg-gray-100'
                  cols='50'
                  rows='4'
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}></textarea>
              </div>
              <div className='text-right pt-2 mt-4'>
                <button
                  onClick={handleDetails}
                  className='inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out '>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/*

git commit -m "commit message"                                     // commit your changes
git remote add origin https://github.com/username/repo-name.git    // add remote repository URL which contains the required details
git pull origin master                                             // always pull from remote before pushing
git push -u origin master 

*/
