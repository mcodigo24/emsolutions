"use client";

import { Typography } from "@material-tailwind/react";
import { QuoteBtn } from "@/components";

function Hero() {
  return (
    <div className="relative min-h-screen w-full" id="home">
      <header className="grid !min-h-[49rem] bg-gray-900 px-8 bg-custom-image">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1">
            <Typography variant="h1" color="white" className="mb-4">
              Bienvenidos a <br /> EM Gaming Solutions
            </Typography>
            <Typography
              variant="lead"
              className="mb-7 !text-white md:pr-16 xl:pr-28"
            >
               Somos especialistas en la reparación de joysticks de videojuegos y auriculares. ¿Tu joystick o auricular favorito necesita reparación? ¡Estás en el lugar correcto! Nuestro equipo de expertos está aquí para ayudarte a volver a jugar y escuchar tus juegos favoritos en poco tiempo.
            </Typography>
            <div className="flex flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row">
              <QuoteBtn title="Cotizar Reparación" classCustom="flex justify-center items-center gap-3 hidden sm:flex"/>          
            </div>
          </div>          
        </div>
      </header>
    </div>
  );
}
export default Hero;
