"use client";

import { Typography } from "@material-tailwind/react";
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 bg-gray-900 px-8">
      <div className="container mx-auto">
        <div className="mt-10 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 py-7">
          <Typography
            color="white"
            className="text-center font-normal opacity-75"
          >
            &copy; {CURRENT_YEAR} creado por EM Gaming Solutions
          </Typography>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
