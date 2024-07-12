import loveVida from 'c:/Users/sr-mo/Documents/herba.app/herbaapp.web/src/assets/images/animalCare.png'
import alimentacionSal from 'c:/Users/sr-mo/Documents/herba.app/herbaapp.web/src/assets/images/vegetableBox.png'
import salad from 'c:/Users/sr-mo/Documents/herba.app/herbaapp.web/src/assets/images/salad.png'

const incentives = [
    {
        name: 'Respeto a la Vida',
        imageSrc: loveVida,
        description: "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
    },
    {
        name: 'Alimentación Saludable',
        imageSrc: alimentacionSal,
        description: "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
    },
    {
        name: 'Autentico Sabor',
        imageSrc: salad,
        description: "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
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
                        <p className="mt-4 text-gray-500">
                            Bienvenido a mi rincón personal dedicado a la cocina vegana y la
                            alimentación consciente. Aquí comparto mi pasión por crear deliciosas
                            recetas basadas en plantas que no solo nutren el cuerpo, sino también
                            el alma y el planeta.
                        </p>
                    </div>
                    <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
                        {incentives.map((incentive) => (
                            <div key={incentive.name} className="sm:flex lg:block text-center">
                                <div className="sm:flex-shrink-0">
                                    <img className="h-16 w-16 mx-auto" src={incentive.imageSrc} alt={incentive.name} />
                                </div>
                                <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0 ">
                                    <h3 className="text-sm font-medium text-white bg-blue-botton rounded-b-lg">{incentive.name}</h3>
                                    <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
