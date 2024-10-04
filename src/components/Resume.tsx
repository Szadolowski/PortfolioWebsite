import { ReactNode } from "react";

import ArticleTitle from "./ArticleTitle";
import ElementList from "./ElementList";

interface educationDataType {
  institution: string;
  years: string;
  description: string | ReactNode;
}

const EDUCATIONDATA: educationDataType[] = [
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
      <ElementList DATA={EDUCATIONDATA} title="Education" />
    </>
  );
}
