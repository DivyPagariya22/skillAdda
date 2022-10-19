import React from "react";

export default function TestPage() {
  return <div>test</div>;
}

// export async function getServerSideProps({
//   params,
//   req,
//   res,
//   query,
//   preview,
//   previewData,
//   resolvedUrl,
//   locale,
//   locales,
//   defaultLocale,
// }) {
//   if (query.text) {
//     return { redirect: { destination: "/post", permanent: false } };
//   }
//   const data = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await data.json();
//   if (!data) {
//     return { notFound: true };
//   }
//   return { props: { users } };
// }

// function shuffle(array) {
//   let currentIndex = array.length,
//     randomIndex;

//   // While there remain elements to shuffle.
//   while (currentIndex != 0) {
//     // Pick a remaining element.
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;

//     // And swap it with the current element.
//     [array[currentIndex], array[randomIndex]] = [
//       array[randomIndex],
//       array[currentIndex],
//     ];
//   }

//   return array;
// }

// // Used like so
// var arr = [2, 11, 37, 42];
// shuffle(arr);
// console.log(arr);
