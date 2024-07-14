import loveVida from 'c:/Users/sr-mo/Documents/herba.app/herbaapp.web/src/assets/images/animalCare.png';
import alimentacionSal from 'c:/Users/sr-mo/Documents/herba.app/herbaapp.web/src/assets/images/vegetableBox.png';
import salad from 'c:/Users/sr-mo/Documents/herba.app/herbaapp.web/src/assets/images/salad.png';

const incentives = [
    {
        name: 'Respeto a la Vida',
        imageSrc: loveVida,
        description: "Valoramos cada forma de vida, ofreciendo opciones alimenticias que son completamente libres de productos animales, promoviendo así un impacto positivo en el bienestar animal y el medio ambiente.",
    },
    {
        name: 'Alimentación Saludable',
        imageSrc: alimentacionSal,
        description: "Nos comprometemos a ofrecer opciones nutritivas y equilibradas que satisfacen las necesidades de una dieta saludable. Nuestros alimentos están diseñados para nutrir tu cuerpo y mejorar tu calidad de vida.",
    },
    {
        name: 'Auténtico Sabor',
        imageSrc: salad,
        description: "En Herba, combinamos ingredientes frescos y seleccionados cuidadosamente para ofrecer sabores genuinos y caseros en cada plato. Nos esforzamos por crear experiencias culinarias que sean tanto deliciosas como memorables.",
    },
];

export default function Incentives() {
    return (
        <div className="bg-gray-50">
            <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
                <div className="mx-auto max-w-2xl px-4 lg:max-w-none text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                            Nuestros Pilares
                        </h2>
                        <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-600 sm:mt-4">
                            "Bienvenido a Herba, donde llevamos lo saludable a otro nivel. Disfruta de opciones deliciosas y 100% libres de productos animales, disponibles ahora en la CDMX y próximamente en nuestro restaurante. ¡Descubre el sabor que transforma tu bienestar!"
                        </p>
                    </div>
                    <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
                        {incentives.map((incentive) => (
                            <div key={incentive.name} className="flex flex-col items-center text-center">
                                <img className="h-20 w-20 mx-auto" src={incentive.imageSrc} alt={incentive.name} />
                                <div className="mt-4">
                                    <h3 className="text-xl font-medium text-gray-900">{incentive.name}</h3>
                                    <p className="mt-2 text-md text-gray-600">{incentive.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
