"use client";

import React from "react";
import Image from "next/image";
import InfoCard from "@/components/info-card";
import { Typography } from "@material-tailwind/react";

const OPTIONS = [
  {
    title: "10+",
    description: "Años de experiencia",
  },
  {
    title: "300+",
    description: "Dispositivos reparados",
  },
  {
    title: "100+",
    description: "Clientes satisfechos",
  },
  {
    title: "15+",
    description: "Tipos de reparaciones",
  },
];

export function TechnicalService() {
  return (
    <section className="py-20 px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        <Image
          width={500}
          height={200}
          src="/image/xbox.webp"
          className="col-span-1 w-1/2 mx-auto lg:w-10/12 rounded-[18px] drop-shadow-[0_30px_30px_rgba(0,0,0,0.25)]"
          alt="xbox-photo"
        />
        <div className="col-span-1 mx-auto max-w-lg px-4 lg:px-0">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            Servicio Técnico
          </Typography>
          <Typography
            variant="lead"
            className="mb-5 px-4 text-left  text-xl !text-gray-500 lg:px-0  "
          >
            Nuestros números nos avalan
          </Typography>

          <div className="col-span-2 grid gap-5 grid-cols-2 ">
            {OPTIONS.map(({ title, description }) => (
              <InfoCard key={title} title={title}>
                {description}
              </InfoCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default TechnicalService;
