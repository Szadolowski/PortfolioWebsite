import { ReactNode } from "react";
import book from "../assets/book.svg";

interface educationListDataType {
  institution: string;
  years: string;
  description: string | ReactNode;
}

interface educationListTableType {
  DATA: educationListDataType[];
  title: string;
}

export default function ElementList({ DATA, title }: educationListTableType) {
  return (
    <>
      <div className="flex flex-row">
        <div className="w-8 h-8 rounded-md relative bg-gradient-to-br from-[#616165] to-grayBackground to-50% p-[2px] shadow-shadow2">
          <div className="bg-grayBackground rounded-md w-full h-full p-1">
            <img src={book} className="rounded-md" />
          </div>
        </div>
        <h3 className="ml-4 font-bold text-lg">{title}</h3>
      </div>
      <ul className="border-l-[1px] border-white pl-4 space-y-6">
        {DATA.map((item: educationListDataType, index: number) => {
          return (
            <li key={index} className="relative flex flex-col space-y-1">
              <span className="absolute -left-[24px] transform -translate-y-1/2 top-[8px] w-4 h-4 bg-gradient-to-br from-[#616165] to-grayBackground rounded-full flex items-center justify-center">
                <span className="bg-yellow-500 w-1.5 h-1.5 rounded-full"></span>
              </span>
              <h4 className="font-medium text-base">{item.institution}</h4>
              <span className="text-yellow-500 font-light">{item.years}</span>
              <p className="font-light text-sm">{item.description}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
