// import React from "react";

// const educationData = [
//   {
//     institution: "University School Of The Arts",
//     years: "2007 - 2008",
//     description:
//       "Nemo enim ipsam voluptatem, blanditiis praesentium voluptatem deleniti atque corrupti, quos dolores et quas molestias exceptur.",
//   },
//   {
//     institution: "New York Academy Of Art",
//     years: "2006 - 2007",
//     description:
//       "Ratione voluptatem sequi nesciunt, facere quisquam facere menda ossium, omnis voluptas assumenda est omnis.",
//   },
//   {
//     institution: "High School Of Art And Design",
//     years: "2002 - 2004",
//     description:
//       "Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odt ait fugit, sed consequuntur magni dolores eos.",
//   },
// ];

// const Reasume: React.FC = () => {
//   return (
//     <div className="flex flex-col">
//       <h2 className="text-2xl font-bold mb-4">Education</h2>
//       <div className="relative">
//         <div className="absolute left-0 top-0 h-full border-l-2 border-white"></div>
//         <ul className="">
//           {educationData.map((item, index) => (
//             <li key={index} className="flex items-start mb-4">
//               {/* Kropka */}
//               <div className="w-2 h-2 bg-white rounded-full mt-1 mr-3"></div>
//               <div>
//                 <h3 className="font-semibold">{item.institution}</h3>
//                 <span className="text-gray-400">{item.years}</span>
//                 <p className="text-gray-600">{item.description}</p>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Reasume;

import { ReactNode } from "react";

import ArticleTitle from "./ArticleTitle";

interface educationData {
  institution: string;
  years: string;
  description: string | ReactNode;
}

const EDUCATIONDATA: educationData[] = [
  {
    institution: "Akademia Nauk Stosowanych, Nowy Sącz",
    years: "10.2024-",
    description:
      "Part-time Undergraduate Studies in Computer Science / Niestacjonarne studia pierwszego stopnia, INFORMATYKA ",
  },
  {
    institution: "Zespół Szkół Technicznych i Ogólnokształcacych im. Jana Pawła II, Limanowa",
    years: "09.2019-05.2024",
    description: "Technical High School in Information Technology  /  Technikum Informatyczne",
  },
];

export default function Reasume() {
  return (
    <>
      <ArticleTitle>Reasume</ArticleTitle>
    </>
  );
}
