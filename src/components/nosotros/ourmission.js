import target from 'assets/images/target.png'
import vision from 'assets/images/idea.png'

import React from 'react';

function ImageCard({ src, alt, title, description }) {
  return (
    <div className="flex flex-col items-center md:flex-row md:items-start gap-4 p-4 max-w-md mx-auto bg-blue-botton rounded-lg shadow-md transition-transform transform hover:scale-105">
      <img
        src={src}
        alt={alt}
        className="w-20 h-20 rounded-lg object-cover transition-transform transform hover:scale-105"
      />
      <div className="text-center md:text-left">
        <h3 className="text-xl font-medium text-gray-900">{title}</h3>
        <p className="mt-2 text-md text-white">{description}</p>
      </div>
    </div>
  );
}

// Ejemplo de uso:
export default function App() {
  const cardData1 = {
    src: vision,
    alt: "Visión",
    title: "Visión",
    description: "Ser la opción líder en comida saludable en la Ciudad de México, expandiendo nuestras operaciones y abriendo nuestro propio restaurante para llegar a más personas."
,
  };

  const cardData2 = {
    src: target,
    alt: "Misión",
    title: "Misión",
    description: "En Herba, estamos comprometidos con el respeto a la vida, promoviendo una alimentación saludable y ofreciendo auténticos sabores caseros. Nuestro objetivo es inspirar a más personas a adoptar un estilo de vida saludable y sostenible.",
  };

  return (
    <><h2 className="text-4xl font-bold tracking-tight text-gray-900 text-center">
         
      </h2><div className="p-9 flex flex-col items-center md:flex-row md:justify-around bg-green-lettuce rounded-3xl">
              <ImageCard
                  src={cardData1.src}
                  alt={cardData1.alt}
                  title={cardData1.title}
                  description={cardData1.description} />
              <ImageCard
                  src={cardData2.src}
                  alt={cardData2.alt}
                  title={cardData2.title}
                  description={cardData2.description} />
          </div></>
  );
}
