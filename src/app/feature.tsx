"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

import {
  CursorArrowRaysIcon,
  HeartIcon,
  LightBulbIcon,
  WrenchScrewdriverIcon
} from "@heroicons/react/24/solid";

import FeatureCard from "../components/feature-card";

const FEATURES = [
  {
    icon: CursorArrowRaysIcon,
    title: "Técnicos expertos",
    children:
      "Nuestros técnicos expertos ofrecen soluciones profesionales para tus dispositivos de juego y audio.",
  },
  {
    icon: HeartIcon,
    title: "Servicio de limpieza incluido",
    children:
      "Cada servicio incluye una limpieza completa para garantizar un rendimiento óptimo de tus dispositivos.",
  },
  {
    icon: WrenchScrewdriverIcon,
    title: "Multiple variedad de reparaciones",
    children:
      "Reparamos una amplia variedad de problemas, botones defectuosos, problemas de conexión, problemas de bateria en joysticks, auriculares y más.",
  },
  {
    icon: LightBulbIcon,
    title: "Atención personalizada",
    children:
      "Ofrecemos atención personalizada para satisfacer tus necesidades específicas y brindarte la mejor experiencia de servicio.",
  },
];

export function Features() {
  return (
    <section className="py-20 px-4" id="services">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Nuestros Servicios
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-11/12 lg:px-8 "
        >
          En EM Gaming Solutions, ofrecemos una amplia gama de servicios de reparación para joysticks de videojuegos y auriculares. 
          Ya sea que tu joystick esté experimentando problemas de conexión, botones defectuosos o desgaste general, 
          ¡podemos ayudarte a solucionarlo! Además, también ofrecemos servicios de reparación para auriculares de diferentes marcas. Nuestro equipo de técnicos 
          altamente capacitados se asegurará de que tu dispositivo vuelva a funcionar como nuevo.
        </Typography>
      </div>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-2">
        {FEATURES.map((props, idx) => (
          <FeatureCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
export default Features;
