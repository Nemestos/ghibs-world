import React, { ReactElement, ReactNode } from "react";
import { IconType } from "react-icons";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiErrorCircle } from "react-icons/bi";
export type CardVariant = "info" | "error";
export interface CardProps {
  variant: CardVariant;
  title: string;
  content: string;
}
const logoVariant: Record<
  CardVariant,
  Pick<ReactElement, "props"> & React.HTMLAttributes<HTMLDivElement>
> = {
  info: { className: "bg-red", children: <AiOutlineInfoCircle /> },
  error: <BiErrorCircle />,
};

export default function Card({ variant, title, content }: CardProps) {
  const icon = logoVariant[variant];

  return <div className="bg-second"></div>;
}
