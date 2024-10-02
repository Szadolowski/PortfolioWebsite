import { ReactNode } from "react";

type props = {
  children: ReactNode;
};

export default function Paragraph({ children }: props) {
  return <p className="  text-pText text-left text-sm mt-10">{children}</p>;
}
