import Image from "next/image.js";
import React from "react";
import { useState } from "react";
import Select from "react-select";
import { data_skill, lang } from "../utils/detailsData.js";
import { useRouter } from "next/router";
import { supabase } from "../utils/supabaseClient.js";
import Router from "next/router";

export default function DetailsPage() {
  const router = useRouter();
  const {
    query: { email },
  } = router;
  const props = { email };

  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [price, setPrice] = useState(0);
  const [contact, setContact] = useState("");

  const [skills, setSkills] = useState([]);
  const [language, setLanguage] = useState([]);

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
    const num = contact.toString();
    if (name !== "" && contact !== "") {
      const { error } = await supabase.from("users").insert({
        email: props.email,
        name: name,
        mobile: num,
        charge: price,
        bio: bio,
        skills: skills,
        languages: language,
      });
      if (error) {
        console.log(error);
        alert("Cannot Save data");
      } else {
        alert("Successfully saved data!!");
        Router.push({
          pathname: "/feed",
        });
      }
    } else {
      alert("Please enter name and contact no.");
    }
  };

  return (
    <div className='grid h-screen place-items-center'>
      <div className='z-10'>
        <Image
          alt='image'
          src='/detail.jpg'
          layout='fill'
          objectFit='cover'
          quality={100}
        />
      </div>
      <div className='font-mono  shadow shadow-cyan-500/50  z-20 bg-white text-black  w-3/12  p-8 border-2 rounded-2xl border-zinc-300'>
        <h1 className='pl-4 font-mono font-bold'>Enter Your Details :</h1>

        <div className='flex justify-between mb-4 mt-4'>
          <label className='py-2 pl-4'>Name: </label>
          <input
            className='text-sm  py-2 border-b border-gray-700 focus:outline-none focus:border-indigo-500 rounded-md bg-gray-100 px-3'
            type='name'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}></input>
        </div>
        <div className='flex justify-between mb-4 mt-4'>
          <label className='py-2  pl-4'>Contact No: </label>
          <input
            className='text-sm py-2 border-b border-gray-700 focus:outline-none focus:border-indigo-500 rounded-md bg-gray-100 px-3'
            type='text'
            placeholder='XXXXXXX123'
            value={contact}
            onChange={(e) => setContact(e.target.value)}></input>
        </div>
        <div className='py-2'>
          <label className='py-2 pl-4'>Skills : </label>
          <div className='py-2 rounded-md p-1 '>
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
          <label className='py-2  pl-4'>Charge: </label>
          <input
            className='text-sm py-2 border-b border-gray-700 focus:outline-none focus:border-indigo-500 rounded-md bg-gray-100 px-3'
            type='number'
            placeholder='Rs. X'
            value={price}
            onChange={(e) => setPrice(e.target.value)}></input>
        </div>
        <div className='flex  mb-4 mt-4'>
          <label className='py-2  pl-4'>Bio: </label>
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
  );
}
