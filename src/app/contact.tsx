"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import { QuoteBtn } from "@/components";

export function Contact() {
  return (
    <section className="py-28 px-4" id="contact">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Contacto
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-11/12 lg:px-8"
        >
         ¿Listo para reparar tu joystick o auricular? ¡Contáctanos hoy mismo para programar una reparación o hacer una consulta! 
         Estamos aquí para responder a todas tus preguntas y ayudarte en lo que necesites. No dejes que los problemas con tu equipo de juego te detengan. 
         ¡Deja que el equipo de expertos te ayude a volver al juego!
         Solo debes presionar alguno de los botones que dicen &quot;Cotizar&quot; y el mismo abrirá una conversación en wsp para contactarnos.
        </Typography>
        <QuoteBtn title="Cotizar Reparación" classCustom="mx-auto mt-6 flex justify-center items-center gap-3"/>
      </div>
    </section>
  );
}

export default Contact;