import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { QuoteBtn } from "./btn-quote";

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MTNavbar
      fullWidth
      shadow={false}
      blurred={false}
      color={isScrolling ? "white" : "transparent"}
      className="fixed top-0 z-50 border-0"
    >
      <div className="container mx-auto flex items-center justify-between">
        <img src="/logos/logo.webp" className="h-16" />        
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            isScrolling ? "text-gray-900" : "text-white"
          }`}
        >
          <Link href="#home" prefetch scroll={true}>Home</Link>
          <Link href="#services" prefetch scroll={true}>Servicios</Link>
          <Link href="#faqs" prefetch scroll={true}>Preguntas Frecuentes</Link>
          <Link href="#contact" prefetch scroll={true}>Contacto</Link>
        </ul>
        <div className="hidden gap-2 lg:flex lg:items-center">
          <QuoteBtn title="Cotizar"/>
        </div>
        <IconButton
          variant="text"
          color={isScrolling ? "gray" : "white"}
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg border-t border-blue-gray-50 bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-blue-gray-900">
            <Link href="#home" scroll={true}>Home</Link>
            <Link href="#services" scroll={true}>Servicios</Link>
            <Link href="#faqs" scroll={true}>Preguntas Frecuentes</Link>
            <Link href="#contact" scroll={true}>Contacto</Link>
          </ul>
          <div className="mt-4 flex items-center gap-2">            
            <QuoteBtn title="Cotizar"/>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;