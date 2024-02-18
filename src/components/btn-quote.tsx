"use client";

import Image from "next/image";
import { Button } from "@material-tailwind/react";

interface QuoteBtnProps {
  title: string;
  fixed?: boolean;
  classCustom?: string;
}

const defaultClass = "bottom-4 right-4 flex gap-1 pl-4 items-center "
const phoneNumber = process.env.WSP_NUMBER;
const message = "Hola! Quiero cotizar una reparación."

export function QuoteBtn({ title, fixed, classCustom }: QuoteBtnProps) {
  return (
    <a href={`https://wa.me/${phoneNumber}?text=${message}`} target="_blank">
      <Button
        color="indigo"
        size="sm"
        className={`${fixed ? "!fixed" : ""} ${classCustom ? classCustom : defaultClass }`}
      >
        <Image
          width={64}
          height={64}
          src="/logos/logo-wsp.png"
          alt="wsp logo"
          className="w-5 h-5"
        />{" "}
        {title}
      </Button>
    </a>
  );
}