"use client";

import React from "react";
import { Typography, Card } from "@material-tailwind/react";

const FAQS = [
  {
    title: "¿Cuáles son los tipos de joysticks y auriculares que reparan?",
    desc: "Trabajamos principalmente con joysticks y aruculares de PlayStation y Xbox, pero tambien trabajamos con otras marcas y modelos. Consultanos.",
  },
  {
    title: "¿Cuánto tiempo toma el proceso de reparación?",
    desc: "El tiempo de reparación varía según el tipo y la gravedad del problema, sin embargo, nos esforzamos por completar la mayoría de las reparaciones en un plazo de 2 a 3 días.",
  },
  {
    title: "¿Cuál es el costo de una reparación?",
    desc: "El costo de la reparación depende del tipo de problema y del modelo de dispositivo. Ofrecemos evaluaciones gratuitas y proporcionaremos un presupuesto transparente antes de comenzar cualquier trabajo.",
  },
  {
    title: "¿Ofrecen garantía en las reparaciones?",
    desc: "Sí, todas nuestras reparaciones están respaldadas por una garantía de 15 días, para que puedas tener tranquilidad. Si experimentas algún problema después de la reparación, estaremos aquí para ayudarte.",
  },
  {
    title: "¿Cómo puedo pagar por el servicio de reparación?",
    desc: "Actualmente trabajamos con Mercado Pago y pagos en efectivo. Una vez que hayamos completado el presupuesto inicial, te proporcionaremos detalles sobre cómo realizar el pago de manera segura y conveniente.",
  },
  {
    title: "¿Dónde estan ubicados?",
    desc: "Nos ubicamos en la zona de Mataderos, Capital Federal, Buenos Aires.",
  },
  {
    title: "¿Cómo puedo enviar mi dispositivo para reparación?",
    desc: "Una vez que nos hayas contactado te brindaremos la dirección para que puedas acercate a nuestra ubicación o enviar el dispositivo mediante algún servicio de terceros (el envío corre por cuenta del cliente). Una vez que recibamos tu dispositivo, realizaremos una evaluación y te contactaremos con los detalles de la reparación.",
  },
  {
    title: "¿Qué debo hacer si tengo alguna pregunta adicional que no se menciona aquí?",
    desc: "Si tienes alguna pregunta adicional o inquietud que no se aborda en nuestras preguntas frecuentes, no dudes en ponerte en contacto con nuestro equipo de atención al cliente. Estamos aquí para ayudarte y proporcionarte la información que necesitas para tener una experiencia satisfactoria con nuestros servicios de reparación.",
  },
];

export function Faqs() {
  return (
    <section className="px-8 py-20" id="faqs">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center">
          <Typography variant="h1" color="blue-gray" className="mb-4">
            Preguntas frecuentes
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 !text-gray-500 lg:w-3/5"
          >
           Respuestas a las preguntas más comunes sobre nuestros servicios.
          </Typography>
        </div>

        <div className="grid gap-20 md:grid-cols-1 lg:grid-cols-2">
          {FAQS.map(({ title, desc }) => (
            <Card key={title} shadow={false} color="transparent">
              <Typography color="blue-gray" className="pb-6" variant="h4">
                {title}
              </Typography>
              <div className="pt-2">
                <Typography className="font-normal !text-gray-500">
                  {desc}
                </Typography>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faqs;
