"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import { UserIcon } from "@heroicons/react/24/solid";
import TestimonialCard from "../components/testimonial-card";

const TESTIMONIALS = [
  {
    feedback:
      "Me encantó la atención personalizada que recibí. No solo arreglaron mi joystick, sino que también me dieron algunos consejos para mantenerlo en buen estado. ¡Gracias por todo!",
  },
  {
    feedback:
      "Rápidos y eficientes. Mis auriculares volvieron a la vida en un abrir y cerrar de ojos. ¡Gracias!",
  },
  {
    feedback:
      "¡Increíble atención al cliente! Mi joystick de Xbox quedó como nuevo después de la reparación. ¡Muy contento con el servicio!",
  },
];

export function Testimonials() {
  return (
    <section className="px-10 !py-20">
      <div className="container mx-auto">
        <div className="mb-16 flex w-full flex-col items-center">
          <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-900 text-white">
            <UserIcon className="h-6 w-6" />
          </div>
          <Typography variant="h2" color="blue-gray" className="mb-2">
            Nuestros clientes dicen...
          </Typography>
          <Typography
            variant="lead"
            className="mb-10 max-w-3xl text-center !text-gray-600"
          >
            Conozca las experiencias de nuestros clientes y descubra por qué confían en nuestros servicios. 
            Nos enorgullece ofrecer resultados excepcionales y construir relaciones duraderas.
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3 lg:px-20">
          {TESTIMONIALS.map((props, key) => (
            <TestimonialCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Testimonials;
